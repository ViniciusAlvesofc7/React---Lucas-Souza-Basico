import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Dashboard, Login } from "../pages";

export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/pagina-inicial" element={<Dashboard />}></Route>
                <Route path="/login" element={<Login />}></Route>


                <Route path="*" element={<Navigate to="/pagina-inicial"/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}


export default AppRoutes