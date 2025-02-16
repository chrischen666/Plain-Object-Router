import App from "../App.jsx";
import { Home, About, NotFound } from "../pages";
import { createHashRouter } from "react-router-dom";
import AlbumLayout from "../pages/AlbumLayout";
import AlbumIndex from "../pages/AlbumIndex";
import AlbumPhoto from "../pages/AlbumPhoto";
import AlbumSearch from "../pages/AlbumSearch";
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "album",
        element: <AlbumLayout />,
        children: [
          {
            index: true,
            element: <AlbumIndex />,
          },
          {
            path: ":id",
            element: <AlbumPhoto />,
          },
          {
            path: "search",
            element: <AlbumSearch />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

const router = createHashRouter(routes);
export default router;