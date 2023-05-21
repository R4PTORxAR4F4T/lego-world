import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useState } from 'react';
import { updateProfile } from 'firebase/auth';
import useTitle from '../../hooks/useTitle';

const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState();
    useTitle('Register');


    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
 
        if (password.length < 6) {
            setError("password is less then 6 cherecter");
            return;
        }
        
        setError("");
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                updateUserData(createdUser, name, photo);
                form.reset();
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleAccepted = event =>{
        setAccepted(event.target.checked)
    }

    const updateUserData = (createdUser , name , photo) =>{
        updateProfile(createdUser,{
            displayName: name,
            photoURL: photo
        })
        .then(()=>{
            console.log('user updated successfully')
        })
        .catch(error=>{
            setError(error.message)
        })
    }

    return (
        <div>
            <div className="login-box mx-auto m-12 ">
            <h2 className='text-2xl m-5 border-b border-gray-800'>Creat Account</h2>
            <form onSubmit={handleRegister}>
                <div className="user-box">
                    <input type="text" name='name' required/>
                    <label>Username</label>
                </div>
                <div className="user-box">
                    <input type="text" name='photo' required/>
                    <label>Photo URL</label>
                </div>
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
                        <a href=""><input className="" type="submit" value="Register" /><span></span><span></span><span></span><span></span></a>
                    </div>
                    <div className="creat-account">
                    <Link  to="/login">Already have Account..?</Link>
                    </div>
                </div>
                <p className="" ></p>
                <p className="text-red-600" >{error}</p>
            </form>

        </div>
        </div>
    );
};

export default Register;