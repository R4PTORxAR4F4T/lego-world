import './Login.css';
import React, { useContext,createContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaGoogle } from "react-icons/fa";
import { useState } from 'react';


const Login = () => {

    const { signIn, handleGoogleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [loginError, setloginError] = useState();
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                form.reset();
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                setloginError("Invalid user and password");
            })
    }

    const handleLoginGoogle = () => {
        handleGoogleSignIn()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, { replace: true })
        })
        .catch(error => {
            setloginError("Invalid user and password");
        })
    }


    return (
        <div className=''>
            {/* <video id="background-video" src="video4.mp4" autoplay muted loop></video> */}

        <div className="login-box mx-auto m-12">
            <h2 className='text-2xl'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="user-box">
                    <input type="email" name='email' required/>
                    <label>Email</label>
                </div>
                <div className="user-box">
                    <input type="password" name='password' required/>
                    <label>Password</label>
                </div>

                <div className="submit-creat">
                    <div className="submit">
                        <a href=""><input className="" type="submit" value="Login" /><span></span><span></span><span></span><span></span></a>
                    </div>
                    <div className="creat-account">
                    <Link  to="/signup">Creat Account..?</Link>
                    </div>
                </div>

                <p className="text-red-600" >{ loginError } </p>
            </form>

            <p className='text-center m-5 border-b border-gray-800 p-5'>login with thirt pary</p>
                
            <button onClick={handleLoginGoogle} className='w-full flex btn justify-evenly mt-5'><FaGoogle></FaGoogle>  Login with Google</button>
        </div>
        </div>
    );
};

export default Login;