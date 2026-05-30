import React, { useState } from 'react'
import { BackLink, ContactPanel, usePageScroll } from './FooterShared'

const unsplash = (id) => `https://images.unsplash.com/photo-${id}?w=900&q=80`

const pressArticles = [
    {
        id: '1504711434969-e33886168f5c',
        category: 'Product Launch',
        date: 'April 2026',
        readTime: '3 min read',
        title: 'Bekele Mola Hotels Launches Hospitality Marketplace',
        excerpt: 'Owners can now list spa, dining, and experience services alongside room inventory, creating a fully integrated stay platform.',
        author: 'Editorial Team',
    },
    {
        id: '1540555700745-a0e59ab5a579',
        category: 'Sustainability',
        date: 'March 2026',
        readTime: '4 min read',
        title: 'Our 2026 Sustainability Pledge',
        excerpt: 'Commitment to carbon-neutral operations and eco-certified property badges now live across 200+ verified partner listings.',
        author: 'Sustainability Desk',
    },
    {
        id: '1460925895917-afdab827c52f',
        category: 'Funding',
        date: 'February 2026',
        readTime: '5 min read',
        title: 'Series B Funding to Expand Asia-Pacific',
        excerpt: 'Investment to expand into Japan, Singapore, and Southeast Asia â€” with a new dedicated guest safety and verification center.',
        author: 'Communications Desk',
    },
]

const brandAssets = [
    {
        icon: 'ðŸŽ¨',
        title: 'Logo & Brand Guidelines',
        format: 'SVG + PDF',
        size: '12 MB',
        desc: 'Primary and secondary logos, color palette (#49B9FF, navy, white), typography â€” Playfair Display and system sans.',
        color: 'from-blue-500 to-indigo-600',
    },
    {
        icon: 'ðŸ‘¤',
        title: 'Executive Bios & Headshots',
        format: 'DOCX + JPEG',
        size: '34 MB',
        desc: 'Short and long-form biographies and high-res headshots for leadership team, available on request.',
        color: 'from-purple-500 to-pink-600',
    },
    {
        icon: 'ðŸ“¸',
        title: 'Product Screenshots',
        format: 'PNG (4K)',
        size: '88 MB',
        desc: 'High-resolution captures of the full booking flow, exclusive offers module, and owner dashboard.',
        color: 'from-emerald-500 to-teal-600',
    },
    {
        icon: 'ðŸ“„',
        title: 'Press Fact Sheet',
        format: 'PDF',
        size: '2 MB',
        desc: 'One-page document with key metrics, milestones, founding story, and contact information.',
        color: 'from-orange-500 to-red-600',
    },
]

const PressLayout = ({ page }) => {
    usePageScroll(page.slug)
    const news = page.sections[0]
    const brand = page.sections[1]
    const [requestedAsset, setRequestedAsset] = useState(null)

    return (
        <div className="min-h-screen bg-[#faf8f5]">
            {/* â”€â”€â”€ MASTHEAD (hero, preserved) â”€â”€â”€ */}
            <div className="border-y-4 border-black bg-white">
                <div className="max-w-6xl mx-auto px-6 pt-28 pb-6 text-center">
                    <BackLink className="!mb-6" />
                    <p className="text-[10px] uppercase tracking-[0.5em] text-gray-500 mb-4">{page.badge} Â· EST. 2010</p>
                    <h1 className="font-playfair text-6xl md:text-8xl font-black text-black uppercase leading-none tracking-tight">
                        {page.titleLead}
                    </h1>
                    <p className="font-playfair text-2xl md:text-4xl italic text-gray-600 mt-2">{page.titleHighlight}</p>
                    <p className="text-sm text-gray-500 mt-6 max-w-lg mx-auto border-t border-b border-gray-300 py-3">{page.subtitle}</p>
                </div>
            </div>

            <img src={page.heroImage} alt="" className="w-full h-[40vh] md:h-[50vh] object-cover grayscale hover:grayscale-0 transition-all duration-700" />

            {/* â”€â”€â”€ STATS GRID â”€â”€â”€ */}
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black border border-black mb-16">
                    {page.stats.map((s) => (
                        <div key={s.label} className="bg-white p-6 text-center group hover:bg-black hover:text-white transition-colors duration-300 cursor-default">
                            <p className="text-3xl font-black font-playfair group-hover:text-white">{s.value}</p>
                            <p className="text-[10px] uppercase tracking-widest mt-1 text-gray-500 group-hover:text-gray-300">{s.label}</p>
                        </div>
                    ))}
                </div>

                {/* â”€â”€â”€ INTRO â”€â”€â”€ */}
                <div className="columns-1 md:columns-3 gap-8 space-y-0 mb-16">
                    {page.intro.map((p, i) => (
                        <p key={i} className="text-gray-700 text-sm leading-relaxed mb-4 break-inside-avoid first:text-lg first:font-serif first:text-black">{p}</p>
                    ))}
                </div>

                <hr className="my-4 border-black" />

                {/* â”€â”€â”€ NEWS ARTICLES â”€â”€â”€ */}
                <div className="mt-16 mb-20">
                    <div className="flex items-baseline gap-4 mb-12">
                        <h2 className="font-playfair text-4xl font-bold uppercase tracking-wide">{news.heading}</h2>
                        <span className="text-xs text-gray-400 uppercase tracking-widest">Latest coverage</span>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {pressArticles.map((article, i) => (
                            <article key={i} className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer flex flex-col">
                                <div className="relative h-52 overflow-hidden">
                                    <img
                                        src={unsplash(article.id)}
                                        alt={article.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                    <span className="absolute top-4 left-4 text-xs font-bold text-white bg-black/60 backdrop-blur px-3 py-1 rounded-full uppercase tracking-wider">
                                        {article.category}
                                    </span>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                                        <span>{article.date}</span>
                                        <span>Â·</span>
                                        <span>{article.readTime}</span>
                                    </div>
                                    <h3 className="font-playfair text-xl font-bold text-gray-900 mb-3 group-hover:text-black leading-snug">{article.title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed flex-1">{article.excerpt}</p>
                                    <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
                                        <span className="text-xs text-gray-400">{article.author}</span>
                                        <span className="text-xs font-semibold text-black group-hover:underline transition-all">
                                            Read More â†’
                                        </span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <hr className="my-4 border-dashed border-gray-300" />

                {/* â”€â”€â”€ BRAND RESOURCES â”€â”€â”€ */}
                <div className="mt-16 mb-20">
                    <div className="flex items-baseline gap-4 mb-10">
                        <h2 className="font-playfair text-4xl font-bold">{brand.heading}</h2>
                        <span className="text-xs text-gray-400 uppercase tracking-widest">Press Kit</span>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {brandAssets.map((asset, i) => (
                            <div
                                key={i}
                                className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-400 cursor-pointer"
                                onClick={() => setRequestedAsset(asset.title)}
                            >
                                <div className={`h-2 bg-gradient-to-r ${asset.color}`} />
                                <div className="p-6">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${asset.color} flex items-center justify-center text-2xl shadow-md`}>
                                                {asset.icon}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900">{asset.title}</h3>
                                                <div className="flex gap-3 mt-1">
                                                    <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{asset.format}</span>
                                                    <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{asset.size}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="shrink-0 w-9 h-9 rounded-full border-2 border-gray-200 group-hover:border-black group-hover:bg-black flex items-center justify-center transition-all duration-300">
                                            <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-4 leading-relaxed">{asset.desc}</p>
                                    {requestedAsset === asset.title && (
                                        <p className="text-xs text-emerald-600 font-semibold mt-3 bg-emerald-50 px-3 py-2 rounded-lg">
                                            âœ“ Request received! Our comms team will email assets within 24 hours.
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* â”€â”€â”€ PRESS CONTACT â”€â”€â”€ */}
                <div className="bg-black text-white rounded-3xl p-10 md:p-14 flex flex-col md:flex-row gap-10 items-start">
                    <div className="flex-1">
                        <p className="text-gray-400 text-xs uppercase tracking-[0.4em] mb-3">Press Contact</p>
                        <h2 className="font-playfair text-3xl font-bold mb-4">{page.contactBlock.title}</h2>
                        <p className="text-gray-300 leading-relaxed mb-6">{page.contactBlock.description}</p>
                        <ul className="space-y-3">
                            {page.contactBlock.details.map(line => (
                                <li key={line} className="flex items-start gap-3 text-gray-300 text-sm">
                                    <span className="mt-1.5 w-2 h-2 rounded-full bg-white shrink-0" />
                                    {line}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full md:w-64 shrink-0">
                        <img
                            src={unsplash('1504711434969-e33886168f5c')}
                            alt="Press"
                            className="w-full h-52 object-cover rounded-2xl grayscale"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PressLayout

