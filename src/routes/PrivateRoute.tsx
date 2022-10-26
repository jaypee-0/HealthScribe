import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RootState } from '../app/store';

function PrivateRoute({children} : any) {
    const accessToken = useSelector((state : RootState) => state.session.accessToken); 
    const loading = useSelector((state : RootState) => state.session.loading);
    const location = useLocation();
    const fromLocation = (location.state as any)?.from;
    const previousLocation = location.state ? fromLocation : { pathname: '/login' };

  if (accessToken) {
    return children;
  } else if (loading) {
    return <p>Loading...</p>;
  } else if (!accessToken && !loading) {
    return <Navigate to={previousLocation} state={{from: location}} replace />;
  } else {
    return <p>Error</p>;
  }
}

export default PrivateRoute
