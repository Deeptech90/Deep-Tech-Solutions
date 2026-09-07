import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// ─── PUBLISHED POSTS ──────────────────────────────────────────────────────────
// To add a post:
//   1. Add an entry to the `posts` map below
//   2. Set comingSoon: false, add a real date and full content HTML
//   3. Add the slug to the PUBLISHED_POSTS list in app/blog/page.tsx
//   4. Update InsightsSection.tsx to set comingSoon: false + slug
// ─────────────────────────────────────────────────────────────────────────────

const SITE_URL = "https://www.deeptechsolutions.online";


type Post = {
  title: string;
  date: string;
  isoDate: string;
  category: string;
  readTime: string;
  description: string;
  content: string;
  comingSoon?: boolean;
};

const posts: Record<string, Post> = {
  // ── Published posts ─────────────────────────────────────────────────────────

  "local-seo-guide": {
    title: "Why Your Google Business Profile Is Your Most Powerful Local Marketing Tool",
    date: "1 September 2026",
    isoDate: "2026-09-01",
    category: "Local SEO",
    readTime: "5 min read",
    description:
      "Most local businesses set up their GBP once and forget it. Here's why that's costing you calls, walk-ins, and revenue — and exactly what to do instead.",
    content: `
<p>Your Google Business Profile (GBP) is the single most visible piece of online real estate your local business owns — and it costs nothing to use. Yet most businesses treat it as a one-time setup task: claim the listing, add opening hours, upload a photo or two, and move on.</p>

<p>That's a mistake that's actively costing you customers.</p>

<h2>Why GBP Matters More Than Your Website for Local Searches</h2>

<p>When someone searches "dentist near me" or "best Indian restaurant in [city]," they see the <strong>Local Pack</strong> — the map with three business listings — before they see any websites. That Local Pack is powered entirely by Google Business Profile data.</p>

<p>Here's the uncomfortable truth: a mediocre website with an excellent GBP will outperform a beautiful website with a neglected GBP, every single time in local search.</p>

<p>The three factors Google uses to rank Local Pack results are:</p>

<ol>
  <li><strong>Relevance</strong> — does your profile match what the searcher needs?</li>
  <li><strong>Distance</strong> — how close is your business to the searcher?</li>
  <li><strong>Prominence</strong> — how well-known and trusted does Google think you are?</li>
</ol>

<p>You can't control distance. But relevance and prominence are entirely within your control — and most businesses aren't doing the work to optimise either.</p>

<h2>The 7 Things Most Businesses Get Wrong</h2>

<h3>1. Incomplete Business Category Selection</h3>

<p>Google lets you choose a primary category and multiple secondary categories. Most businesses choose one broad primary category and leave it there.</p>

<p>If you run a dental clinic, your primary category might be "Dentist." But if you also offer teeth whitening, Invisalign, and emergency appointments, those should be reflected in your secondary categories: "Cosmetic Dentist," "Orthodontist," "Emergency Dental Service."</p>

<p>Each secondary category is another set of search queries you can rank for. Leaving them blank is leaving money on the table.</p>

<h3>2. Sparse Business Description</h3>

<p>You get 750 characters for your business description. Use them. Write it in plain language that your customers would use, not corporate-speak. Include your key services, your target customer, and your location naturally — but don't keyword-stuff.</p>

<p>A good test: would your description answer the question "why should I choose this business over the one next door?" If not, rewrite it.</p>

<h3>3. No Google Posts</h3>

<p>Google Posts are mini-announcements that appear directly on your GBP. They disappear after seven days (or when an event ends), which is exactly why most businesses ignore them — it feels like effort for something temporary.</p>

<p>But consistency with Posts sends a strong "active business" signal to Google. Aim for at least one post per week. Ideas: a weekly special, a new service, a staff spotlight, a response to a common question, or a seasonal offer.</p>

<h3>4. Ignoring the Q&A Section</h3>

<p>Anyone can ask — and anyone can answer — questions on your GBP listing. If you're not monitoring this, a competitor or a misinformed customer could be answering questions about your business incorrectly.</p>

<p>Better strategy: pre-populate the Q&A section yourself. Think of the five most common questions you get asked (price ranges, parking availability, whether you take NHS patients, how to book an appointment) and add them yourself, then answer them yourself. This also helps with search visibility since Google indexes Q&A content.</p>

<h3>5. Not Responding to Reviews</h3>

<p>Responding to reviews — both positive and negative — improves your local ranking and builds customer trust. Google has confirmed that responding to reviews is a ranking factor.</p>

<p>For positive reviews: a brief, genuine, personalised response. Avoid copy-pasting the same "Thanks for your review!" template — it reads as automated and undermines trust.</p>

<p>For negative reviews: respond within 24–48 hours. Acknowledge the issue, apologise without being defensive, and offer to resolve it offline. Never argue publicly — even if the customer is wrong. How you handle complaints is often more trust-building than the complaint itself.</p>

<h3>6. Low-Quality or Outdated Photos</h3>

<p>Listings with photos receive 42% more requests for directions and 35% more click-throughs to websites than listings without photos, according to Google's own data.</p>

<p>Upload photos regularly — Google rewards listings that are active. For a restaurant, this means food photography, the dining room, the team, the kitchen. For a dental clinic: reception area, treatment room (clean and welcoming, not clinical-looking), and happy team photos. Avoid stock photography; Google can detect it and it reduces trust.</p>

<h3>7. Not Using the "Products" or "Services" Sections</h3>

<p>GBP lets you list individual products and services with names, descriptions, and prices (or price ranges). Most businesses either skip this entirely or add a couple of generic entries.</p>

<p>Build these out fully. Each service listing is a micro-landing page that can rank for specific searches. A dental clinic listing "teeth whitening — from £299" or a restaurant listing its most popular dishes is giving Google highly specific content to serve to searchers with high intent.</p>

<h2>The Compounding Effect of GBP Signals</h2>

<p>Here's what makes GBP optimisation so powerful: the effects compound. Reviews lead to more visibility, which leads to more customers, which leads to more reviews. Active posts signal freshness, which improves ranking, which drives more traffic. Detailed service listings capture more long-tail searches, which bring in higher-intent visitors.</p>

<p>Unlike paid advertising, which stops working the moment you stop paying, a well-maintained GBP keeps generating leads 24/7 at zero ongoing cost.</p>

<h2>The Maintenance Rhythm That Works</h2>

<p>Sustainable GBP management doesn't require hours of effort. Here's the weekly and monthly routine I recommend to clients:</p>

<p><strong>Weekly (15–20 minutes):</strong></p>
<ul>
  <li>Publish one Google Post (a special, an offer, or a tip)</li>
  <li>Respond to any new reviews</li>
  <li>Check the Q&A section for new questions</li>
</ul>

<p><strong>Monthly (30–45 minutes):</strong></p>
<ul>
  <li>Add 3–5 fresh photos</li>
  <li>Review your business hours for accuracy (especially holidays)</li>
  <li>Check your insights: which searches are driving impressions, which photos are getting views</li>
  <li>Update your services or products if anything has changed</li>
</ul>

<h2>One More Thing: Citations and Consistency</h2>

<p>Your NAP — Name, Address, Phone number — must be <em>exactly</em> consistent across every online directory: your website, GBP, Facebook, Yelp, TripAdvisor, local directories. Even small inconsistencies (e.g., "St." vs "Street", or different phone number formats) erode Google's confidence in your listing and hurt your local ranking.</p>

<p>Run a citation audit. Fix inconsistencies. Then build new citations on relevant directories in your industry and location.</p>

<h2>The Bottom Line</h2>

<p>Your Google Business Profile is the highest-ROI marketing investment available to a local business. It's free, it's high-visibility, and most of your competitors are doing it wrong.</p>

<p>If you're not actively managing yours, you're giving those customers to someone else.</p>

<p>Need help setting up or auditing your GBP — or want a full local SEO strategy built around it? <a href="/book">Book a free strategy session</a> and we'll walk through your current setup together.</p>
    `.trim(),
  },

  "restaurant-delivery-apps": {
    title: "How Restaurants Can Reduce Dependence on Delivery Apps (And Keep More Revenue)",
    date: "1 September 2026",
    isoDate: "2026-09-01",
    category: "Restaurant Marketing",
    readTime: "7 min read",
    description:
      "Third-party platforms take 15–30% of every order. Direct online ordering isn't complicated — and it pays for itself fast. Here's a practical guide to shifting the balance.",
    content: `
<p>If your restaurant takes delivery orders through Uber Eats, Deliveroo, Just Eat, or DoorDash, you already know the economics aren't pretty. Commission rates range from 15% to 30% per order, sometimes higher on premium placement packages. On a £25 order with a 30% commission, you're keeping £17.50 before food costs, staff, and overhead.</p>

<p>The platforms will argue they bring you customers you wouldn't otherwise have. And that's partially true — especially in your early days. But once your restaurant has an established customer base, continuing to route all your online orders through a third party is like paying rent on a shop you already own.</p>

<p>This post is about how to strategically shift a meaningful portion of your orders to direct channels — without abandoning the delivery apps entirely.</p>

<h2>Understanding the Actual Cost</h2>

<p>Let's run the numbers properly. Suppose your restaurant does £10,000 in delivery sales per month, all through third-party apps at an average 25% commission rate. You're paying £2,500 per month — £30,000 per year — for the privilege.</p>

<p>What if you shifted even 30% of that volume to direct orders? That's £3,000/month in direct orders. Even if your direct ordering system costs £100/month to operate and you spend another £200/month nudging customers toward it, you're still saving roughly £550/month versus the app commission rate on that volume. Over a year, that's £6,600 retained.</p>

<p>That's not theoretical — that's the actual math for a mid-size independent restaurant. The savings scale with your volume.</p>

<h2>Why Most Restaurants Don't Shift (And Why Those Reasons Are Surmountable)</h2>

<p>The three most common objections I hear from restaurant owners:</p>

<ol>
  <li><strong>"Our customers won't bother to order directly — they're used to the app."</strong></li>
  <li><strong>"Setting up a direct ordering system sounds complicated."</strong></li>
  <li><strong>"We'd lose the discovery traffic the apps bring."</strong></li>
</ol>

<p>Each of these is real — but none of them are insurmountable.</p>

<h3>On customer behaviour</h3>

<p>Your regulars — the customers who've already discovered you and love your food — are the most likely to order directly, especially if there's an incentive. A 10% discount for ordering direct, or a loyalty program that only applies to direct orders, shifts the economics decisively in the customer's mind. They're not ordering direct out of altruism; they're doing it because you've given them a reason to.</p>

<p>You don't need to convert every customer. Converting your top 20% of regulars to direct ordering can account for a disproportionate share of your revenue shift.</p>

<h3>On technical complexity</h3>

<p>Direct ordering systems have become dramatically simpler. Solutions like Square Online, Toast, Flipdine, and dedicated WooCommerce plugins integrate with your existing website and handle the customer experience, payment processing, and order management. Setup time is measured in days, not months.</p>

<p>If your website doesn't currently support ordering, adding a dedicated ordering page isn't a major rebuild — it's an addition to what you already have.</p>

<h3>On discovery</h3>

<p>This is the most legitimate concern. The apps do bring in new customers who wouldn't have found you otherwise. The answer isn't to leave the apps — it's to use the apps for discovery and your own channels for retention.</p>

<p>Think of it this way: the first order comes through Deliveroo. Every subsequent order from that customer should come direct. The app paid for the acquisition; your retention systems do the rest.</p>

<h2>Five Practical Strategies That Work</h2>

<h3>1. Put a Direct Ordering CTA Inside Every Delivery Package</h3>

<p>This is the highest-leverage, lowest-cost thing you can do today. Every delivery order that goes out should include a physical insert: a card, a sticker on the bag, or a printed flyer that says something like:</p>

<blockquote>
  <p>"Loved your meal? Order direct at [yourwebsite.com] and get 10% off your next order. No apps, no extra fees — just great food."</p>
</blockquote>

<p>This reaches customers at peak receptiveness — they're eating your food right now and they liked it enough to order from you. The barrier to scan a QR code and save the link is genuinely low.</p>

<h3>2. Build a Simple Loyalty Program for Direct Orders Only</h3>

<p>A basic loyalty mechanic — stamp cards, points, or a simple "5th order free" system — creates ongoing incentive to order direct. Importantly, this only applies to direct orders, which makes the distinction tangible for customers.</p>

<p>Digital loyalty programs (via apps like Stamp Me, LoyaltyLion, or even a simple email-based system) make this trackable and scalable. But even physical stamp cards work if you're willing to honour them.</p>

<h3>3. Create a Direct Ordering Incentive for Your Social Audience</h3>

<p>If you have even a modest Instagram or Facebook following, a monthly "direct order exclusive" offer works well — a free drink with every order, a discounted combo, early access to a new dish. Promote it on social, send it via email if you collect customer emails, and make it clear that this deal is only available when ordering through your website.</p>

<p>This trains your audience to think of your direct channel as the premium experience — not the apps.</p>

<h3>4. Optimise Your Google Business Profile for Direct Orders</h3>

<p>Your GBP listing lets you add a "Order Food" or "Order Online" button that links directly to your ordering page. If that button currently points to Uber Eats, change it to your direct ordering system. This is free and takes five minutes.</p>

<p>Customers who find you via Google and want to order are high-intent and often don't have a preference for which platform they use — they just want the food. Removing friction between that intent and your direct ordering page captures a significant portion of this traffic.</p>

<h3>5. Run a "Direct Order Week" Campaign Once Per Quarter</h3>

<p>A concentrated promotional push — where ordering direct gets a meaningful discount or bonus for seven days — creates a habit-forming moment. First-time direct orderers who have a good experience often continue ordering direct by default, since the habit is established and the app is no longer the path of least resistance.</p>

<p>Pair this with a follow-up email or SMS after the first direct order: "Thanks for ordering direct — here's a code for 10% off your next one." Converting the first order into a second direct order is the critical step.</p>

<h2>Building the Foundation: What You Actually Need</h2>

<p>To run direct online orders effectively, you need three things:</p>

<ol>
  <li><strong>An ordering page</strong> — either a dedicated ordering platform integrated with your website, or a standalone solution. Should be mobile-first, fast-loading, and frictionless.</li>
  <li><strong>A payment processor</strong> — Stripe is the standard choice for flexibility and cost. Square works well if you're already using their POS system.</li>
  <li><strong>A way to capture customer contact details</strong> — email or phone number at checkout. This is how you re-market to direct customers and build genuine CRM data that you own (unlike on the delivery apps, where the customer relationship belongs to the platform).</li>
</ol>

<p>That third point is more valuable than it might initially appear. When you have a customer's email and order history, you can reach them directly — for promotions, new menu launches, seasonal specials. The apps have that data about your customers; you don't. Direct ordering is how you reclaim it.</p>

<h2>The Right Balance</h2>

<p>I'm not suggesting you delete your Deliveroo account. The delivery apps are still valuable for discovery, especially if you're newer or expanding to a new area. What I am suggesting is that you treat them as top-of-funnel acquisition tools — and build your own systems to convert that first-time app customer into a long-term direct customer.</p>

<p>Aim for 60–70% of your regular customer orders to come direct within 12 months. At that split, you've dramatically reduced your commission exposure while still benefiting from app-driven discovery.</p>

<h2>Getting Started</h2>

<p>The fastest path to your first direct orders is usually:</p>

<ol>
  <li>Set up a basic ordering page (takes 2–5 days with the right tools)</li>
  <li>Add a "Order Direct" button to your GBP and social bios</li>
  <li>Print and include an insert in all delivery packages with a first-order discount</li>
  <li>Tell your regulars — via Instagram story, WhatsApp status, or in-person</li>
</ol>

<p>If you'd like help setting up a direct ordering system that integrates with your existing website and marketing, <a href="/book">book a free strategy session</a> — I'll walk you through the options that make sense for your setup and volume.</p>
    `.trim(),
  },

  // ── New commercial articles ─────────────────────────────────────────────────

  "small-business-website-cost": {
    title: "How Much Does a Small Business Website Cost in 2026?",
    date: "5 September 2026",
    isoDate: "2026-09-05",
    category: "Website Cost",
    readTime: "6 min read",
    description:
      "A transparent breakdown of small business website costs — what drives the price up or down, what's included, and what to watch out for when comparing quotes.",
    content: `
<p>One of the most common questions I get from business owners is: <em>how much should a website actually cost?</em> The answer is rarely satisfying because it genuinely depends — but that doesn't mean you can't get a clear framework for evaluating what you should pay.</p>

<p>This post gives you a transparent breakdown of small business website costs in 2026, what drives the price up or down, and what to be cautious about when comparing quotes.</p>

<h2>The Short Answer</h2>

<p>A professionally built small business website should cost between $199 and $1,500 depending on complexity. Here's how that breaks down:</p>

<ul>
  <li><strong>$199–$300:</strong> Basic 5-page website — home, about, services, contact, basic blog. Mobile-first, SEO ready, contact form. Suitable for most local service businesses, consultants, and professionals who primarily need a professional online presence.</li>
  <li><strong>$300–$600:</strong> Growth-focused website with booking system, local SEO, landing pages, analytics, and more detailed service pages. Suitable for dental clinics, restaurants, law firms, and businesses actively trying to generate leads.</li>
  <li><strong>$600–$1,500:</strong> Advanced websites with e-commerce, CRM integration, custom booking flows, multiple location pages, ongoing SEO, and complex functionality.</li>
</ul>

<p>Anything below $199 from a professional developer should raise questions about what's actually included. Anything above $1,500 for a basic small business website from a solo developer or small agency warrants a detailed explanation.</p>

<h2>What Makes a Website More Expensive?</h2>

<p>These are the most common factors that legitimately drive the cost of a small business website upward:</p>

<h3>Number of Pages</h3>
<p>More pages mean more content to design, develop, and optimise. A 5-page site and a 20-page site with individual service and location pages are meaningfully different projects.</p>

<h3>Custom Functionality</h3>
<p>Booking systems, e-commerce, member portals, custom calculators, integrations with practice management software — each of these takes development time. A contact form is simple. Real-time booking with calendar sync and automated confirmation emails is not.</p>

<h3>SEO Requirements</h3>
<p>Basic on-page SEO (title tags, meta descriptions, schema, sitemap) should be included in any professional website. Local SEO with multiple location pages, Google Business Profile setup, and citation building is additional work — and is often worth it for local businesses.</p>

<h3>Content and Copywriting</h3>
<p>Many developers quote for the technical build only. Writing the actual content for each page — which requires understanding your business, your customers, and your competitive positioning — is skilled work that adds cost. If a quote doesn't include copywriting, you'll either write it yourself or pay separately.</p>

<h3>Design Complexity</h3>
<p>A website built from a polished template with your colours and content costs less than a fully custom visual design built from scratch. Both can look great — the question is whether you need something unique enough to justify the extra cost.</p>

<h2>What Should Always Be Included</h2>

<p>Regardless of price, a professional small business website should include:</p>

<ul>
  <li>Mobile-first, responsive design that works on all screen sizes</li>
  <li>Fast loading speed (Core Web Vitals compliance)</li>
  <li>Basic on-page SEO (title tags, meta descriptions, H1 structure, sitemap, schema markup)</li>
  <li>A contact form or booking system</li>
  <li>SSL certificate (HTTPS)</li>
  <li>Google Search Console setup and verification</li>
  <li>Some form of post-launch support (even if limited)</li>
</ul>

<p>If a quote doesn't include these, it's not a complete website — it's a starting point that will need additional investment immediately.</p>

<h2>The Agency Premium</h2>

<p>Web design agencies typically charge 40–80% more than equivalent freelance developers for the same output. That premium pays for:</p>

<ul>
  <li>Account managers and project managers</li>
  <li>Internal handoffs between designer, developer, and SEO specialist</li>
  <li>Office overhead</li>
  <li>Agency margin</li>
</ul>

<p>Whether that premium is worth it depends on your situation. If you're a large business with complex needs and you value having a formal account management structure, an agency makes sense. If you're a small business that needs a professional website and responsive communication, a specialist freelancer will almost always deliver comparable (or better) quality at a lower cost.</p>

<h2>Ongoing Costs After Launch</h2>

<p>The website build is a one-time cost. But there are ongoing costs to account for:</p>

<ul>
  <li><strong>Domain name:</strong> $10–$15 per year</li>
  <li><strong>Hosting:</strong> $0–$20 per month (Vercel's free tier covers most small business sites; paid tiers are needed for larger traffic)</li>
  <li><strong>CMS subscription (if applicable):</strong> $0–$50/month for Sanity, Contentful, or similar</li>
  <li><strong>Maintenance:</strong> Optional but recommended — plugin updates, security patches, performance monitoring. Typically $49–$99/month if you hire someone, free if you manage it yourself</li>
  <li><strong>SEO:</strong> Ongoing local SEO management typically runs $79–$300/month depending on the level of service</li>
</ul>

<h2>How to Evaluate a Quote</h2>

<p>When you receive a quote for a small business website, ask these questions:</p>

<ol>
  <li>What pages are included, and what does each page contain?</li>
  <li>Is copywriting included, or do I need to provide all content?</li>
  <li>What SEO setup is included?</li>
  <li>Is hosting included, or is that separate?</li>
  <li>What post-launch support is included and for how long?</li>
  <li>Can I see live examples of websites you've built at this price point?</li>
  <li>What's the revision policy?</li>
</ol>

<p>A developer who can answer all of these clearly and show you live examples of comparable work is worth paying for. Vague answers or reluctance to show previous work are red flags.</p>

<h2>The Bottom Line</h2>

<p>A professionally built small business website is one of the highest-ROI marketing investments a small business can make. Done well, it generates leads, builds credibility, and works 24/7 without further investment.</p>

<p>The question isn't just "what does it cost?" — it's "what does it need to do?" A website that looks professional but generates no enquiries is money spent, not money invested. Make sure whatever you invest in is built around your business goals, not just around visual aesthetics.</p>

<p>If you'd like a quote for your specific project, <a href="/contact">get in touch</a> — I'll put together a clear scope and price within 24 hours.</p>
    `.trim(),
  },

  "what-should-a-small-business-website-include": {
    title: "What Should a Small Business Website Include? (The Essential Checklist)",
    date: "5 September 2026",
    isoDate: "2026-09-05",
    category: "Website Design",
    readTime: "7 min read",
    description:
      "A practical checklist of what every small business website needs — from the technical foundations to the content and conversion elements that actually turn visitors into customers.",
    content: `
<p>Most small business websites are missing something important. Sometimes it's the obvious things (a phone number visible on mobile, a clear description of what the business actually does). Sometimes it's the less obvious things (schema markup, a Google Business Profile linked to the site, conversion tracking).</p>

<p>This checklist covers everything a small business website should include — organised by priority. Use it to audit your existing site, or as a specification for a new one.</p>

<h2>The Foundations (Non-Negotiable)</h2>

<h3>1. A Clear Value Proposition Above the Fold</h3>
<p>The first thing a visitor sees when they land on your homepage should answer three questions: what do you do, who do you serve, and why should I choose you? If your homepage opens with a generic hero image and a vague tagline, you're losing visitors before they scroll.</p>

<h3>2. Your Location and Contact Information</h3>
<p>For local businesses, your location should be visible without scrolling — ideally in the header. Your phone number should be a tappable link on mobile (<code>tel:</code> href). Your address should be in the footer of every page. This isn't just about user convenience — it's a local SEO signal.</p>

<h3>3. Mobile-First Design</h3>
<p>Over 60% of small business searches happen on mobile. Your website must work perfectly on smartphones — fast loading, easy navigation, tap-friendly CTAs, no horizontal scrolling. If you're not sure whether your site qualifies, test it on Google's Mobile-Friendly Test.</p>

<h3>4. Fast Loading Speed</h3>
<p>Google uses page speed as a ranking factor, and users abandon sites that take more than 3 seconds to load. Aim for a Largest Contentful Paint (LCP) under 2.5 seconds. Common causes of slow loading: unoptimised images, too many scripts, cheap shared hosting.</p>

<h3>5. SSL Certificate (HTTPS)</h3>
<p>Your URL should start with <code>https://</code>. This is standard for any professionally built site and required for any site that collects contact form data. Google marks non-HTTPS sites as "Not Secure" in Chrome, which damages trust.</p>

<h2>Pages Every Small Business Website Needs</h2>

<h3>Homepage</h3>
<p>Your most-visited page. Should establish what you do, who you serve, key service highlights, social proof (reviews or testimonials), and a clear call to action. Don't try to say everything on the homepage — its job is to direct people deeper.</p>

<h3>Services / What We Do</h3>
<p>A dedicated page for each service (or at minimum, a services overview page) helps with SEO and gives visitors the information they need to make a decision. Include what the service involves, who it's for, how it works, approximate pricing, and a booking/contact CTA.</p>

<h3>About / Who We Are</h3>
<p>People buy from people they trust. Your about page should introduce you and/or your team as humans — not corporate bios. Include your story, your values, and anything that differentiates you from competitors.</p>

<h3>Contact / Booking</h3>
<p>Make it trivially easy to get in touch. Include: a contact form, phone number, email address, WhatsApp button (for businesses where this is culturally relevant), and opening hours. An embedded Google Map helps for businesses with a physical location.</p>

<h2>Conversion Elements (What Turns Visitors Into Customers)</h2>

<h3>6. A Primary Call to Action</h3>
<p>Every page should have one clear primary CTA — book, call, get a quote, send a message. Don't offer five different ways to convert on the same page without one being obviously primary. Decision fatigue is real, and too many options lead to no action.</p>

<h3>7. Social Proof</h3>
<p>Customer testimonials, Google review ratings, case studies, or before-and-after examples. Place these throughout the site contextually — not just on a dedicated testimonials page that nobody navigates to.</p>

<h3>8. Trust Signals</h3>
<p>Professional associations, certifications, years in business, number of clients served, payment badges (if e-commerce). These reduce the perceived risk of contacting or hiring you.</p>

<h3>9. WhatsApp or Live Chat</h3>
<p>Many customers — especially in markets like India, the UK, and Southeast Asia — prefer messaging over phone calls or form submissions. A WhatsApp button reduces friction for a significant portion of your audience.</p>

<h2>SEO Essentials</h2>

<h3>10. Unique Title Tags and Meta Descriptions</h3>
<p>Every page should have a unique, keyword-relevant title tag (under 60 characters) and meta description (under 155 characters). These are what appear in Google search results. Generic titles like "Home | Company Name" are a missed SEO opportunity.</p>

<h3>11. Schema Markup</h3>
<p>Structured data helps Google understand your business. At minimum: LocalBusiness schema (name, address, phone, opening hours, URL) on your homepage. Service schema on service pages. FAQPage schema on FAQ sections.</p>

<h3>12. Sitemap and Robots.txt</h3>
<p>An XML sitemap submitted to Google Search Console tells Google about all your pages. A robots.txt file tells crawlers what they can and can't index. Both should be set up before launch.</p>

<h3>13. Google Search Console Verification</h3>
<p>Verifying your site with Google Search Console lets you see which searches are driving traffic, identify indexing issues, and monitor your performance over time. Set this up on launch day.</p>

<h3>14. Google Analytics</h3>
<p>Without analytics, you're flying blind. GA4 is free and shows you where your traffic comes from, which pages perform, and whether visitors are taking the actions you want.</p>

<h2>Often Overlooked</h2>

<h3>15. Accessible Contact on Mobile</h3>
<p>A sticky header with a phone number or "Call us" button on mobile is one of the simplest, highest-impact additions to a local business website. The easier you make it to call, the more calls you get.</p>

<h3>16. A Privacy Policy</h3>
<p>Required by GDPR, CCPA, and most other data protection frameworks if you collect any data (even just email addresses via a contact form). Link to it in the footer. If you use Google Analytics, you need one.</p>

<h3>17. Image Alt Text</h3>
<p>Every image should have descriptive alt text. This improves accessibility for screen reader users and provides additional context for search engines.</p>

<h3>18. Internal Linking</h3>
<p>Link between related pages on your site. A service page should link to the contact page. A blog post should link to the relevant service. This helps search engines understand your site structure and keeps visitors engaged.</p>

<h2>Where to Start If You're Auditing an Existing Site</h2>

<p>If you already have a website and want to know what's missing, start with the highest-impact items:</p>

<ol>
  <li>Is your phone number visible without scrolling on mobile?</li>
  <li>Does every page have a unique, descriptive title tag?</li>
  <li>Is there a clear CTA on every page?</li>
  <li>Are there customer testimonials visible on the homepage?</li>
  <li>Have you verified the site in Google Search Console?</li>
</ol>

<p>If you'd like a professional audit — or want to build a small business website that covers all of this from day one — <a href="/contact">send me a message</a> and I'll put together a clear plan for your project.</p>
    `.trim(),
  },

  "freelancer-vs-agency": {
    title: "Freelance Web Developer vs. Agency: Which Is Better for Your Small Business?",
    date: "5 September 2026",
    isoDate: "2026-09-05",
    category: "Hiring Advice",
    readTime: "5 min read",
    description:
      "A fair comparison of hiring a freelance web developer vs. a web design agency for a small business website — covering costs, communication, accountability, and quality.",
    content: `
<p>When you decide to invest in a professional website, you'll face an early decision: should you hire a freelance web developer or a web design agency?</p>

<p>Both have legitimate use cases. But for most small businesses, the default assumption that an agency is the "safer" or "more professional" choice doesn't hold up under scrutiny. Here's an honest comparison of both options.</p>

<h2>What You're Actually Paying For</h2>

<h3>Web Design Agency</h3>
<p>Agency pricing typically includes the actual development work plus significant overhead: account managers who handle client communication, project managers who coordinate internal handoffs, senior staff who review work, and general business overhead (office, payroll, profit margin).</p>

<p>For a small business website, you might pay $1,500–$5,000+ at a mid-size agency for a project that takes 6–12 weeks. You're buying process and institutional credibility, not necessarily better output.</p>

<h3>Freelance Web Developer</h3>
<p>With a freelancer, you're paying for the work itself — no overhead layers. A specialist freelancer who focuses on small business websites has often done hundreds of similar projects and has refined exactly what works. The absence of internal process doesn't mean absent quality; it means direct accountability.</p>

<p>A comparable small business website from an experienced freelancer typically costs $199–$800 and takes 2–4 weeks.</p>

<h2>Communication: The Most Significant Difference</h2>

<p>With an agency, your primary point of contact is usually an account manager. They relay your feedback to the designer, who relays it to the developer, who asks the project manager, who emails the account manager back. A two-minute conversation becomes a 48-hour email chain.</p>

<p>With a freelancer, you talk directly to the person building your website. You can say "can you make the button more prominent?" and watch it change in real-time on a shared screen. There's no game of telephone.</p>

<p>This isn't just a convenience difference — it's a quality difference. The developer who builds your site understands your business better when they're the one asking the questions, not someone reading a brief from someone else.</p>

<h2>Accountability</h2>

<p>Agencies have distributed accountability. If something goes wrong, you're dealing with a company — which can mean talking to multiple people and navigating internal politics before a resolution happens.</p>

<p>With a freelancer, accountability is singular. They delivered what they delivered, full stop. This can feel more exposed, but in practice it's often cleaner — there's no room for "the designer misunderstood the brief" or "the developer was sick and the handoff was rushed."</p>

<p>The risk with freelancers is real but manageable: vet your freelancer properly. Look at live examples of their work (not screenshots — actual URLs). Ask how they handle revisions and post-launch issues. Ask for a clear project agreement.</p>

<h2>When an Agency Makes Sense</h2>

<ul>
  <li>You're a medium or large business with complex requirements that genuinely benefit from a team of specialists</li>
  <li>You have a brand team and need formal stakeholder management across multiple internal departments</li>
  <li>Your project is large enough that a solo freelancer genuinely couldn't handle the scope</li>
  <li>You prefer the institutional relationship and formal account management structure</li>
</ul>

<h2>When a Freelancer Makes Sense</h2>

<ul>
  <li>You're a small or medium business that needs a professional website without enterprise-level overhead</li>
  <li>Direct communication and fast responses matter to you</li>
  <li>You want transparent, fixed pricing without hidden retainer structures</li>
  <li>You care about working with a specialist who understands your industry, not a generalist agency</li>
  <li>You want the person you talk to to actually be the person building your site</li>
</ul>

<h2>The Quality Question</h2>

<p>The assumption that agencies automatically produce better-quality work than freelancers is outdated. An experienced freelancer who specialises in small business websites has typically built dozens or hundreds of similar projects. They know what works and what doesn't. Their code is cleaner because they write it themselves and live with the consequences.</p>

<p>The variance is high in both camps. There are excellent agencies and excellent freelancers; there are also poorly organised agencies and unreliable freelancers. The vetting process is the same in both cases: look at live work, ask direct questions, and evaluate whether you get clear, specific answers.</p>

<h2>The Short Version</h2>

<p>For most small businesses, a specialist freelance web developer will deliver comparable or better results at significantly lower cost, with faster turnaround and clearer communication. The agency premium is real — it just doesn't usually translate into a better outcome for small business websites.</p>

<p>The one scenario where an agency adds unambiguous value: when your project is genuinely too large for one person. A 50-page website with e-commerce, multiple languages, and complex integrations might benefit from a team. A 10-page small business website almost certainly doesn't need one.</p>

<p>If you're evaluating options for a small business website, <a href="/contact">reach out</a> — I'm happy to give you an honest assessment of whether what you need is something I can deliver, or whether it genuinely needs a team.</p>
    `.trim(),
  },

  "how-to-get-more-leads-from-website": {
    title: "How to Get More Leads From Your Business Website",
    date: "5 September 2026",
    isoDate: "2026-09-05",
    category: "Lead Generation",
    readTime: "7 min read",
    description:
      "Your website is getting traffic but no enquiries? Here's a practical framework for diagnosing the problem and turning your website into a consistent source of qualified leads.",
    content: `
<p>Getting traffic to your website and getting leads from it are two entirely different problems. Many business owners have a website that ranks on Google, gets hundreds of visitors per month, and generates almost no enquiries. If that sounds familiar, this post is for you.</p>

<p>Before investing more in advertising or SEO to bring more traffic, it's worth diagnosing why your existing traffic isn't converting. More traffic to a leaking bucket doesn't fix the leak.</p>

<h2>Step 1: Diagnose the Problem</h2>

<p>The first thing to establish is whether you have a traffic problem or a conversion problem. Log into Google Analytics (or ask your developer to set it up if it's not there yet) and check:</p>

<ul>
  <li><strong>How many sessions per month?</strong> If it's under 100, you likely have a traffic problem — in which case SEO and Google Ads are worth investing in. If it's 500+ and you're getting no leads, you have a conversion problem.</li>
  <li><strong>What's your bounce rate?</strong> If over 70% of visitors leave without visiting a second page, something on your landing page is failing to engage them.</li>
  <li><strong>What's your average session duration?</strong> Under 30 seconds suggests visitors aren't finding what they're looking for.</li>
  <li><strong>Which pages are getting traffic?</strong> Are visitors landing on the right pages, or are they finding obscure content that doesn't match their intent?</li>
</ul>

<h2>Step 2: Fix the Three Most Common Conversion Killers</h2>

<h3>1. No Clear Call to Action</h3>
<p>Look at your homepage right now. What is the single most prominent thing a visitor is supposed to do? If you can't answer that immediately, neither can your visitors.</p>

<p>Every page needs one clear primary CTA — whether that's "Book a free consultation," "Get a quote," or "Call us now." That CTA should be:</p>
<ul>
  <li>Visible above the fold (without scrolling)</li>
  <li>Repeated at the bottom of the page</li>
  <li>Specific about what happens next ("Book a 30-minute call" is better than "Contact us")</li>
</ul>

<h3>2. Slow Loading on Mobile</h3>
<p>Over 65% of local business searches happen on mobile. A page that takes more than 3 seconds to load loses a significant portion of its traffic before anyone even sees your CTA. Test your mobile loading speed on Google PageSpeed Insights — if it's below 50, this is likely costing you leads daily.</p>

<h3>3. Missing Trust Signals</h3>
<p>Would you contact a business whose website had no testimonials, no reviews, no team photos, and no evidence of previous work? Probably not. Your visitors won't either. The threshold for trust in an online business relationship is higher than in a physical one — your website needs to do more work to establish credibility.</p>

<p>Minimum required: 3–5 genuine testimonials with names (and photos if possible), your phone number visible without scrolling, a clear description of who you are and where you're based.</p>

<h2>Step 3: Reduce Friction in the Enquiry Process</h2>

<p>Every additional step between "I want to contact this business" and "I've successfully made contact" loses a percentage of potential leads. Common friction points:</p>

<ul>
  <li><strong>Long contact forms:</strong> Asking for date of birth, company registration number, and detailed project specifications before someone has even made first contact is too much. Start with name, email or phone, and a brief description of what they need. Get the rest later.</li>
  <li><strong>No immediate response indication:</strong> After submitting a form, does anything happen? A simple "We'll be in touch within 24 hours" message reduces anxiety and abandonment.</li>
  <li><strong>Phone number not clickable on mobile:</strong> Your phone number should be a <code>tel:</code> link on mobile — one tap to call. If someone has to manually dial a number they read from a screen, many won't bother.</li>
  <li><strong>No WhatsApp option:</strong> In India, the UK, and most of Southeast Asia, messaging is the preferred first contact method. A WhatsApp button reduces friction significantly for a large segment of your potential audience.</li>
</ul>

<h2>Step 4: Match Your Page Content to Search Intent</h2>

<p>If someone searches "emergency plumber London" and lands on your homepage, they're not looking for your company history — they need to know you cover London, you're available now, and here's your phone number. If someone searches "teeth whitening cost Brighton," they want to see a price range, not a general cosmetic dentistry overview.</p>

<p>Landing pages that match the specific intent of the search query convert better than generic homepages. If you're running ads or targeting specific keywords, create dedicated landing pages for those searches rather than sending all traffic to the homepage.</p>

<h2>Step 5: Add Contextual Social Proof</h2>

<p>A single testimonials page that visitors have to navigate to is far less effective than testimonials placed contextually throughout the site. Place a relevant review or case study:</p>

<ul>
  <li>On the homepage, immediately after your value proposition</li>
  <li>On each service page, specific to that service</li>
  <li>Adjacent to your contact form ("Here's what our recent clients said...")</li>
</ul>

<p>This keeps social proof visible at every decision point in the visitor's journey, rather than requiring them to seek it out.</p>

<h2>Step 6: Set Up Conversion Tracking</h2>

<p>You can't improve what you can't measure. Set up goal tracking in Google Analytics 4 for:</p>
<ul>
  <li>Contact form submissions</li>
  <li>Phone number clicks (especially on mobile)</li>
  <li>WhatsApp link clicks</li>
  <li>Booking completions</li>
</ul>

<p>Once you can see which pages and traffic sources are generating conversions, you can invest more in what's working and fix what isn't.</p>

<h2>The Priority Order</h2>

<p>If you're doing this as an audit, here's the order of priority:</p>

<ol>
  <li>Set up Google Analytics and Search Console if you haven't already</li>
  <li>Check mobile loading speed — fix anything under 50</li>
  <li>Make your primary CTA visible above the fold on every important page</li>
  <li>Add testimonials to the homepage and service pages</li>
  <li>Make your phone number tappable on mobile</li>
  <li>Add a WhatsApp button if relevant to your market</li>
  <li>Simplify your contact form</li>
  <li>Set up conversion tracking</li>
</ol>

<p>Most of these are quick wins that don't require a full website rebuild — just intentional changes to what already exists.</p>

<p>If you'd like a professional audit of your website's conversion rate, <a href="/contact">get in touch</a>. I'll review your current setup and identify the specific changes most likely to generate more leads.</p>
    `.trim(),
  },

  "small-business-website-redesign-checklist": {
    title: "Small Business Website Redesign Checklist: 20 Things to Do Before and After",
    date: "5 September 2026",
    isoDate: "2026-09-05",
    category: "Website Redesign",
    readTime: "8 min read",
    description:
      "A comprehensive website redesign checklist for small businesses. What to do before you start, what to include in the new site, and what to check after launch.",
    content: `
<p>Redesigning a small business website is a significant investment. Done well, it improves search rankings, increases enquiries, and brings the professionalism of your online presence in line with the quality of your actual service. Done poorly, it can reset your SEO, confuse your existing customers, and cost you money without improving results.</p>

<p>This checklist helps you navigate the process — before you start, during the build, and after launch.</p>

<h2>Before You Start: 8 Things to Do First</h2>

<h3>1. Audit Your Current Traffic and Rankings</h3>
<p>Before you touch anything, understand what your current site is doing well. Log into Google Search Console and note which keywords are driving traffic, which pages are getting impressions, and which pages are indexed. This is the baseline you'll protect and build on.</p>

<h3>2. List All URLs That Currently Rank</h3>
<p>Export a list of every page on your existing site that appears in Google Search results. These URLs need to either be preserved (same URL structure) or redirected (301 redirect to the new equivalent page). Deleting ranking pages without redirects is one of the most common and damaging redesign mistakes.</p>

<h3>3. Document Your Current Conversion Rates</h3>
<p>If you have Google Analytics, note how many enquiries, form submissions, or calls you're currently getting per month. This is your baseline — after the redesign, you need to be generating at least this many, ideally more.</p>

<h3>4. Review Your Competitors</h3>
<p>Before designing, look at what the top 3–5 competitors in your area are doing. Note what's working (credible design, clear CTAs, good reviews placement) and what's not (slow loading, confusing navigation, no mobile optimisation). Your redesigned site should outperform these on every relevant metric.</p>

<h3>5. Define Success Clearly</h3>
<p>What does a successful redesign look like? More calls? More form submissions? Higher Google rankings for specific keywords? A shorter time-to-booking? Be specific. Vague goals produce vague outcomes.</p>

<h3>6. Collect Content Before the Build Starts</h3>
<p>Website builds stall when content isn't ready. Gather: current service descriptions, team bios and photos, customer testimonials, before-and-after photos (if applicable), and any certificates or accreditations you want to display. Having this ready before the designer starts prevents expensive delays.</p>

<h3>7. Decide What You're Keeping vs. What You're Replacing</h3>
<p>Not everything on your current site is wrong. Your branding, some of your content, and your existing photos might be worth keeping. Identify what's working (good reviews section, popular blog posts) and make sure these are preserved in the new site.</p>

<h3>8. Set a Launch Date and Work Backwards</h3>
<p>A realistic timeline for a small business website redesign is 3–6 weeks. Set a target launch date, agree milestones with your developer (content submission, design review, development, testing, launch), and hold to them. Scope creep and delayed feedback are the two biggest causes of website project overruns.</p>

<h2>During the Build: 7 Things to Include</h2>

<h3>9. Mobile-First Design</h3>
<p>The mobile version should be designed first and the desktop version built from there — not the other way around. Mobile-first design produces better outcomes for local business sites where the majority of traffic is from smartphones.</p>

<h3>10. Clear H1 Headings on Every Page</h3>
<p>Every page should have exactly one H1 heading that includes the primary keyword for that page. Your homepage H1 might be "Small Business Website Design in [City]." Your dental page H1 might be "Dental Clinic in [Area] — New Patient Appointments Available." These H1s are a primary SEO signal.</p>

<h3>11. Schema Markup for Your Business</h3>
<p>LocalBusiness or MedicalOrganization schema (depending on your type of business) helps Google understand your business type, location, opening hours, and services. This improves your appearance in local search results and can enable rich results features.</p>

<h3>12. Fast Page Loading</h3>
<p>Compress all images before uploading. Use next-gen formats (WebP). Eliminate unnecessary JavaScript. Aim for a Largest Contentful Paint under 2.5 seconds on mobile. Your developer should be able to demonstrate this with a PageSpeed Insights score before launch.</p>

<h3>13. An XML Sitemap</h3>
<p>Your new site should have an automatically generated sitemap.xml that updates when you add new pages. This should be submitted to Google Search Console at launch.</p>

<h3>14. 301 Redirects for All Changed URLs</h3>
<p>Every page that existed on your old site and has a different URL on the new site needs a 301 redirect from old → new. This preserves whatever authority the old page had accumulated and prevents 404 errors for anyone who had the old URL bookmarked or linked to it.</p>

<h3>15. Contact Method on Every Page</h3>
<p>Your phone number, a contact CTA, or a WhatsApp link should be accessible from every page — ideally in the header or as a sticky footer on mobile. Never make a motivated visitor search for how to contact you.</p>

<h2>After Launch: 5 Things to Do Immediately</h2>

<h3>16. Submit Your New Sitemap to Google Search Console</h3>
<p>Log into Google Search Console, navigate to Sitemaps, and submit your new sitemap URL. This prompts Google to crawl and index your new pages faster.</p>

<h3>17. Check for 404 Errors</h3>
<p>A week after launch, check Google Search Console for any 404 errors being reported. These are pages Google is trying to crawl that no longer exist. Add 301 redirects for any that are appearing.</p>

<h3>18. Verify All Forms Are Working</h3>
<p>Submit a test message through every contact form on the new site and confirm it arrives at the correct email address. A broken contact form is a silent lead killer — you won't know it's broken unless you test it.</p>

<h3>19. Test on Real Devices</h3>
<p>Test the site on at least: an iPhone Safari, an Android Chrome, and a desktop Chrome. DevTools emulation doesn't catch everything. Real-device testing catches rendering issues, tap target problems, and font size issues that look fine in a browser simulator.</p>

<h3>20. Monitor Search Console for 2–4 Weeks Post-Launch</h3>
<p>It's normal for rankings to fluctuate temporarily after a redesign. Monitor your position for key terms over the first 4 weeks. If specific pages have dropped significantly and they had correct 301 redirects in place, raise it with your developer — there may be a technical issue with the redirect implementation.</p>

<h2>The Most Important Thing</h2>

<p>The most significant risk in a website redesign is losing the SEO gains you've built up over time. This happens most often through URL changes without redirects, content deletions, and changes to on-page elements like H1s and title tags that were previously optimised.</p>

<p>Treat your existing rankings as assets to be protected and improved, not a clean slate to be discarded. A good redesign builds on what's working — it doesn't restart from zero.</p>

<p>If you're planning a small business website redesign and want help navigating this process, <a href="/contact">get in touch</a>. I can either audit your existing site and recommend the right approach, or handle the entire redesign with this checklist built into the process.</p>
    `.trim(),
  },

  // ── Original dental website structure ───────────────────────────────────────
  "dental-website-structure": {
    title: "The 5-Page Dental Website Structure That Consistently Converts Searchers to Patients",
    date: "1 September 2026",
    isoDate: "2026-09-01",
    category: "Dental Practices",
    readTime: "6 min read",
    description:
      "Most dental websites bury the information patients actually need. Here's a proven 5-page structure — and the reasoning behind each page — that consistently improves booking rates.",
    content: `
<p>Dental websites fail for a predictable reason: they're built to impress the dentist, not to convert the patient.</p>

<p>They lead with the practice's awards and accreditations. They feature generic stock photography of smiling people. They bury the things a prospective patient actually needs — pricing signals, booking information, and answers to their specific concerns — several clicks deep, if they can be found at all.</p>

<p>The result is a website that looks professional but generates few bookings. Visitors leave without contacting you, and you're left wondering whether your Google Ads campaign is working.</p>

<p>Here's the structure that works. Five pages, each with a specific job to do.</p>

<h2>Page 1: The Homepage — Establish Trust and Filter Intent</h2>

<p>Your homepage has one job: establish enough trust that a prospective patient decides to keep reading. It's not the place to explain all your services in detail or showcase your team's qualifications at length. It's a rapid trust filter.</p>

<p>The homepage should answer four questions within the first screen a visitor sees:</p>

<ol>
  <li><strong>What kind of dental practice is this?</strong> (general, cosmetic, specialist?)</li>
  <li><strong>Who do you serve?</strong> (NHS, private, mixed? Children? Nervous patients?)</li>
  <li><strong>Where are you?</strong> (specific location, not just "conveniently located")</li>
  <li><strong>How do I book?</strong> (a clear, prominent CTA)</li>
</ol>

<p>Below the fold: three to five brief service highlights (not a full list — a curated selection of your most-searched or highest-value treatments), a section of genuine patient reviews, and a map showing your location.</p>

<p>A critical detail most practices miss: your booking CTA should be visible in the navigation bar and repeated at the bottom of every section. Don't make a patient scroll back to the top to find the "Book Now" button.</p>

<h2>Page 2: The Services Page (Or Pages) — Match Search Intent</h2>

<p>This is where most dental websites get it structurally wrong. They list every service in bullet points on a single page with minimal description, or they create dozens of thin individual pages that don't rank for anything.</p>

<p>The right approach depends on your practice's focus:</p>

<p><strong>For general practices:</strong> Create one main services overview page with brief descriptions of each category (general dentistry, cosmetic dentistry, restorative, emergency), then individual deeper pages for your highest-value or most-searched treatments.</p>

<p><strong>For specialist or cosmetic practices:</strong> Lead with your specialist services. Each key treatment (Invisalign, teeth whitening, dental implants, veneers) should have its own dedicated page.</p>

<p>Why individual treatment pages? Because that's how patients search. They search "Invisalign in [city]" or "same day teeth whitening [city]" — not "dental services." If you want to rank for high-value treatment searches, you need dedicated pages that target those specific queries.</p>

<p>Each treatment page should cover:</p>
<ul>
  <li>What the treatment is (in plain language, not clinical terminology)</li>
  <li>Who it's suitable for</li>
  <li>What to expect during and after treatment</li>
  <li>How long it takes</li>
  <li>Pricing (or at minimum, a starting price or price range)</li>
  <li>A booking CTA</li>
</ul>

<p>The pricing point is worth dwelling on. Many practices avoid putting prices on their website out of fear of being undercut by competitors. The reality is that patients who can't find pricing information assume you're expensive — or assume you're hiding something. Transparent pricing, even if approximate, builds trust and pre-qualifies your leads.</p>

<h2>Page 3: The Team Page — The Decision-Making Page</h2>

<p>Choosing a dentist is a personal decision. Patients are not just selecting a service; they're selecting someone they'll need to trust with their health, their face, and their comfort. The team page is where that decision often gets made.</p>

<p>A good team page includes:</p>

<ul>
  <li>Professional headshots that feel approachable, not clinical (natural backgrounds, genuine smiles — not the "arms-folded-in-scrubs" pose that every stock photo site has made ubiquitous)</li>
  <li>Each clinician's qualifications and areas of focus — but written in a way that's meaningful to patients, not a list of acronyms</li>
  <li>A brief personal note: why they became a dentist, what they enjoy about the work, what they're like to work with</li>
  <li>Any special training or expertise relevant to the treatments you promote (e.g., Invisalign certified provider, nervous patient specialist)</li>
</ul>

<p>The goal is for a prospective patient to read a dentist's profile and think "I'd be comfortable with this person." If your team page reads like a list of credentials with a formal headshot, it's not doing its job.</p>

<h2>Page 4: The Nervous Patients Page — Your Highest-Converting Opportunity</h2>

<p>A dedicated page for anxious or nervous patients is the single highest-leverage page most dental practices don't have.</p>

<p>Dental anxiety affects roughly 36% of the population to some degree. A significant portion of those people are actively avoiding dental care because they can't find a practice that demonstrates it understands their experience. If your website has a page that speaks directly to them — that acknowledges the fear without being condescending, explains what accommodations you make, and invites them to contact you before booking — you're differentiating yourself from almost every practice in your area.</p>

<p>This page should:</p>
<ul>
  <li>Validate the experience (dental anxiety is common and there is no judgment here)</li>
  <li>Explain specifically what you do differently for anxious patients (longer appointments, "stop signals," sedation options, always explaining before touching)</li>
  <li>Include a testimonial from a patient who was nervous and is now a regular</li>
  <li>Offer a lower-barrier entry point: "Start with a no-obligation consultation where we just talk" is less threatening than "Book an appointment"</li>
</ul>

<p>This page also ranks well organically because "nervous patient dentist [city]" is a common, specific search term with high intent.</p>

<h2>Page 5: The Contact / Booking Page — Remove Every Barrier</h2>

<p>The booking page is where many dental websites lose patients they've already convinced. The page is hard to find, the form is long and complicated, or the only option is a phone number — which anxious patients and patients contacting you outside business hours simply won't use.</p>

<p>An effective contact/booking page has:</p>

<ul>
  <li><strong>Multiple contact methods:</strong> online booking (ideally real-time, not "we'll call you back to confirm"), phone number, email, and where appropriate, WhatsApp or a live chat option</li>
  <li><strong>A simple form</strong> with minimal required fields — name, contact method, and preferred appointment time is enough to start</li>
  <li><strong>Clear opening hours</strong> and a note about response time for enquiries ("We aim to respond within 2 hours during business hours")</li>
  <li><strong>A map and parking/transport information</strong> — this matters more than most practices realise</li>
  <li><strong>A note about what to expect after enquiring</strong> — "We'll send a confirmation within 15 minutes" removes a common anxiety about whether the booking actually went through</li>
</ul>

<p>If you use an online booking system (Dentally, Software of Excellence, or a calendar integration like Cal.com), expose it directly on this page. Every additional step between intent and booking loses a percentage of prospective patients.</p>

<h2>What Goes Everywhere: Social Proof</h2>

<p>This isn't a sixth page — it's a layer that should exist across all five. Patient reviews, before-and-after galleries (with appropriate consent), and trust indicators (GDC registration, BDA membership, Google rating) should appear contextually throughout the site.</p>

<p>Specifically:</p>
<ul>
  <li>3–5 reviews on the homepage</li>
  <li>1–2 relevant reviews on each treatment page</li>
  <li>A review on the nervous patients page from an anxious patient specifically</li>
  <li>Your overall rating displayed in the header or navigation</li>
</ul>

<p>Don't gather all your social proof on a single "Testimonials" page that patients have to navigate to. Embed it where it's most relevant to the decision being made at that moment in their journey.</p>

<h2>The Technical Foundation Matters Too</h2>

<p>All of this content architecture only converts if the technical foundation is solid. The most common technical issues I see on dental websites:</p>

<ul>
  <li><strong>Slow loading speed</strong> — especially on mobile. Patients searching on their phone will leave within 3 seconds if the page hasn't loaded. Google also penalises slow sites in search rankings.</li>
  <li><strong>Not mobile-optimised</strong> — this should be a given in 2026, but it's still surprisingly common. Your contact form and booking flow must work flawlessly on a smartphone.</li>
  <li><strong>Missing or incorrect local SEO signals</strong> — Google Business Profile not linked to the website, NAP inconsistencies across directories, no schema markup for the practice's address and services.</li>
  <li><strong>No clear conversion tracking</strong> — if you don't know which page a patient visited before booking, you can't make informed decisions about where to invest.</li>
</ul>

<h2>Getting Started</h2>

<p>If you're working with a new site: build these five pages in this order of priority — Homepage, Booking Page (get the booking flow working first), Services, Team, Nervous Patients.</p>

<p>If you're auditing an existing site: check whether each page has a clear CTA, whether pricing is present on treatment pages, and whether your nervous patients are addressed anywhere. Those are the three changes that most consistently improve booking rates.</p>

<p>If you'd like a professional audit of your dental practice's website — or want to discuss building a new one around this structure — <a href="/book">book a free strategy session</a>. I specialise in dental and healthcare practice websites, and I'll walk through your current site with you before we discuss any work.</p>
    `.trim(),
  },
};

// Required for Next.js static export with a dynamic segment.
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return {};

  if (post.comingSoon) {
    return {
      title: `${post.title} — Coming Soon`,
      description: post.title,
      robots: { index: false, follow: false },
    };
  }

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: "Deepak Kumar", url: SITE_URL }],
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${slug}`,
      siteName: "Deep Tech Solutions",
      publishedTime: post.isoDate,
      authors: ["Deepak Kumar"],
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`${SITE_URL}/og-image.png`],
    },
    alternates: {
      canonical: `${SITE_URL}/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) notFound();

  // ── Coming-soon placeholder page ────────────────────────────────────────────
  if (post.comingSoon) {
    return (
      <main
        style={{
          minHeight: "100dvh",
          background: "var(--color-bg)",
          color: "var(--color-text)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 24px 80px",
          fontFamily: "var(--font-body)",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--color-accent)",
            marginBottom: 16,
          }}
        >
          {post.category}
        </p>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
            fontWeight: 800,
            letterSpacing: "-0.025em",
            lineHeight: 1.15,
            marginBottom: 20,
            maxWidth: 640,
          }}
        >
          {post.title}
        </h1>
        <p
          style={{
            color: "var(--color-text-2)",
            fontSize: "1rem",
            lineHeight: 1.7,
            maxWidth: 480,
            marginBottom: 12,
          }}
        >
          This post is on its way. Check back soon — or head back to the
          homepage to see what&apos;s available now.
        </p>
        <p
          style={{
            color: "var(--color-text-3)",
            fontSize: "0.85rem",
            marginBottom: 40,
          }}
        >
          {post.readTime} · estimated
        </p>
        <Link
          href="/#insights"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "12px 24px",
            borderRadius: "9999px",
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.04)",
            color: "var(--color-text)",
            fontWeight: 600,
            fontSize: "0.9rem",
            textDecoration: "none",
          }}
        >
          ← Back to insights
        </Link>
      </main>
    );
  }

  // ── Article JSON-LD ──────────────────────────────────────────────────────────
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "datePublished": post.isoDate,
    "dateModified": post.isoDate,
    "author": {
      "@type": "Person",
      "name": "Deepak Kumar",
      "url": SITE_URL,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Deep Tech Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/og-image.png`,
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${slug}`,
    },
    "image": `${SITE_URL}/og-image.png`,
  };

  // ── Published post ──────────────────────────────────────────────────────────
  return (
    <main
      style={{
        minHeight: "100dvh",
        background: "var(--color-bg)",
        color: "var(--color-text)",
        fontFamily: "var(--font-body)",
        padding: "120px clamp(20px, 5vw, 60px) 80px",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article style={{ maxWidth: 720, margin: "0 auto" }}>
        <Link
          href="/blog"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: "0.85rem",
            color: "var(--color-text-3)",
            marginBottom: 40,
            textDecoration: "none",
          }}
        >
          ← All posts
        </Link>

        <p
          style={{
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--color-accent)",
            marginBottom: 12,
          }}
        >
          {post.category}
        </p>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 800,
            letterSpacing: "-0.025em",
            lineHeight: 1.15,
            marginBottom: 16,
          }}
        >
          {post.title}
        </h1>

        <p
          style={{
            fontSize: "0.85rem",
            color: "var(--color-text-3)",
            marginBottom: 48,
            borderBottom: "1px solid var(--color-border)",
            paddingBottom: 24,
          }}
        >
          {post.date} · {post.readTime}
        </p>

        <div
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "var(--color-text-2)",
          }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Post footer CTA */}
        <div
          style={{
            marginTop: 64,
            paddingTop: 40,
            borderTop: "1px solid var(--color-border)",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <p
            style={{
              fontSize: "0.8rem",
              color: "var(--color-text-3)",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            About the author
          </p>
          <p style={{ color: "var(--color-text-2)", lineHeight: 1.7 }}>
            Deepak Kumar is the founder of Deep Tech Solutions — a solo freelance practice specialising in web design, local SEO, and lead generation for dental clinics, restaurants, and local service businesses.{" "}
            <Link href="/book" style={{ color: "var(--color-accent)", textDecoration: "none" }}>
              Book a free strategy session →
            </Link>
          </p>
        </div>
      </article>
    </main>
  );
}
