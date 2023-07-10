import { Route,Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { MenuPage } from "../pages/MenuPage"
import { BookingPage } from "../pages/BookingPage"
import { UsPage } from "../pages/UsPage"
import { ProtectedRoutes } from "./ProtectedRoutes"

export const MainRouter = () => {
  return (
    <div className="container">
    <Routes>
        <Route path='/' element={<HomePage/>}/>  
        <Route path='/menu' element={<MenuPage/>}/>
        <Route path='/reserva' element={<BookingPage/>}/> 
        {/* <Route element={
            <ProtectedRoutes>
                <Route path='/reserva' element={<BookingPage/>}/>   
            </ProtectedRoutes> 
        } /> */}
        <Route path='/UsPage' element={<UsPage/>} />
    </Routes>

    </div>
    
  )
}
