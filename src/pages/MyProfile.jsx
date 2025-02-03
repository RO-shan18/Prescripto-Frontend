import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";
import { Context } from "../Context/AppContext";
import axios from "axios";

const MyProfile = () => {
  const { userData, setuserData, getuserprofile, Backendurl } =
    useContext(Context);

  const [isEdit, setisEdit] = useState(false);

  const [image, setimage] = useState(false);

  const updateProfile = async () => {
    const formdata = new FormData();

    formdata.append("name", userData.name);
    formdata.append("phoneno", userData.phoneno);
    formdata.append("Address", JSON.stringify(userData.Address));
    formdata.append("Gender", userData.Gender);
    formdata.append("DOB", userData.DOB);

    image && formdata.append("image", image);

    try {
      const {data} = await axios.post(
        Backendurl + "/api/user/updateProfile",
        formdata,
        {withCredentials : true}
      );

      if (data.success) {
        toast.success(data.message);
        await getuserprofile();
        setisEdit(false);
        setimage(false);
      } else {
        toast.error(data.message);
      }

    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    userData && (
      <div className="min-h-[60vh]">
        <div className="flex flex-col w-4/5 m-auto">
          {isEdit ? (
            <div>
              <label htmlFor="image">
                <img
                  src={image ? URL.createObjectURL(image) : userData.image}
                />
              
              </label>
              <input
                onChange={(e) => setimage(e.target.files[0])}
                type="file"
                id="image"
                hidden
              />
            </div>
          ) : (
            <img className="w-36 rounded-lg mb-5" src={userData.image} />
          )}

          {isEdit ? (
            <input
              className="w-28"
              type="text"
              value={userData.name}
              onChange={(e) =>
                setuserData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          ) : (
            <p className="font-semibold text-xl md:text-2xl pb-2">
              {userData.name}
            </p>
          )}
          <hr className="border-b-1 border-gray-400 pb-3" />

          <div className="flex flex-col gap-3 mb-4">
            <p className="text-sm md:text-lg underline text-gray-500 font-semibold">
              CONTACT INFORMATION
            </p>
            <div className="grid grid-cols-2cols md:grid-cols-2col">
              <p className="text-gray-600 text-sm md:text-lg">Email:</p>
              <p className="text-primary text-sm md:text-lg">
                {userData.email}
              </p>
            </div>

            <div className="grid grid-cols-2cols md:grid-cols-2col">
              <p className="text-gray-600 text-sm md:text-lg">Phone: </p>
              {isEdit ? (
                <input
                  className="text-primary "
                  type="text"
                  value={userData.phoneno}
                  onChange={(e) =>
                    setuserData((prev) => ({ ...prev, phoneno: e.target.value }))
                  }
                />
              ) : (
                <p className="text-primary text-sm md:text-lg">
                  {userData.phoneno}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2cols md:grid-cols-2col">
              <p className="text-gray-600 text-sm md:text-lg">Address: </p>
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
                  <br />
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
                  <p className="text-gray-600 text-sm md:text-lg">
                    {userData.Address.line1}
                  </p>
                  <p className="text-gray-600 text-sm md:text-lg">
                    {userData.Address.line2}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-3 mb-4">
            <p className="text-sm md:text-lg underline text-gray-500 font-semibold">
              BASIC INFORMATION
            </p>
            <div className="grid grid-cols-2col">
              <p className="text-gray-600 text-sm md:text-lg">Gender</p>
              {isEdit ? (
                <select
                  className="text-gray-500 w-28"
                  value={userData.Gender}
                  onChange={(e) =>
                    setuserData((prev) => ({ ...prev, Gender: e.target.value }))
                  }
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="Other">Others</option>
                </select>
              ) : (
                <p className="text-gray-500 text-sm md:text-lg">
                  {userData.Gender}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2col">
              <p className="text-gray-600 text-sm md:text-lg">D.O.B</p>
              {isEdit ? (
                <input
                  className="text-gray-500 w-28 "
                  type="date"
                  value={userData.DOB}
                  onChange={(e) =>
                    setuserData((prev) => ({ ...prev, DOB: e.target.value }))
                  }
                />
              ) : (
                <p className="text-gray-500 text-sm md:text-lg">
                  {userData.DOB}
                </p>
              )}
            </div>
          </div>

          <div>
            {isEdit ? (
              <button
                className="border border-gray-500 rounded-3xl md:px-4 md:py-2 px-3 py-1 text-gray-600 text-sm md:text-lg"
                onClick={updateProfile}
              >
                Save information
              </button>
            ) : (
              <button
                className="border border-gray-500 rounded-3xl md:px-4 md:py-2 px-3 py-1 text-gray-600 text-sm md:text-lg"
                onClick={() => setisEdit(true)}
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default MyProfile;
