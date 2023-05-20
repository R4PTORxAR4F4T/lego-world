import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from 'react-router-dom';
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";


const AllToy = () => {

    const { user } = useContext(AuthContext);
    const [booked, setBooked] = useState([]);

    const url = `http://localhost:5000/toybooked`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBooked(data))
    }, [url]);

    return (
        <div className="w-4/6 mx-auto">
            <Header></Header>
            <div >
            <p className='text-4xl text-center mb-8 border-b pb-4 border-white '>All toys</p>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Seller</th>
                        <th>Quantity</th>
                        <th>View</th>
                    </tr>
                    </thead>
                    <tbody>
                        {booked.map(item=>(
                            // console.log(item)
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
                                {item.seller}
                                <br/>
                                <span className="badge badge-ghost badge-sm">{item.category}</span>
                                </td>
        
                                <td>{item.quantity}</td>
        
                                <th>
                                <Link to={`/toy/${item.toy_id}`}>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </Link>
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

export default AllToy;