import React from 'react'
import { getApplicationState } from "../../state/slices/Application";
import { useSelector } from "react-redux";
import { Redirect, useLocation } from "react-router-dom"
import DashBoard from "../dashboard";

function ProtectedRoute({ Component, redirectUrl }) {
    const { isUserLoggedIn } = useSelector(getApplicationState)
    const next = useLocation().pathname
    return !isUserLoggedIn ?
        <Redirect to={`/${redirectUrl}/?${next}`} /> : <DashBoard />
}

export default ProtectedRoute
