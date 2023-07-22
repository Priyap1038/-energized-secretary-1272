import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='nav'>
        <div className='logo'>Digi-Pay</div>
        <div className='nav-links'>
            <Link to="/"> <i class="fa-solid fa-house"></i> Home</Link>
            <Link to="/contacts"><i class="fa-solid fa-address-book"></i> Contact</Link>
            <Link to="/history"><i class="fa-solid fa-money-bill"></i> History</Link>
        </div>
        <div className='search'>
            <Link to="/signup" className='btn signup-btn'><i class="fa-regular fa-user"></i> Signup</Link>
            <Link to="/login" className='btn login-btn'><i class="fa-regular fa-user"></i> Login</Link>
        </div>
    </div>
  )
}

export default Navbar