import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const AUTH_MESSAGE_DURATION_MS = 3 * 60 * 1000

const Login = () => {
    const { login } = useAppContext()
    const navigate = useNavigate()
    const location = useLocation()
    const redirectTo = location.state?.from || '/'
    const authMessage = location.state?.message || ''
    const [showAuthMessage, setShowAuthMessage] = useState(Boolean(authMessage))
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!authMessage) return undefined

        setShowAuthMessage(true)
        const timer = setTimeout(() => setShowAuthMessage(false), AUTH_MESSAGE_DURATION_MS)
        return () => clearTimeout(timer)
    }, [authMessage])

    const onSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const user = await login(email, password)
            toast.success('Welcome back!')
            if (user.isAdmin) navigate('/admin')
            else if (user.role === 'hotelOwner' && user.ownerStatus === 'pending') navigate('/owner/pending')
            else if (user.isOwner) navigate('/owner')
            else navigate(redirectTo)
        } catch (error) {
            toast.error(error.response?.data?.message || error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-28 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <img src={assets.logo} alt="Bekele Mola Hotels" className="h-14 md:h-16 w-auto min-w-[200px] max-w-[280px] object-contain drop-shadow-sm" />
                    </div>
                    {showAuthMessage && authMessage && (
                        <p className="text-red-600 text-sm font-semibold mb-4">{authMessage}</p>
                    )}
                    <h1 className="text-2xl font-bold text-gray-900 font-playfair">Welcome back</h1>
                    <p className="text-gray-500 text-sm mt-1">
                        {redirectTo === '/hospitality'
                            ? 'Sign in to complete your order'
                            : 'Sign in to your account'}
                    </p>
                </div>

                <form onSubmit={onSubmit} className="space-y-5">
                    <div>
                        <label className="text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none"
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#49B9FF] to-blue-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all disabled:opacity-60"
                    >
                        {loading ? 'Signing in...' : 'Sign In'}
                    </button>
                </form>

                <p className="text-center text-sm text-gray-500 mt-6">
                    Don&apos;t have an account?{' '}
                    <Link to="/signup" className="text-blue-600 font-semibold hover:underline">Sign up</Link>
                </p>

                <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                    <Link to="/" className="text-sm text-gray-400 hover:text-gray-600">← Back to home</Link>
                </div>
            </div>
        </div>
    )
}

export default Login
