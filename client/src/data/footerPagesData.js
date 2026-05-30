const img = (id) => `https://images.unsplash.com/photo-${id}?w=1200&q=80`

export const footerPages = {
    careers: {
        slug: 'careers',
        badge: 'Join Our Team',
        titleLead: 'Build Your',
        titleHighlight: 'Career With Us',
        subtitle: 'Help shape the future of hospitality technology and guest experiences worldwide.',
        heroImage: img('1556761175-5973dc0f32e7'),
        accent: 'blue',
        intro: [
            'Bekele Mola Hotels is growing fast â€” and we are looking for passionate people who care about travel, design, and exceptional service. Whether you are an engineer, designer, marketer, or hospitality professional, you will work on products used by thousands of guests and hotel partners every day.',
            'We offer flexible work arrangements, competitive compensation, learning budgets, and a culture that values ownership, kindness, and craft. Explore how your skills can make every stay more memorable.',
        ],
        stats: [
            { value: '120+', label: 'Team members' },
            { value: '18', label: 'Countries' },
            { value: '4.8', label: 'Glassdoor rating' },
            { value: '35%', label: 'Women in leadership' },
        ],
        sections: [
            {
                heading: 'Life at Bekele Mola Hotels',
                subheading: 'What makes working here different',
                type: 'cards',
                items: [
                    { icon: 'ðŸŒ', title: 'Remote-friendly', description: 'Collaborate from anywhere with quarterly team retreats in inspiring destinations.' },
                    { icon: 'ðŸ“š', title: 'Growth focus', description: 'Annual learning stipend, mentorship programs, and clear career pathways.' },
                    { icon: 'ðŸ¨', title: 'Travel perks', description: 'Discounted stays at partner properties and familiarization trips twice a year.' },
                    { icon: 'âš–ï¸', title: 'Work-life balance', description: 'Generous PTO, parental leave, and no-meeting Fridays for deep work.' },
                    { icon: 'ðŸ’¡', title: 'Impact', description: 'Ship features that directly improve bookings, safety, and guest satisfaction.' },
                    { icon: 'ðŸ¤', title: 'Inclusive culture', description: 'Employee resource groups and hiring practices built on equity and respect.' },
                ],
            },
            {
                heading: 'Open Opportunities',
                type: 'list',
                items: [
                    { title: 'Senior Frontend Engineer', description: 'React, TypeScript, design systems â€” build our guest and owner experiences.' },
                    { title: 'Product Designer', description: 'End-to-end UX for mobile and web across booking, hospitality, and owner tools.' },
                    { title: 'Customer Success Manager', description: 'Onboard hotel partners and drive adoption across EMEA and Americas.' },
                    { title: 'Content & SEO Specialist', description: 'Editorial strategy, destination guides, and organic growth.' },
                ],
            },
        ],
        contactBlock: {
            title: 'How to apply',
            description: 'Send your rÃ©sumÃ©, portfolio (if applicable), and a short note about why Bekele Mola Hotels resonates with you.',
            details: [
                'Email: careers@Bekele Mola Hotels.com',
                'Subject line: [Role] â€” Your Name',
                'We respond to every application within ten business days.',
            ],
        },
    },

    press: {
        slug: 'press',
        badge: 'Media & News',
        titleLead: 'Press &',
        titleHighlight: 'Media Center',
        subtitle: 'Official news, brand assets, and story ideas for journalists and creators.',
        heroImage: img('1504711434969-e33886168f5c'),
        accent: 'blue',
        intro: [
            'Bekele Mola Hotels connects travelers with curated hotels, exclusive offers, and hospitality experiences. Our platform serves guests in dozens of countries and partners with boutique and luxury properties worldwide.',
            'For press inquiries, interview requests, or brand partnership opportunities, our communications team is available to provide facts, imagery, and executive commentary.',
        ],
        stats: [
            { value: '2010', label: 'Founded' },
            { value: '500+', label: 'Partner hotels' },
            { value: '50k+', label: 'Monthly bookings' },
            { value: '12', label: 'Industry awards' },
        ],
        sections: [
            {
                heading: 'Recent Highlights',
                type: 'list',
                items: [
                    { title: 'Bekele Mola Hotels launches hospitality marketplace', description: 'Owners can now list spa, dining, and experience services alongside room inventory.' },
                    { title: 'Sustainability pledge 2026', description: 'Commitment to carbon-neutral operations and eco-certified property badges.' },
                    { title: 'Series B funding', description: 'Investment to expand into Asia-Pacific and enhance guest safety features.' },
                ],
            },
            {
                heading: 'Brand Resources',
                type: 'grid-text',
                items: [
                    { title: 'Logo & guidelines', description: 'Primary and secondary logos, color palette (#49B9FF, navy, white), and typography (Playfair Display, system sans).' },
                    { title: 'Executive bios', description: 'Short and long-form biographies for leadership available on request.' },
                    { title: 'Product screenshots', description: 'High-resolution captures of booking flow, offers, and owner dashboard.' },
                    { title: 'Fact sheet', description: 'One-page PDF with key metrics, milestones, and contact information.' },
                ],
            },
        ],
        contactBlock: {
            title: 'Press contact',
            description: 'For urgent requests or embargoed materials, reach our communications desk directly.',
            details: [
                'Email: press@Bekele Mola Hotels.com',
                'Phone: +1 (555) 014-2200',
                'Hours: Mondayâ€“Friday, 9 AM â€“ 6 PM EST',
            ],
        },
    },

    blog: {
        slug: 'blog',
        badge: 'Travel Insights',
        titleLead: 'The Bekele Mola Hotels',
        titleHighlight: 'Journal',
        subtitle: 'Stories, guides, and inspiration for your next unforgettable stay.',
        heroImage: img('1414235077428-338989a2e8c0'),
        accent: 'blue',
        intro: [
            'Our editorial team partners with travel writers, chefs, and local experts to bring you authentic destination content â€” from hidden boutique hotels to seasonal offer breakdowns and hospitality trends.',
            'Whether you are planning a summer escape, romantic weekend, or luxury retreat, the Journal helps you book smarter and travel deeper.',
        ],
        sections: [
            {
                heading: 'Featured Topics',
                type: 'cards',
                items: [
                    { icon: 'âœˆï¸', title: 'Destination guides', description: 'Neighborhood tips, best seasons to visit, and curated hotel picks.' },
                    { icon: 'ðŸ½ï¸', title: 'Food & hospitality', description: 'Chef interviews, spa rituals, and on-property experiences worth booking.' },
                    { icon: 'ðŸ’Ž', title: 'Luxury decoded', description: 'What early-bird rates, suites, and concierge perks really include.' },
                    { icon: 'ðŸŒ¿', title: 'Sustainable travel', description: 'Eco-certified stays and low-impact itineraries.' },
                ],
            },
            {
                heading: 'Latest Articles',
                type: 'list',
                items: [
                    { title: 'Five coastal hotels perfect for a Summer Escape', description: 'How to use our seasonal package for a free night and daily breakfast.' },
                    { title: 'Romantic Getaway: planning the perfect two-night itinerary', description: 'Spa timing, private dinners, and room upgrades explained.' },
                    { title: 'Booking 60 days ahead: inside the Luxury Retreat offer', description: 'Maximize savings without sacrificing flexibility.' },
                    { title: 'Hospitality beyond the room: spa, dining, and tours', description: 'A guest guide to our new in-stay services marketplace.' },
                ],
            },
        ],
        contactBlock: {
            title: 'Contribute or subscribe',
            description: 'Writers and photographers may pitch story ideas. Readers can receive weekly digest updates.',
            details: [
                'Editorial: editorial@Bekele Mola Hotels.com',
                'Newsletter: manage preferences from any Journal email footer',
                'Republishing: credit Bekele Mola Hotels Journal with a link to the original article',
            ],
        },
    },

    partners: {
        slug: 'partners',
        badge: 'Grow Together',
        titleLead: 'Partner',
        titleHighlight: 'With Bekele Mola Hotels',
        subtitle: 'List your property, reach global travelers, and grow revenue with our platform.',
        heroImage: img('1566073771259-6a8506099945'),
        accent: 'blue',
        intro: [
            'Bekele Mola Hotels partners with independent boutiques, resort groups, and experience providers who share our commitment to quality and guest trust. Our tools help you manage rooms, hospitality add-ons, pricing, and availability from one dashboard.',
            'From onboarding to marketing support, we are invested in your success â€” not just our commission.',
        ],
        stats: [
            { value: '30%', label: 'Avg. revenue uplift' },
            { value: '48h', label: 'Typical onboarding' },
            { value: '24/7', label: 'Partner support' },
            { value: '0', label: 'Setup fees' },
        ],
        sections: [
            {
                heading: 'Partner Benefits',
                type: 'cards',
                items: [
                    { icon: 'bar-chart', title: 'Owner dashboard', description: 'Add rooms, hospitality services, photos, and rates in minutes.' },
                    { icon: 'target', title: 'Qualified demand', description: 'Guests searching with dates, preferences, and verified profiles.' },
                    { icon: 'tag', title: 'Promotions', description: 'Feature in Exclusive Offers and seasonal campaigns.' },
                    { icon: 'lock', title: 'Secure payouts', description: 'Transparent reporting and reliable payment schedules.' },
                ],
            },
            {
                heading: 'Who we work with',
                type: 'list',
                items: [
                    { title: 'Hotels & resorts', description: 'From urban boutiques to beachfront luxury properties.' },
                    { title: 'Hospitality providers', description: 'Spas, restaurants, tours, and in-house experiences.' },
                    { title: 'Technology integrators', description: 'PMS, channel managers, and payment partners.' },
                    { title: 'Affiliate & travel brands', description: 'Co-marketing and referral programs with aligned audiences.' },
                ],
            },
        ],
        contactBlock: {
            title: 'Become a partner',
            description: 'Tell us about your property or business and our partnerships team will follow up.',
            details: [
                'Email: partners@Bekele Mola Hotels.com',
                'Include: property name, location, room count, and website',
                'Approved owners receive dashboard access after a brief verification review',
            ],
        },
    },

    help: {
        slug: 'help',
        badge: 'Guest Support',
        titleLead: 'Help',
        titleHighlight: 'Center',
        subtitle: 'Answers to common questions about booking, payments, and your stay.',
        heroImage: img('1578683010236-d716f9a3f461'),
        accent: 'emerald',
        intro: [
            'Welcome to the Bekele Mola Hotels Help Center. Here you will find clear guidance on creating an account, searching rooms, applying offers, managing bookings, and using hospitality add-ons.',
            'Most questions are answered below. For account-specific issues, note your booking reference when contacting support.',
        ],
        sections: [
            {
                heading: 'Getting Started',
                type: 'steps',
                items: [
                    { title: 'Create an account', description: 'Sign up as a guest with email. Hotel owners register separately and await admin approval.' },
                    { title: 'Search & filter', description: 'Enter destination, dates, and guests on the homepage or Rooms page.' },
                    { title: 'Book a room', description: 'Select a property, check availability, and confirm with Pay at Hotel or card where available.' },
                    { title: 'Track bookings', description: 'View upcoming and past stays under My Bookings when logged in.' },
                ],
            },
            {
                heading: 'Frequently Asked Questions',
                type: 'faq',
                items: [
                    { title: 'How do I apply an exclusive offer?', description: 'Open the offer detail page for terms, then book eligible dates. Promo codes are listed in the redemption steps.' },
                    { title: 'Can I modify my dates?', description: 'Contact support or the property directly. Changes depend on the hotel\'s policy and availability.' },
                    { title: 'What is hospitality ordering?', description: 'Book spa, dining, or services from the Hospitality page. Orders appear in My Bookings alongside room reservations.' },
                    { title: 'Is my payment secure?', description: 'We use industry-standard encryption. Pay at Hotel options are confirmed at the property.' },
                ],
            },
        ],
        contactBlock: {
            title: 'Still need help?',
            description: 'Our guest support team is ready to assist with bookings and account issues.',
            details: [
                'Email: help@Bekele Mola Hotels.com',
                'Include your booking ID and registered email',
                'Average response time: under 4 hours on business days',
            ],
        },
    },

    safety: {
        slug: 'safety',
        badge: 'Trust & Protection',
        titleLead: 'Safety &',
        titleHighlight: 'Trust',
        subtitle: 'How we protect guests, partners, and every stay on our platform.',
        heroImage: img('1557804506-669a67965ba0'),
        accent: 'emerald',
        stats: [
            { value: '24/7', label: 'Safety desk monitoring' },
            { value: '48h', label: 'Partner verification' },
            { value: '256-bit', label: 'Payment encryption' },
            { value: '<2hr', label: 'Urgent case response' },
        ],
        intro: [
            'Your safety is foundational to everything we build. Bekele Mola Hotels verifies partner properties, secures personal data, and provides clear policies so you can book with confidence.',
            'We continuously improve our standards through guest feedback, partner audits, and collaboration with industry security experts.',
        ],
        sections: [
            {
                heading: 'Our Safety Pillars',
                type: 'cards',
                items: [
                    { icon: 'ðŸ”', title: 'Secure accounts', description: 'Encrypted passwords, JWT authentication, and role-based access for owners and admins.' },
                    { icon: 'âœ…', title: 'Verified partners', description: 'Hotel owners complete profile review before listing rooms or hospitality services.' },
                    { icon: 'ðŸ“‹', title: 'Transparent policies', description: 'Clear cancellation, house rules, and offer terms on every listing.' },
                    { icon: 'ðŸ›¡ï¸', title: 'Data privacy', description: 'We collect only what is needed to book and improve your experience.' },
                ],
            },
            {
                heading: 'Guest Guidelines',
                type: 'list',
                items: [
                    { title: 'Review property details', description: 'Read descriptions, amenities, and policies before confirming payment.' },
                    { title: 'Communicate through official channels', description: 'Use Bekele Mola Hotels messaging and support for disputes â€” avoid off-platform payments.' },
                    { title: 'Report concerns immediately', description: 'Safety issues at a property should be reported to support@Bekele Mola Hotels.com with photos if possible.' },
                    { title: 'Respect local laws', description: 'Follow destination regulations, check-in requirements, and property house rules.' },
                ],
            },
        ],
        contactBlock: {
            title: 'Report a safety concern',
            description: 'Urgent matters receive priority handling within two hours during business hours.',
            details: [
                'Email: safety@Bekele Mola Hotels.com',
                'Emergency on-property: contact local authorities first, then notify us',
                'We may suspend listings pending investigation',
            ],
        },
    },

    cancel: {
        slug: 'cancel',
        badge: 'Booking Policy',
        titleLead: 'Cancellation &',
        titleHighlight: 'Refunds',
        subtitle: 'Understand how changes, cancellations, and refunds work on Bekele Mola Hotels.',
        heroImage: img('1507525428034-b723cf961d3e'),
        accent: 'orange',
        intro: [
            'Plans change â€” we get it. Cancellation rules depend on the property, rate type, and how close you are to check-in. This page explains general policies and how to request a change.',
            'Always review the specific cancellation terms shown before you confirm a booking, as partner policies may vary.',
        ],
        sections: [
            {
                heading: 'Cancellation Types',
                type: 'grid-text',
                items: [
                    { title: 'Flexible', description: 'Full refund if you cancel before the deadline shown at checkout â€” often 24â€“48 hours before arrival.' },
                    { title: 'Moderate', description: 'Partial refund or credit depending on timing; common for promotional rates.' },
                    { title: 'Non-refundable', description: 'No refund after booking; typically tied to deepest discounts or exclusive offers.' },
                    { title: 'Pay at Hotel', description: 'No card charge upfront; cancel per property policy to avoid no-show fees.' },
                ],
            },
            {
                heading: 'How to Cancel',
                type: 'steps',
                items: [
                    { title: 'Locate your booking', description: 'Sign in and open My Bookings to find the reservation.' },
                    { title: 'Check eligibility', description: 'Review the cancellation window and any fees listed on your confirmation.' },
                    { title: 'Submit request', description: 'Email support@Bekele Mola Hotels.com with your booking ID if self-service cancel is unavailable.' },
                    { title: 'Refund timing', description: 'Approved refunds process within 5â€“10 business days to your original payment method.' },
                ],
            },
            {
                heading: 'Hospitality orders',
                type: 'faq',
                items: [
                    { title: 'Can I cancel a spa or dining order?', description: 'Contact support at least 48 hours before the scheduled service when possible.' },
                    { title: 'No-shows', description: 'Missing a reserved service without notice may result in full charge per partner policy.' },
                ],
            },
        ],
        contactBlock: {
            title: 'Cancellation assistance',
            description: 'We will clarify your options and coordinate with the property when needed.',
            details: [
                'Email: cancel@Bekele Mola Hotels.com',
                'Subject: Cancel â€” [Booking ID]',
                'Attach confirmation email for faster processing',
            ],
        },
    },

    support: {
        slug: 'support',
        badge: 'We Are Here',
        titleLead: 'Customer',
        titleHighlight: 'Support',
        subtitle: 'Dedicated assistance for guests, hotel owners, and partnership inquiries.',
        heroImage: img('1556761175-5973dc0f32e7'),
        accent: 'blue',
        intro: [
            'The Bekele Mola Hotels support team helps you before, during, and after your stay. From booking questions to owner dashboard help, we aim for fast, friendly, and accurate resolutions.',
            'Choose the channel that fits your situation â€” many issues are resolved within the same business day.',
        ],
        stats: [
            { value: '<4h', label: 'Avg. email response' },
            { value: '94%', label: 'Satisfaction score' },
            { value: '12', label: 'Languages supported' },
            { value: '24/7', label: 'Urgent line' },
        ],
        sections: [
            {
                heading: 'Support by Topic',
                type: 'cards',
                items: [
                    { icon: 'briefcase', title: 'Guest bookings', description: 'Changes, payments, My Bookings, offers, and hospitality orders.' },
                    { icon: 'hotel', title: 'Hotel owners', description: 'Listings, approvals, dashboard, payouts, and availability.' },
                    { icon: 'credit-card', title: 'Billing', description: 'Invoices, refunds, and payment method updates.' },
                    { icon: 'wrench', title: 'Technical issues', description: 'Login problems, site errors, and mobile browser compatibility.' },
                ],
            },
            {
                heading: 'Contact Channels',
                type: 'list',
                items: [
                    { title: 'General support', description: 'support@Bekele Mola Hotels.com â€” all guest and owner inquiries.' },
                    { title: 'Phone (urgent)', description: '+1 (555) 800-4663 â€” booking-day emergencies and check-in issues.' },
                    { title: 'Live chat', description: 'Available on the website weekdays 8 AM â€“ 10 PM local time.' },
                    { title: 'Owner priority line', description: 'ownersupport@Bekele Mola Hotels.com â€” verified partners only.' },
                ],
            },
        ],
        contactBlock: {
            title: 'Before you write',
            description: 'Include your booking ID, account email, and a brief description. Screenshots help us resolve faster.',
            details: [
                'Booking ID format: HB-XXXXXX',
                'Check Help Center for instant answers',
                'We never ask for your password by email',
            ],
        },
    },

    access: {
        slug: 'access',
        badge: 'Inclusive Travel',
        titleLead: 'Accessibility &',
        titleHighlight: 'Inclusion',
        subtitle: 'Our commitment to accessible experiences for every traveler.',
        heroImage: img('1573496359142-b8d87734a5a2'),
        accent: 'emerald',
        intro: [
            'Bekele Mola Hotels believes travel should be welcoming for everyone. We work with partners to surface accessibility information, improve our digital products for assistive technologies, and train support staff on inclusive service.',
            'We are continuously improving â€” your feedback helps us prioritize what matters most to our community.',
        ],
        sections: [
            {
                heading: 'Digital Accessibility',
                type: 'list',
                items: [
                    { title: 'Keyboard navigation', description: 'Core flows support tab navigation and visible focus states.' },
                    { title: 'Screen reader compatibility', description: 'Semantic HTML, alt text on images, and descriptive labels on forms.' },
                    { title: 'Color contrast', description: 'Text and interactive elements meet WCAG AA targets where possible.' },
                    { title: 'Responsive design', description: 'Readable layouts on mobile, tablet, and desktop screen sizes.' },
                ],
            },
            {
                heading: 'Property Accessibility',
                type: 'cards',
                items: [
                    { icon: 'â™¿', title: 'Mobility', description: 'Partners may list step-free access, elevators, and accessible rooms.' },
                    { icon: 'ðŸ‘ï¸', title: 'Visual & hearing', description: 'Braille, hearing loops, and visual alarms where properties provide them.' },
                    { icon: 'ðŸ•', title: 'Service animals', description: 'Policies vary by property â€” details shown on each listing when supplied.' },
                    { icon: 'ðŸ“ž', title: 'Assisted support', description: 'Support can help filter or confirm accessibility features before you book.' },
                ],
            },
            {
                heading: 'Request accommodations',
                type: 'faq',
                items: [
                    { title: 'Need help finding an accessible room?', description: 'Email access@Bekele Mola Hotels.com with your dates, destination, and requirements.' },
                    { title: 'Report a barrier on our website', description: 'Describe the page and issue â€” we treat accessibility bugs as high priority.' },
                ],
            },
        ],
        contactBlock: {
            title: 'Accessibility feedback',
            description: 'We welcome suggestions and reports to improve inclusive travel on Bekele Mola Hotels.',
            details: [
                'Email: access@Bekele Mola Hotels.com',
                'Response within 3 business days',
                'Optional: phone support at +1 (555) 800-4663 for booking assistance',
            ],
        },
    },
}

export const getFooterPage = (slug) => footerPages[slug] || null

export const footerPageSlugs = Object.keys(footerPages)

