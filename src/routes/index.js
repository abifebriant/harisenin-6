import { createBrowserRouter, Route, Routes } from "react-router-dom";
import Beranda from "../pages/Beranda";
import Login from "../pages/Login";
import App from "../App";
import Register from "../pages/Register";
import Pesanan from "../pages/Pesanan";



const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Beranda/>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "register",
                element : <Register/>
            },
            {
                path : "pesanan",
                element : <Pesanan/>
            }
        ]
    }
])

export default router