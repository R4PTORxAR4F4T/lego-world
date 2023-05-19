import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyToy = () => {

    const { user } = useContext(AuthContext);
    const [booked, setBooked] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBooked(data))
    }, [url]);
    
    return (
        <div>
            my toy
        </div>
    );
};

export default MyToy;