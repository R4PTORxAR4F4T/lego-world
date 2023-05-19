import React from 'react';
import Swal from 'sweetalert2'

const handleAddToy = event =>{
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const subCategory = form.subCategory.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const details = form.details.value;    

    const adding = {
        name : name,
        image : image,
        seller_name : sellerName,
        seller_email : sellerEmail,
        sub_category : subCategory,
        price : price,
        rating : rating,
        details : details,
        quantity : quantity, 
    }

    // console.log(adding);

    fetch('http://localhost:5000/alltoys', {
        method: 'POST', 
        headers: {
            'content-type': 'application/json'
        }, 
        body: JSON.stringify(adding)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        form.reset();
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Toy added to database',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
        }
    })

}

const AddToy = () => {
    return (
        <div className='w-4/6 mx-auto'>
            <p className='text-4xl text-center mb-8 border-b pb-4 border-white '>ADD toys</p>
            <div className="w-4/6 mx-auto border border-cyan-500 rounded-lg p-12 shadow-xl m-16">
            <form onSubmit={handleAddToy}>
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

export default AddToy;
