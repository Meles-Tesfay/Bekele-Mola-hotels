import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets, cities } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const Signup = () => {
    const { signup } = useAppContext()
    const navigate = useNavigate()
    const [accountType, setAccountType] = useState('user')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [bio, setBio] = useState('')
    const [hotel, setHotel] = useState({ name: '', address: '', contact: '', city: '', description: '' })
    const [loading, setLoading] = useState(false)

    const onSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const payload = {
                username,
                email,
                password,
                role: accountType === 'owner' ? 'hotelOwner' : 'user',
                phone: accountType === 'owner' ? phone : undefined,
                bio: accountType === 'owner' ? bio : undefined,
            }
            if (accountType === 'owner') {
                payload.hotel = hotel
            }
            const result = await signup(payload)
            toast.success(result.message)
            if (result.user.role === 'hotelOwner') {
                navigate('/owner/pending')
            } else {
                navigate('/')
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-28 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10 max-h-[90vh] overflow-y-auto">
                <div className="text-center mb-6">
                    <img src={assets.logo} alt="Bekele Mola Hotels" className="h-14 md:h-16 w-auto min-w-[200px] max-w-[280px] mx-auto object-contain drop-shadow-sm mb-4" />
                    <h1 className="text-2xl font-bold text-gray-900 font-playfair">Create account</h1>
                    <p className="text-gray-500 text-sm mt-1">Choose how you want to use Bekele Mola Hotels</p>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                    <button
                        type="button"
                        onClick={() => setAccountType('user')}
                        className={`py-3 px-4 rounded-xl border-2 text-sm font-semibold transition-all ${accountType === 'user'
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-200 text-gray-600 hover:border-gray-300'
                            }`}
                    >
                        Customer
                    </button>
                    <button
                        type="button"
                        onClick={() => setAccountType('owner')}
                        className={`py-3 px-4 rounded-xl border-2 text-sm font-semibold transition-all ${accountType === 'owner'
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-200 text-gray-600 hover:border-gray-300'
                            }`}
                    >
                        Hotel Owner
                    </button>
                </div>

                <form onSubmit={onSubmit} className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700">Username</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
                            className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none" required />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none" required />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none"
                            minLength={6} required />
                    </div>

                    {accountType === 'owner' && (
                        <div className="space-y-4 pt-2 border-t border-gray-100">
                            <p className="text-sm font-semibold text-gray-800">Owner profile</p>
                            <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                                Your application will be reviewed by an admin before you can list rooms.
                            </p>
                            <div>
                                <label className="text-sm font-medium text-gray-700">Phone</label>
                                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}
                                    className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500" required />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700">About you / hospitality experience</label>
                                <textarea value={bio} onChange={(e) => setBio(e.target.value)}
                                    placeholder="Tell us about your experience hosting guests..."
                                    className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500 h-20 resize-none" />
                            </div>

                            <p className="text-sm font-semibold text-gray-800 pt-2">Hotel details</p>
                            <div>
                                <label className="text-sm font-medium text-gray-700">Hotel name</label>
                                <input type="text" value={hotel.name} onChange={(e) => setHotel({ ...hotel, name: e.target.value })}
                                    className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500" required />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700">Hotel contact phone</label>
                                <input type="text" value={hotel.contact} onChange={(e) => setHotel({ ...hotel, contact: e.target.value })}
                                    className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500" required />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700">Address</label>
                                <input type="text" value={hotel.address} onChange={(e) => setHotel({ ...hotel, address: e.target.value })}
                                    className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500" required />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700">City</label>
                                <select value={hotel.city} onChange={(e) => setHotel({ ...hotel, city: e.target.value })}
                                    className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500" required>
                                    <option value="">Select city</option>
                                    {cities.map((c) => <option key={c} value={c}>{c}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700">Hotel description</label>
                                <textarea value={hotel.description} onChange={(e) => setHotel({ ...hotel, description: e.target.value })}
                                    placeholder="Describe your property, amenities, and what guests can expect..."
                                    className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500 h-24 resize-none" />
                            </div>
                        </div>
                    )}

                    <button type="submit" disabled={loading}
                        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#49B9FF] to-blue-600 text-white font-semibold shadow-lg mt-2 disabled:opacity-60">
                        {loading ? 'Submitting...' : accountType === 'owner' ? 'Submit for approval' : 'Create account'}
                    </button>
                </form>

                <p className="text-center text-sm text-gray-500 mt-6">
                    Already have an account? <Link to="/login" className="text-blue-600 font-semibold hover:underline">Sign in</Link>
                </p>
            </div>
        </div>
    )
}

export default Signup
