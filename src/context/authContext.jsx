import { createContext, useEffect, useState } from "react";

export const authContext = createContext()

export const AuthProvider = ({ children }) => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
    const [tokenDetails, setTokenDetails] = useState({})

    function getToken() {
        setTokenDetails(JSON.parse(window.localStorage.getItem("auth")));
    }

    useEffect(() => {
        if (tokenDetails && tokenDetails.accessToken) {
            setIsUserLoggedIn(true)
        }
    }, [tokenDetails])

    useEffect(() => {
        getToken()
    }, [])

    const obj = {
        isUserLoggedIn,
        getToken,
        tokenDetails
    }

    return (
        <authContext.Provider value={obj}>
            {children}
        </authContext.Provider>
    )
}