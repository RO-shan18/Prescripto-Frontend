import { createContext, useEffect, useState } from "react";
import  axios from "axios"

export const Context  = createContext();

const AppContextProvider = ({children})=>{

    const [doctors, setdoctors] = useState([]);
    const [token, settoken] = useState(localStorage.getItem('token')? true : false)

    const currency = "$";

    const Backendurl = "http://localhost:3000"

    const doctorlist = async()=>{
      try{
        const {data} = await axios.get(Backendurl + "/api/doctor/doctorlist");

        setdoctors(data?.message);

      }catch(err){
        console.log(err);
      }
    }

    const value={
        doctors, currency, doctorlist, Backendurl, settoken, token
    };

    return(
       <Context.Provider value={value}>
        {children}
       </Context.Provider>
    )
}

export default AppContextProvider;

