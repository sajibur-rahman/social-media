import React from 'react';
import useFatchData from '../../hooks/useFatchData';
import User from '../User/User';

const Home = () => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const [users] = useFatchData(url);
    console.log(users);
    return (
        <div>
            {
                users ?  users.map((user) =>  <User user={user}/>) : null
            }
        </div>
    );
};

export default Home;