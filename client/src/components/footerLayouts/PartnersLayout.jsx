import React, { useState } from 'react'
import { BackLink, ContactPanel, usePageScroll } from './FooterShared'
import { FooterIcon } from './FooterIcons'

const unsplash = (id) => `https://images.unsplash.com/photo-${id}?w=900&q=80`

const tiers = [
    {
        name: 'Boutique',
        icon: 'home',
        color: 'from-indigo-500 to-violet-600',
        rooms: '1â€“20 rooms',
        commission: '12%',
        setup: 'Free',
        support: 'Email',
        features: ['Room listings', 'Basic offers', 'Guest messaging', 'Analytics dashboard', 'Mobile-friendly profile'],
        footerNote: 'Commission-only pricing Â· No monthly fees',
        highlight: false,
    },
    {
        name: 'Luxury Resort',
        icon: 'palm',
        color: 'from-amber-500 to-orange-500',
        rooms: '21â€“100 rooms',
        commission: '10%',
        setup: 'Free',
        support: 'Priority email + phone',
        features: ['All Boutique features', 'Hospitality add-ons', 'Exclusive Offers module', 'Featured placement', 'Dedicated account manager', 'Revenue analytics'],
        footerNote: 'Priority onboarding Â· Featured marketplace placement',
        highlight: true,
    },
    {
        name: 'Global Chain',
        icon: 'building',
        color: 'from-emerald-500 to-teal-600',
        rooms: '100+ rooms',
        commission: '8%',
        setup: 'Free',
        support: '24/7 priority line',
        features: ['All Luxury features', 'Multi-property dashboard', 'API / PMS integration', 'Custom branding', 'White-glove onboarding', 'Joint marketing campaigns'],
        footerNote: 'Volume rates Â· 24/7 partner success line',
        highlight: false,
    },
]

const successStories = [
    {
        imgId: '1566073771259-6a8506099945',
        hotel: 'Cala di Volpe, Sardinia',
        uplift: '+42% bookings',
        quote: 'Bekele Mola Hotels brought us guests we could never have reached through our own website alone. The hospitality marketplace feature tripled our spa revenue in the first month.',
        person: 'Roberto Castellani, GM',
    },
    {
        imgId: '1520250497591-112f2f40a3f4',
        hotel: 'Azure Peak, Santorini',
        uplift: '+38% revenue',
        quote: 'Onboarding took less than 48 hours. Within a week we had bookings from 12 countries. The owner dashboard is genuinely the best I have used in 20 years.',
        person: 'Elena Vassilakis, Owner',
    },
    {
        imgId: '1582719508461-905c673771fd',
        hotel: 'The Bamboo House, Bali',
        uplift: '+51% occupancy',
        quote: 'The eco-certified badge and Exclusive Offers module helped us stand out in a saturated market. We now maintain 91% occupancy year-round.',
        person: 'Made Wijaya, Director',
    },
]

const PartnersLayout = ({ page }) => {
    usePageScroll(page.slug)
    const benefits = page.sections[0]
    const partners = page.sections[1]
    const [activeStory, setActiveStory] = useState(0)

    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-indigo-900 to-indigo-950 text-white overflow-hidden">
            {/* â”€â”€â”€ HERO (preserved) â”€â”€â”€ */}
            <section className="pt-28 px-6 text-center relative">
                <BackLink className="text-indigo-300 hover:text-white" />
                <p className="text-indigo-300 text-sm font-bold uppercase tracking-widest mt-8">{page.badge}</p>
                <h1 className="font-playfair text-4xl md:text-6xl font-bold mt-4">
                    {page.titleLead} <span className="text-amber-400">{page.titleHighlight}</span>
                </h1>
                <p className="text-indigo-200 mt-4 max-w-xl mx-auto">{page.subtitle}</p>
            </section>

            {/* â”€â”€â”€ STATS â”€â”€â”€ */}
            <section className="flex flex-wrap justify-center gap-8 px-6 py-12 border-y border-indigo-700 mt-8">
                {page.stats.map((s) => (
                    <div key={s.label} className="text-center">
                        <p className="text-4xl font-bold text-amber-400">{s.value}</p>
                        <p className="text-indigo-300 text-xs mt-1">{s.label}</p>
                    </div>
                ))}
            </section>

            {/* â”€â”€â”€ INTRO â”€â”€â”€ */}
            <section className="px-6 md:px-16 py-12 max-w-3xl mx-auto">
                {page.intro.map((p, i) => (
                    <p key={i} className="text-indigo-100 text-center mb-4 leading-relaxed">{p}</p>
                ))}
            </section>

            {/* â”€â”€â”€ BENEFITS GRID â”€â”€â”€ */}
            <section className="px-6 md:px-16 pb-20">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">Platform Benefits</p>
                        <h2 className="font-playfair text-4xl font-bold">{benefits.heading}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.items.map((item, i) => (
                            <div
                                key={item.title}
                                className="group relative p-6 rounded-3xl bg-white/10 backdrop-blur border border-white/20 hover:bg-white/15 hover:border-amber-400/50 hover:-translate-y-1 transition-all duration-400"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <FooterIcon name={item.icon} className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-indigo-200 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* â”€â”€â”€ PARTNER TIERS â”€â”€â”€ */}
            <section className="bg-white text-gray-900 rounded-t-[3rem] px-6 md:px-16 py-20">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <p className="text-indigo-600 text-xs font-bold uppercase tracking-widest mb-2">Partnership Tiers</p>
                        <h2 className="font-playfair text-4xl font-bold">{partners.heading}</h2>
                        <p className="text-gray-500 mt-3 max-w-xl mx-auto">Zero setup fees. Transparent commissions. Cancel any time.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                        {tiers.map((tier) => (
                            <div
                                key={tier.name}
                                className={`relative rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                                    tier.highlight
                                        ? 'shadow-2xl scale-[1.02] ring-2 ring-amber-400'
                                        : 'border border-gray-100 shadow-md'
                                }`}
                            >
                                {tier.highlight && (
                                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold text-center py-2 uppercase tracking-widest">
                                        Most Popular
                                    </div>
                                )}
                                <div className={`h-2 bg-gradient-to-r ${tier.color} ${tier.highlight ? 'mt-8' : ''}`} />
                                <div className="p-8 bg-white flex-1 flex flex-col">
                                    <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center mb-4 shadow-sm">
                                        <FooterIcon name={tier.icon} className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <h3 className="font-playfair text-2xl font-bold mb-1">{tier.name}</h3>
                                    <p className="text-gray-400 text-sm mb-5">{tier.rooms}</p>

                                    <div className="flex items-end gap-1 mb-2">
                                        <span className="text-4xl font-black text-gray-900">{tier.commission}</span>
                                        <span className="text-gray-400 text-sm mb-1">commission</span>
                                    </div>
                                    <div className="flex gap-4 text-xs text-gray-400 mb-6">
                                        <span>Setup: <strong className="text-emerald-600">{tier.setup}</strong></span>
                                        <span>Support: <strong className="text-gray-700">{tier.support}</strong></span>
                                    </div>

                                    <ul className="space-y-2 flex-1 mb-6">
                                        {tier.features.map((f) => (
                                            <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                                                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold shrink-0">âœ“</span>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>

                                    <div
                                        className={`w-full py-3 px-4 rounded-xl text-sm text-center select-none border ${
                                            tier.highlight
                                                ? 'bg-amber-50 border-amber-200 text-amber-900'
                                                : 'bg-gray-50 border-gray-200 text-gray-600'
                                        }`}
                                        aria-hidden="true"
                                    >
                                        {tier.footerNote}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* â”€â”€â”€ SUCCESS STORIES â”€â”€â”€ */}
                    <div className="mb-16">
                        <div className="text-center mb-10">
                            <p className="text-indigo-600 text-xs font-bold uppercase tracking-widest mb-2">Partner Stories</p>
                            <h2 className="font-playfair text-3xl font-bold">Our Partners Speak</h2>
                        </div>
                        <div className="flex gap-3 justify-center mb-8">
                            {successStories.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveStory(i)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${activeStory === i ? 'bg-indigo-600 w-8' : 'bg-gray-300 hover:bg-gray-400'}`}
                                />
                            ))}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {successStories.map((story, i) => (
                                <div
                                    key={i}
                                    onClick={() => setActiveStory(i)}
                                    className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-400 ${activeStory === i ? 'scale-[1.02] shadow-2xl' : 'opacity-75 hover:opacity-90'}`}
                                >
                                    <img src={unsplash(story.imgId)} alt={story.hotel} className="w-full h-56 object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                    <div className="absolute bottom-0 p-5">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="bg-amber-400 text-black text-xs font-bold px-2 py-0.5 rounded-full">{story.uplift}</span>
                                            <span className="text-white/70 text-xs">{story.hotel}</span>
                                        </div>
                                        <p className="text-white text-xs leading-relaxed italic">"{story.quote.substring(0, 100)}..."</p>
                                        <p className="text-amber-400 text-xs mt-2 font-medium">â€” {story.person}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div id="partner-contact" className="max-w-2xl mx-auto">
                        <ContactPanel block={page.contactBlock} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PartnersLayout

