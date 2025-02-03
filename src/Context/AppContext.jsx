import { createContext, useEffect, useState } from "react";
import  axios from "axios"

export const Context  = createContext();

const AppContextProvider = ({children})=>{

    const [doctors, setdoctors] = useState([]);
    const [token, settoken] = useState(localStorage.getItem('token')? true : false)
    const [userData, setuserData] = useState(false);

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

    const getuserprofile = async()=>{
      try{

        const {data} = await axios.get(Backendurl + "/api/user/getProfile", {withCredentials : true});

        if(data.success){
          setuserData(data?.message);
        }else{
          toast.error(data?.message);
        }

      }catch(err){
        toast.error(data?.message);
      }
    }

    const value={
        doctors, currency, doctorlist, Backendurl, settoken, token, userData, getuserprofile, setuserData
    };

    useEffect(()=>{
      if(token)
      getuserprofile();
      else
      setuserData(false);
    }, [token])

    return(
       <Context.Provider value={value}>
        {children}
       </Context.Provider>
    )
}

export default AppContextProvider;

