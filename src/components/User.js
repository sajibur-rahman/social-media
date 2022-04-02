import React from "react";
import { useNavigate } from "react-router-dom";

const User = ({ user }) => {
  const { name, username, email, phone, website,id } = user;
  const navigate = useNavigate();
  return (
    <div className="w-72 border-2 border-gray-400 p-4 rounded-lg ">
      <h5 className="text-blue-800 text-3xl text-center my-4">{username}</h5>
      <p className="text-xl my-3">
        Name : <span className="text-yellow-700">{name}</span>{" "}
      </p>
      <p className="text-xl my-3">
        email : <span className="text-yellow-700">{email}</span>{" "}
      </p>
      <p className="text-xl my-3">
        Phone : <span className="text-yellow-700">{phone}</span>{" "}
      </p>
      <p className="text-xl my-3">
        website : <span className="text-yellow-700">{website}</span>
      </p>
      <button onClick={() => navigate(`/userPost/${id}`)} className="text-2xl border-2 border-purple-600 uppercase cursor-pointer text-center px-10 py-2 rounded-md">
        see posts
      </button>
    </div>
  );
};

export default User;
