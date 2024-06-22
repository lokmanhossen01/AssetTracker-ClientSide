import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Login from "./Login/Login";
// import Register from "./Register/Register";
import JoinasEmployee from "../Pages/EmployeePage/JoinasEmployee";
import JoinAsHR from "../Pages/HrPages/JoinAsHR";
import UpdateProfile from "../Pages/UpdateProfile";
import RequestedAssets from "../Pages/EmployeePage/RequestedAsseets";
import Payments from "../Pages/HrPages/Payments";
import MyTeam from "../Pages/EmployeePage/MyTeam";
import AssetListPage from "../Pages/HrPages/AssetListPage";
import AddAsset from "../Pages/HrPages/AddAsset";
import AllRequest from "../Pages/HrPages/AllRequest";
import MyEmployeeList from "../Pages/HrPages/MyEmployeeList";
import ErrorPage from "../Pages/ErrorPage";
import MyAsset from "../Pages/EmployeePage/MyAsset";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      // {
      //   path: "/register",
      //   element: <Register></Register>,
      // },
      // this is Hr route
      {
        path: "/manager",
        element: <JoinAsHR></JoinAsHR>,
      },
      {
        path: "/hrPayment",
        element: <Payments></Payments>,
      },
      {
        path: "/assetList",
        element: <AssetListPage></AssetListPage>,
      },
      {
        path: "/addAsset",
        element: <AddAsset></AddAsset>,
      },
      {
        path: "/allRequest",
        element: <AllRequest></AllRequest>,
      },
      {
        path: "/myEmployeeList",
        element: <MyEmployeeList></MyEmployeeList>,
      },
      // sheared route
      {
        path: "/updateProfile",
        element: <UpdateProfile></UpdateProfile>,
      },
      // this is employee route
      {
        path: "/joinEmployee",
        element: <JoinasEmployee></JoinasEmployee>,
      },
      {
        path: "/requestAsset",
        element: <RequestedAssets></RequestedAssets>,
      },
      {
        path: "/team",
        element: <MyTeam></MyTeam>,
      },
      {
        path: "/myAssets",
        element: <MyAsset></MyAsset>,
      },
    ],
  },
]);
