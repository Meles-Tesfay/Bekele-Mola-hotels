import React, { useState } from 'react'
import { BackLink, ContactPanel, usePageScroll } from './FooterShared'
import { FooterIcon } from './FooterIcons'

const unsplash = (id) => `https://images.unsplash.com/photo-${id}?w=800&q=80`

const cultureImages = [
    { id: '1522202176988-66273c2fd55f', label: 'Team collaboration' },
    { id: '1515187029135-18ee286d815b', label: 'Remote-friendly workspace' },
    { id: '1556761175-5973dc0f32e7', label: 'Hotel partner retreats' },
    { id: '1530099486328-e021101a494a', label: 'Celebrating milestones' },
]

const departments = ['All', 'Engineering', 'Design', 'Operations', 'Marketing']

const jobDetails = {
    'Senior Frontend Engineer': {
        dept: 'Engineering',
        location: 'Remote / Lisbon',
        type: 'Full-time',
        salary: '$95k â€“ $130k',
        tags: ['React', 'TypeScript', 'Design Systems'],
        responsibilities: [
            'Build and maintain the guest booking experience across web and mobile.',
            'Collaborate with Product and Design to ship iterative improvements.',
            'Own performance, accessibility, and quality for key user flows.',
            'Mentor junior engineers and participate in architecture decisions.',
        ],
    },
    'Product Designer': {
        dept: 'Design',
        location: 'Remote / Barcelona',
        type: 'Full-time',
        salary: '$80k â€“ $115k',
        tags: ['Figma', 'UX Research', 'Mobile'],
        responsibilities: [
            'Lead end-to-end design for booking, hospitality, and owner tools.',
            'Conduct user research, usability tests, and synthesize insights.',
            'Create design systems components and documentation.',
            'Work cross-functionally with Engineering from ideation to launch.',
        ],
    },
    'Customer Success Manager': {
        dept: 'Operations',
        location: 'Hybrid / Dubai',
        type: 'Full-time',
        salary: '$60k â€“ $85k',
        tags: ['CRM', 'Hospitality', 'EMEA'],
        responsibilities: [
            'Onboard hotel partners and guide them through the owner dashboard.',
            'Drive product adoption and resolve escalations quickly.',
            'Build ongoing relationships that result in referrals and expansion.',
            'Track partner health metrics and deliver quarterly business reviews.',
        ],
    },
    'Content & SEO Specialist': {
        dept: 'Marketing',
        location: 'Remote',
        type: 'Full-time',
        salary: '$55k â€“ $75k',
        tags: ['SEO', 'Editorial', 'Analytics'],
        responsibilities: [
            'Develop and execute content strategy for organic growth channels.',
            'Write destination guides, hotel spotlights, and travel articles.',
            'Manage keyword research, on-page optimisation, and link building.',
            'Report on content performance and iterate based on data.',
        ],
    },
}

const benefitImages = [
    '1501854140801-50d01698950b',
    '1522071820081-009f0129c71c',
    '1559526324-593bc073d938',
    '1543269865-cbf427effbad',
    '1527529482837-4698179dc6ce',
    '1573164713714-d95e436ab8d6',
]

const CareersLayout = ({ page }) => {
    usePageScroll(page.slug)
    const benefits = page.sections[0]
    const jobs = page.sections[1]
    const [activeDept, setActiveDept] = useState('All')
    const [expandedJob, setExpandedJob] = useState(null)
    const [appliedJobs, setAppliedJobs] = useState(new Set())
    const [appSubmitted, setAppSubmitted] = useState(false)

    const filteredJobs = jobs.items.filter(job => {
        if (activeDept === 'All') return true
        const details = jobDetails[job.title]
        return details?.dept === activeDept
    })

    const handleApply = (title, e) => {
        e.stopPropagation()
        setAppliedJobs(prev => new Set([...prev, title]))
    }

    return (
        <div className="min-h-screen bg-[#0a1628] text-white">
            {/* â”€â”€â”€ HERO SECTION (preserved) â”€â”€â”€ */}
            <section className="pt-28 px-6 md:px-20 pb-16 text-center max-w-5xl mx-auto">
                <BackLink className="text-slate-400 hover:text-white !mb-10" />
                <p className="text-[#49B9FF] text-xs font-bold uppercase tracking-[0.4em] mb-6">{page.badge}</p>
                <h1 className="font-playfair text-5xl md:text-8xl font-bold leading-[0.95]">
                    {page.titleLead}
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#49B9FF] to-cyan-300">
                        {page.titleHighlight}
                    </span>
                </h1>
                <p className="text-slate-400 text-lg md:text-xl mt-8 max-w-2xl mx-auto">{page.subtitle}</p>
            </section>

            <section className="relative h-56 md:h-72 overflow-hidden">
                <img src={page.heroImage} alt="" className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-[#0a1628]/80" />
                <div className="absolute bottom-0 left-0 right-0 flex overflow-x-auto gap-4 px-6 pb-6">
                    {page.stats.map((s) => (
                        <div key={s.label} className="flex-shrink-0 min-w-[140px] px-5 py-4 rounded-2xl bg-white/10 backdrop-blur border border-white/20 text-center">
                            <p className="text-2xl font-bold text-[#49B9FF]">{s.value}</p>
                            <p className="text-xs text-slate-300 mt-1">{s.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* â”€â”€â”€ INTRO â”€â”€â”€ */}
            <section className="px-6 md:px-20 py-16 max-w-4xl mx-auto">
                {page.intro.map((p, i) => (
                    <p key={i} className="text-slate-300 text-lg leading-relaxed mb-5">{p}</p>
                ))}
            </section>

            {/* â”€â”€â”€ CULTURE GALLERY â”€â”€â”€ */}
            <section className="px-6 md:px-20 pb-16">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <p className="text-[#49B9FF] text-xs font-bold uppercase tracking-[0.4em] mb-3">Our Culture</p>
                        <h2 className="font-playfair text-3xl md:text-4xl font-bold">Life at Bekele Mola Hotels</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {cultureImages.map((img, i) => (
                            <div key={i} className={`relative overflow-hidden rounded-2xl ${i === 0 ? 'row-span-2' : ''}`} style={{ height: i === 0 ? '100%' : '180px' }}>
                                <img
                                    src={unsplash(img.id)}
                                    alt={img.label}
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                    style={{ minHeight: i === 0 ? '380px' : '180px' }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                <p className="absolute bottom-3 left-3 text-white text-xs font-semibold">{img.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* â”€â”€â”€ BENEFITS â”€â”€â”€ */}
            <section className="px-6 md:px-20 py-20 bg-white text-gray-900 rounded-t-[3rem]">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <p className="text-[#49B9FF] text-xs font-bold uppercase tracking-[0.4em] mb-3">Why Join Us</p>
                        <h2 className="font-playfair text-4xl font-bold">{benefits.heading}</h2>
                        <p className="text-gray-500 mt-3 max-w-xl mx-auto">{benefits.subheading}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.items.map((item, i) => (
                            <div
                                key={item.title}
                                className="group relative overflow-hidden rounded-3xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                            >
                                <img
                                    src={unsplash(benefitImages[i])}
                                    alt={item.title}
                                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/40 to-transparent" />
                                <div className="p-6 bg-white">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#49B9FF] to-blue-700 flex items-center justify-center shadow-md">
                                            <FooterIcon name={item.icon} className="w-5 h-5 text-white" />
                                        </div>
                                        <h3 className="font-bold text-gray-900">{item.title}</h3>
                                    </div>
                                    <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* â”€â”€â”€ JOB BOARD â”€â”€â”€ */}
            <section className="px-6 md:px-20 py-20 bg-slate-50">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
                        <div>
                            <p className="text-[#49B9FF] text-xs font-bold uppercase tracking-[0.4em] mb-2">Open Roles</p>
                            <h2 className="font-playfair text-4xl font-bold text-gray-900">{jobs.heading}</h2>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {departments.map(dept => (
                                <button
                                    key={dept}
                                    onClick={() => setActiveDept(dept)}
                                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                                        activeDept === dept
                                            ? 'bg-[#0a1628] text-white shadow-lg'
                                            : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-400'
                                    }`}
                                >
                                    {dept}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        {filteredJobs.map((job) => {
                            const details = jobDetails[job.title] || {}
                            const isOpen = expandedJob === job.title
                            const isApplied = appliedJobs.has(job.title)

                            return (
                                <div
                                    key={job.title}
                                    className={`rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                                        isOpen ? 'border-[#49B9FF] bg-white shadow-xl' : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                                    }`}
                                    onClick={() => setExpandedJob(isOpen ? null : job.title)}
                                >
                                    <div className="p-6 flex flex-col md:flex-row md:items-center gap-4">
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                                {details.dept && (
                                                    <span className="text-xs font-bold text-[#49B9FF] uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded-full">{details.dept}</span>
                                                )}
                                                {details.type && (
                                                    <span className="text-xs text-gray-500 border border-gray-200 px-2 py-0.5 rounded-full">{details.type}</span>
                                                )}
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                                            <p className="text-gray-500 text-sm mt-1">{job.description}</p>
                                        </div>
                                        <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                                            {details.salary && (
                                                <p className="text-sm font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">{details.salary}</p>
                                            )}
                                            {details.location && (
                                                <p className="text-xs text-gray-400 flex items-center gap-1">
                                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                                    {details.location}
                                                </p>
                                            )}
                                            <svg className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                                        </div>
                                    </div>

                                    {isOpen && (
                                        <div className="px-6 pb-6 border-t border-gray-100 pt-5">
                                            <div className="flex flex-wrap gap-2 mb-5">
                                                {details.tags?.map(tag => (
                                                    <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-medium">{tag}</span>
                                                ))}
                                            </div>
                                            <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Key Responsibilities</h4>
                                            <ul className="space-y-2 mb-6">
                                                {details.responsibilities?.map((r, ri) => (
                                                    <li key={ri} className="flex gap-3 text-sm text-gray-600">
                                                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#49B9FF] shrink-0" />
                                                        {r}
                                                    </li>
                                                ))}
                                            </ul>
                                            <button
                                                onClick={(e) => handleApply(job.title, e)}
                                                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                                                    isApplied
                                                        ? 'bg-emerald-500 text-white cursor-default'
                                                        : 'bg-[#0a1628] text-white hover:bg-[#49B9FF] hover:shadow-lg hover:-translate-y-0.5'
                                                }`}
                                            >
                                                {isApplied ? 'âœ“ Application Submitted' : 'Apply for This Role â†’'}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* â”€â”€â”€ CONTACT / APPLICATION PORTAL â”€â”€â”€ */}
            <section className="px-6 md:px-20 py-20 bg-gradient-to-br from-[#0a1628] to-slate-900">
                <div className="max-w-4xl mx-auto">
                    <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur p-10 md:p-14 flex flex-col md:flex-row gap-10 items-start">
                        <div className="flex-1">
                            <p className="text-[#49B9FF] text-xs font-bold uppercase tracking-[0.4em] mb-3">Apply Today</p>
                            <h2 className="font-playfair text-3xl font-bold mb-4">{page.contactBlock.title}</h2>
                            <p className="text-slate-300 leading-relaxed mb-6">{page.contactBlock.description}</p>
                            <ul className="space-y-3">
                                {page.contactBlock.details.map(line => (
                                    <li key={line} className="flex items-start gap-3 text-slate-300 text-sm">
                                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#49B9FF] shrink-0" />
                                        {line}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full md:w-72 bg-white/5 border border-white/10 rounded-2xl p-6">
                            <p className="text-sm font-semibold text-white mb-4">Quick Application</p>
                            {!appSubmitted ? (
                                <form onSubmit={(e) => { e.preventDefault(); setAppSubmitted(true); }} className="space-y-3">
                                    <input required className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#49B9FF] transition-colors" placeholder="Full name" />
                                    <input required type="email" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#49B9FF] transition-colors" placeholder="Email address" />
                                    <input required type="url" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#49B9FF] transition-colors" placeholder="Portfolio / LinkedIn URL" />
                                    <select required className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-slate-400 focus:outline-none focus:border-[#49B9FF] transition-colors">
                                        <option value="">Select a role</option>
                                        {jobs.items.map(j => <option key={j.title} value={j.title}>{j.title}</option>)}
                                    </select>
                                    <button type="submit" className="w-full bg-gradient-to-r from-[#49B9FF] to-cyan-400 text-white rounded-xl py-3 text-sm font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
                                        Send Application
                                    </button>
                                </form>
                            ) : (
                                <div className="text-center py-6 space-y-4">
                                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-xl font-bold">
                                        âœ“
                                    </div>
                                    <p className="text-sm text-white font-semibold">Application Sent!</p>
                                    <p className="text-xs text-slate-400">Thanks for applying. We will review your profile and get back to you soon.</p>
                                    <button onClick={() => setAppSubmitted(false)} className="text-xs text-[#49B9FF] hover:underline font-semibold bg-transparent border-none outline-none cursor-pointer">
                                        Send another application
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CareersLayout

