import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { assets, branches } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const BookIcon = () => (
    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
    </svg>
)

const getNavbarTheme = (pathname, isScrolled) => {
    // Default theme for standard pages (Rooms, About, Hospitality, etc.) when scrolled or always
    const defaultScrolled = {
        bg: "bg-[#F6F9FC]/95 text-gray-900 backdrop-blur-xl py-4 md:py-5 shadow-[0_40px_100px_rgba(0,0,0,0.25)] border border-gray-200",
        text: "text-gray-900",
        linkText: "text-gray-900 font-medium hover:text-blue-600 hover:bg-gray-100",
        logoInvert: true,
        activeLink: "text-blue-700 font-extrabold",
        activeIndicator: "bg-[#49B9FF]"
    };

    const defaultTop = {
        bg: "bg-black/20 backdrop-blur-md border border-transparent shadow-[0_40px_100px_rgba(0,0,0,0.2)] py-5 md:py-6",
        text: "text-white",
        linkText: "text-white font-medium hover:bg-white/20",
        logoInvert: false,
        activeLink: "text-white font-extrabold",
        activeIndicator: "bg-white"
    };

    if (pathname === '/') {
        return isScrolled ? defaultScrolled : defaultTop;
    }

    // Dynamic coloring based on footer page design tokens
    const themes = {
        '/careers': {
            top: {
                bg: "bg-transparent border-transparent py-5 md:py-6",
                text: "text-white",
                linkText: "text-slate-300 hover:text-white hover:bg-white/10",
                logoInvert: false,
                activeLink: "text-[#49B9FF] font-bold",
                activeIndicator: "bg-[#49B9FF]"
            },
            scrolled: {
                bg: "bg-[#0a1628]/95 backdrop-blur-xl border-slate-800 shadow-[0_40px_100px_rgba(0,0,0,0.35)] py-4 md:py-5",
                text: "text-white",
                linkText: "text-slate-300 hover:text-white hover:bg-white/5",
                logoInvert: false,
                activeLink: "text-[#49B9FF] font-bold",
                activeIndicator: "bg-[#49B9FF]"
            }
        },
        '/press': {
            top: {
                bg: "bg-transparent border-transparent py-7 md:py-8",
                text: "text-gray-900",
                linkText: "text-gray-600 hover:text-gray-900 hover:bg-gray-100",
                logoInvert: true,
                activeLink: "text-black font-bold",
                activeIndicator: "bg-black"
            },
            scrolled: {
                bg: "bg-[#faf8f5]/95 backdrop-blur-xl border-gray-300 shadow-[0_40px_100px_rgba(0,0,0,0.15)] py-4 md:py-5",
                text: "text-gray-900",
                linkText: "text-gray-600 hover:text-gray-900 hover:bg-gray-200",
                logoInvert: true,
                activeLink: "text-black font-bold",
                activeIndicator: "bg-black"
            }
        },
        '/blog': {
            top: {
                bg: "bg-transparent border-transparent py-7 md:py-8",
                text: "text-white",
                linkText: "text-neutral-300 hover:text-white hover:bg-white/10",
                logoInvert: false,
                activeLink: "text-rose-400 font-bold",
                activeIndicator: "bg-rose-400"
            },
            scrolled: {
                bg: "bg-neutral-950/95 backdrop-blur-xl border-neutral-800 shadow-[0_40px_100px_rgba(0,0,0,0.45)] py-4 md:py-5",
                text: "text-white",
                linkText: "text-neutral-300 hover:text-white hover:bg-white/5",
                logoInvert: false,
                activeLink: "text-rose-400 font-bold",
                activeIndicator: "bg-rose-400"
            }
        },
        '/partners': {
            top: {
                bg: "bg-transparent border-transparent py-7 md:py-8",
                text: "text-white",
                linkText: "text-indigo-200 hover:text-white hover:bg-white/10",
                logoInvert: false,
                activeLink: "text-amber-400 font-bold",
                activeIndicator: "bg-amber-400"
            },
            scrolled: {
                bg: "bg-indigo-950/95 backdrop-blur-xl border-indigo-800 shadow-[0_40px_100px_rgba(0,0,0,0.45)] py-4 md:py-5",
                text: "text-white",
                linkText: "text-indigo-200 hover:text-white hover:bg-white/5",
                logoInvert: false,
                activeLink: "text-amber-400 font-bold",
                activeIndicator: "bg-amber-400"
            }
        },
        '/help': {
            top: {
                bg: "bg-transparent border-transparent py-7 md:py-8",
                text: "text-white",
                linkText: "text-white/80 hover:text-white hover:bg-white/10",
                logoInvert: false,
                activeLink: "text-white font-bold",
                activeIndicator: "bg-white"
            },
            scrolled: {
                bg: "bg-[#49B9FF]/95 backdrop-blur-xl border-sky-400 shadow-[0_40px_100px_rgba(0,0,0,0.25)] py-4 md:py-5",
                text: "text-white",
                linkText: "text-white/95 hover:text-white hover:bg-white/5",
                logoInvert: false,
                activeLink: "text-white font-bold",
                activeIndicator: "bg-white"
            }
        },
        '/safety': {
            top: {
                bg: "bg-transparent border-transparent py-7 md:py-8",
                text: "text-white",
                linkText: "text-emerald-200 hover:text-white hover:bg-white/10",
                logoInvert: false,
                activeLink: "text-emerald-300 font-bold",
                activeIndicator: "bg-emerald-300"
            },
            scrolled: {
                bg: "bg-emerald-950/95 backdrop-blur-xl border-emerald-800 shadow-[0_40px_100px_rgba(0,0,0,0.45)] py-4 md:py-5",
                text: "text-white",
                linkText: "text-emerald-200 hover:text-white hover:bg-white/5",
                logoInvert: false,
                activeLink: "text-emerald-300 font-bold",
                activeIndicator: "bg-emerald-300"
            }
        },
        '/cancel-policy': {
            top: {
                bg: "bg-transparent border-transparent py-7 md:py-8",
                text: "text-gray-800",
                linkText: "text-amber-800/80 hover:text-amber-950 hover:bg-amber-100/50",
                logoInvert: true,
                activeLink: "text-amber-900 font-bold",
                activeIndicator: "bg-amber-900"
            },
            scrolled: {
                bg: "bg-[#fdf8e6]/95 backdrop-blur-xl border-amber-200 shadow-[0_40px_100px_rgba(0,0,0,0.15)] py-4 md:py-5",
                text: "text-gray-900",
                linkText: "text-amber-800 hover:text-amber-950 hover:bg-amber-100",
                logoInvert: true,
                activeLink: "text-amber-900 font-bold",
                activeIndicator: "bg-amber-900"
            }
        },
        '/support': {
            top: {
                bg: "bg-transparent border-transparent py-7 md:py-8",
                text: "text-white",
                linkText: "text-slate-300 hover:text-white hover:bg-white/10",
                logoInvert: false,
                activeLink: "text-cyan-400 font-bold",
                activeIndicator: "bg-cyan-400"
            },
            scrolled: {
                bg: "bg-slate-900/95 backdrop-blur-xl border-slate-800 shadow-[0_40px_100px_rgba(0,0,0,0.35)] py-4 md:py-5",
                text: "text-white",
                linkText: "text-slate-300 hover:text-white hover:bg-white/5",
                logoInvert: false,
                activeLink: "text-cyan-400 font-bold",
                activeIndicator: "bg-cyan-400"
            }
        },
        '/access': {
            top: {
                bg: "bg-transparent border-transparent py-5 md:py-6",
                text: "text-white",
                linkText: "text-indigo-100 hover:text-white hover:bg-white/10",
                logoInvert: false,
                activeLink: "text-indigo-200 font-bold",
                activeIndicator: "bg-indigo-200"
            },
            scrolled: {
                bg: "bg-indigo-600/95 backdrop-blur-xl border-indigo-500 shadow-[0_40px_100px_rgba(0,0,0,0.25)] py-4 md:py-5",
                text: "text-white",
                linkText: "text-indigo-100 hover:text-white hover:bg-white/5",
                logoInvert: false,
                activeLink: "text-indigo-200 font-bold",
                activeIndicator: "bg-indigo-200"
            }
        }
    };

    return themes[pathname] ? (isScrolled ? themes[pathname].scrolled : themes[pathname].top) : defaultScrolled;
}

const Navbar = () => {
    const navLinks = [
        { name: 'Branches', path: '/branches' },
        { name: 'Rooms', path: '/rooms' },
        { name: 'Hospitality', path: '/hospitality' },
        { name: 'Experience', path: '/experience' },
        { name: 'About', path: '/about' },
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const location = useLocation();
    const { user, navigate, logout } = useAppContext()

    useEffect(() => {
        // Smooth scroll to top on route change
        window.scrollTo({ top: 0, behavior: "smooth" });

        // Update scrolled state initially
        setIsScrolled(window.scrollY > 10);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    const theme = getNavbarTheme(location.pathname, isScrolled);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-16 lg:px-24 xl:px-32 pt-5 md:pt-6">
            <div className={`flex items-center justify-between w-full transition-all duration-500 rounded-[3.5rem] px-5 md:px-8 lg:px-10 ${theme.bg}`}>

                <Link to='/' className="group flex items-center gap-2">
                    <span className={`font-playfair text-xl md:text-2xl font-bold tracking-tight transition-all duration-500 group-hover:scale-105 ${theme.logoInvert ? "text-gray-900" : "text-white"}`}>
                        Bekele Mola Hotels
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-1 lg:gap-2">
                    {navLinks.map((link, i) => {
                        const isActive = location.pathname === link.path || (link.name === 'Branches' && location.pathname.startsWith('/branch/'));
                        
                        if (link.name === 'Branches') {
                            return (
                                <div key={i} className="relative group/navdropdown h-full flex items-center">
                                    <Link
                                        to={link.path}
                                        className={`relative px-5 py-2.5 text-base font-medium rounded-xl transition-all duration-300 flex items-center gap-1
                                            ${theme.linkText}
                                            ${isActive ? theme.activeLink : ""}`}
                                    >
                                        {link.name}
                                        <svg className={`w-4 h-4 transition-transform duration-300 group-hover/navdropdown:rotate-180 ${isActive ? theme.activeLink : theme.linkText}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                        <span className={`absolute bottom-1.5 left-5 right-5 h-[2px] rounded-full scale-x-0 group-hover/navdropdown:scale-x-100 transition-transform duration-300 origin-left
                                            ${isActive ? "scale-x-100" : ""}
                                            ${theme.activeIndicator}`}
                                        />
                                    </Link>
                                    
                                    {/* Dropdown Menu */}
                                    <div className="absolute left-0 top-[100%] pt-2 opacity-0 invisible group-hover/navdropdown:opacity-100 group-hover/navdropdown:visible transition-all duration-300 w-56 z-50">
                                        <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-3 flex flex-col overflow-hidden">
                                            {branches.map((branch) => (
                                                <Link 
                                                    key={branch.slug} 
                                                    to={`/branch/${branch.slug}`}
                                                    className="px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center gap-3"
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                                    {branch.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <Link
                                key={i}
                                to={link.path}
                                className={`relative px-5 py-2.5 text-base font-medium rounded-xl transition-all duration-300 group
                                    ${theme.linkText}
                                    ${isActive ? theme.activeLink : ""}`}
                            >
                                {link.name}
                                <span className={`absolute bottom-1.5 left-5 right-5 h-[2px] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left
                                    ${isActive ? "scale-x-100" : ""}
                                    ${theme.activeIndicator}`}
                                />
                            </Link>
                        );
                    })}
                </div>

                <div className="hidden md:flex items-center gap-3">
                    <span className={`p-2.5 rounded-xl ${theme.logoInvert ? "invert" : ""}`}>
                        <img src={assets.searchIcon} alt="search" className="h-6 w-6" />
                    </span>

                    {user ? (
                        <div className="relative">
                            <button
                                onClick={() => setProfileOpen(!profileOpen)}
                                className={`flex items-center gap-2 rounded-full ring-2 ring-offset-2 transition-all duration-300 hover:ring-[#49B9FF]
                                    ${theme.logoInvert ? "ring-gray-200 ring-offset-white" : "ring-white/30 ring-offset-transparent"}`}
                            >
                                <img src={user.image} alt="" className="w-10 h-10 rounded-full object-cover" />
                            </button>
                            {profileOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                                    <p className="px-4 py-2 text-sm font-semibold text-gray-800 truncate">{user.username}</p>
                                    <button
                                        onClick={() => { navigate('/my-bookings'); setProfileOpen(false); }}
                                        className="w-full px-4 py-2 text-left text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-2"
                                    >
                                        <BookIcon /> My Bookings
                                    </button>
                                    <button
                                        onClick={() => { logout(); setProfileOpen(false); }}
                                        className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <Link to="/login" className={`px-6 py-2.5 text-base font-semibold rounded-xl transition-all ${theme.logoInvert ? "text-gray-700 hover:text-blue-600" : "text-white hover:bg-white/10"}`}>Login</Link>
                            <Link to="/signup" className={`px-8 py-2 rounded-xl text-base font-semibold whitespace-nowrap transition-all hover:scale-105 ${theme.logoInvert ? "bg-gradient-to-r from-[#49B9FF] to-blue-600 text-white shadow-lg" : "bg-white text-gray-900 shadow-lg"}`}>Sign Up</Link>
                        </div>
                    )}
                </div>

                <div className="flex items-center gap-3 md:hidden">
                    {user ? (
                        <img src={user.image} alt="" className="w-9 h-9 rounded-full" />
                    ) : null}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`p-2 rounded-xl transition-all duration-300 ${theme.logoInvert ? "hover:bg-gray-100" : "hover:bg-white/10"}`}
                    >
                        <img src={assets.menuIcon} alt="menu" className={`${theme.logoInvert ? "invert" : ""} h-4 w-4`} />
                    </button>
                </div>
            </div>

            <div className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col md:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                    <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center">
                        <span className="font-playfair text-xl font-bold text-gray-900">Bekele Mola Hotels</span>
                    </Link>
                    <button onClick={() => setIsMenuOpen(false)} className="p-2 rounded-xl hover:bg-gray-100">
                        <img src={assets.closeIcon} alt="close" className="h-5 w-5" />
                    </button>
                </div>
                <div className="flex flex-col px-6 pt-6 gap-1 flex-1">
                    {navLinks.map((link, i) => (
                        <Link
                            key={i}
                            to={link.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-gray-700 font-medium hover:bg-blue-50 hover:text-[#49B9FF]"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
                <div className="px-6 pb-10 flex flex-col gap-3">
                    {user ? (
                        <>
                            <button onClick={() => { navigate('/my-bookings'); setIsMenuOpen(false); }} className="w-full py-3 rounded-xl border-2 border-[#49B9FF] text-[#49B9FF] font-semibold">
                                My Bookings
                            </button>
                            <button onClick={() => { logout(); setIsMenuOpen(false); }} className="w-full py-3 rounded-xl bg-gray-100 text-gray-700 font-semibold">
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" onClick={() => setIsMenuOpen(false)} className="w-full py-3 text-center rounded-xl border-2 border-[#49B9FF] text-[#49B9FF] font-semibold">
                                Login
                            </Link>
                            <Link to="/signup" onClick={() => setIsMenuOpen(false)} className="w-full py-3 text-center rounded-xl bg-gradient-to-r from-[#49B9FF] to-blue-600 text-white font-semibold">
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
