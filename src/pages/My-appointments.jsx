import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const My_appointments = () => {

  const{ Backendurl, token} = useContext(Context);

  const [doctors, setdoctors] = useState();

  const montharray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  const formatdate = (date)=>{
    const datearray = date.split("_");

    const year = datearray[0];
    const month = montharray[datearray[1]];
    const day = datearray[2];

    const actualformat = day + " " + month + " " + year;

    return actualformat;

  }

  const getmyappointment = async()=>{
    try{
      const {data} = await axios.get(Backendurl + "/api/user/getmyappointment",{withCredentials:true});

      if(data.success){
        setdoctors(data.message);
      }

    }catch(err){
      console.log(err)
    }
  }

  const cancelappointment = async(appointmentid)=>{
    try{
      const {data} = await axios.post(Backendurl + "/api/user/cancelappointment", {appointmentid}, {withCredentials:true});

      if(data?.success){
        toast.success(data?.message);
        getmyappointment();
      }else{
        toast.error(data?.message)
      }

    }catch(err){
      toast.error(err)
    }
  }

  const razorpayinit = (data)=>{
    const options = {
      key: 'rzp_test_BD5G1ROQVfDaZl',
      amount: data?.amount,
      currency: data?.currency,
      name: 'Appointment in Prescripto',
      description: 'Payment for appointment',
      order_id: data?.id,
      receipt: data?.receipt,
      handler : async(response)=>{
        console.log(response)
        try{
          const {data} = await axios.post(Backendurl + "/api/user/verifyPayment", response, {withCredentials:true});

          if(data?.success){
            toast.success(data?.message);
            getmyappointment();
          }

        }catch(err){
          console.log(err)
          toast.error(err);
        }
      }
    }

    const rzp = new Razorpay(options);
    rzp.open();
  }

  const payment = async(appointmentid)=>{
    try{
      const {data} = await axios.post(Backendurl + "/api/user/onlinepayment", {appointmentid}, {withCredentials:true});
      
      if(data?.success){
       console.log(data?.message)
       razorpayinit(data?.message)
      }

    }catch{
      toast.error(err);
    }
  }

  useEffect(()=>{
    if(token){
      getmyappointment();
    }
  }, [token]);


  return (
    <div className="w-4/5 mx-auto mt-12">
      <p className="text-xl md:text-2xl font-semibold text-gray-600 pb-8">My Appointments</p>

      <div className="flex flex-col gap-12 lg:gap-6">
        {doctors?.map((item, index) => {
          return (
            <div className="flex flex-col gap-6 items-center justify-center md:grid md:grid-cols-[1fr_1fr_1fr] lg:grid-cols-[1fr_3fr_1fr] " key={index}>
              <img className="w-[300px] md:w-52 bg-zinc-200 rounded-lg " src={item?.docData?.image} />
              <div className="flex flex-col gap-2 lg:gap-4">
                <div><p className="text-xl md:text-xl lg:text-2xl font-semibold">{item?.docData?.name}</p>
                <p className="text-gray-500 text-lg md:text-sm lg:text-lg">{item?.docData?.speciality}</p></div>
                <div><p className="font-semibold text-gray-700 text-lg md:text-sm lg:text-lg">Address:</p>
                <p className="text-gray-500 text-sm text-[12px] lg:text-sm">{item?.docData?.Address?.line1}</p>
                <p className="text-gray-500 text-sm text-[12px] lg:text-sm">{item?.docData?.Address?.line2}</p></div>
                <p className="text-gray-500 text-sm text-[12px] lg:text-sm">
                  <span className="text-gray-700 font-semibold text-lg lg:text-lg md:text-sm">Date & Time: </span>
                  {formatdate(item?.slotDate) + " | "}{item?.slotTime}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {!item?.Cancelled && !item?.payment && <button onClick={()=> payment(item?._id)} className="border border-gray-500 rounded-lg md:px-5 md:py-2 px-10 hover:text-white hover:bg-primary transition-all duration-500 ease-in-out lg:text-lg text-lg md:text-sm">Pay Here</button>}
                {!item?.Cancelled && item?.payment &&  <div className="text-blue-600 text-center text-xl px-5 py-2">Paid</div>}
                {!item?.Cancelled && 
                <button onClick={()=> cancelappointment(item?._id)} className="border border-gray-500 rounded-lg md:px-5 md:py-2 px-10 hover:text-white hover:bg-red-500 transition-all duration-500 ease-in-out lg:text-lg text-lg md:text-sm">Cancel Appointment</button>
                }
                {
                  item?.Cancelled && 
                  <div className="text-red-500 text-lg px-5 py-2">
                    Appointment Cancelled 
                  </div>
                }
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default My_appointments;
