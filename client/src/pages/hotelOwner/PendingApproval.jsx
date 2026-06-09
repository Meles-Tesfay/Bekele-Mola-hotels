import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const PendingApproval = () => {
    const { axios, user, logout, fetchUser } = useAppContext()
    const [profile, setProfile] = useState(null)
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)

    const [form, setForm] = useState({
        username: '', phone: '', bio: '',
        hotel: { name: '', address: '', contact: '', city: '', description: '' }
    })

    const loadProfile = async () => {
        try {
            const { data } = await axios.get('/api/owner/profile')
            if (data.success) {
                setProfile(data)
                setForm({
                    username: data.profile.username,
                    phone: data.profile.phone,
                    bio: data.profile.bio,
                    hotel: data.hotel || form.hotel,
                })
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => { loadProfile() }, [])

    const handleSave = async (e) => {
        e.preventDefault()
        setSaving(true)
        try {
            const { data } = await axios.put('/api/owner/profile', form)
            if (data.success) {
                toast.success(data.message)
                await fetchUser()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message)
        } finally {
            setSaving(false)
        }
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="flex items-center justify-between px-6 py-4 bg-white border-b">
                <img src={assets.logo} alt="Bekele Mola Hotels" className="h-9 w-auto max-w-[180px] object-contain" />
                <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">{user?.email}</span>
                    <button onClick={logout} className="text-sm text-red-600 font-medium">Logout</button>
                </div>
            </div>

            <div className="max-w-2xl mx-auto px-4 py-12">
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8 text-center">
                    <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 font-playfair">Pending admin approval</h1>
                    <p className="text-gray-600 mt-2 text-sm">
                        Your hotel owner application is under review. You can update your profile below while you wait.
                    </p>
                </div>

                <form onSubmit={handleSave} className="bg-white rounded-2xl shadow-lg border p-6 md:p-8 space-y-4">
                    <h2 className="font-semibold text-gray-900">Profile settings</h2>

                    <div>
                        <label className="text-sm font-medium text-gray-700">Username</label>
                        <input value={form.username} onChange={e => setForm({ ...form, username: e.target.value })}
                            className="mt-1 w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500" />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Phone</label>
                        <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                            className="mt-1 w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500" />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">About you</label>
                        <textarea value={form.bio} onChange={e => setForm({ ...form, bio: e.target.value })}
                            className="mt-1 w-full rounded-xl border px-4 py-3 h-20 resize-none outline-none focus:border-blue-500" />
                    </div>

                    {form.hotel && (
                        <>
                            <h3 className="font-semibold text-gray-900 pt-4 border-t">Hotel information</h3>
                            <div>
                                <label className="text-sm font-medium text-gray-700">Hotel name</label>
                                <input value={form.hotel.name} onChange={e => setForm({ ...form, hotel: { ...form.hotel, name: e.target.value } })}
                                    className="mt-1 w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500" />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700">Address</label>
                                <input value={form.hotel.address} onChange={e => setForm({ ...form, hotel: { ...form.hotel, address: e.target.value } })}
                                    className="mt-1 w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500" />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700">Contact</label>
                                <input value={form.hotel.contact} onChange={e => setForm({ ...form, hotel: { ...form.hotel, contact: e.target.value } })}
                                    className="mt-1 w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500" />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700">Description</label>
                                <textarea value={form.hotel.description} onChange={e => setForm({ ...form, hotel: { ...form.hotel, description: e.target.value } })}
                                    className="mt-1 w-full rounded-xl border px-4 py-3 h-24 resize-none outline-none focus:border-blue-500" />
                            </div>
                        </>
                    )}

                    <button type="submit" disabled={saving}
                        className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold disabled:opacity-60">
                        {saving ? 'Saving...' : 'Save profile'}
                    </button>
                </form>

                <p className="text-center text-sm text-gray-500 mt-6">
                    <Link to="/" className="text-blue-600 hover:underline">Back to home</Link>
                </p>
            </div>
        </div>
    )
}

export default PendingApproval
