import React, { useState, useMemo } from 'react'
import { assets } from '../assets/assets'
import { useNavigate, useSearchParams } from 'react-router-dom'
import StarRating from '../components/StarRating'
import toast from 'react-hot-toast'
import { useAppContext } from '../context/AppContext'
import { ALL_CATEGORIES } from '../constants/hospitalityOptions'
import { resolveImageUrl } from '../utils/resolveImage'

const CheckBox = ({ label, selected = false, onChange = () => { } }) => {
    return (
        <label className='group flex items-center gap-3 cursor-pointer mt-3 text-sm'>
            <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all duration-300 ${selected ? 'bg-blue-500 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.3)]' : 'border-gray-300 group-hover:border-blue-400'}`}>
                {selected && <svg className="w-3.5 h-3.5 text-white animate-[ping_0.2s_cubic-bezier(0,0,0.2,1)_reverse]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>}
            </div>
            <input type="checkbox" className="hidden" checked={selected} onChange={(e) => onChange(e.target.checked, label)} />
            <span className={`font-medium transition-colors duration-300 ${selected ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-800'}`}>{label}</span>
        </label>
    )
}

const RadioButton = ({ label, selected = false, onChange = () => { } }) => {
    return (
        <label className='group flex items-center gap-3 cursor-pointer mt-3 text-sm'>
            <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-300 ${selected ? 'border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.3)]' : 'border-gray-300 group-hover:border-blue-400'}`}>
                <div className={`w-2.5 h-2.5 rounded-full bg-blue-500 transition-transform duration-300 ${selected ? 'scale-100' : 'scale-0'}`}></div>
            </div>
            <input type="radio" className="hidden" name='sortOption' checked={selected} onChange={() => onChange(label)} />
            <span className={`font-medium transition-colors duration-300 ${selected ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-800'}`}>{label}</span>
        </label>
    )
}

const Hospitality = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const { hospitalities, currency, user, navigate, axios } = useAppContext()

    const handleOrder = async (item) => {
        if (!user || user.role !== 'user') {
            navigate('/login', {
                state: {
                    from: '/hospitality',
                    message: 'Please sign in as a customer to place an order',
                },
            })
            return
        }
        try {
            const { data } = await axios.post('/api/hospitalities/order', {
                hospitalityId: item._id,
                quantity: 1,
            })
            if (data.success) {
                toast.success(data.message)
                navigate('/my-bookings')
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message)
        }
    }

    const [openFilters, setOpenFilters] = useState(false)
    const [selectedFilters, setSelectedFilters] = useState({
        categoryType: [],
        priceRange: [],
    })

    const [selectedSort, setSelectedSort] = useState('')

    const categoryTypes = useMemo(() => {
        const fromData = [...new Set(hospitalities.map((h) => h.category).filter(Boolean))]
        const cats = fromData.length ? fromData : ALL_CATEGORIES
        return [...cats].sort()
    }, [hospitalities])

    const priceRange = [
        "100 to 300",
        "300 to 500",
        "500 to 1000",
    ]

    const sortOption = [
        "Price Low to High",
        "Price High to Low",
        "Newest First",
    ]

    // Handle filter updates
    const handleFilterChange = (checked, value, type) => {
        setSelectedFilters((prev) => {
            const updated = { ...prev }
            if (checked) {
                updated[type].push(value)
            } else {
                updated[type] = updated[type].filter((item) => item !== value)
            }
            return updated
        })
    }

    const handleSortChange = (option) => {
        setSelectedSort(option)
    }

    // Category type filter
    const matchesCategoryType = (dining) => {
        return (
            selectedFilters.categoryType.length === 0 ||
            selectedFilters.categoryType.includes(dining.category)
        )
    }

    // Price range filter
    const matchesPriceRange = (dining) => {
        return (
            selectedFilters.priceRange.length === 0 ||
            selectedFilters.priceRange.some((range) => {
                const [min, max] = range.split(' to ').map(Number)
                return dining.price >= min && dining.price <= max
            })
        )
    }

    // Sorting
    const sortDining = (a, b) => {
        if (selectedSort === 'Price Low to High') {
            return a.price - b.price
        }
        if (selectedSort === 'Price High to Low') {
            return b.price - a.price
        }
        if (selectedSort === 'Newest First') {
            return new Date(b.createdAt) - new Date(a.createdAt)
        }
        return 0
    }

    // Destination filter (search)
    const filterDestination = (dining) => {
        const destination = searchParams.get('destination')
        if (!destination) return true
        const city = dining.hotel?.city || ''
        return city.toLowerCase().includes(destination.toLowerCase())
    }

    const filteredDining = useMemo(() => {
        return hospitalities
            .filter(
                (dining) =>
                    matchesCategoryType(dining) &&
                    matchesPriceRange(dining) &&
                    filterDestination(dining)
            )
            .sort(sortDining)
    }, [hospitalities, selectedFilters, selectedSort, searchParams])

    // Clear all filters
    const clearFilters = () => {
        setSelectedFilters({
            categoryType: [],
            priceRange: [],
        })
        setSelectedSort('')
        setSearchParams({})
    }

    return (
        <div className='flex flex-col-reverse lg:flex-row items-start justify-between gap-10 pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32 pb-24 bg-slate-50/50 min-h-screen'>

            {/* ----- Dining List ----- */}
            <div className="flex-1 w-full">
                
                {/* Header with Glass Reveal */}
                <div className='flex flex-col items-start text-left mb-10'>
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 px-4 py-1.5 rounded-full text-xs font-medium text-blue-600 mb-4 shadow-sm cursor-default">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                        Culinary Excellence
                    </div>
                    <h1 className='font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4 cursor-default'>
                        Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500 hover:from-[#FF4D00] hover:to-[#FF8C00] hover:drop-shadow-[0_0_12px_rgba(255,77,0,0.4)]">Hospitality</span>
                    </h1>
                    
                    <div className="relative group/desc cursor-default max-w-2xl">
                        <div className="absolute inset-0 -m-4 rounded-2xl bg-gradient-to-r from-blue-50/0 via-indigo-50/0 to-blue-50/0 scale-95 opacity-0 group-hover/desc:opacity-100 group-hover/desc:scale-100 group-hover/desc:from-blue-50/80 group-hover/desc:via-indigo-50/60 group-hover/desc:to-blue-50/80 transition-all duration-500 border border-transparent group-hover/desc:border-indigo-100 backdrop-blur-sm shadow-xl shadow-indigo-500/0 group-hover/desc:shadow-indigo-500/5"></div>
                        <p className='relative z-10 text-gray-500 text-base md:text-lg leading-relaxed transition-all duration-500 group-hover/desc:text-gray-900 group-hover/desc:font-medium'>
                            Discover dining, spa, massage, tours, and hotel services from our partner properties.
                        </p>
                        <div className="absolute -bottom-2 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full group-hover/desc:w-1/2 transition-all duration-700"></div>
                    </div>
                </div>

                {/* Cards List */}
                <div className="flex flex-col gap-8">
                    {filteredDining.length === 0 && (
                        <p className="text-center text-gray-500 py-16">No hospitality listings yet. Check back soon!</p>
                    )}
                    {filteredDining.map((dining) => (
                        <div key={dining._id} className='group/card flex flex-col md:flex-row bg-white rounded-3xl p-4 gap-6 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500'>
                            {/* Image container */}
                            <div className="relative md:w-2/5 overflow-hidden rounded-2xl cursor-pointer bg-gray-100 flex-shrink-0">
                                <img 
                                    src={resolveImageUrl(dining.image) || assets.regImage} 
                                    alt="restaurant" 
                                    onError={(e) => { e.target.onerror = null; e.target.src = assets.regImage; }}
                                    className="w-full h-64 md:h-full object-cover group-hover/card:scale-110 transition-transform duration-700 ease-out" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                            </div>
                            
                            {/* Content */}
                            <div className='md:w-3/5 flex flex-col justify-between py-2 pr-4'>
                                <div>
                                    <div className="flex justify-between items-start mb-2">
                                        <p className='text-blue-500 font-medium text-sm tracking-wide'>{dining.hotel?.name || dining.category}</p>
                                        <div className='flex items-center gap-1 bg-orange-50 px-3 py-1 rounded-full border border-orange-100/50'>
                                            <StarRating />
                                            <span className="text-xs text-gray-600 font-bold ml-1">4.8</span>
                                        </div>
                                    </div>
                                    
                                    <h3 className='text-2xl md:text-3xl font-playfair font-bold text-gray-900 group-hover/card:text-blue-600 cursor-pointer transition-colors duration-300 mb-2'>
                                        {dining.title}
                                    </h3>
                                    {dining.description && (
                                        <p className='text-gray-500 text-sm mb-2 line-clamp-2'>{dining.description}</p>
                                    )}
                                    <div className='flex items-center gap-2 text-gray-500 text-sm'>
                                        <img src={assets.locationIcon} alt="location" className="w-4 h-4 opacity-70" />
                                        <span>{dining.hotel?.address}, {dining.hotel?.city}</span>
                                    </div>
                                    
                                    {/* features */}
                                    <div className='flex flex-wrap items-center mt-5 gap-3'>
                                        {(dining.features || []).map((item, index) => (
                                            <div key={index} className='flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-100 text-gray-600 group-hover/card:bg-blue-50 group-hover/card:border-blue-100 group-hover/card:text-blue-600 transition-colors duration-500'>
                                                <span className='text-[11px] font-medium'>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Bottom bar */}
                                <div className="flex items-center justify-between mt-6 pt-5 border-t border-gray-100">
                                    <div>
                                        <p className="text-xs text-gray-400 font-medium mb-0.5">Price</p>
                                        <p className='text-2xl font-bold text-gray-900'>
                                            {currency}{dining.price}
                                        </p>
                                    </div>
                                    
                                    <button onClick={() => handleOrder(dining)} className="relative group/btn overflow-hidden bg-gray-900 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-colors duration-500 shadow-sm hover:shadow-[0_8px_20px_rgba(37,99,235,0.3)]">
                                        <span className="relative z-10 flex items-center gap-2">
                                            Order Now
                                            <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </span>
                                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ----- Filter Sidebar ----- */}
            <div className='w-full lg:w-[320px] flex-shrink-0 lg:sticky top-32 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] z-10'>

                <div className='bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-5 border-b border-blue-100/50 flex items-center justify-between'>
                    <div className="flex items-center gap-3">
                        <div className="p-1.5 bg-blue-500 rounded-lg text-white shadow-sm">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                        </div>
                        <p className='text-lg font-playfair font-bold text-gray-900'>Refine Dining</p>
                    </div>
                    <div className='text-xs font-medium cursor-pointer'>
                        <span onClick={() => setOpenFilters(!openFilters)} className='lg:hidden text-blue-600 bg-white px-3 py-1.5 rounded-full shadow-sm hover:bg-blue-50 transition-colors'>
                            {openFilters ? 'Hide' : 'Show'}
                        </span>
                        <span onClick={clearFilters} className='hidden lg:flex items-center gap-1 text-gray-500 hover:text-red-500 transition-colors bg-gray-50 hover:bg-red-50 px-3 py-1.5 rounded-full'>
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            Clear
                        </span>
                    </div>
                </div>

                {/* Filter Options */}
                <div className={`${openFilters ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0 lg:max-h-[1500px] lg:opacity-100'} overflow-hidden transition-all duration-700 ease-in-out`}>

                    {/* Category Types */}
                    <div className='px-6 py-6 border-b border-gray-100'>
                        <p className='font-bold text-gray-900 mb-4 tracking-wide text-xs uppercase'>Category</p>
                        <div className="flex flex-col gap-1">
                            {categoryTypes.map((category, index) => (
                                <CheckBox
                                    key={index}
                                    label={category}
                                    selected={selectedFilters.categoryType.includes(category)}
                                    onChange={(checked) => handleFilterChange(checked, category, 'categoryType')}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Price Range */}
                    <div className='px-6 py-6 border-b border-gray-100'>
                        <p className='font-bold text-gray-900 mb-4 tracking-wide text-xs uppercase'>Price (ETB)</p>
                        <div className="flex flex-col gap-1">
                            {priceRange.map((range, index) => (
                                <CheckBox
                                    key={index}
                                    label={`${range} ETB`}
                                    selected={selectedFilters.priceRange.includes(range)}
                                    onChange={(checked) => handleFilterChange(checked, range, 'priceRange')}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Sorting */}
                    <div className='px-6 py-6'>
                        <p className='font-bold text-gray-900 mb-4 tracking-wide text-xs uppercase'>Sort Results By</p>
                        <div className="flex flex-col gap-1">
                            {sortOption.map((option, index) => (
                                <RadioButton
                                    key={index}
                                    label={option}
                                    selected={selectedSort === option}
                                    onChange={() => handleSortChange(option)}
                                />
                            ))}
                        </div>
                    </div>
                    
                    {/* Mobile clear button */}
                    <div className="px-6 pb-6 lg:hidden">
                        <button onClick={clearFilters} className="w-full py-3 bg-red-50 text-red-600 rounded-xl font-medium hover:bg-red-100 transition-colors flex items-center justify-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                            Clear All Filters
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hospitality
