import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
import { Home, About, NotFound } from "./pages";
import AlbumLayout from "./pages/AlbumLayout";
import AlbumIndex from "./pages/AlbumIndex";
import AlbumPhoto from "./pages/AlbumPhoto";
import AlbumSearch from "./pages/AlbumSearch";
// import NotFound from "./components/NotFound";

// <Routes> 组件是包裹所有<Route> 组件的容器
// 当一个路由被匹配时，<Routes> 组件只会渲染该路由对应的组件，而不会渲染其他匹配的路由

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-3">
        {/* <Routes> 元件中嵌套 <Route> 元件 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 1.AlbumLayout包裹起的<Route>會是其子路由
              2.巢狀路由允許定義一個父路由下有多個子路由
          */}
          <Route path="/album" element={<AlbumLayout />}>
            {/* index代表子路由會預設顯示的頁面 */}
            <Route index element={<AlbumIndex />} />
            {/* 在 React Router 中，path=":id" 是一個 URL 參數的語法，其中:id 代表一個動態參數。*/}
            <Route path=":id" element={<AlbumPhoto />} />
            <Route path="search" element={<AlbumSearch />} />
          </Route>
          {/* 當找不到路徑時會進入path='*'頁面 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
