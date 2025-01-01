import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../Context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const Navigate = useNavigate();
  const { doctors } = useContext(Context);

  const [filterspeciality, setfilterspeciality] = useState([]);

  const getfilterdoc = () => {
    if (speciality === undefined) {
      setfilterspeciality(doctors);
    } else {
      setfilterspeciality(
        doctors.filter((doc) => doc.speciality === speciality)
      );
    }
  };

  useEffect(() => {
    getfilterdoc();
  }, [doctors, speciality]);

  return (
    <div className="w-4/5 m-auto flex flex-col gap-6">
      <h1 className="text-gray-600">Browse through the doctors specialist.</h1>
      <div className="flex gap-6">
        <div className="flex flex-col gap-3">
          <p
            onClick={() =>
              speciality === "General physician"
                ? Navigate("/Doctor")
                : Navigate("/Doctor/General physician")
            }
            className={
              `text-gray-600 border-2 px-5 py-1 cursor-pointer ${speciality ===
              "General physician"
                ? "bg-gray-300 text-black"
                : ""}
            `}
          >
            General physician
          </p>
          <p
            onClick={() =>
              speciality === "Dermatologist"
                ? Navigate("/Doctor")
                : Navigate("/Doctor/Dermatologist")
            }
            className={
              `text-gray-600 border-2 px-5 py-1 cursor-pointer ${speciality ===
              "Dermatologist"
                ? "bg-gray-300 text-black"
                : ""}
             `}
          >
            Dermatologist
          </p>
          <p
            onClick={() =>
              speciality === "Pediatricians"
                ? Navigate("/Doctor")
                : Navigate("/Doctor/Pediatricians")
            }
            className={
              `text-gray-600 border-2 px-5 py-1 cursor-pointer ${speciality ===
              "Pediatricians"
                ? "bg-gray-300 text-black"
                : ""}
              `}
          >
            Pediatricians
          </p>
          <p
            onClick={() =>
              speciality === "Neurologist"
                ? Navigate("/Doctor")
                : Navigate("/Doctor/Neurologist")
            }
            className={
              `text-gray-600 border-2 px-5 py-1 cursor-pointer  ${speciality ===
              "Neurologist"
                ? "bg-gray-300 text-black"
                : ""}
            `}
          >
            Neurologist
          </p>
          <p
            onClick={() =>
              speciality === "Gastroenterologist"
                ? Navigate("/Doctor")
                : Navigate("/Doctor/Gastroenterologist")
            }
            className={
              `text-gray-600 border-2 px-5 py-1 cursor-pointer ${speciality ===
              "Gastroenterologist"
                ? "bg-gray-300 text-black"
                : ""}
              `}
          >
            Gastroenterologist
          </p>
        </div>
        <div className="flex flex-wrap gap-10">
          {filterspeciality.map((data) => {
            return (
              <div
                key={data._id}
                onClick={() => Navigate("/Appointments/" + data._id)}
                className="flex flex-col items-start bg-gray-200 rounded-xl p-2 gap-2 hover:translate-y-[-10px] transition-all duration-500 cursor-pointer"
              >
                <img className="w-48" src={data.image} />
                <div>
                  <div className="flex gap-2 items-center text-sm">
                    <p className="h-2 w-2 rounded-full bg-green-500"></p>
                    <p className="text-green-500">Available</p>
                  </div>
                  <p className="font-semibold">{data.name}</p>
                  <p className="text-sm">{data.speciality}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
