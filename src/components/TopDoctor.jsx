import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context/AppContext";

const TopDoctor = () => {
    const {doctors} = useContext(Context);
    const Navigate = useNavigate();
  return (
    <div className="flex flex-col items-center mt-20 w-4/5 m-auto gap-12">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-3xl font-semibold">Top Doctors to Book</h1>
        <p className="text-sm">Simply browse through our extensive list of trusted doctors.</p>
      </div>
      <div className="flex flex-wrap justify-between gap-y-6 ">
        {doctors.slice(0,10).map((data) => {
          return (
          <div key={data._id} onClick={()=> Navigate("/Appointments/" + data._id)} className="flex flex-col items-start bg-gray-200 rounded-xl p-2 gap-2 hover:translate-y-[-10px] transition-all duration-500 cursor-pointer">
             <img className="w-48" src={data.image}/>
             <div><div className="flex gap-2 items-center text-sm">
                <p className="h-2 w-2 rounded-full bg-green-500"></p>
                <p className="text-green-500">Available</p>
             </div>
             <p className="font-semibold">{data.name}</p>
             <p className="text-sm">{data.speciality}</p></div>
          </div>
          );
        })}
      </div>
      <button onClick={()=> Navigate("/Doctor")} className="bg-gray-200 rounded-full py-2 px-12">more</button>
    </div>
  );
};

export default TopDoctor;