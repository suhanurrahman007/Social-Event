import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import ServicesDetails from "../Pages/Services/ServicesDetails/ServicesDetails";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivetRouter from "./PrivetRouter/PrivetRouter";
import ServicesEvent from "../Pages/ServicesEvent/ServicesEvent";
import Gallery from "../Pages/Gallery/Gallery";
import OnlineRequest from "../components/OnlineRequest/OnlineRequest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/category.json"),
      },
      {
        path: "/about",
        element: (
          <PrivetRouter>
            <About></About>
          </PrivetRouter>
        ),
      },
      {
        path: "/services/:id",
        element: (
          <PrivetRouter>
            <ServicesDetails></ServicesDetails>
          </PrivetRouter>
        ),
        loader: () => fetch("/category.json"),
      },
      {
        path: "/services",
        element: <ServicesEvent></ServicesEvent>,
        loader: () => fetch("/category.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },

      {
        path: "/gallery",
        element: (
          <PrivetRouter>
            <Gallery></Gallery>
          </PrivetRouter>
        ),
        loader: () => fetch("/gallery.json"),
      },
      {
        path: "/online",
        element: <OnlineRequest></OnlineRequest>,
      },
    ],
  },
]);

export default router