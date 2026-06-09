import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const companyLinks = [
    { name: 'About', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Press', path: '/press' },
    { name: 'Blog', path: '/blog' },
    { name: 'Partners', path: '/partners' },
]

const resourceLinks = [
    { name: 'Help', path: '/help' },
    { name: 'Safety', path: '/safety' },
    { name: 'Cancel', path: '/cancel-policy' },
    { name: 'Support', path: '/support' },
    { name: 'Access', path: '/access' },
]

const Footer = () => {
    const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-32 pb-14 pt-8 bg-white">
            <footer className="bg-[#F6F9FC] rounded-[3.5rem] p-10 md:p-14 w-full text-gray-500 shadow-[0_40px_100px_rgba(0,0,0,0.25)] border border-gray-200">
                <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">

                    <div className="md:max-w-96 ">
                        <Link to="/" onClick={scrollTop} className="inline-block mb-4">
                            <img
                                src={assets.logo}
                                alt="Bekele Mola Hotels"
                                className="h-14 md:h-[4.5rem] w-auto min-w-[200px] max-w-[320px] object-contain object-left drop-shadow-sm"
                            />
                        </Link>
                        <p className="mt-6 text-sm">
                            Book your perfect stay with us. We offer seamless hotel reservations, trusted listings, and the best prices to make your travel experience smooth, comfortable, and memorable.
                        </p>
                        <div className="flex items-center gap-3 mt-4">
                            <img src={assets.instagramIcon} alt="instagram-icon" className='w-6' />
                            <img src={assets.facebookIcon} alt="facebook-icon" className='w-6' />
                            <img src={assets.twitterIcon} alt="twitter-icon" className='w-6' />
                            <img src={assets.linkendinIcon} alt="linkendin-icon" className='w-6' />
                        </div>
                    </div>

                    <div className="flex-1 flex flex-wrap items-start md:justify-end gap-12 md:gap-20">

                        <div>
                            <h2 className="font-playfair text-xl text-gray-800">COMPANY</h2>
                            <ul className="mt-3 flex flex-col gap-2 text-sm">
                                {companyLinks.map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            to={link.path}
                                            onClick={scrollTop}
                                            className="hover:text-[#49B9FF] transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="font-playfair text-xl text-gray-800">BRANCHES</h2>
                            <ul className="mt-3 flex flex-col gap-2 text-sm">
                                <li><Link to="/branch/adama" onClick={scrollTop} className="hover:text-[#49B9FF] transition-colors">Adama</Link></li>
                                <li><Link to="/branch/arbaminch" onClick={scrollTop} className="hover:text-[#49B9FF] transition-colors">Arbaminch</Link></li>
                                <li><Link to="/branch/addis-abeba" onClick={scrollTop} className="hover:text-[#49B9FF] transition-colors">Addis Abeba</Link></li>
                                <li><Link to="/branch/meki" onClick={scrollTop} className="hover:text-[#49B9FF] transition-colors">Meki</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="font-playfair text-xl text-gray-800">RESOURCES</h2>
                            <ul className="mt-3 flex flex-col gap-2 text-sm">
                                {resourceLinks.map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            to={link.path}
                                            onClick={scrollTop}
                                            className="hover:text-[#49B9FF] transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="font-playfair text-xl text-gray-800">STAY UPDATED</h2>
                            <div className="text-sm space-y-2 mt-3">
                                <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
                                <p className="text-xs text-gray-400 pt-2">
                                    Subscribe via our{' '}
                                    <Link to="/blog" onClick={scrollTop} className="text-[#49B9FF] hover:underline">
                                        Journal
                                    </Link>{' '}
                                    page for editorial updates.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                    <p className="pt-4 text-center text-xs md:text-sm pb-5">
                        Copyright ©{new Date().getFullYear()} - Bekele Mola Hotels. All rights reserved.
                    </p>
                    <ul className="flex items-center gap-4 text-sm">
                        <li><Link to="/help" onClick={scrollTop} className="hover:text-[#49B9FF]">Privacy</Link></li>
                        <li><Link to="/cancel-policy" onClick={scrollTop} className="hover:text-[#49B9FF]">Terms</Link></li>
                        <li><Link to="/support" onClick={scrollTop} className="hover:text-[#49B9FF]">Sitemap</Link></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer
