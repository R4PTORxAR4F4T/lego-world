import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateToy = () => {

    const update_toy = useLoaderData();

    console.log(update_toy);

    const { details, image, name, price, quantity, rating, seller_email, seller_name, sub_category, _id } = update_toy;

    return (
        <div className='w-4/6 mx-auto'>
            <p className='text-4xl text-center mb-8 border-b pb-4 border-white '>Update Toys Information</p>
            <div className="w-4/6 mx-auto border border-cyan-500 rounded-lg p-12 shadow-xl m-16">
            <form >
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                    <label className="text-lg font-semibold">Name:</label><br />
                    <input className="w-full border border-cyan-500 px-4 py-2 rounded-lg" type="text" name="name" id="name"  required />
                    </div>

                    <div>
                    <label className="text-lg font-semibold">Image:</label><br />
                    <input className="w-full border border-cyan-500 px-4 py-2 rounded-lg" type="text" name="image" id="image"  required />
                    </div>
                    
                    <div>
                    <label className="text-lg font-semibold">Price:</label><br />
                    <input className="w-full border border-cyan-500 px-4 py-2 rounded-lg" type="text" name="price" id="price"  required />
                    </div>

                    <div>
                    <label className="text-lg font-semibold">Quantity:</label><br />
                    <input className="w-full border border-cyan-500 px-4 py-2 rounded-lg" type="text" name="quantity" id="quantity"  required />
                    </div>

                    <div>
                    <label className="text-lg font-semibold">Rating:</label><br />
                    <input className="w-full border border-cyan-500 px-4 py-2 rounded-lg" type="text" name="rating" id="rating"  required />
                    </div>

                    <div>
                    <label className="text-lg font-semibold">Sub Category:</label><br />
                    <input className="w-full border border-cyan-500 px-4 py-2 rounded-lg" type="text" name="subCategory" id="subCategory"  required />
                    </div>

                    <div>
                    <label className="text-lg font-semibold">Seller Name:</label><br />
                    <input className="w-full border border-cyan-500 px-4 py-2 rounded-lg" type="text" name="sellerName" id="sellerName"  required />
                    </div>
                    
                    <div>
                    <label className="text-lg font-semibold">Seller Email:</label><br />
                    <input className="w-full border border-cyan-500 px-4 py-2 rounded-lg" type="email" name="sellerEmail" id="sellerEmail"  required />
                    </div>

                </div>
                
                <div><br />
                    <label className="text-lg font-semibold">Details:</label><br />
                    <textarea className="w-full border border-cyan-500 px-4 py-2 rounded-lg" name="details" id="details"  required></textarea>
                </div>

                <div className='text-center'>
                <button className="btn btn-outline btn-info mt-4" type="submit" name="submit" >Submit</button>
                </div>

            </form>
            </div>
        </div>
    );
};

export default UpdateToy;