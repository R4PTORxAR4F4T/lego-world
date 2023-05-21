import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from 'react-router-dom';
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import useTitle from "../../hooks/useTitle";


const AllToy = () => {
  const { user } = useContext(AuthContext);
  const [booked, setBooked] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page number
  const itemsPerPage = 20; // Number of items to display per page
  useTitle('AllToy');

  const url = `https://assignment-11-server-jet.vercel.app/toybooked`;
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setBooked(data))
  }, [url]);

  // Calculate the index range for the items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = booked.slice(indexOfFirstItem, indexOfLastItem);

  // Change the current page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="w-4/6 mx-auto">
      <Header />
      <div className="my-10">
        <p className='text-4xl text-center mb-8 border-b pb-4 border-white'>All toys</p>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Seller</th>
                <th>Quantity</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map(item => (
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
                    <span className="badge badge-ghost badge-sm">{item.category}</span>
                  </td>

                  <td>
                    {item.seller}
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
        {/* Pagination */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: Math.ceil(booked.length / itemsPerPage) }, (_, index) => (
            <button
              key={index}
              className={`btn btn-outnile mx-1 ${currentPage === index + 1 ? 'bg-blue-600' : ''}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllToy;
