import React from 'react';
import { useLoaderData } from 'react-router';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import useTitle from '../../hooks/useTitle';
import Swal from 'sweetalert2'


const UpdateToy = () => {

    const update_toy = useLoaderData();
    useTitle('Update');

    const { details, image, name, price, quantity, rating, seller_email, seller_name, sub_category, _id } = update_toy;


    const handleUpdate = (event) => {

        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        
        const updates = {
            price : price,
            quantity : quantity,
            details : details,
        }

        console.log(updates);

        fetch(`https://assignment-11-server-jet.vercel.app/bookings/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updates)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged == true) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Data Update Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }

    return (
        <div className='w-4/6 mx-auto'>
            <Header></Header>
            <div >
                <p className='text-4xl text-center mb-8 border-b pb-4 border-white '>Update Toys Information</p>
                <div className="w-4/6 mx-auto border border-cyan-500 rounded-lg p-12 shadow-xl m-16">
                <form onSubmit={handleUpdate}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                        <label className="text-lg font-semibold">Name:</label><br />
                        <input className="w-full border border-gray-500 px-4 py-2 rounded-lg" type="text" name="name" id="name" defaultValue={name} title='readonly'  readOnly />
                        </div>

                        <div>
                        <label className="text-lg font-semibold">Image:</label><br />
                        <input className="w-full border border-gray-500 px-4 py-2 rounded-lg" type="text" name="image" id="image" defaultValue={image}  title='readonly'  readOnly />
                        </div>
                        
                        <div>
                        <label className="text-lg font-semibold">Price:</label><br />
                        <input className="w-full border border-cyan-500 px-4 py-2 rounded-lg" type="text" name="price" id="price" defaultValue={price}  required />
                        </div>

                        <div>
                        <label className="text-lg font-semibold">Quantity:</label><br />
                        <input className="w-full border border-cyan-500 px-4 py-2 rounded-lg" type="text" name="quantity" id="quantity" defaultValue={quantity}  required />
                        </div>

                        <div>
                        <label className="text-lg font-semibold">Rating:</label><br />
                        <input className="w-full border border-gray-500 px-4 py-2 rounded-lg" type="text" name="rating" id="rating" defaultValue={rating}  title='readonly'  readOnly />
                        </div>

                        <div>
                        <label className="text-lg font-semibold">Sub Category:</label><br />
                        <input className="w-full border border-gray-500 px-4 py-2 rounded-lg" type="text" name="subCategory" id="subCategory" defaultValue={sub_category}  title='readonly'  readOnly />
                        </div>

                        <div>
                        <label className="text-lg font-semibold">Seller Name:</label><br />
                        <input className="w-full border border-gray-500 px-4 py-2 rounded-lg" type="text" name="sellerName" id="sellerName" defaultValue={seller_name}  title='readonly'  readOnly />
                        </div>
                        
                        <div>
                        <label className="text-lg font-semibold">Seller Email:</label><br />
                        <input className="w-full border border-gray-500 px-4 py-2 rounded-lg" type="email" name="sellerEmail" id="sellerEmail" defaultValue={seller_email}  title='readonly'  readOnly />
                        </div>

                    </div>
                    
                    <div><br />
                        <label className="text-lg font-semibold">Details:</label><br />
                        <textarea className="w-full border border-cyan-500 px-4 py-2 rounded-lg" name="details" id="details" defaultValue={details}  required></textarea>
                    </div>

                    <div className='text-center'>
                    <button className="btn btn-outline btn-info mt-4" type="submit" name="submit" >Update Data</button>
                    </div>

                </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UpdateToy;