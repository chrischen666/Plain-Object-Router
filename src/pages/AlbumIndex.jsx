import { useOutletContext } from "react-router-dom";
import List from "../components/List";

export default function AlbumIndex() {
  const list = useOutletContext();
  // useOutletContext 可以讓你存取父路由提供的 context
  //   在子路由中使用 useOutletContext

  return (
    <div>
      這是相簿的首頁
      <List list={list}></List>
    </div>
  );
}
