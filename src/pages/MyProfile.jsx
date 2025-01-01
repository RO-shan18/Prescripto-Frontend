import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setuserData] = useState({
    name: "Roshan Mehra",
    Email: "mehraoshan@gmail.com",
    phone: "2+3 4444 5554",
    Address: {
      line1: "57th Cross, Richmond ",
      line2: "Circle, Church Road, London",
    },
    Gender: "Male",
    DOB: "19-02-2004",
  });

  const [isEdit, setisEdit] = useState(true);

  return (
    <div className="min-h-[60vh]">
      <div className="flex flex-col w-4/5 m-auto">
        <img className="w-36 rounded-lg mb-5" src={assets.profile_pic} />

        {isEdit ? (
          <input
            className="w-28"
            type="text"
            value={userData.name}
            onChange={(prev) => ({ ...prev, name: e.target.value })}
          />
        ) : (
          <p className="font-semibold text-2xl pb-2">{userData.name}</p>
        )}
        <hr className= "border-b-1 border-gray-400 pb-3"/>

      <div className="flex flex-col gap-3 mb-4">
        <p className="text-lg underline text-gray-500 font-semibold">CONTACT INFORMATION</p>
        <div className="grid grid-cols-2col">
          <p className="text-gray-600">Email:</p>
          <p className="text-primary">{userData.Email}</p>
        </div>

        <div className="grid grid-cols-2col">
        <p className="text-gray-600">Phone: </p>
        {isEdit ? (
          <input
            className="text-primary"
            type="text"
            value={userData.phone}
            onChange={(prev) => ({ ...prev, phone: toString(e.target.value) })}
          />
        ) : (
          <p className="text-primary">{userData.phone}</p>
        )}
        </div>

        <div className="grid grid-cols-2col">
        <p className="text-gray-600">Address: </p>
        {isEdit ? (
          <div>
            <input
              className="text-gray-500"
              type="text"
              value={userData.Address.line1}
              onChange={(e) =>
                setuserData((prev) => ({
                  ...prev,
                  Address: { ...prev.Address, line1: e.target.value },
                }))
              }
            />
            <br/>
            <input
              className="text-gray-500"
              type="text"
              value={userData.Address.line2}
              onChange={(e) =>
                setuserData((prev) => ({
                  ...prev,
                  Address: { ...prev.Address, line2: e.target.value },
                }))
              }
            />
          </div>
        ) : (
          <div>
            <p className="text-gray-600">{userData.Address.line1}</p>
            <p className="text-gray-600">{userData.Address.line2}</p>
          </div>
        )}
        </div>
        </div>

        <div className="flex flex-col gap-3 mb-4">
          <p className="text-lg underline text-gray-500 font-semibold">BASIC INFORMATION</p>
          <div className="grid grid-cols-2col">
          <p className="text-gray-600">Gender</p>
          {
            isEdit ? (
              <select className="text-gray-500" value={userData.Gender} onChange={e => setuserData(prev, {...prev, Gender:e.target.value})}>
                <option value="male">Male</option>
                <option value="female">Female</option> 
                <option value="Other">Others</option> 
              </select>
            ): (
              <p className="text-gray-500">{userData.Gender}</p>
            )
          }
          </div>

          <div className="grid grid-cols-2col">
          <p className="text-gray-600">D.O.B</p>
          {
            isEdit ? (
              <input  className="text-gray-500 "type="date" value={userData.DOB} onChange={e => setuserData(prev => ({...prev, DOB:e.target.value}))}/>
            ): (
              <p className="text-gray-500">{userData.DOB}</p>
            )
          }
        </div>
        </div>

        <div>
          {
            isEdit ? (
                <button className="border border-gray-500 rounded-3xl px-5 py-2 text-gray-600" onClick={()=> setisEdit(false)}>Save information</button>
            ): (
              <button className="border border-gray-500 rounded-3xl px-4 py-2 text-gray-600" onClick={()=> setisEdit(true)}>Edit</button>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
