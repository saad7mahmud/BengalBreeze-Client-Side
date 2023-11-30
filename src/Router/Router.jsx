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
import AgentProfile from "../Dashboard/Agent/AgentProfile";
import AddProperty from "../Dashboard/Agent/AddProperty";
import AgentAddedProperties from "../Dashboard/Agent/AgentAddedProperties";
import AgentSoldProperties from "../Dashboard/Agent/AgentSoldProperties";
import RequestedProperties from "../Dashboard/Agent/RequestedProperties";
import UserProfile from "../Dashboard/User/UserProfile";
import UserWishlist from "../Dashboard/User/UserWishlist";
import PropertyBought from "../Dashboard/User/PropertyBought";
import MyReviews from "../Dashboard/User/MyReviews";
import AllProperties from "./../Pages/AllProperties/AllProperties";
import PropertyDetails from "./../Pages/AllProperties/PropertyDetails";

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
      {
        path: "/all-properties",
        element: (
          <PrivateRoutes>
            <AllProperties></AllProperties>
          </PrivateRoutes>
        ),
      },

      {
        path: "/all-properties/:id",
        element: <PropertyDetails></PropertyDetails>,
        loader: async ({ params }) => {
          // Fetch data from the first URL
          const response1 = await fetch(
            `http://bengal-breeze-server.vercel.app/one-property/${params.id}`
          );
          const data1 = await response1.json();

          // Fetch data from the second URL
          const response2 = await fetch(
            `http://bengal-breeze-server.vercel.app/specific-reviews/${params.id}`
          );
          const data2 = await response2.json();

          // Combine or structure the data as needed
          const combinedData = {
            propertyData: data1,
            reviewData: data2,
          };

          return combinedData;
        },
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
      // agent routes
      {
        path: "agent-profile",
        element: <AgentProfile></AgentProfile>,
      },
      {
        path: "add-property",
        element: <AddProperty></AddProperty>,
      },
      {
        path: "agent-added-properties",
        element: <AgentAddedProperties></AgentAddedProperties>,
      },
      {
        path: "agent-sold-properties",
        element: <AgentSoldProperties></AgentSoldProperties>,
      },
      {
        path: "requested-properties",
        element: <RequestedProperties></RequestedProperties>,
      },
      // user routes
      {
        path: "user-profile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "user-wishlist",
        element: <UserWishlist></UserWishlist>,
      },
      {
        path: "property-bought",
        element: <PropertyBought></PropertyBought>,
      },
      {
        path: "my-reviews",
        element: <MyReviews></MyReviews>,
      },
    ],
  },
]);
