import { useContext, useEffect } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    if (!user?.email) {
      toast.error('Please log in to access this page');
    }
  }, [user]);

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user?.email) {
    return children;
  }

  return (
    <>
      <Navigate to="/login" replace />
    </>
  );
};

export default PrivateRoute;
