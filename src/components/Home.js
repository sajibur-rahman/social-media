import React from "react";
import useFatchData from "../hooks/useFatchData";
import User from "./User";

const Home = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useFatchData(url);

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 m-7 gap-5">
      {users ? (
        users.map((user) => <User key={user.id} user={user} />)
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

export default Home;
