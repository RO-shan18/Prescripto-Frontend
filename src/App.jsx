import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Doctors from "./pages/Doctors"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import MyProfile from "./pages/MyProfile"
import My_appointments from "./pages/My-appointments"
import Appointments from "./pages/Appointments"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
 
  return (
   <div>
   <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Doctor" element={<Doctors/>} />
        <Route path="/Doctor/:speciality" element={<Doctors/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/MyProfile" element={<MyProfile/>} />
        <Route path="/My_appointments" element={<My_appointments/>} />
        <Route path="/Appointments/:doctorid" element={<Appointments/>} />
      </Routes>

      <Footer/>
   </div>
  )
}

export default App
