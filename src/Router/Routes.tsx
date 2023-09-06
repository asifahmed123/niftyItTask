import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Home/Home";
import Cart from "../components/Cart";

export const router = createBrowserRouter([
     {
          path: "/",
          element: <Main></Main>,
          children: [
               {
                    path: '/',
                    element: <Home></Home>,
               },
               // {
               //      path: 'viewCart',
               //      element: <Cart></Cart>
               // }
          ]
     },
]);
