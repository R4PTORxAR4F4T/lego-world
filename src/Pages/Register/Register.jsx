import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="login-box mx-auto m-12 ">
            <h2 className='text-2xl m-5 border-b border-gray-800'>Creat Account</h2>
            <form >
                <div className="user-box">
                    <input type="text" name="" required/>
                    <label>Username</label>
                </div>
                <div className="user-box">
                    <input type="text" name="" required/>
                    <label>Photo URL</label>
                </div>
                <div className="user-box">
                    <input type="text" name="" required/>
                    <label>Email</label>
                </div>
                <div className="user-box">
                    <input type="password" name="" required/>
                    <label>Password</label>
                </div>

                <div className="submit-creat">
                    <div className="submit">
                        <a href=""><input className="" type="submit" value="Login" /><span></span><span></span><span></span><span></span></a>
                    </div>
                    <div className="creat-account">
                    <Link  to="/login">Already have Account..?</Link>
                    </div>
                </div>

            </form>

        </div>
        </div>
    );
};

export default Register;