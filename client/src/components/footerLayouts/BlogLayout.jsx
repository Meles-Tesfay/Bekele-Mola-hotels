import React, { useState } from 'react'
import { BackLink, usePageScroll } from './FooterShared'
import { FooterIcon } from './FooterIcons'

const articles = [
    {
        category: 'Destination',
        date: 'May 2026',
        readTime: '6 min',
        author: 'Sofia Almeida',
        title: 'Five Coastal Hotels Perfect for a Summer Escape',
        excerpt: 'From the rugged Algarve cliffs to the turquoise Amalfi shores â€” our curated selection of oceanfront stays that deliver on every promise of sun, sea, and service.',
        body: [
            'Summer travel is rarely about finding the cheapest room â€” it is about matching the coastline to the mood you want when you arrive. We spent three months visiting properties that balance design, service, and access to the water without feeling overcrowded or overproduced.',
            'Each hotel on this list was chosen for consistency: thoughtful check-in, rooms that stay cool in peak heat, and dining that feels local rather than generic. If you are booking through Bekele Mola Hotels, pair an early check-in request with our seasonal breakfast package for the smoothest first morning.',
            'Start with two nights minimum at any coastal property â€” one day to settle, one to explore â€” then extend only if the hotel offers experiences you cannot replicate elsewhere, such as private boat transfers or chef-led market tours.',
        ],
        tag: 'Travel',
        featured: true,
    },
    {
        category: 'Hospitality',
        date: 'Apr 2026',
        readTime: '4 min',
        author: 'Marco Chen',
        title: 'Romantic Getaway: The Perfect Two-Night Itinerary',
        excerpt: 'Spa timing, private dinners, and room upgrade secrets that transform a weekend break into a once-in-a-lifetime memory.',
        body: [
            'A two-night romantic trip works best when you front-load delight: arrive before sunset, confirm spa slots before you land, and reserve dinner for night one so night two stays unplanned and relaxed.',
            'Room upgrades are most reliable when requested with a note about the occasion â€” anniversaries and proposals get priority at partner hotels more often than generic â€œbest availableâ€ asks. Ask for a corner room or suite with a view if noise matters to you.',
            'Close the stay with a slow morning: late checkout when available, in-room breakfast, and a short walk before departure. The goal is continuity, not a packed schedule.',
        ],
        tag: 'Romance',
        featured: false,
    },
    {
        category: 'Luxury',
        date: 'Apr 2026',
        readTime: '5 min',
        author: 'Isabelle Moreau',
        title: 'Booking 60 Days Ahead: Inside the Luxury Retreat Offer',
        excerpt: 'Maximize savings without sacrificing flexibility. We unpack the math behind early-bird pricing and when to hold for a better deal.',
        body: [
            'Early-bird offers reward planning, but not every date benefits equally. Shoulder seasons â€” late spring and early autumn â€” often deliver the strongest discount-to-flexibility ratio because demand is steady but not peak.',
            'Read cancellation terms before you commit: the best luxury retreat offers include a partial refund window or one free date change. If those are missing, treat the booking as non-refundable and only lock in when your dates are firm.',
            'Combine the 60-day offer with loyalty perks where available: suite upgrades, resort credits, or spa vouchers frequently stack at partner properties when booked through Bekele Mola Hotels.',
        ],
        tag: 'Tips',
        featured: false,
    },
    {
        category: 'Sustainable',
        date: 'Mar 2026',
        readTime: '5 min',
        author: 'Lena Braun',
        title: 'Hospitality Beyond the Room: Spa, Dining & Tours',
        excerpt: "A guest guide to our new in-stay services marketplace â€” how to book a private massage, reserve a sunset boat tour, and pair it with a chef's tasting menu.",
        body: [
            'In-stay services are where modern hotels differentiate: the room gets you there, but spa, dining, and curated tours define whether guests leave with a story worth retelling.',
            'Book spa and dining on day zero â€” even from the car â€” because prime slots disappear fast on weekends. Tours are best scheduled for your second full day, when you know weather and energy levels.',
            'Look for bundles: tasting menu plus wine pairing, or massage plus pool access, often cost less than Ã  la carte and reduce decision fatigue during a short stay.',
        ],
        tag: 'Lifestyle',
        featured: false,
    },
]

const topicCards = [
    {
        title: 'Destination guides',
        icon: 'âœˆï¸',
        gradient: 'from-rose-500 to-orange-500',
        description: 'Neighborhood tips, best seasons to visit, and curated hotel picks.',
        body: 'We map cities and coastlines through local writers â€” not generic listicles. Every guide includes where to stay, when to go, and what to book before you arrive so your first day feels intentional.',
        highlights: ['City & coastal playbooks', 'Seasonal timing charts', 'Curated boutique shortlists'],
        articleCount: 12,
    },
    {
        title: 'Food & hospitality',
        icon: 'ðŸ½ï¸',
        gradient: 'from-amber-600 to-yellow-500',
        description: 'Chef interviews, spa rituals, and on-property experiences worth booking.',
        body: 'The best stays are defined by what happens off the pillow: tasting menus, thermal circuits, and hosted tours. We interview chefs and wellness directors to surface experiences worth adding to your itinerary.',
        highlights: ['Chef & mixologist features', 'Spa ritual breakdowns', 'In-stay marketplace tips'],
        articleCount: 9,
    },
    {
        title: 'Luxury decoded',
        icon: 'ðŸ’Ž',
        gradient: 'from-violet-700 to-purple-500',
        description: 'What early-bird rates, suites, and concierge perks really include.',
        body: 'Luxury pricing is rarely opaque on purpose â€” it is just poorly explained. We translate rate codes, suite categories, and loyalty stacking so you know exactly what you are paying for before checkout.',
        highlights: ['Early-bird math explained', 'Suite upgrade strategies', 'Concierge perk checklists'],
        articleCount: 7,
    },
    {
        title: 'Sustainable travel',
        icon: 'ðŸŒ¿',
        gradient: 'from-teal-700 to-emerald-500',
        description: 'Eco-certified stays and low-impact itineraries.',
        body: 'Responsible travel does not mean sacrificing comfort. We highlight certified properties, low-impact transport options, and itineraries that support local communities without adding planning friction.',
        highlights: ['Certification guides', 'Low-impact route ideas', 'Partner eco-spotlights'],
        articleCount: 6,
    },
]

const TopicCard = ({ topic }) => (
    <div
        className="group relative w-full rounded-2xl overflow-hidden border border-neutral-800 transition-all duration-500 ease-out min-h-[320px] flex flex-col
            hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5)]"
    >
        <div className={`absolute inset-0 bg-gradient-to-br ${topic.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-500`} />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

        <div className="relative z-10 flex flex-col flex-1 p-6 md:p-7">
            <div className="flex items-start justify-between gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FooterIcon name={topic.icon} className="w-7 h-7 text-white" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 bg-black/20 px-2.5 py-1 rounded-full shrink-0">
                    {topic.articleCount} articles
                </span>
            </div>

            <h3 className="font-playfair text-xl font-bold text-white mb-2 group-hover:translate-x-0.5 transition-transform duration-300">
                {topic.title}
            </h3>
            <p className="text-white/90 text-sm font-medium leading-snug mb-3">{topic.description}</p>
            <p className="text-white/75 text-xs leading-relaxed mb-5 flex-1">{topic.body}</p>

            <ul className="space-y-2">
                {topic.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-white/90">
                        <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    </div>
)

const LongFormArticle = ({ article, featured = false }) => (
    <article
        className={`group relative rounded-2xl border bg-neutral-900/80 backdrop-blur-sm overflow-hidden transition-all duration-500 ease-out
            border-neutral-800 hover:border-rose-500/50 hover:bg-neutral-900 hover:shadow-[0_20px_60px_-15px_rgba(244,63,94,0.25)] hover:-translate-y-1
            ${featured ? 'p-8 md:p-10' : 'p-6 md:p-8'}`}
    >
        <span
            className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-rose-500 to-orange-500 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 ease-out"
            aria-hidden="true"
        />
        <div className="pl-4 md:pl-5">
            <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-rose-400 bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-full">
                    {article.category}
                </span>
                {featured && (
                    <span className="text-xs font-bold uppercase tracking-widest text-white bg-rose-500 px-3 py-1 rounded-full">
                        Featured
                    </span>
                )}
                <span className="text-xs text-neutral-500">
                    {article.date} Â· {article.readTime} read
                </span>
            </div>

            <h2
                className={`font-playfair font-bold text-white leading-snug mb-4 group-hover:text-rose-200 transition-colors duration-300
                    ${featured ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'}`}
            >
                {article.title}
            </h2>

            <p className={`text-neutral-300 leading-relaxed mb-5 ${featured ? 'text-base md:text-lg' : 'text-sm md:text-base'}`}>
                {article.excerpt}
            </p>

            <div className="space-y-4 border-l-2 border-neutral-800 group-hover:border-rose-500/40 pl-5 transition-colors duration-500">
                {article.body.map((paragraph, i) => (
                    <p key={i} className="text-neutral-400 text-sm md:text-[15px] leading-[1.75] group-hover:text-neutral-300 transition-colors duration-300">
                        {paragraph}
                    </p>
                ))}
            </div>

            <div className="flex items-center gap-3 mt-8 pt-6 border-t border-neutral-800 group-hover:border-neutral-700 transition-colors duration-300">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-500/30 to-orange-500/30 border border-rose-500/20 flex items-center justify-center text-rose-300 text-xs font-bold shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {article.author.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                    <p className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors duration-300">{article.author}</p>
                    <p className="text-xs text-neutral-500">Bekele Mola Hotels Journal</p>
                </div>
                <span className="ml-auto text-xs text-neutral-600 group-hover:text-rose-400/80 transition-colors duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    Continue reading
                </span>
            </div>
        </div>
    </article>
)

const BlogLayout = ({ page }) => {
    usePageScroll(page.slug)
    const topics = page.sections[0]
    const articlesSection = page.sections[1]
    const [subscribed, setSubscribed] = useState(false)

    const displayed = articles

    const featuredArticle = displayed.find((a) => a.featured) || displayed[0]
    const restArticles = displayed.filter((a) => a !== featuredArticle)

    return (
        <div className="min-h-screen bg-neutral-950 text-white">
            <section className="pt-28 px-6 md:px-12">
                <BackLink className="text-neutral-500 hover:text-white" />
                <p className="text-rose-400 text-sm font-bold mt-8 mb-2">{page.badge}</p>
                <h1 className="font-playfair text-6xl md:text-7xl font-bold max-w-4xl">{page.titleHighlight}</h1>
                <p className="text-neutral-400 mt-4 max-w-md">{page.subtitle}</p>
            </section>

            <section className="px-6 md:px-12 py-12 max-w-6xl mx-auto">
                <div className="text-center mb-10">
                    <p className="text-rose-400 text-xs font-bold uppercase tracking-widest mb-2">Explore by theme</p>
                    <h2 className="font-playfair text-3xl md:text-4xl font-bold">{topics.heading}</h2>
                </div>

                <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 md:p-8 mb-8 hover:border-neutral-700 transition-colors duration-500">
                    {page.intro.map((p, i) => (
                        <p key={i} className={`text-neutral-300 leading-relaxed ${i > 0 ? 'mt-4' : ''} ${i === 0 ? 'text-base md:text-lg' : 'text-sm md:text-base text-neutral-400'}`}>
                            {p}
                        </p>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {topicCards.map((topic) => (
                        <TopicCard key={topic.title} topic={topic} />
                    ))}
                </div>
            </section>

            <section className="px-6 md:px-12 py-8 max-w-4xl mx-auto">
                <LongFormArticle article={featuredArticle} featured />
            </section>

            <section className="px-6 md:px-12 py-12 pb-16">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-neutral-400 text-xs uppercase tracking-[0.3em] mb-10">{articlesSection.heading}</h2>

                    <div className="flex flex-col gap-8">
                        {restArticles.map((article) => (
                            <LongFormArticle key={article.title} article={article} />
                        ))}
                    </div>

                    <div className="mt-16 rounded-3xl bg-gradient-to-br from-rose-900/40 to-orange-900/30 border border-rose-800/40 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 hover:border-rose-600/50 transition-colors duration-500">
                        <div className="flex-1">
                            <p className="text-rose-400 text-xs font-bold uppercase tracking-widest mb-2">Stay Inspired</p>
                            <h3 className="font-playfair text-2xl font-bold text-white mb-2">Get the Weekly Journal</h3>
                            <p className="text-neutral-400 text-sm">Curated hotel stories, destination tips, and exclusive offer previews â€” every Friday morning.</p>
                        </div>
                        {!subscribed ? (
                            <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }} className="flex gap-3 w-full md:w-auto">
                                <input
                                    required
                                    type="email"
                                    className="flex-1 md:w-64 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-rose-400 transition-colors"
                                    placeholder="Your email address"
                                />
                                <button type="submit" className="bg-rose-500 hover:bg-rose-400 text-white rounded-xl px-5 py-3 text-sm font-semibold transition-colors shrink-0">
                                    Subscribe
                                </button>
                            </form>
                        ) : (
                            <div className="bg-emerald-500/20 border border-emerald-500/30 px-6 py-4 rounded-2xl text-center">
                                <p className="text-sm font-bold text-emerald-400">âœ“ Subscribed Successfully!</p>
                                <p className="text-xs text-emerald-400/80 mt-1">Thank you for joining our weekly journal.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default BlogLayout

