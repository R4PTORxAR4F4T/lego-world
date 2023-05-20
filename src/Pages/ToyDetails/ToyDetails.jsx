import React,{ useContext } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../providers/AuthProvider';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';


const ToyDetails = () => {

    const toy = useLoaderData();
    const { details, image, name, price, quantity, rating, seller_email, seller_name, sub_category, _id } = toy;
    const {user} = useContext(AuthContext);

    const handleBookToy=() =>{
    
        const email = user?.email;
        const booking = { 
            email:email,
            toy_id:_id,
            seller_email:seller_email,
            seller: seller_name, 
            toy_name:name,
            image:image,
            rating:rating,
            category:sub_category, 
            price: price,
            quantity: quantity, 
            details:details
        }

        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('Added to card successfully')
            }
        })

    }

    return (
        <div className='w-4/6 mx-auto'>
            <Header></Header>
            <div>
                <div className='flex gap-16'>
                    <div className='w-1/2'>
                        <img src={image} alt="" />
                    </div>
                    <div className=''>
                        
                        <p className='text-3xl border-b pb-5 mb-5'>Toy details</p>
                        <p className='text-2xl pb-5'>{name}</p>
                        <p className='text-lg'>{details}</p>
                        <div className='flex justify-between'>
                            <div className='text-base'>Category : {sub_category}</div>
                            <div className='text-base'>Price : {price}</div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='text-base'>Quantity : {quantity}</div>
                            <div className='text-base'>Rating : {rating}</div>
                        </div>
                        <p className='text-base'>Seller name : {seller_name}</p>
                        <p className='text-base'>Seller email : {seller_email}</p>
                    </div>
                </div>
                <div className='text-center p-5'>
                    <button onClick={handleBookToy} className="btn">Add to Cart</button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ToyDetails;