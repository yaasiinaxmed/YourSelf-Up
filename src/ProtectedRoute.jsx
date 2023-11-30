import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import Cookies from 'js-cookie';

function ProtectedRoute() {
    const location = useLocation();
    const token = Cookies.get("token")

    if(token) {
        return <Outlet/>
    } else {
        return <Navigate to='/' state={{from: location}} replace />
    }
}

export default ProtectedRoute