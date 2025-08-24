'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [session, setSession] = useState(null);

    // Load session from localStorage (only runs in browser)
    useEffect(() => {
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem("tmdb_session");
            if (stored) setSession(stored);
        }
    }, []);

    const login = (sessionId) => {
        setSession(sessionId);
        localStorage.setItem("tmdb_session", sessionId);
    }

    const logout = () => {
        setSession(null);
        localStorage.removeItem("tmdb_session");
    }




    return (
        <AuthContext.Provider value={{ session, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}


export function useAuth() {
    return useContext(AuthContext);
}