import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Context/AppContext'
import { useNavigate } from 'react-router-dom';

const Relateddoctor = ({docId, speciality}) => {

  const {doctors} = useContext(Context);
  const [reldoctor, setreldoctor] = useState([]);

  const Navigate = useNavigate();

  const getrelateddoc = ()=>{
    return setreldoctor(doctors.filter((reldoc)=> speciality === reldoc.speciality && docId !== reldoc._id));
  }

  useEffect(()=>{
    getrelateddoc();
  },[doctors, speciality]);

  return (
    <div className="flex flex-col items-center mt-20 w-4/5 m-auto gap-12">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-3xl font-semibold">Related Doctors</h1>
        <p className="text-sm">Simply browse through our extensive list of trusted doctors.</p>
      </div>
      <div className="flex flex-wrap gap-10 ">
        {reldoctor.slice(0,5).map((data) => {
          return (
          <div key={data._id} onClick={()=>{ Navigate("/Appointments/" + data._id); scrollTo(0,0);}} className="flex flex-col items-start bg-gray-200 rounded-xl p-2 gap-2 hover:translate-y-[-10px] transition-all duration-500 cursor-pointer">
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
    </div>
  )
}

export default Relateddoctor
