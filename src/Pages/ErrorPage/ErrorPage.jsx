import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';


const ErrorPage = () => {

    useTitle('Error 404');

    return (
        <div className='w-4/6 mx-auto'>
            <div className="flex flex-col items-center justify-center h-screen">
                <img src="/error.png" alt="Error" className=" mb-4" />
                <p className="text-lg text-center">
                    Oops! The page you're looking for doesn't exist.
                </p>
                <p className="text-lg text-center">
                    Back to <Link className='hover:text-cyan-500 hover:font-medium btn btn-sm'  to="/">Home</Link>
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;