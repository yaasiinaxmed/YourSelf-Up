import React from 'react'
import { useFirebase } from './context/firebase'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

function ProtectedRoute() {
    const location = useLocation();
    const { user } = useFirebase()

    if(user) {
        return <Outlet/>
    } else {
        return <Navigate to='/' state={{from: location}} replace />
    }
}

export default ProtectedRoute