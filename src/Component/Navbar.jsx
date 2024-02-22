import React from 'react'
import { Link } from 'react-router-dom';

 const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className='d-flex align-items-center justify-content-between'>
<h1> Logo</h1>
<div className='d-flex align-items-center justify-content-between'>
<p>Home</p>
<p>About</p>
<p>Contact</p>
<p>Service</p>
</div>
<div>
  <Link to="/signup">
    <button className='btn btn-primary'>Sign Up</button>
  </Link>
  <Link to="/signin">
    <button className='btn btn-secondary'>Log In</button>
  </Link>
</div>
    </div>
    </nav>
  )
}

export default Navbar;
