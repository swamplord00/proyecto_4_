import { Route,Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { MenuPage } from "../pages/MenuPage"
import { BookingPage } from "../pages/BookingPage"
import { UsPage } from "../pages/UsPage"

export const MainRouter = () => {
  return (
    <div className="container">
    <Routes>
        <Route path='/' element={<HomePage/>}/>  
        <Route path='/menu' element={<MenuPage/>}/>
        <Route path='/reserva' element={<BookingPage/>}/>
        <Route path='/UsPage' element={<UsPage/>} />
    </Routes>

    </div>
    
  )
}
