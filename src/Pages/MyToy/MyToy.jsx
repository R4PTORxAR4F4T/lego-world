import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from 'react-router-dom';
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";


const MyToy = () => {

    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');

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
                        const remaining = myToys.filter(booking => booking._id !== id);
                        setMyToys(remaining);
                        alert('deleted successful');
                    }
                })
        }
    }

    const toggleSortOrder = () => {
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc'; // Toggle the sort order
        setSortOrder(newSortOrder);
      }

    // console.log(user?.email);
    const url = `http://localhost:5000/bookings?email=${user?.email}&sort=${sortOrder}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [url]);

    // console.log(myToys);
    
    return (
        <div className="w-4/6 mx-auto">
            <Header></Header>
            <div >
            <p className='text-4xl text-center mb-8 border-b pb-4 border-white '>My Added Toys</p>
                <div className="overflow-x-auto w-full">
                    <div className="text-end">
                    <button className="btn btn-outline mb-4" onClick={toggleSortOrder}>
                        {sortOrder === 'asc' ? 'Sort Descending' : 'Sort Ascending'}
                    </button>
                    </div>
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
                            {myToys.map(item=>(
                                <tr key={item._id}>
                                    <td>
                                    <div className="flex items-center space-x-3">
                                        <div>
                                        <div className="font-bold">{item.name}</div>
                                        <div className="text-sm opacity-50">price : {item.price} $</div>
                                        </div>
                                    </div>
                                    </td>
            
                                    <td>
                                    {item.quantity} pcs
                                    <br/>
                                    <span className="badge badge-ghost badge-sm">{item.sub_category}</span>
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
            <Footer></Footer>
        </div>
    );
};

export default MyToy;