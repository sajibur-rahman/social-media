import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-20 bg-blue-700 flex justify-between items-center">
      <div>
          <h3 className="text-2xl text-white font-bold ml-9">facebook</h3>
      </div>
      <div>
        <Link className="text-xl mr-5 text-white font-semibold" to="/">home</Link>
        <Link className="text-xl mr-5 text-white font-semibold" to="/posts">posts</Link>
      </div>
    </div>
  );
};

export default Header;
