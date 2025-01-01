import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../Context/AppContext";
import { assets } from "../assets/assets";
import { use } from "react";
import Relateddoctor from "../components/Relateddoctor";

const Appointments = () => {
  const { doctorid } = useParams();
  const { doctors, currency } = useContext(Context);

  const [docinfo, setdocinfo] = useState(null);
  const [docSlots, setdocSlots] = useState([]);
  const [slotIndex, setslotIndex] = useState(0);
  const [slotTime, setslotTime] = useState('');

  //daysofweek
  const DaysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const getAvailableSlots = async ()=>{
    setdocSlots([]);

    let today = new Date();

    for(let i=0; i<7; i++){

      //set the current date 
      let currentdate = new Date(today);
      currentdate.setDate(today.getDate()+i);

      //End time 
      let endtime = new Date();
      endtime.setDate(today.getDate()+i);
      endtime.setHours(21,0,0,0);

      //Time slots
      if(currentdate.getDate() === today.getDate()){
         currentdate.setHours(currentdate.getHours() > 10 ? currentdate.getHours() + 1 : 10);
         currentdate.setMinutes(currentdate.getMinutes() > 30 ? 30 : 0);
      }else{
        currentdate.setHours(10);
        currentdate.setMinutes(0);
      }

      let timeSlots = [];
      //fill the slots into array
      while(currentdate < endtime){
        let formattedTime = currentdate.toLocaleTimeString([], {hour : "2-digit" , minute : "2-digit"});

        timeSlots.push({
          dateTime : new Date(currentdate),
          time : formattedTime
        })

        currentdate.setMinutes(currentdate.getMinutes() + 30);
      }

      setdocSlots((prev) => [...prev, timeSlots]);
    }
  }

  console.log("state change")

  useEffect(() => {
    setdocinfo(doctors.find((doc) => doc._id === doctorid));
  }, [doctorid]);

  useEffect(()=>{
    getAvailableSlots();
  },[docinfo])

  if(docinfo === null || docSlots === ""){
    return <div>Doctor not found</div>
  }

  return (
    <div className="w-[100vw]">
    <div className="flex w-4/5 m-auto gap-6">
      <div>
        <img className="w-80 bg-primary rounded-lg" src={docinfo.image} />
      </div>
      <div className="w-4/5 flex flex-col gap-2 items-start border border-gray-400 py-5 px-10 rounded-lg">
      <h1 className="text-3xl">{docinfo.name}</h1>
      <div className="flex gap-3 items-center">
        <p className="text-sm text-gray-500">
          {docinfo.degree} - {docinfo.speciality}
        </p>
        <button className="border border-gray-500 px-4 py-1 rounded-full text-sm">{docinfo.experience}</button>
      </div>
      <div>
        <p className="flex gap-3 text-sm">About <img src={assets.info_icon}/></p>
        <p className="text-gray-500 text-sm">{docinfo.about}</p>
      </div>
      <div className="flex gap-1">
        <p className="text-gray-500">Appointment fees: 
         </p>
        <p className="text-sm">{currency}
        {docinfo.fees}</p>
      </div>
      </div>
    </div>
     <div className="flex flex-col items-start justify-start w-6/12 ml-[468px] mt-12 gap-6">
      <h1 className="text-gray-500">Booking Slots</h1>
      <div className="flex flex-col gap-6">
      <div className="flex gap-3">
        {
          docSlots.map((data, index)=>{
            return(
              <div key={index} onClick={()=> setslotIndex(index)} className={`rounded-full px-4 py-6 flex flex-col items-center cursor-pointer ${slotIndex === index ? "bg-primary text-white" : "border border-gray-500"}`}>
                <p>{DaysOfWeek[data[0].dateTime.getDay()]}</p>
                <p>{data[0].dateTime.getDate()}</p>
              </div>
            )
          })
        }
      </div>
     <div className="flex gap-3 overflow-x-scroll w-6/12 scrollbar-none">
        {
          docSlots[slotIndex].map((data,index)=>{
            return(
                <p key={index} onClick={()=> setslotTime(data.time)} className={`border border-gray-500 px-3 py-2 rounded-full cursor-pointer ${data.time === slotTime ? "bg-primary text-white" : "border border-gray-500"}`}>{data.time.toLowerCase()}</p>
            )
          })
        }
      </div>
      <button className="bg-primary text-white px-8 py-4 rounded-full w-60">Book Appointment</button>
      </div>
     </div>
     <Relateddoctor docId={docinfo._id} speciality={docinfo.speciality}/>
    </div>
  );
};

export default Appointments;
