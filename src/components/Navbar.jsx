import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();

  const [token, settoken] = useState(true);

  return (
    <div className="flex items-center justify-between px-3 sm:px-12 py-4 m-3 text-sm border-b ">
      <img onClick={()=> navigate("/")} className="w-32 sm:w-40" src={assets.logo} alt="web-logo" />
      <ul className="sm:flex hidden items-start justify-start gap-5 text-black">
        <NavLink to="/">
          <li>HOME</li>
          <hr className="w-3/5 bg-primary m-auto hidden h-0.5" />
        </NavLink>
        <NavLink to="/Doctor">
          <li>ALL DOCTORS</li>
          <hr className="w-3/5 bg-primary m-auto hidden h-0.5" />
        </NavLink>
        <NavLink to="About">
          <li>ABOUT</li>
          <hr className="w-3/5 bg-primary m-auto hidden h-0.5" />
        </NavLink>
        <NavLink to="Contact">
          <li>CONTACT</li>
          <hr className="w-3/5 bg-primary m-auto hidden h-0.5" />
        </NavLink>
      </ul>
      <div>
        {token ? (
            <div className="flex items-center gap-2 group relative">
                <img className="w-7 sm:w-9 rounded-full" src={assets.profile_pic} alt="user-profile"/> 
                <img src={assets.dropdown_icon} className="w-2 sm:w-3" alt="dropdown" />

                <div className="flex flex-col justify-start text-black absolute top-10 right-0">
                    <div className=" hidden group-hover:block bg-gray-100 text-sm ">
                    <p onClick={()=>navigate("/My_appointments")} className="py-1 px-2 cursor-pointer">MyAppointments</p>
                    <p onClick={()=>navigate("/MyProfile")} className="py-1 px-2 cursor-pointer">MyProfile</p>
                    <p onClick={()=>settoken(false)} className="py-1 px-2 cursor-pointer">MyLogout</p>
                    </div>
                </div>
            </div>
        ) : (
          <button
            onClick={() => navigate("/Login")}
            className="bg-primary md:text-sm text-[12px] md:px-4 md:py-3 p-2 rounded-3xl text-white"
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
