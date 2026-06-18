import React from 'react';
import { useNavigate } from 'react-router-dom';
import { branches } from '../assets/assets';

const BranchCard = ({ branch, onSelect, className = '' }) => (
    <div
        onClick={() => onSelect(branch.slug)}
        className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-2 bg-white ${className}`}
    >
        <div className='relative h-[220px] sm:h-[300px] md:h-[400px] overflow-hidden'>
            <img
                src={branch.heroImage}
                alt={branch.name}
                className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500'></div>

            <div className='absolute inset-x-0 bottom-0 p-4 md:p-6 flex flex-col items-center text-center transform transition-transform duration-500'>
                <h3 className='font-playfair text-2xl md:text-3xl font-bold text-white mb-2 tracking-wide drop-shadow-md group-hover:text-blue-300 transition-colors duration-300'>
                    {branch.name}
                </h3>
                <p className='text-blue-100 text-xs md:text-sm font-medium mb-3 md:mb-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transform md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-500 line-clamp-2'>
                    {branch.tagline}
                </p>

                <button className='bg-white/20 hover:bg-white backdrop-blur-sm text-white hover:text-blue-600 border border-white/50 px-5 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-300 flex items-center gap-2 group/btn'>
                    Explore
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
            </div>
        </div>
    </div>
);

const BranchSelector = () => {
    const navigate = useNavigate();

    const goToBranch = (branchSlug) => {
        navigate(`/branch/${branchSlug}`);
        window.scrollTo(0, 0);
    };

    return (
        <div className='relative flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 py-24 bg-white'>
            <div className="flex flex-col items-center text-center mb-10 md:mb-16 relative z-10">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 px-5 py-2 rounded-full text-sm font-medium text-blue-600 mb-6 shadow-sm cursor-default">
                    <span className="w-2 h-2 rounded-full bg-[#49B9FF] animate-pulse"></span>
                    ✦ Our Locations ✦
                </div>

                <h2 className='font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-5 cursor-default'>
                    <span className="inline-block transition-all duration-500 hover:-translate-y-1 hover:text-gray-700">Explore</span>
                    {' '}
                    <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#49B9FF] to-blue-700">
                        Our Branches
                    </span>
                </h2>

                <p className='text-gray-600 text-base md:text-lg font-medium leading-relaxed max-w-2xl px-4'>
                    Discover the unique charm of our Bekele Mola Hotels across Ethiopia. Whether you seek urban elegance or a tranquil lakeside retreat, we have the perfect destination for you.
                </p>
            </div>

            {/* Mobile: stacked vertically · Desktop: grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full max-w-[1200px]'>
                {branches.map((branch) => (
                    <BranchCard
                        key={branch.slug}
                        branch={branch}
                        onSelect={goToBranch}
                        className="w-full"
                    />
                ))}
            </div>
        </div>
    );
};

export default BranchSelector;
