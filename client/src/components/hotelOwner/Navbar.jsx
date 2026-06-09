import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../context/AppContext'

const Navbar = () => {
    const { user, logout } = useAppContext()
    const [open, setOpen] = useState(false)

    return (
        <div className='flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white'>
            <Link to='/owner'>
                <img src={assets.logo} alt="Bekele Mola Hotels" className="h-9 w-auto max-w-[180px] object-contain" />
            </Link>

            <div className="flex items-center gap-4">
                <span className="hidden sm:block text-sm font-medium text-gray-600">
                    Owner: <span className="text-gray-900">{user?.username}</span>
                </span>
                <div className="relative">
                    <button onClick={() => setOpen(!open)} className="flex items-center gap-2">
                        <img src={user?.image} alt="" className="w-9 h-9 rounded-full border border-gray-200" />
                    </button>
                    {open && (
                        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border py-1 z-50">
                            <button
                                onClick={() => { logout(); setOpen(false); }}
                                className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar
