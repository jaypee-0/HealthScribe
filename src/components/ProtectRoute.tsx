import { Navigate, Outlet  } from 'react-router-dom'
import { useuserAuth } from '../context/UserAuth';

const ProtectRoute = ({ children }:any) => {
    let { user }:any = useuserAuth()
    
    if(!user) {
        return <Navigate to={'/'} />
    }
    return children ? children : <Outlet />;
} 

export default ProtectRoute