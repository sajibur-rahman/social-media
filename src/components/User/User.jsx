import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  console.log(user);
  const { username, id } = user;
  return (
    <div className="flex justify-center  items-center w-6/12  h-32 border-2 border-purple-900 rounded-xl m-3">
      <div>{/* <img  className='w-full' src={logo} alt="" /> */}</div>
      <div>
        <h4 className="text-3xl uppercase">Name : {username}</h4>
          <Link className="text-lg border-2 py-2 px-12 m-4 border-blue-600 rounded-md cursor-pointer " to={`/posts/${id}`}>
            see posts
          </Link>
      </div>
    </div>
  );
};

export default User;
