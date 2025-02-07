import React, { useContext } from "react";
import { Context } from "../Context/AppContext";

const My_appointments = () => {
  const { doctors } = useContext(Context);

  return (
    <div className="w-4/5 mx-auto mt-12">
      <p className="text-xl md:text-2xl font-semibold text-gray-600 pb-8">My Appointments</p>

      <div className="flex flex-col gap-12 lg:gap-6">
        {doctors.slice(0, 3).map((item, index) => {
          return (
            <div className="flex flex-col gap-6 items-center justify-center md:grid md:grid-cols-[1fr_1fr_1fr] lg:grid-cols-[1fr_3fr_1fr] " key={index}>
              <img className="w-[300px] md:w-52 bg-zinc-200 rounded-lg " src={item?.image} />
              <div className="flex flex-col gap-2 lg:gap-4">
                <div><p className="text-xl md:text-xl lg:text-2xl font-semibold">{item.name}</p>
                <p className="text-gray-500 text-lg md:text-sm lg:text-lg">{item.speciality}</p></div>
                <div><p className="font-semibold text-gray-700 text-lg md:text-sm lg:text-lg">Address:</p>
                <p className="text-gray-500 text-sm text-[12px] lg:text-sm">{}</p>
                <p className="text-gray-500 text-sm text-[12px] lg:text-sm">{}</p></div>
                <p className="text-gray-500 text-sm text-[12px] lg:text-sm">
                  <span className="text-gray-700 font-semibold text-lg lg:text-lg md:text-sm">Date & Time: </span>25, July, 2024 | 8:30 PM
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <button className="border border-gray-500 rounded-lg md:px-5 md:py-2 px-10 hover:text-white hover:bg-primary transition-all duration-500 ease-in-out lg:text-lg text-lg md:text-sm">Pay Here</button>
                <button className="border border-gray-500 rounded-lg md:px-5 md:py-2 px-10 hover:text-white hover:bg-red-500 transition-all duration-500 ease-in-out lg:text-lg text-lg md:text-sm">Cancel Appointment</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default My_appointments;
