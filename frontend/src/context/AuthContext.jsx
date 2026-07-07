import api from "../sevices/api";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    async function loadUser() {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const response = await api.get("/users/profile",{
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }}
                );
                setUser(response.data);
            } catch (error) {
                console.error("Failed to load user:", error);
                localStorage.removeItem("token");
                setUser(null);
            }
        }else{
            setUser(null);
        }
    }
    useEffect(() => {
        loadUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, loadUser }}>
            {children}
        </AuthContext.Provider>
    );
}