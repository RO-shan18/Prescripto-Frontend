import { createContext } from "react";
import { doctors } from "../assets/assets";

export const Context  = createContext();

const AppContextProvider = ({children})=>{

    const currency = "$";

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

