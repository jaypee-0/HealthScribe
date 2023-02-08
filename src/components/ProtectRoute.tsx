import { Navigate, Outlet  } from 'react-router-dom'
import { useuserAuth } from '../context/UserAuth';

const ProtectRoute = ({ children }:any) => {
    let { token }:any = useuserAuth()
    if(!token) {
        return <Navigate to={'/'} />
    }
    return children ? children : <Outlet />;
} 

export default ProtectRoute