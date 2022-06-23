import { React} from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
    const employeeId = sessionStorage.employeeId;
    return employeeId ? true : false;
}

export default function PublicRoutes() {
    const auth = useAuth();

    return auth ? <Navigate to="/challenges" /> : <Outlet />
}
