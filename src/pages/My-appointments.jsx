import React, { useContext } from "react";
import { Context } from "../Context/AppContext";

const My_appointments = () => {
  const { doctors } = useContext(Context);

  return (
    <div className="w-4/5 mx-auto mt-12">
      <p className="text-2xl font-semibold text-gray-600 pb-8">My Appointments</p>

      <div className="flex flex-col gap-6">
        {doctors.slice(0, 3).map((item, index) => {
          return (
            <div className="grid grid-cols-[1fr_3fr_1fr] " key={index}>
              <img className="w-52 bg-zinc-200 rounded-lg " src={item.image} />
              <div className="flex flex-col gap-4">
                <div><p className="text-2xl font-semibold">{item.name}</p>
                <p className="text-gray-500">{item.speciality}</p></div>
                <div><p className="font-semibold text-gray-700">Address:</p>
                <p className="text-gray-500">{item.address.line1}</p>
                <p className="text-gray-500">{item.address.line2}</p></div>
                <p className="text-gray-500">
                  <span className="text-gray-700 font-semibold">Date & Time: </span>25, July, 2024 | 8:30 PM
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <button className="border border-gray-500 rounded-lg px-5 py-2 hover:text-white hover:bg-primary transition-all duration-500 ease-in-out">Pay Here</button>
                <button className="border border-gray-500 rounded-lg px-5 py-2 hover:text-white hover:bg-red-500 transition-all duration-500 ease-in-out">Cancel Appointment</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default My_appointments;
