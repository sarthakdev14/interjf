import { useContext, useEffect } from "react";
import { AuthContext } from "../auth.context";
import { login, register, logout, getMe } from "../services/auth.api";



export const useAuth = () => {

    const context = useContext(AuthContext)
    const { user, setUser, loading, setLoading, authError, setAuthError } = context


    const handleLogin = async ({ email, password }) => {
        setLoading(true)
        setAuthError("")
        try {
            const data = await login({ email, password })
            if (data?.user) {
                setUser(data.user)
                return true
            }
            setUser(null)
            return false
        } catch (err) {
            setUser(null)
            setAuthError(
                err.response?.data?.message ||
                (err.request
                    ? "Could not connect to the backend. Check that it is running and VITE_API_URL is correct."
                    : "Login failed. Please try again.")
            )
            return false
        } finally {
            setLoading(false)
        }
    }

    const handleRegister = async ({ username, email, password }) => {
        setLoading(true)
        setAuthError("")
        try {
            const data = await register({ username, email, password })
            if (data?.user) {
                setUser(data.user)
                return true
            }
            setUser(null)
            return false
        } catch (err) {
            setUser(null)
            setAuthError(
                err.response?.data?.message ||
                (err.request
                    ? "Could not connect to the backend. Check that it is running and VITE_API_URL is correct."
                    : "Registration failed. Please try again.")
            )
            return false
        } finally {
            setLoading(false)
        }
    }

    const handleLogout = async () => {
        setLoading(true)
        setAuthError("")
        try {
            await logout()
            setUser(null)
        } catch (err) {
            setAuthError(
                err.response?.data?.message ||
                (err.request
                    ? "Could not connect to the backend. Check that it is running and VITE_API_URL is correct."
                    : "Logout failed. Please try again.")
            )
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {

        const getAndSetUser = async () => {
            try {

                const data = await getMe()
                setUser(data.user)
            } catch (err) {
                setUser(null)
                if (err.response?.status !== 401) {
                    console.error("Failed to restore the user session:", err)
                }
            } finally {
                setLoading(false)
            }
        }

        getAndSetUser()

    }, [setLoading, setUser])

    return { user, loading, authError, handleRegister, handleLogin, handleLogout }
}