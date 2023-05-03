import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog";
import Login from "../layouts/Login";
import ChefDetails from "../layouts/ChefDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element:<Blog/>
      },
      {
        path: "/login",
        element:<Login/>
      },
      {
        path: 'alldata/:id',
        element:<ChefDetails/>
        
      }
    ],
  },
]);

export default router;
