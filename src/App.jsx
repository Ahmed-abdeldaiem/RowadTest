import { useState } from "react";
import "./App.css";
import { createHashRouter } from "react-router-dom";
import HomeLayout from "./components/HomeLayout/HomeLayout";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import { RouterProvider } from "react-router";
import customTheme from "./components/customTheme/customTheme";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Products from "./components/Products/Products";
import CustomerServices from "./components/CustomerServices/CustomerServices";
import Services from "./components/Services/Services";
import ContactUs from "./components/ContactUs/ContactUs";
import Favorite from "./components/Favorite/Favorite";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Register from "./components/Register/Register";
import OfficeFur from "./components/OfficeFur/OfficeFur";
import HomeFur from "./components/HomeFur/HomeFur";
import HotelFur from "./components/HotelFur/HotelFur";
import LearnFur from "./components/LearnFur/LearnFur";
import Inquiry from "./components/Inquiry/Inquiry";
import Faq from "./components/Faq/Faq";
import AssemblyService from "./components/AssemblyService/AssemblyService";
import Maintenance from "./components/Maintenance/Maintenance";
import AfterSale from "./components/AfterSale/AfterSale";
import Delivery from "./components/Delivery/Delivery";
function App() {
  let route = createHashRouter([
    {
      path: "",
      element: <HomeLayout />,
      children: [
        { index: true, element: <Home /> },

        // {path:'products' ,element:<Products/>},
        
        // {path:'services' ,element:<Services/>},
        // {path:'contactUs' ,element:<ContactUs/>},
        // {path:'branch/:id' ,element:<BranchDetails/>},
        // {path:'favorite' ,element:<Favorite/>},
        // {path:'cart' ,element:<Cart/>},

        // {path:'login' ,element:<Login/>},
        // {path:'logout' ,element:<Logout/>},
        // {path:'register' ,element:<Register/>},


        // {path:'officeFur' ,element:<OfficeFur/>},
        // {path:'homeFur' ,element:<HomeFur/>},
        // {path:'hotelFur' ,element:<HotelFur/>},
        // {path:'learnFur' ,element:<LearnFur/>},
        //   {path:'inquiry' ,element:<Inquiry/>},
        //   {path:'faq' ,element:<Faq/>},
        //   {path:'assemblyService' ,element:<AssemblyService/>},
        //   {path:'maintenance' ,element:<Maintenance/>},
        //   {path:'after-sale' ,element:<AfterSale/>},
        //   {path:'delivery' ,element:<Delivery/>},

        {path:'products' ,element:<Home/>},
        
        {path:'services' ,element:<Home/>},
        {path:'contactUs' ,element:<Home/>},
        // {path:'branch/:id' ,element:<BranchDetails/>},
        {path:'favorite' ,element:<Home/>},
        {path:'cart' ,element:<Home/>},

        {path:'login' ,element:<Home/>},
        {path:'logout' ,element:<Home/>},
        {path:'register' ,element:<Home/>},


        {path:'officeFur' ,element:<Home/>},
        {path:'homeFur' ,element:<Home/>},
        {path:'hotelFur' ,element:<Home/>},
        {path:'learnFur' ,element:<Home/>},
          {path:'inquiry' ,element:<Home/>},
          {path:'faq' ,element:<Home/>},
          {path:'assemblyService' ,element:<Home/>},
          {path:'maintenance' ,element:<Home/>},
          {path:'after-sale' ,element:<Home/>},
          {path:'delivery' ,element:<Home/>},

        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <RouterProvider router={route}></RouterProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
