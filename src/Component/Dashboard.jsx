import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


// Dashboard component
export const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token") || "";
    if (token === "") {
      alert('You are not authorized to view this page');
      navigate("/sign-up");
    }
  }, []);

  const handleLogout = () => {
    const verifyLogout = window.confirm('Are you sure?');
    if (verifyLogout) {
      localStorage.removeItem('token');
      navigate('/');
    }
  };

  // const handleEdit = () => {
  //   const response = await axios.get("http://localhost:4000/Api/UserDetails",{
      
  //   })
  // };

  // const handleDelete = () => {
  //   navigate('/DeleteAccount');
  // };

  return (
    <div>
      <Navbar handleLogout={handleLogout} />
      <div className='container'>
        <h1>Dashboard</h1>
        <button className='btn btn-primary' onClick={handleEdit}>Edit Profile</button>
        <button className='btn btn-primary' onClick={handleDelete}>Delete Profile</button>
      </div>
    </div>
  );
};



export default Dashboard