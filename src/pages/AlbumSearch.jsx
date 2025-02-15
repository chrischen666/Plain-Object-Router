import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import List from '../components/List';

const apiPath = "https://api.unsplash.com/search/photos";
const accessKey = import.meta.env.VITE_UNSPLASH_KEY;

export default function AlbumSearch() {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  //當search更動時，才會觸發useEffect

  

  const [searchParams, setSearchParams] = useSearchParams();
  

  // useEffect(() => {
  //   // setSearchParams({ query: "people" });
  // }, []);

  useEffect(() => {
    if (search !== "") {
      (async () => {
        const res = await axios.get(
          `${apiPath}?client_id=${accessKey}&query=${search}`
        );
        const { results } = res.data;
        setList(results);
      })();
    }
  }, [search]);

  useEffect(() => {
    setSearch(searchParams.get("query"));
  }, [searchParams]);

  return (
    <>
      這是搜尋頁面
      {search}
      <input
        type="text"
        className="form-control"
        // defaultValue 屬性用於設定表單元素的初始值，只會在組件第一次渲染時設定一次，之後不會再改變
        defaultValue={search}
        // onKeyUp壓下後反彈
        onKeyUp={(e) => {
          if (e.code === "Enter") {
            // setSearch(e.target.value);
            setSearchParams({ query: e.target.value });
          }
        }}
      />
      {/* 將取得的陣列導出來 */}
      <List list={list}></List>
    </>
  );
}
