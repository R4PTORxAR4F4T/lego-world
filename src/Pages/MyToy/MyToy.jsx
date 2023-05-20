import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from 'react-router-dom';


const MyToy = () => {

    const { user } = useContext(AuthContext);
    const [mybookings, setMybookings] = useState([]);

    const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        const remaining = mybookings.filter(booking => booking._id !== id);
                        setMybookings(remaining);
                        alert('deleted successful');
                    }
                })
        }
    }

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMybookings(data))
    }, [url]);

    // console.log(mybookings)
    
    return (
        <div className="w-4/6 mx-auto my-10">
            <p className='text-4xl text-center mb-8 border-b pb-4 border-white '>My Added Toys</p>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {mybookings.map(item=>(
                            <tr key={item._id}>
                                <td>
                                <div className="flex items-center space-x-3">
                                    <div>
                                    <div className="font-bold">{item.toy_name}</div>
                                    <div className="text-sm opacity-50">price : {item.price} $</div>
                                    </div>
                                </div>
                                </td>
        
                                <td>
                                {item.quantity} pcs
                                <br/>
                                <span className="badge badge-ghost badge-sm">{item.category}</span>
                                </td>
        
                                <td>
                                    <Link to={`/update/${item._id}`}>
                                    <button className="btn btn-ghost btn-xs">UPDATE</button>
                                    </Link>
                                </td>
        
                                <th>
                                    <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost btn-xs">DELETE</button>
                                </th>
                            </tr> 
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToy;