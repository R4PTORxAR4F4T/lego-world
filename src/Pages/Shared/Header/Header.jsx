import { Link,useLocation } from 'react-router-dom';
import {AuthContext} from '../../../providers/AuthProvider';
import React,{ useEffect, useState, useContext} from 'react';


const Header = () => {

    const location = useLocation();

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    const { logOut, user } = useContext(AuthContext);

return (
    <div className="navbar bg-base-100 mb-5">
        <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-3xl"><img className='w-12' src="/gamepad.png" /> Lego World</a>
        </div>

        <div className="navbar-end">
        <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 border border-cyan-400">
            
            {user?.photoURL?
            <>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} title={user.displayName} />
                </div>
              </label>            
            </>:
            <>
              
            </>}

            <Link className='hover:text-cyan-500 hover:font-medium'  to="/">Home</Link>
            <Link className='hover:text-cyan-500 hover:font-medium'  to="/blogs">Blogs</Link>
            <Link className='hover:text-cyan-500 hover:font-medium'  to="/alltoy">All Toy</Link>

            {user ? 
            <>
              <Link className='hover:text-cyan-500 hover:font-medium'  to="/addtoy">Add Toy</Link>
              <Link className='hover:text-cyan-500 hover:font-medium'  to="/mytoy">My Toy</Link>
            </>
            :
            <>              
            </>}

            {user ? 
            <>
              <button onClick={handleLogOut} className="btn btn-outline mx-3 hover:text-white hover:font-medium" variant="secondary">
              Sign Out
              </button>
            </>
            :
            <>
              <Link className=' text-decoration-none text-light hover:text-cyan-500 hover:font-medium' to="/login" >Login</Link>
            </>}


            </ul>
        </div>
        </div>
    </div>
);
};

export default Header;