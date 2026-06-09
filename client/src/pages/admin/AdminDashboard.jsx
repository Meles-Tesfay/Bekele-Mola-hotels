import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const AdminDashboard = () => {
    const { axios, logout, user } = useAppContext()
    const [applications, setApplications] = useState([])
    const [loading, setLoading] = useState(true)
    const [filter, setFilter] = useState('pending')
    const [rejectId, setRejectId] = useState(null)
    const [rejectReason, setRejectReason] = useState('')

    const fetchApplications = async () => {
        try {
            const url = filter === 'pending'
                ? '/api/admin/pending'
                : `/api/admin/owners?status=${filter}`
            const { data } = await axios.get(url)
            if (data.success) {
                setApplications(data.applications)
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        setLoading(true)
        fetchApplications()
    }, [filter])

    const handleApprove = async (ownerId) => {
        try {
            const { data } = await axios.patch(`/api/admin/approve/${ownerId}`)
            if (data.success) {
                toast.success(data.message)
                fetchApplications()
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message)
        }
    }

    const handleReject = async () => {
        if (!rejectId) return
        try {
            const { data } = await axios.patch(`/api/admin/reject/${rejectId}`, { reason: rejectReason })
            if (data.success) {
                toast.success(data.message)
                setRejectId(null)
                setRejectReason('')
                fetchApplications()
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message)
        }
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white border-b px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img src={assets.logo} alt="Bekele Mola Hotels" className="h-8 w-auto max-w-[160px] object-contain" />
                    <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">{user?.email}</span>
                    <button onClick={logout} className="text-sm text-red-600 font-medium">Logout</button>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8">
                <div className="flex gap-2 mb-6">
                    {['pending', 'approved', 'rejected', 'all'].map((f) => (
                        <button key={f} onClick={() => setFilter(f)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium capitalize ${filter === f
                                ? 'bg-blue-600 text-white'
                                : 'bg-white border text-gray-600 hover:bg-gray-50'
                                }`}>
                            {f}
                        </button>
                    ))}
                </div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
                    </div>
                ) : applications.length === 0 ? (
                    <p className="text-center text-gray-500 py-20">No applications found.</p>
                ) : (
                    <div className="space-y-4">
                        {applications.map((app) => (
                            <div key={app._id} className="bg-white rounded-xl border shadow-sm p-6">
                                <div className="flex flex-col md:flex-row gap-6">
                                    <img src={app.image} alt="" className="w-16 h-16 rounded-full border" />
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-2 mb-2">
                                            <h2 className="text-lg font-bold text-gray-900">{app.username}</h2>
                                            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${app.ownerStatus === 'approved' ? 'bg-green-100 text-green-700'
                                                : app.ownerStatus === 'rejected' ? 'bg-red-100 text-red-700'
                                                    : 'bg-amber-100 text-amber-700'
                                                }`}>
                                                {app.ownerStatus || 'pending'}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-600">{app.email} · {app.phone}</p>
                                        {app.bio && <p className="text-sm text-gray-500 mt-2">{app.bio}</p>}

                                        {app.hotel && (
                                            <div className="mt-4 p-4 bg-gray-50 rounded-lg text-sm">
                                                <p className="font-semibold text-gray-800">{app.hotel.name}</p>
                                                <p className="text-gray-600">{app.hotel.address}, {app.hotel.city}</p>
                                                <p className="text-gray-600">Contact: {app.hotel.contact}</p>
                                                {app.hotel.description && (
                                                    <p className="text-gray-500 mt-2">{app.hotel.description}</p>
                                                )}
                                            </div>
                                        )}

                                        {app.rejectionReason && (
                                            <p className="text-sm text-red-600 mt-2">Reason: {app.rejectionReason}</p>
                                        )}
                                    </div>

                                    {(app.ownerStatus === 'pending' || !app.ownerStatus) && filter === 'pending' && (
                                        <div className="flex flex-col gap-2 min-w-[120px]">
                                            <button onClick={() => handleApprove(app._id)}
                                                className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700">
                                                Approve
                                            </button>
                                            <button onClick={() => setRejectId(app._id)}
                                                className="px-4 py-2 bg-red-50 text-red-600 border border-red-200 rounded-lg text-sm font-medium hover:bg-red-100">
                                                Reject
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            {rejectId && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
                    <div className="bg-white rounded-xl p-6 max-w-md w-full">
                        <h3 className="font-bold text-gray-900 mb-3">Reject application</h3>
                        <textarea value={rejectReason} onChange={e => setRejectReason(e.target.value)}
                            placeholder="Reason for rejection (optional)"
                            className="w-full border rounded-lg p-3 h-24 resize-none outline-none focus:border-red-400" />
                        <div className="flex gap-3 mt-4">
                            <button onClick={handleReject}
                                className="flex-1 py-2 bg-red-600 text-white rounded-lg font-medium">Confirm reject</button>
                            <button onClick={() => { setRejectId(null); setRejectReason('') }}
                                className="flex-1 py-2 border rounded-lg">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AdminDashboard
