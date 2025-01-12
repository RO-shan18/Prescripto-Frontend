import { createContext, useEffect, useState } from "react";
import { doctors } from "../assets/assets";
import  axios from "axios"

export const Context  = createContext();

const AppContextProvider = ({children})=>{

    const [doctors, setdoctors] = useState([]);

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

    useEffect(()=>{
        doctorlist();
    }, []);

    const value={
        doctors, currency
    };

    return(
       <Context.Provider value={value}>
        {children}
       </Context.Provider>
    )
}

export default AppContextProvider;

