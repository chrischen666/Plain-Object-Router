import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import List from "../components/List";

const apiPath = "https://api.unsplash.com/search/photos";
const accessKey = import.meta.env.VITE_UNSPLASH_KEY;

export default function AlbumLayout() {
  const [list, setList] = useState([]);
  


  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `${apiPath}?client_id=${accessKey}&query=animal`
      );
      const { results } = res.data;
      setList(results);
    })();
  }, []);

  return (
    <div className="row">
      <div className="col-4">
        左側列表選單
        <p>
          <Link to='search'>搜尋頁面</Link>
        </p>
      <List list={list}></List>
      </div>
      <div className="col-8">
        {/* <Outlet /> 的作用就是在父路由中預留一個位置，讓子路由的內容可以顯示在那裡。 */}
        {/* Context 傳遞： 可以接收來自父路由的 Context 資料 */}
        <Outlet context={list} />
      </div>
    </div>
  );
}
