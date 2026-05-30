import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import HotelCard from '../components/HotelCard';
import HospitalityCard from '../components/HospitalityCard';
import { branches, facilityIcons } from '../assets/assets';

const BranchPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { axios } = useAppContext();
    
    const [branchData, setBranchData] = useState(null);
    const [rooms, setRooms] = useState([]);
    const [hospitalities, setHospitalities] = useState([]);
    const [loading, setLoading] = useState(true);

    const localBranchInfo = branches.find(b => b.slug === slug);

    useEffect(() => {
        if (!localBranchInfo) {
            navigate('/');
            return;
        }

        const fetchBranchData = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get(`/api/branches/${localBranchInfo.name}`);
                if (data.success) {
                    setBranchData(data.branch);
                    setRooms(data.rooms);
                    setHospitalities(data.hospitalities);
                }
            } catch (error) {
                console.error("Failed to fetch branch data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBranchData();
        window.scrollTo(0, 0);
    }, [slug, localBranchInfo, axios, navigate]);

    if (!localBranchInfo || loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* Hero Section */}
            <div className='relative h-[60vh] md:h-[70vh] flex flex-col items-center justify-center text-center px-6'>
                {/* Background Image */}
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('${localBranchInfo.heroImage}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                
                <div className="relative z-10 animate-fade-in-up mt-16 max-w-4xl">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 px-5 py-2 rounded-full text-sm font-medium text-white mb-6 shadow-sm">
                        Bekele Mola Hotels
                    </div>
                    <h1 className='font-playfair text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-xl'>
                        {localBranchInfo.name} Branch
                    </h1>
                    <p className='text-xl md:text-2xl text-blue-100 font-light drop-shadow-md mb-8'>
                        {localBranchInfo.tagline}
                    </p>
                    <p className='text-white/80 max-w-2xl mx-auto'>
                        {localBranchInfo.description}
                    </p>
                </div>
            </div>

            {/* Content Sections */}
            <div className="max-w-[1200px] mx-auto px-6 md:px-12 -mt-16 relative z-20">
                
                {/* Info Card */}
                {branchData && (
                    <div className="bg-white rounded-3xl shadow-xl p-8 mb-16 flex flex-col md:flex-row gap-8 items-center justify-between border border-gray-100">
                        <div>
                            <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-2">Location & Contact</h3>
                            <p className="text-gray-600 flex items-center gap-2 mb-2">
                                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                {branchData.address}, {branchData.city}
                            </p>
                            <p className="text-gray-600 flex items-center gap-2">
                                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                {branchData.contact}
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <button onClick={() => {
                                const section = document.getElementById('rooms');
                                section?.scrollIntoView({ behavior: 'smooth' });
                            }} className="bg-blue-50 text-blue-600 hover:bg-blue-100 px-6 py-3 rounded-xl font-bold transition-colors">
                                View Rooms
                            </button>
                            <button onClick={() => {
                                const section = document.getElementById('hospitality');
                                section?.scrollIntoView({ behavior: 'smooth' });
                            }} className="bg-indigo-50 text-indigo-600 hover:bg-indigo-100 px-6 py-3 rounded-xl font-bold transition-colors">
                                View Hospitality
                            </button>
                        </div>
                    </div>
                )}

                {/* Rooms Section */}
                <div id="rooms" className="mb-20 pt-10">
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="font-playfair text-4xl font-bold text-gray-900">Available Rooms</h2>
                        <div className="h-px bg-gray-200 flex-1"></div>
                    </div>
                    
                    {rooms.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {rooms.map((room, index) => (
                                <HotelCard key={room._id} room={{...room, hotel: branchData}} index={index} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500 italic">No rooms currently available at this branch.</p>
                    )}
                </div>

                {/* Hospitality Section */}
                <div id="hospitality" className="mb-10 pt-10">
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="font-playfair text-4xl font-bold text-gray-900">Dining & Services</h2>
                        <div className="h-px bg-gray-200 flex-1"></div>
                    </div>
                    
                    {hospitalities.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {hospitalities.map((item) => (
                                <HospitalityCard key={item._id} item={{...item, hotel: branchData}} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500 italic">No hospitality services currently listed for this branch.</p>
                    )}
                </div>

            </div>
        </div>
    );
};

export default BranchPage;
