import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layout/Roots";
import Homepage from "../Pages/Homepage/Homepage";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Login from "./../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Dashboard/Dashboard";
import Cart from "../Dashboard/Cart";
import Users from "../Dashboard/ManageUsers";
import AdminProfile from "../Dashboard/AdminProfile";
import ManageProperties from "../Dashboard/ManageProperties";
import ManageUsers from "../Dashboard/ManageUsers";
import ManageReviews from "../Dashboard/ManageReviews";
import ManageAdvertise from "../Dashboard/ManageAdvertise";
import ReportedProperties from "../Dashboard/ReportedProperties";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "admin-profile",
        element: <AdminProfile></AdminProfile>,
      },
      {
        path: "manage-properties",
        element: <ManageProperties></ManageProperties>,
      },
      {
        path: "manage-users",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "manage-reviews",
        element: <ManageReviews></ManageReviews>,
      },
      {
        path: "manage-advertise",
        element: <ManageAdvertise></ManageAdvertise>,
      },
      {
        path: "reported-properties",
        element: <ReportedProperties></ReportedProperties>,
      },
    ],
  },
]);
