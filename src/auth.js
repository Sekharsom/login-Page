import { createContext, useContext, useState } from "react";


const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(false);

    const login = () => {
        setUser(true);
    }

    const logout = () => {
        setUser(false);
    }

    return(

        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )

}


export const useAuth = () => {
    return useContext(AuthContext)
}

export default AuthProvider;