#!/usr/bin/env node
/**
 * Nova Agency — generate /services.html and /services/<slug>.html (50 pages)
 * Run: node scripts/generate-service-pages.js
 *
 * This file is checked in for reproducibility. If you change pricing or copy,
 * edit the SERVICES array below and re-run.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SERVICES_DIR = path.join(ROOT, 'services');

// ───────────────────────────────────────────────────────────────────
// DATA
// ───────────────────────────────────────────────────────────────────

const CATEGORIES = [
  { id: 'content',     pill: 'Content & Social',        heading: 'Content & Social',                        sub: '12 services covering social media, video, AI-generated content, and Arabic-native copy.' },
  { id: 'platforms',   pill: 'Specialist Channels',     heading: 'Specialist Channels',                     sub: '5 standalone retainers for niche channels — Snapchat, TikTok Shop, GBP, live shopping, community.' },
  { id: 'performance', pill: 'Performance Marketing',   heading: 'Performance Marketing',                   sub: '10 services to drive paid traffic, qualified leads, and measurable revenue.' },
  { id: 'automation',  pill: 'AI Automation',           heading: 'AI Automation — Monthly Management',      sub: 'Keep your AI systems tuned, monitored, and improving every month.' },
  { id: 'operations',  pill: 'Business Operations',     heading: 'Client & Business Operations',            sub: '2 services to keep your CRM and PR engine moving.' },
  { id: 'builds',      pill: 'One-Time Builds',         heading: 'One-Time Builds',                         sub: '15 fixed-scope projects delivered fast — chatbots, voice agents, websites, dashboards, and more.' },
];

// Generic chevron icon for services without a custom one
const ICONS = {
  default: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 8l8 8-8 8" stroke="#3B6FFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="16" cy="16" r="13" stroke="#3B6FFF" stroke-width="2"/></svg>`,
  social: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="10" r="3" stroke="#3B6FFF" stroke-width="2.5"/><circle cx="24" cy="10" r="3" stroke="#3B6FFF" stroke-width="2.5"/><circle cx="16" cy="22" r="3" stroke="#3B6FFF" stroke-width="2.5"/><path d="M10 12l5 8M22 12l-5 8" stroke="#3B6FFF" stroke-width="2"/></svg>`,
  instagram: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="5" width="22" height="22" rx="6" stroke="#3B6FFF" stroke-width="2.5"/><circle cx="16" cy="16" r="5" stroke="#3B6FFF" stroke-width="2.5"/><circle cx="22.5" cy="9.5" r="1.5" fill="#3B6FFF"/></svg>`,
  youtube: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="8" width="26" height="16" rx="4" stroke="#3B6FFF" stroke-width="2.5"/><path d="M14 13v6l5-3-5-3z" fill="#3B6FFF"/></svg>`,
  video: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="8" width="18" height="16" rx="2" stroke="#3B6FFF" stroke-width="2.5"/><path d="M22 14l6-3v10l-6-3v-4z" stroke="#3B6FFF" stroke-width="2.5" stroke-linejoin="round"/></svg>`,
  image: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="6" width="24" height="20" rx="3" stroke="#3B6FFF" stroke-width="2.5"/><circle cx="12" cy="14" r="2.5" stroke="#3B6FFF" stroke-width="2"/><path d="M6 22l6-6 5 5 4-4 5 5" stroke="#3B6FFF" stroke-width="2" stroke-linejoin="round"/></svg>`,
  text: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8h20M6 14h20M6 20h14M6 26h10" stroke="#3B6FFF" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  chat: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 8a3 3 0 013-3h16a3 3 0 013 3v10a3 3 0 01-3 3h-9l-6 5v-5h-1a3 3 0 01-3-3V8z" stroke="#3B6FFF" stroke-width="2.5" stroke-linejoin="round"/><circle cx="12" cy="13" r="1.5" fill="#3B6FFF"/><circle cx="16" cy="13" r="1.5" fill="#3B6FFF"/><circle cx="20" cy="13" r="1.5" fill="#3B6FFF"/></svg>`,
  voice: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="13" y="4" width="6" height="14" rx="3" stroke="#3B6FFF" stroke-width="2.5"/><path d="M8 14a8 8 0 0016 0M16 22v6M12 28h8" stroke="#3B6FFF" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  workflow: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="13" width="8" height="6" rx="1.5" stroke="#3B6FFF" stroke-width="2.5"/><rect x="21" y="5" width="8" height="6" rx="1.5" stroke="#3B6FFF" stroke-width="2.5"/><rect x="21" y="21" width="8" height="6" rx="1.5" stroke="#3B6FFF" stroke-width="2.5"/><path d="M11 16l10-8M11 16l10 8" stroke="#3B6FFF" stroke-width="2" stroke-linecap="round"/></svg>`,
  calendar: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="7" width="24" height="21" rx="3" stroke="#3B6FFF" stroke-width="2.5"/><path d="M4 13h24M10 4v6M22 4v6" stroke="#3B6FFF" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  email: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="7" width="26" height="18" rx="3" stroke="#3B6FFF" stroke-width="2.5"/><path d="M5 9l11 9 11-9" stroke="#3B6FFF" stroke-width="2.5" stroke-linejoin="round"/></svg>`,
  whatsapp: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 4C9 4 4 9.5 4 16c0 2.5.8 4.8 2 6.7L4 28l5.6-1.8c1.9 1 4 1.6 6.4 1.6 7 0 12-5.5 12-12S23 4 16 4z" stroke="#3B6FFF" stroke-width="2.5" stroke-linejoin="round"/><path d="M12 13c.5 3 3 5.5 6 6 1-.2 2-1 2-2 0-.5-2-1.5-2.5-1-.3.3-.7.5-1 .5-1 0-2.5-1.5-2.5-2.5 0-.3.2-.7.5-1 .5-.5-.5-2.5-1-2.5-1 0-1.5 1-1.5 2.5z" fill="#3B6FFF"/></svg>`,
  chart: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 28h24M8 24v-8M14 24v-12M20 24v-6M26 24v-14" stroke="#3B6FFF" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  search: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="14" r="9" stroke="#3B6FFF" stroke-width="2.5"/><path d="M21 21l7 7" stroke="#3B6FFF" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  star: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 4l3.7 7.5L28 12.7l-6 5.8L23.4 27 16 23l-7.4 4L10 18.5l-6-5.8 8.3-1.2L16 4z" stroke="#3B6FFF" stroke-width="2.5" stroke-linejoin="round"/></svg>`,
  link: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 18l4-4M11 21l-2 2a4 4 0 01-5.7-5.7l5-5a4 4 0 015.7 0M18 11l2-2a4 4 0 015.7 5.7l-5 5a4 4 0 01-5.7 0" stroke="#3B6FFF" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  globe: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="12" stroke="#3B6FFF" stroke-width="2.5"/><path d="M4 16h24M16 4c4 4 4 20 0 24M16 4c-4 4-4 20 0 24" stroke="#3B6FFF" stroke-width="2"/></svg>`,
  build: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 22l8-8 5 5 7-7M22 12h4v4" stroke="#3B6FFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  shop: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 10h22l-2 16H7L5 10z" stroke="#3B6FFF" stroke-width="2.5" stroke-linejoin="round"/><path d="M11 10V7a5 5 0 0110 0v3" stroke="#3B6FFF" stroke-width="2.5"/></svg>`,
  brand: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 4l4 8 8 1-6 6 2 9-8-4-8 4 2-9-6-6 8-1 4-8z" stroke="#3B6FFF" stroke-width="2.5" stroke-linejoin="round"/></svg>`,
  rocket: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 4c4 0 8 4 8 10v8h-16v-8c0-6 4-10 8-10z" stroke="#3B6FFF" stroke-width="2.5" stroke-linejoin="round"/><circle cx="16" cy="13" r="2.5" stroke="#3B6FFF" stroke-width="2"/><path d="M11 22l-3 6M21 22l3 6" stroke="#3B6FFF" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  crm: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="11" r="4" stroke="#3B6FFF" stroke-width="2.5"/><circle cx="22" cy="13" r="3" stroke="#3B6FFF" stroke-width="2.5"/><path d="M4 26c0-4 4-7 8-7s8 3 8 7M19 26c0-3 3-5 6-5s5 2 5 5" stroke="#3B6FFF" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  community: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="10" r="4" stroke="#3B6FFF" stroke-width="2.5"/><circle cx="7" cy="13" r="3" stroke="#3B6FFF" stroke-width="2.5"/><circle cx="25" cy="13" r="3" stroke="#3B6FFF" stroke-width="2.5"/><path d="M8 26c0-4 3.5-7 8-7s8 3 8 7" stroke="#3B6FFF" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  influencer: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="12" r="5" stroke="#3B6FFF" stroke-width="2.5"/><path d="M6 28c1-5 5-8 10-8s9 3 10 8" stroke="#3B6FFF" stroke-width="2.5" stroke-linecap="round"/><path d="M20 4l2 2-2 2M24 4l2 2-2 2" stroke="#3B6FFF" stroke-width="2" stroke-linecap="round"/></svg>`,
};

const SERVICES = [
  // ── A. Content & Social (12) ────────────────────────────────────
  { slug:'social-media-2', cat:'content', icon:'social',
    name:'Social Media Management — 2 Platforms', price:'AED 2,000/mo', priceShort:'AED 2,000/mo',
    one:'Run 2 platforms with AI-generated content.',
    desc:'We run two social platforms end-to-end — content calendar, captions, hashtags, scheduling, community replies. AI handles the heavy lifting on copy and creative; a human strategist steers tone, timing and trends so you stay on-brand without lifting a finger.',
    steps:[
      ['Brief','We audit your audience, voice, competitors and pick 2 platforms that match your goals.'],
      ['Build','Content calendar built in our system. AI drafts 4-5 posts/week per platform; we approve before posting.'],
      ['Launch','Posts go out, replies handled, performance reported weekly. We retune format and timing based on what works.'],
    ],
    who:[
      ['Service businesses in Dubai','Salons, clinics, agencies, restaurants who need consistent presence on Instagram + TikTok or LinkedIn + X.'],
      ['Founders sick of doing it themselves','Stop writing captions at midnight. Pick 2 channels, we run them.'],
    ]
  },
  { slug:'social-media-4', cat:'content', icon:'social',
    name:'Social Media Management — 4 Platforms', price:'AED 3,500/mo', priceShort:'AED 3,500/mo',
    one:'Run 4 platforms end-to-end.',
    desc:'Four channels, one playbook. Instagram, TikTok, LinkedIn, X — pick any 4 — and we run the whole engine. Repurposed content, native-feeling copy per platform, and reporting that ties posts back to leads, not vanity likes.',
    steps:[
      ['Brief','Pick your 4 channels and goals. We audit and benchmark.'],
      ['Build','We build a master content engine: long-form → clips, captions per platform, scheduling.'],
      ['Launch','5-7 posts/week across the 4 channels, replies handled, monthly performance review.'],
    ],
    who:[
      ['Brands in growth mode','You need real omnichannel presence — not just one channel that converts.'],
      ['Personal brands & ecom','Anyone whose buyers live across LinkedIn, Instagram, TikTok and X.'],
    ]
  },
  { slug:'instagram-only', cat:'platforms', icon:'instagram',
    name:'Instagram Management', price:'AED 1,200/mo', priceShort:'AED 1,200/mo',
    one:'Standalone Instagram management.',
    desc:'Instagram-only management for businesses where IG is the channel. Feed posts, Reels, Stories, replies and DM handling — all driven by an AI content engine tuned to your audience.',
    steps:[
      ['Brief','Voice, visual style, audience and goals captured in our brand brief.'],
      ['Build','Feed planned 2 weeks ahead. Reels storyboarded, captions drafted, hashtags researched.'],
      ['Launch','4-5 posts/week + 5-10 Stories/week. DMs answered. Monthly performance report.'],
    ],
    who:[
      ['F&B, beauty, fitness, retail','Instagram is the storefront. Customers find you there or they don\'t find you.'],
      ['Personal brands','Coaches, creators and founders who need a strong personal IG without becoming a full-time content creator.'],
    ]
  },
  { slug:'youtube-shorts', cat:'platforms', icon:'youtube',
    name:'YouTube Shorts Management', price:'AED 2,000/mo', priceShort:'AED 2,000/mo',
    one:'Posts, Community tab, and Shorts — published daily on your channel.',
    desc:'End-to-end YouTube Shorts management — Shorts edited and captioned, SEO-tuned titles and descriptions, Community tab posts, hashtag stacks, and publishing on the cadence your channel needs. Same deliverables family as Instagram and TikTok, applied to YouTube\'s search-and-suggested surface.',
    steps:[
      ['Brief','Channel niche, posting cadence, Shorts source (raw footage or long-form to clip), and topics.'],
      ['Build','For each Short: edit, captions, keyword-tuned title, description with SEO + CTA, hashtag stack.'],
      ['Launch','Schedule, publish, retitle underperformers, monthly analytics review on views, watch time, and subs.'],
    ],
    who:[
      ['Coaches & educators','Shorts is your highest-leverage discovery surface — but you don\'t have time to cut and SEO them.'],
      ['Brands cross-posting to YouTube','You already make Reels and TikToks — Shorts compounds on a search-driven platform you\'re ignoring.'],
    ]
  },
  { slug:'tiktok-management', cat:'platforms', icon:'video',
    name:'TikTok Management', price:'AED 1,500/mo', priceShort:'AED 1,500/mo',
    one:'Posts, stories, and Reels — daily on your TikTok account.',
    desc:'Full-service organic TikTok — daily Reels edited and captioned, posts and stories published on cadence, trending audio research, FYP optimisation through hook iteration, hashtag stacks built per video, and comment seeding on your own videos.',
    steps:[
      ['Brief','Niche, posting cadence, source footage, trending audio direction, and hashtag lanes.'],
      ['Build','Edited Reels, captions, trending audio, hashtag stacks per video, story plan, FYP testing strategy.'],
      ['Launch','Daily/weekly publishing, comment seeding, monthly report on views, completion rate, and FYP entries.'],
    ],
    who:[
      ['D2C brands & local services','FYP discoverability is your cheapest acquisition channel — but you don\'t have time to run it daily.'],
      ['Personal brands','Founders and creators who want TikTok run as a system instead of a side project.'],
    ]
  },
  { slug:'twitter-x-management', cat:'platforms', icon:'link',
    name:'X (Twitter) Management', price:'AED 1,500/mo', priceShort:'AED 1,500/mo',
    one:'Posts and threads published on your X account.',
    desc:'Full-service X management — daily posts written in your locked voice, weekly long-form threads, profile and pinned-tweet optimisation, replies to relevant conversations, and quote-tweet plays on adjacent accounts. No bot growth, no engagement pods.',
    steps:[
      ['Brief','Voice training, topic lanes, profile/bio optimisation, pinned-tweet direction.'],
      ['Build','Daily post calendar (1-2/day) + 1 long-form thread/week + reply targets list.'],
      ['Launch','Posts and threads scheduled, replies handled, monthly impressions + follower report.'],
    ],
    who:[
      ['Founders & operators','You think in public-internet voice and X is where your buyers and peers hang out.'],
      ['SaaS, dev tools, fintech','X is the credibility surface for technical audiences and you can\'t run it on the side.'],
    ]
  },
  { slug:'ugc-video-ads', cat:'content', icon:'video',
    name:'UGC / Short-Form Video Ads', price:'AED 2,500/mo', priceShort:'AED 2,500/mo',
    one:'20 scroll-stopping video variants/mo.',
    desc:'Short-form video built for paid feeds, not awards. We script, source UGC, edit and produce 20 vertical video ads per month — TikTok, Reels, Shorts — designed for cold traffic. Variants test hook, format and offer so the algorithm has something to work with.',
    steps:[
      ['Brief','Product audit, audience research, hook/angle library.'],
      ['Build','20 vertical video variants/mo: hooks, captions, edits, music, subtitles.'],
      ['Launch','Delivered to your ads team (or our paid ads team). Performance reviewed, winners doubled down.'],
    ],
    who:[
      ['Ecom & DTC brands','You spend on Meta/TikTok ads and starve for fresh creative every week.'],
      ['Service businesses doing paid ads','Tired of one stock video flatlining your CPL.'],
    ]
  },
  { slug:'long-form-video', cat:'content', icon:'video',
    name:'Long-Form Video Editing + Clips', price:'AED 2,000/mo', priceShort:'AED 2,000/mo',
    one:'One long video + 20 short clips/mo.',
    desc:'You record one long-form interview or podcast — we turn it into a content engine. Edited long-form export plus 20 short clips per month, captioned, branded, hook-tested, ready to post across YouTube Shorts, Reels and TikTok.',
    steps:[
      ['Brief','Define your show format, brand intro/outro and clipping style.'],
      ['Build','Each month: 1 long-form edit + 20 vertical short clips with subtitles, hooks and CTA.'],
      ['Launch','Files delivered + scheduled if you have us managing socials. Clip-by-clip performance tracking.'],
    ],
    who:[
      ['Podcasters & founders','You record once a week and need it everywhere.'],
      ['Coaches & speakers','Talks, webinars and interviews become weeks of content.'],
    ]
  },
  { slug:'daily-content-engine', cat:'content', icon:'image',
    name:'Daily Content Engine', price:'From AED 1,200/mo', priceShort:'From AED 1,200/mo',
    one:'Faceless dark aesthetic. Posted on your account every single day.',
    desc:'Daily lifestyle and luxury content posted on the client\'s account. Faceless dark aesthetic. Sourced from Pinterest or our in-house clip pack (lifestyle, cars, luxury). Captioned, scheduled, and published daily so the client\'s feed never goes dark. Four tiers: Photo 1/day (AED 1,200), Photo 2/day (AED 2,000), Video 1/day (AED 1,500), Video 2/day (AED 2,500).',
    steps:[
      ['Brief','Aesthetic direction, account voice, content lanes (cars, lifestyle, luxury, motivation), platforms.'],
      ['Source & Caption','Daily visuals pulled from Pinterest libraries and our in-house clip pack. Captions written to match your tone.'],
      ['Schedule & Publish','Published daily at peak engagement windows. Monthly refresh on lanes, angles, and captions.'],
    ],
    who:[
      ['Faceless lifestyle accounts','Pages built on aesthetic and consistency — luxury, cars, motivation — where the founder never appears.'],
      ['Personal brands','Founders who need a steady public-facing feed without being on-camera every day.'],
    ]
  },
  { slug:'ai-content-engine', cat:'content', icon:'text',
    name:'AI Content Engine', price:'AED 1,800/mo', priceShort:'AED 1,800/mo',
    one:'Blogs, scripts, copy — written by AI.',
    desc:'A monthly content factory: 8 blog posts, 20 social captions, 4 video scripts, 4 email newsletters — all written by an AI engine fine-tuned on your brand voice, then edited by a human before delivery. Built for SEO, GEO (ChatGPT/Perplexity) and conversion.',
    steps:[
      ['Brief','Voice training: we study 10-20 pieces of your existing copy to build a brand voice model.'],
      ['Build','Monthly content calendar approved. AI drafts, humans polish.'],
      ['Launch','All assets delivered in your Notion/Drive on the 1st of each month. Performance reviewed at month-end.'],
    ],
    who:[
      ['B2B and SaaS brands','You need volume + consistency for SEO and lead nurture.'],
      ['Solo founders','You can\'t hire a writer but you can\'t skip content. This is the bridge.'],
    ]
  },
  { slug:'ai-image-generation', cat:'content', icon:'image',
    name:'AI Image Generation', price:'AED 500/mo · or AED 1,200 batch', priceShort:'AED 500/mo',
    one:'Custom branded images on demand.',
    desc:'Unlimited AI image generation for your brand — social tiles, blog headers, ad creatives, marketing visuals. We train a custom model on your brand and deliver on-demand via a shared queue. Up to 50 finished images per month.',
    steps:[
      ['Brief','Provide brand colours, type, mood references and any existing assets.'],
      ['Build','We train a custom style on Midjourney/Flux/Stable Diffusion + build a request board.'],
      ['Launch','Drop requests, get images back within 24h. Up to 50 finished images/mo.'],
    ],
    who:[
      ['Marketing teams','You constantly need visuals and the design team is bottlenecked.'],
      ['Solo founders','You don\'t need a designer — you need images, fast.'],
    ]
  },
  { slug:'ai-product-photography', cat:'content', icon:'image',
    name:'AI Product Photography', price:'AED 1,200/mo · or AED 2,500 batch', priceShort:'AED 1,200/mo',
    one:'Ecom + Shopify product photos via AI.',
    desc:'AI-generated product photography for ecommerce. Send us your existing product shot — we generate 10 lifestyle, studio and seasonal variants per product per month. Built for Shopify, Amazon and Meta feeds.',
    steps:[
      ['Brief','Send your existing product catalogue + brand mood references.'],
      ['Build','AI generates lifestyle + studio + seasonal variants for each product.'],
      ['Launch','Up to 100 finished product images/mo. Uploaded directly to Shopify if requested.'],
    ],
    who:[
      ['Shopify ecom brands','You need new product photography every season and can\'t afford a studio.'],
      ['Amazon sellers','A+ content and main images that don\'t look like every other listing.'],
    ]
  },
  { slug:'personal-branding', cat:'content', icon:'star',
    name:'Personal Branding Management', price:'AED 2,500/mo', priceShort:'AED 2,500/mo',
    one:'Build your personal brand on autopilot.',
    desc:'Full personal brand management for founders, executives and thought leaders. We capture your ideas (voice notes, interviews, raw posts), then turn them into a coherent presence across LinkedIn, Instagram and X. Authority-building, not vanity-posting.',
    steps:[
      ['Brief','Strategy session: positioning, pillars, audience, tone.'],
      ['Build','Bi-weekly 30-min interview → AI structures into LinkedIn posts, IG carousels, X threads.'],
      ['Launch','3-5 posts/week per platform under your name. Inbound DMs handled, leads routed.'],
    ],
    who:[
      ['Founders & CEOs','Inbound from personal brand is the highest-leverage marketing you can do.'],
      ['Coaches & consultants','Authority on LinkedIn = pipeline. We build the engine.'],
    ]
  },
  { slug:'arabic-content', cat:'content', icon:'text',
    name:'Arabic Content Creation', price:'AED 2,500/mo', priceShort:'AED 2,500/mo',
    one:'Native Arabic captions, copy, scripts.',
    desc:'Real Arabic content — not Google Translate. Native Arabic copywriters supported by AI tools deliver captions, ad copy, scripts, blog posts and email campaigns. Khaleeji or MSA. Bilingual versioning included.',
    steps:[
      ['Brief','Target audience (KSA, UAE, Levant, MSA), tone and dialect captured.'],
      ['Build','Monthly Arabic content calendar — captions, scripts, ads, emails. Bilingual versions if needed.'],
      ['Launch','Delivered ready to post. Reviewed by native speaker. Tuned monthly based on performance.'],
    ],
    who:[
      ['Brands targeting GCC','You can\'t reach Arabic-speaking buyers with translated English.'],
      ['Government & enterprise','Procurement, healthcare, real estate where Arabic is non-negotiable.'],
    ]
  },

  // ── B. Specialist Channels (5) ──────────────────────────────────
  { slug:'linkedin-growth', cat:'platforms', icon:'link',
    name:'LinkedIn Growth & Management', price:'AED 1,500/mo', priceShort:'AED 1,500/mo',
    one:'B2B growth via LinkedIn.',
    desc:'LinkedIn for B2B: profile optimisation, content engine, connection campaigns and inbound DM management. We turn your LinkedIn from a CV into a pipeline source.',
    steps:[
      ['Brief','Optimise headline, banner, About, featured. Define ICP and outbound criteria.'],
      ['Build','Content calendar (3-5 posts/week) + connection campaign + DM follow-ups.'],
      ['Launch','Posts go live, connections sent, replies handled. Monthly leads + meetings report.'],
    ],
    who:[
      ['B2B services & consultants','LinkedIn is your highest-intent channel and you barely use it.'],
      ['SaaS & enterprise sales','Pipeline from inbound + warm DM is cheaper than ads.'],
    ]
  },
  { slug:'snapchat', cat:'platforms', icon:'image',
    name:'Snapchat Management', price:'AED 1,200/mo', priceShort:'AED 1,200/mo',
    one:'Snapchat content + audience.',
    desc:'Snapchat is the most under-served channel in MENA — and still huge with younger audiences in KSA and UAE. We run your Snap account: stories, spotlight, ads creative and audience growth.',
    steps:[
      ['Brief','Audience, geos, content style and goals (ecom, app installs, awareness).'],
      ['Build','Daily Stories + 3 Spotlight videos/week + ads creative pack.'],
      ['Launch','Posted daily, audience grown, performance reviewed monthly.'],
    ],
    who:[
      ['KSA-focused brands','Snapchat penetration in Saudi is still enormous — and most agencies ignore it.'],
      ['Youth-targeted DTC','Gen-Z and younger millennials in MENA still live on Snap.'],
    ]
  },
  { slug:'tiktok-shop', cat:'platforms', icon:'shop',
    name:'TikTok Shop Management', price:'AED 2,000/mo', priceShort:'AED 2,000/mo',
    one:'TikTok Shop end-to-end.',
    desc:'TikTok Shop is the fastest-growing ecom channel in the world. We run your storefront — catalogue setup, affiliate recruitment, creator campaigns, live shopping, ads and order management.',
    steps:[
      ['Brief','Connect your TikTok Shop and product catalogue.'],
      ['Build','Catalogue optimised, 10-20 affiliates recruited, content seeded.'],
      ['Launch','Weekly creator campaigns + live shopping + ads. Monthly revenue + commission report.'],
    ],
    who:[
      ['DTC ecom brands','TikTok Shop is now the #1 incremental revenue channel for under-100K-follower brands.'],
      ['Beauty, fashion, supplements, home','Categories that win on Shop.'],
    ]
  },
  { slug:'google-business', cat:'platforms', icon:'search',
    name:'Google Business Profile Optimization', price:'AED 800/mo', priceShort:'AED 800/mo',
    one:'Rank in Google Maps + local search.',
    desc:'For local businesses: rank in the Map Pack. We optimise your Google Business Profile, post weekly updates, build local citations, handle review responses and run local SEO that pulls walk-ins.',
    steps:[
      ['Brief','Audit current GBP, competitors and local keyword targets.'],
      ['Build','Profile fully optimised, services + categories rebuilt, photos refreshed.'],
      ['Launch','Weekly posts, monthly citation building, all reviews responded to. Map Pack tracking.'],
    ],
    who:[
      ['Clinics, salons, restaurants, gyms','Walk-in trade. Google Maps is the #1 source of new customers.'],
      ['Local services','Plumbers, electricians, movers, lawyers — anyone with a service area.'],
    ]
  },
  { slug:'live-streaming', cat:'platforms', icon:'video',
    name:'TikTok Live / Instagram Live Management', price:'AED 1,500/mo', priceShort:'AED 1,500/mo',
    one:'Run live shopping streams.',
    desc:'Live shopping is back. We script, produce and operate live streams on TikTok and Instagram — host coaching, technical setup, real-time moderation, product spotlights, checkout flow. Built for ecom and high-ticket services.',
    steps:[
      ['Brief','Audience, product line, live cadence (2-4/mo), host setup (you or our talent).'],
      ['Build','Scripts, run-of-show, technical setup (camera + lighting recommendations + multistream).'],
      ['Launch','Live every week. Moderation + checkout flow during streams. Replay clips repurposed.'],
    ],
    who:[
      ['Beauty, fashion, supplements','Categories where live shopping has 5-10× conversion vs static feeds.'],
      ['Coaches & service brands','Live workshops and Q&A as a sales channel.'],
    ]
  },
  { slug:'community-management', cat:'platforms', icon:'community',
    name:'Community Management', price:'AED 1,000/mo', priceShort:'AED 1,000/mo',
    one:'WhatsApp, Telegram, Discord communities.',
    desc:'Your community is your retention. We run your WhatsApp group, Telegram channel or Discord server — moderation, welcome flows, weekly engagement prompts, event scheduling, escalation to sales.',
    steps:[
      ['Brief','Pick channel (WhatsApp / Telegram / Discord) and define community goals.'],
      ['Build','Welcome flow, rules, weekly content calendar, moderation playbook.'],
      ['Launch','Daily monitoring, weekly events, leads escalated to your sales team.'],
    ],
    who:[
      ['Course creators & coaches','Your community is the product. It can\'t go dead.'],
      ['VIP ecom brands','Top-customer WhatsApp groups for early access, drops and feedback.'],
    ]
  },

  // ── C. Performance Marketing (10) ───────────────────────────────
  { slug:'paid-ads', cat:'performance', icon:'chart',
    name:'Paid Ads Management (Meta + TikTok)', price:'AED 3,500/mo + 10% ad spend', priceShort:'AED 3,500/mo + 10%',
    one:'Run Meta + TikTok ads at scale.',
    desc:'Full-funnel Meta + TikTok paid media management. Audience building, creative testing, conversion tracking (Pixel + CAPI), daily optimisation, weekly creative refresh. Management fee is AED 3,500/mo + 10% of ad spend.',
    steps:[
      ['Brief','Goals, target CPA/ROAS, creative inventory audit, pixel + tracking review.'],
      ['Build','Account structure rebuilt, audiences seeded, conversion API installed, creative tested.'],
      ['Launch','Daily optimisation, weekly creative refresh, monthly strategy review and scale plan.'],
    ],
    who:[
      ['Ecom & DTC brands','You\'re spending AED 10K-200K/mo on Meta + TikTok and need real performance.'],
      ['Lead-gen services','Real estate, clinics, education — anyone with clear CPA targets.'],
    ]
  },
  { slug:'ai-creative-ads', cat:'performance', icon:'video',
    name:'AI Creative Production for Paid Ads', price:'AED 2,500/mo', priceShort:'AED 2,500/mo',
    one:'Endless ad creative tested with AI.',
    desc:'A creative engine for performance ads. Each month: 30+ static creatives, 20+ video variants, hook + angle testing matrix, AI-driven iteration on winners. Delivered to your media buyer or our paid ads team.',
    steps:[
      ['Brief','Product audit, audience research, current ad performance benchmark.'],
      ['Build','Each month: 30+ statics + 20+ videos across hooks, formats and angles.'],
      ['Launch','Delivered weekly. Winners scaled, losers killed. Monthly creative review.'],
    ],
    who:[
      ['Brands spending AED 30K+/mo on ads','Creative is your #1 performance lever — and it always runs out.'],
      ['Agencies needing white-label creative','We can deliver under your brand.'],
    ]
  },
  { slug:'email-sms', cat:'performance', icon:'email',
    name:'Email & SMS Marketing', price:'AED 2,500/mo', priceShort:'AED 2,500/mo',
    one:'Klaviyo/Mailchimp flows + campaigns.',
    desc:'Email + SMS done right: full flow library (welcome, browse abandon, cart abandon, post-purchase, win-back), weekly campaigns, segmented broadcasts and a/b testing. Klaviyo, Mailchimp or HubSpot.',
    steps:[
      ['Brief','Audit existing list, deliverability, flows and recent campaign performance.'],
      ['Build','Rebuild core flows (8-12 flows) + segment strategy + design templates.'],
      ['Launch','2-4 campaigns/week. Monthly revenue attribution report.'],
    ],
    who:[
      ['Ecom brands with >5K subscribers','Email should be 25-40% of your revenue. If it isn\'t, this fixes it.'],
      ['Course creators & SaaS','Drip sequences and nurture are your highest-ROI marketing.'],
    ]
  },
  { slug:'whatsapp-broadcasts', cat:'performance', icon:'whatsapp',
    name:'WhatsApp Broadcast Campaigns', price:'AED 1,500/mo', priceShort:'AED 1,500/mo',
    one:'Broadcast lists, segmented, automated.',
    desc:'WhatsApp Business API broadcast management. Segmented lists, template message creation, weekly campaigns, opt-in compliance, response routing to your sales team or chatbot.',
    steps:[
      ['Brief','Audit your WhatsApp Business setup or set one up on the API.'],
      ['Build','Templates approved, segments built, opt-in flow live.'],
      ['Launch','Weekly broadcasts. Responses routed. Monthly conversion + opt-out report.'],
    ],
    who:[
      ['Retailers & ecom','WhatsApp open rates in MENA are 90%+ vs 20% on email.'],
      ['Clinics, schools, real estate','Re-engagement, appointment reminders, offers.'],
    ]
  },
  { slug:'cold-email', cat:'performance', icon:'email',
    name:'Cold Email / Outbound Lead Gen', price:'AED 3,000/mo', priceShort:'AED 3,000/mo',
    one:'500 qualified prospects/mo.',
    desc:'Outbound at scale. We build your ICP, source 500 qualified prospects/mo, run a multi-domain warm-up infrastructure, write AI-personalised sequences and book meetings straight to your calendar.',
    steps:[
      ['Brief','ICP definition: industry, role, geography, signal triggers.'],
      ['Build','Domains warmed, list scraped + verified, AI sequences written and tested.'],
      ['Launch','500 prospects/mo, multi-touch sequences, replies handled, meetings booked.'],
    ],
    who:[
      ['B2B services & SaaS','High-ticket deals where one meeting = ROI.'],
      ['Enterprise sales teams','Augment your SDRs with a 24/7 outbound engine.'],
    ]
  },
  { slug:'ai-sdr', cat:'performance', icon:'voice',
    name:'AI SDR / Sales Agent', price:'AED 2,500/mo', priceShort:'AED 2,500/mo',
    one:'AI sales rep books your meetings.',
    desc:'A 24/7 AI sales development rep. Engages inbound leads from forms, ads, WhatsApp and chat — qualifies, answers questions, handles objections and books meetings on your calendar. Trained on your sales playbook.',
    steps:[
      ['Brief','Sales playbook captured: ICP, objections, pricing, qualifying questions.'],
      ['Build','AI SDR trained, connected to your CRM + calendar + WhatsApp + chat.'],
      ['Launch','Live 24/7. Every lead engaged in under 60 seconds. Weekly tune-up.'],
    ],
    who:[
      ['High-volume lead businesses','Real estate, education, clinics — leads going stale because nobody calls back in time.'],
      ['Sales teams that lose nights/weekends','AI takes the first touch so humans handle the close.'],
    ]
  },
  { slug:'influencer-sourcing', cat:'performance', icon:'influencer',
    name:'Influencer & UGC Sourcing', price:'AED 2,000/mo', priceShort:'AED 2,000/mo',
    one:'3 vetted creators/mo.',
    desc:'Creator sourcing without the agency markup. Each month we source 3 vetted UAE/KSA creators in your niche, handle outreach, negotiate fees, brief them and manage delivery. You only pay creator fees on top.',
    steps:[
      ['Brief','Niche, audience, content style and budget per creator.'],
      ['Build','Each month: 3 vetted creators sourced + outreach + negotiation + brief.'],
      ['Launch','Content delivered, rights cleared, ready to use organically or as paid whitelisting.'],
    ],
    who:[
      ['DTC ecom in MENA','UGC creator content drives 3-5× ad performance vs in-house.'],
      ['Restaurants, fitness, beauty','Local-creator endorsement = walk-ins.'],
    ]
  },
  { slug:'seo-geo-aeo', cat:'performance', icon:'search',
    name:'SEO + GEO + AEO Combined', price:'AED 4,000/mo', priceShort:'AED 4,000/mo',
    one:'Rank on Google + ChatGPT + Perplexity.',
    desc:'Modern search is split: classic SEO (Google), GEO (generative engine optimisation — appearing in ChatGPT, Perplexity, Gemini answers) and AEO (answer engine optimisation — featured snippets, voice). We do all three.',
    steps:[
      ['Brief','Technical SEO audit, content audit, current AI engine visibility baseline.'],
      ['Build','Technical fixes, content pillar plan, AI-friendly content (schema, structure, citations).'],
      ['Launch','4-8 articles/mo + ongoing optimisation. Tracked on Google + ChatGPT + Perplexity.'],
    ],
    who:[
      ['SaaS & B2B services','High-LTV inbound where ranking in ChatGPT could matter as much as Google in 2 years.'],
      ['Local services','Map Pack + ChatGPT "best in Dubai" answers = compounding pipeline.'],
    ]
  },
  { slug:'analytics-dashboard', cat:'performance', icon:'chart',
    name:'Analytics Dashboard Management', price:'AED 1,500/mo', priceShort:'AED 1,500/mo',
    one:'Track every metric in one place.',
    desc:'A live dashboard of every marketing metric — ads spend, ROAS, CPL, organic traffic, email revenue, CRM pipeline, WhatsApp conversions. Built in Looker Studio, Metabase or custom, refreshed daily, monitored weekly.',
    steps:[
      ['Brief','Map every data source (ads, GA4, CRM, Shopify, etc) and define KPIs.'],
      ['Build','Dashboard built, data pipelines wired up, daily refresh automated.'],
      ['Launch','Weekly check-in, monthly review with insights. Alerting on anomalies.'],
    ],
    who:[
      ['Marketing teams','You spend 4 hours/week in spreadsheets. Replace that with one dashboard.'],
      ['Founders','You want one URL to see "is the business growing or not".'],
    ]
  },
  { slug:'reputation-management', cat:'performance', icon:'star',
    name:'Reputation Management', price:'AED 1,200/mo', priceShort:'AED 1,200/mo',
    one:'Google reviews + negative review handling.',
    desc:'Active reputation management. Review request automation (Google, Trustpilot, Tripadvisor), response handling for every review, negative review escalation and removal where possible, and monthly sentiment reporting.',
    steps:[
      ['Brief','Audit current reviews across platforms. Define ICP-customer touchpoints for review asks.'],
      ['Build','Automated review-request flows (SMS + WhatsApp + email). Response templates.'],
      ['Launch','Every review responded to within 24h. Negatives escalated. Monthly sentiment report.'],
    ],
    who:[
      ['Restaurants, clinics, hotels, retail','Star rating directly affects bookings.'],
      ['Service businesses','Trust score in Maps = walk-ins.'],
    ]
  },

  // ── D. AI Automation — Monthly Management (5) ───────────────────
  { slug:'whatsapp-automation-mgmt', cat:'automation', icon:'whatsapp',
    name:'WhatsApp Automation Management', price:'AED 1,500/mo', priceShort:'AED 1,500/mo',
    one:'Monitor and tune your WhatsApp bot.',
    desc:'Monthly maintenance for an existing WhatsApp automation. Conversation review, response tuning, new intent training, integration health checks, monthly performance report. Pairs with our WhatsApp Automation build.',
    steps:[
      ['Brief','Inherit your existing WhatsApp automation (ours or someone else\'s).'],
      ['Build','Weekly conversation review + response tuning + new intents added.'],
      ['Launch','Monthly performance report. Always-on monitoring with anomaly alerts.'],
    ],
    who:[
      ['Anyone running a WhatsApp bot','Bots rot. New customer questions appear weekly. Stay sharp.'],
      ['High-volume support teams','Hundreds of conversations/week — needs constant tuning.'],
    ]
  },
  { slug:'workflow-automation-mgmt', cat:'automation', icon:'workflow',
    name:'Workflow Automation Management', price:'AED 1,500/mo', priceShort:'AED 1,500/mo',
    one:'Monitor and tune your n8n/Make flows.',
    desc:'Monthly maintenance for your n8n, Make, Zapier or custom automation stack. Error monitoring, broken-integration fixes, new flows added on request, monthly health report.',
    steps:[
      ['Brief','Inherit your existing automations and document them.'],
      ['Build','Set up error monitoring + alerts. Identify and fix unstable flows.'],
      ['Launch','Monthly check-in, 1-2 new flows/mo included, on-call for breakages.'],
    ],
    who:[
      ['Ops-heavy businesses','You\'ve built 10+ flows. Now you need someone to keep them alive.'],
      ['Founders without an ops engineer','One person can\'t both build and maintain a growing automation stack.'],
    ]
  },
  { slug:'voice-agent-mgmt', cat:'automation', icon:'voice',
    name:'Voice Agent Management', price:'AED 1,200/mo + AED 0.33/min', priceShort:'AED 1,200/mo + AED 0.33/min',
    one:'Monitor your AI voice agent.',
    desc:'Monthly management for an existing AI voice agent. Call transcript review, prompt tuning, new scenarios added, integration checks. Pairs with our Voice Agent build. Per-minute cost is pass-through.',
    steps:[
      ['Brief','Inherit your existing voice agent setup.'],
      ['Build','Weekly transcript review + prompt improvements + new scripts added.'],
      ['Launch','Monthly performance report with call quality + booking conversion.'],
    ],
    who:[
      ['Clinics, real estate, hospitality','Inbound calls = bookings. Voice agent needs constant tuning.'],
      ['Outbound sales teams','Voice campaigns iterate weekly.'],
    ]
  },
  { slug:'booking-automation-mgmt', cat:'automation', icon:'calendar',
    name:'Booking Automation Management', price:'AED 600/mo', priceShort:'AED 600/mo',
    one:'Keep your booking flows running.',
    desc:'Monthly maintenance for your booking system — Cal.com, Calendly, Acuity, custom. Calendar sync checks, reminder flow optimisation, no-show analysis, payment integration health, monthly report.',
    steps:[
      ['Brief','Inherit existing booking stack.'],
      ['Build','Reminder flow optimised, payments verified, integrations stress-tested.'],
      ['Launch','Monthly no-show + booking conversion report. On-call for breakages.'],
    ],
    who:[
      ['Clinics, salons, coaches, fitness','No-shows hurt. Tuned booking flows reduce them 30-50%.'],
      ['Sales teams','Demo bookings + reminders + reschedule flows that just work.'],
    ]
  },
  { slug:'rag-knowledge-base-mgmt', cat:'automation', icon:'text',
    name:'RAG Knowledge Base Management', price:'AED 800/mo', priceShort:'AED 800/mo',
    one:'Keep your AI assistant\'s knowledge fresh.',
    desc:'Monthly maintenance for an existing RAG (Retrieval-Augmented Generation) knowledge base. New docs ingested, outdated info pruned, retrieval quality tested, answer evaluation, monthly report.',
    steps:[
      ['Brief','Inherit existing RAG system.'],
      ['Build','Weekly doc ingestion + retrieval testing + bad-answer flagging.'],
      ['Launch','Monthly report on coverage, accuracy and unanswered queries.'],
    ],
    who:[
      ['Companies with internal AI assistants','Knowledge bases rot. Yours needs weekly upkeep.'],
      ['Customer support teams','Bot answers must reflect this week\'s policies, not last quarter\'s.'],
    ]
  },

  // ── E. Client & Business Operations (3) ─────────────────────────
  { slug:'crm-management', cat:'operations', icon:'crm',
    name:'CRM Setup & Management', price:'AED 2,000/mo', priceShort:'AED 2,000/mo',
    one:'HubSpot or Zoho, fully managed.',
    desc:'Full CRM management — HubSpot, Zoho or Pipedrive. Pipeline setup, lead routing, deal stage automation, custom reports, monthly hygiene review. Pairs with our cold email and AI SDR services.',
    steps:[
      ['Brief','Audit current CRM (or set up new one). Define pipeline stages and ICP.'],
      ['Build','Pipeline rebuilt, automations live, lead-routing rules in place, reports built.'],
      ['Launch','Weekly hygiene check, monthly pipeline review, on-demand changes.'],
    ],
    who:[
      ['Sales-led businesses','Your team uses (or refuses to use) the CRM. Make it actually work.'],
      ['Founders moving to a real CRM','From Sheets to HubSpot/Zoho in two weeks.'],
    ]
  },
  { slug:'pr-press-releases', cat:'operations', icon:'star',
    name:'PR & Press Releases', price:'AED 2,500/mo', priceShort:'AED 2,500/mo',
    one:'UAE media placements + announcements.',
    desc:'Earned media in UAE and GCC outlets. Press releases written, distributed to relevant editors, follow-ups handled, media monitoring, monthly clipping report. Includes 1-2 placement targets per month.',
    steps:[
      ['Brief','Identify newsworthy angles + target outlets per month.'],
      ['Build','Press release drafted, editor list refined, embargoes coordinated.'],
      ['Launch','Distributed, follow-ups managed. Monthly clipping report and SEO backlink view.'],
    ],
    who:[
      ['Funded startups & launches','Investor confidence and SEO value from real media coverage.'],
      ['Established brands','Quarterly campaigns, awards entries, exec announcements.'],
    ]
  },

  // ── F. One-Time Builds (14) ─────────────────────────────────────
  { slug:'build-chatbot', cat:'builds', icon:'chat',
    name:'Chatbot (Web / WhatsApp / Messenger)', price:'AED 7,500–35,000', priceShort:'From AED 7,500',
    one:'Custom chatbot live in 48 hours.',
    desc:'Production-grade chatbots for your website, WhatsApp Business or Messenger. Trained on your product, handles FAQs, qualifies leads, takes bookings and escalates to humans cleanly. AI-powered, hand-tuned.',
    steps:[
      ['Brief','Define use cases, voice and integrations (CRM, calendar, payments).'],
      ['Build','We build, train and test the bot on real customer scenarios.'],
      ['Launch','Live on your site / WhatsApp / Messenger in 48 hours after sign-off.'],
    ],
    who:[
      ['Service businesses','Clinics, agencies, real estate — 80% of FAQs are repeats.'],
      ['Ecom brands','Pre-purchase support that converts hesitant buyers.'],
    ]
  },
  { slug:'build-whatsapp-automation', cat:'builds', icon:'whatsapp',
    name:'WhatsApp Business Automation Setup', price:'AED 7,500–25,000', priceShort:'From AED 7,500',
    one:'Full WhatsApp business automation.',
    desc:'WhatsApp Business API set up properly: green tick, templates, opt-in flows, segmented broadcasts, chatbot, CRM integration, payment links. The full stack — built for compliance and scale.',
    steps:[
      ['Brief','Map customer journeys and required automations.'],
      ['Build','API connected, templates approved, flows built, CRM integrated.'],
      ['Launch','Tested end-to-end, your team trained, live within 5-10 days.'],
    ],
    who:[
      ['Retailers & ecom','WhatsApp is the highest-converting channel in MENA.'],
      ['Service businesses','Bookings, reminders, payment links, support — all in one thread.'],
    ]
  },
  { slug:'build-voice-agent', cat:'builds', icon:'voice',
    name:'Voice Agent Setup', price:'AED 8,000–30,000', priceShort:'From AED 8,000',
    one:'Inbound/outbound AI calling.',
    desc:'AI voice agents that sound human. Handle inbound calls (reception, FAQ, booking) and outbound (lead qualification, appointment confirmations, surveys). Bilingual Arabic + English available.',
    steps:[
      ['Brief','Define call flows, voice, languages and integrations (CRM, calendar).'],
      ['Build','Voice cloned (optional), flows scripted and tested on real scenarios.'],
      ['Launch','Live on your number within 7-10 days. Monthly tuning available.'],
    ],
    who:[
      ['Clinics, hospitality, real estate','Inbound calls 24/7 without hiring a receptionist.'],
      ['Outbound sales','AI dialler that qualifies before a human takes over.'],
    ]
  },
  { slug:'build-workflow-automation', cat:'builds', icon:'workflow',
    name:'Workflow Automation (n8n / Make / Zapier)', price:'AED 6,000–40,000', priceShort:'From AED 6,000',
    one:'Automate any process end-to-end.',
    desc:'Custom automation builds across n8n, Make, Zapier or code. Lead routing, invoice generation, report automation, data sync, AI agents in the loop. Scoped per project, fixed price.',
    steps:[
      ['Brief','Map the process. Identify integration points and exception cases.'],
      ['Build','Automation built, tested with real data, error-handling added.'],
      ['Launch','Live, monitored, documented. Optional monthly maintenance.'],
    ],
    who:[
      ['Ops-heavy businesses','Any repetitive task that humans do >10×/week.'],
      ['Finance, HR, sales ops','Reports, approvals, onboarding flows.'],
    ]
  },
  { slug:'build-booking-system', cat:'builds', icon:'calendar',
    name:'Booking Automation System', price:'AED 5,000–15,000', priceShort:'From AED 5,000',
    one:'Calendar + payments + reminders.',
    desc:'End-to-end booking systems for clinics, salons, coaches and consultants. Calendar sync, payment capture, multi-staff routing, SMS + WhatsApp reminders, no-show recovery flows.',
    steps:[
      ['Brief','Define services, staff, durations, payment terms and cancellation policy.'],
      ['Build','System set up (Cal.com / Acuity / custom), payments + reminders wired.'],
      ['Launch','Live, embedded on your site, team trained. Monthly management optional.'],
    ],
    who:[
      ['Clinics, salons, fitness studios','Manual booking eats hours and produces no-shows.'],
      ['Coaches & consultants','Calendar + Stripe + reminders, no apps to install.'],
    ]
  },
  { slug:'build-rag-assistant', cat:'builds', icon:'text',
    name:'RAG Knowledge Base Assistant', price:'AED 9,000–40,000', priceShort:'From AED 9,000',
    one:'Your docs, answerable by AI.',
    desc:'Custom AI assistants powered by your docs, policies, product catalogues or contracts. Built on RAG (vector search + LLM), accurate with citations, accessible via web app, Slack or WhatsApp.',
    steps:[
      ['Brief','Define knowledge sources, users (internal / customers) and surfaces.'],
      ['Build','Docs ingested, vector index built, prompt engineered, evaluation tested.'],
      ['Launch','Live on your channel of choice. Monthly maintenance recommended.'],
    ],
    who:[
      ['Companies with thick documentation','Legal, healthcare, technical products.'],
      ['Support teams','Tier-1 questions answered by AI before they hit a human.'],
    ]
  },
  { slug:'build-analytics-dashboard', cat:'builds', icon:'chart',
    name:'Analytics Dashboard Setup', price:'AED 4,500–22,000', priceShort:'From AED 4,500',
    one:'Custom analytics dashboard.',
    desc:'Custom dashboards in Looker Studio, Metabase or code. Pulls from ads platforms, GA4, CRM, Shopify, Stripe, custom DBs. One URL to see the whole business.',
    steps:[
      ['Brief','List data sources and the KPIs that matter.'],
      ['Build','Pipelines connected, dashboard designed, daily refresh automated.'],
      ['Launch','Delivered with training. Monthly management optional.'],
    ],
    who:[
      ['Marketing teams','Stop living in spreadsheets.'],
      ['Founders','One URL, all KPIs, no Mondays in Excel.'],
    ]
  },
  { slug:'build-website', cat:'builds', icon:'globe',
    name:'Website Build (Framer / Webflow / Custom)', price:'AED 9,000–40,000', priceShort:'From AED 9,000',
    one:'Modern website, 7-14 day delivery.',
    desc:'Fast, conversion-focused websites built in Framer, Webflow or custom code. Includes copywriting, design, build, CMS setup, SEO foundations and launch. 7-14 day delivery on standard projects.',
    steps:[
      ['Brief','Audit current site (if any), define structure, voice and conversion goals.'],
      ['Build','Wireframe → design → build, with copy and SEO baked in.'],
      ['Launch','Domain + hosting + analytics + GBP linked. Handover with training.'],
    ],
    who:[
      ['New businesses','Day-1 site that doesn\'t look like a free template.'],
      ['Brands redoing a tired site','Conversion + speed + modern stack.'],
    ]
  },
  { slug:'build-custom-app', cat:'builds', icon:'build',
    name:'Custom App Build', price:'AED 12,000–75,000', priceShort:'From AED 12,000',
    one:'Web or mobile app, built by Claude Code.',
    desc:'Custom apps — internal tools, customer portals, lightweight SaaS, mobile apps. Built fast with AI-assisted engineering (yes, we build apps with Claude Code) and shipped on real frameworks: Next.js, React Native, Supabase, Postgres.',
    steps:[
      ['Brief','Scope the app: users, core features, integrations, budget cap.'],
      ['Build','Sprint-based delivery with weekly demos. Real code, not no-code limits.'],
      ['Launch','Deployed on Vercel/your infra, code handed over, ongoing maintenance optional.'],
    ],
    who:[
      ['Operators with a clear app idea','You know what you want — we ship it in weeks not quarters.'],
      ['SaaS founders','MVP in 4-8 weeks instead of 6-12 months.'],
    ]
  },
  { slug:'build-shopify-store', cat:'builds', icon:'shop',
    name:'Shopify Store Build (Standard)', price:'AED 6,000–18,000', priceShort:'From AED 6,000',
    one:'Full Shopify store with apps + theme.',
    desc:'Full Shopify store builds: theme, custom sections, product setup, payments, shipping, taxes, key apps (reviews, upsells, email, WhatsApp). 7-10 day delivery on standard scopes.',
    steps:[
      ['Brief','Brand assets, product catalogue, payment + shipping setup.'],
      ['Build','Theme built or customised, products loaded, app stack installed.'],
      ['Launch','Domain live, payments tested, team trained. Optional ongoing management.'],
    ],
    who:[
      ['New ecom brands','Day-1 store that converts, not a Shopify default.'],
      ['Brands migrating from WooCommerce / Magento','Clean Shopify rebuild with full data import.'],
    ]
  },
  { slug:'build-shopify-starter', cat:'builds', icon:'rocket',
    name:'Shopify Starter Pack', price:'AED 4,500 flat', priceShort:'AED 4,500 flat',
    one:'Store + brand kit + chatbot + free month.',
    desc:'Flagship starter package: Shopify store build + basic brand identity (logo, colours, type) + WhatsApp chatbot + 1 free month of social media management. Everything a new ecom brand needs to go live.',
    steps:[
      ['Brief','One kickoff session: brand, products, channels.'],
      ['Build','Store + brand kit + chatbot built in parallel (10-14 days).'],
      ['Launch','Store live, brand assets delivered, chatbot connected, social management active for 30 days.'],
    ],
    who:[
      ['New ecom brands launching','You want to go live fast with the full stack — not piecemeal.'],
      ['Existing sellers consolidating','From multi-tool chaos to one clean setup.'],
    ]
  },
  { slug:'build-brand-identity', cat:'builds', icon:'brand',
    name:'Brand Identity & Design System', price:'AED 5,000–18,000', priceShort:'From AED 5,000',
    one:'Logo, colours, type, full guidelines.',
    desc:'Full brand identity systems. Logo (primary + variations), colour palette, type system, brand guidelines doc, social templates, slide deck template. Built for clarity and consistency across every touchpoint.',
    steps:[
      ['Brief','Discovery: positioning, audience, references, competitive landscape.'],
      ['Build','Logo concepts → refinement → full system (colours, type, voice, templates).'],
      ['Launch','Brand book delivered + all source files + 30-day support for rollout.'],
    ],
    who:[
      ['New businesses','Day-1 identity that won\'t need a rebrand in year 2.'],
      ['Established brands refreshing','Tired logo, inconsistent design — back to one system.'],
    ]
  },
  { slug:'build-landing-page', cat:'builds', icon:'rocket',
    name:'Landing Page Sprint (48-72hr)', price:'AED 4,500–8,000', priceShort:'From AED 4,500',
    one:'High-converting landing page, fast.',
    desc:'48-72 hour landing page sprints. Conversion-focused copy + design + build + analytics. Built in Framer, Webflow or custom. Used for ad campaigns, product launches, lead magnets and events.',
    steps:[
      ['Brief','60-min kickoff: offer, audience, goal, references.'],
      ['Build','Copy → design → build in 48-72 hours.'],
      ['Launch','Live on subdomain or main domain. Analytics + heatmap + a/b ready.'],
    ],
    who:[
      ['Brands running campaigns','One offer, one page, one conversion goal.'],
      ['Founders pre-launch','Validate demand with a real page in 3 days, not 3 months.'],
    ]
  },
  { slug:'build-crm-setup', cat:'builds', icon:'crm',
    name:'CRM Setup (HubSpot / Zoho)', price:'AED 5,000–15,000', priceShort:'From AED 5,000',
    one:'New CRM installed and migrated.',
    desc:'Full CRM implementation — HubSpot, Zoho or Pipedrive. Pipeline design, custom properties, automation rules, lead routing, integrations (email, calendar, WhatsApp, ads), data migration from your old system.',
    steps:[
      ['Brief','Audit current process (Sheets, old CRM) and define ideal pipeline.'],
      ['Build','CRM configured, automations built, integrations wired, data migrated.'],
      ['Launch','Team trained, documentation handed over. Optional monthly management.'],
    ],
    who:[
      ['Sales teams of 3-30','Outgrown Sheets, need a real CRM that doesn\'t take 6 months.'],
      ['Founders moving from one CRM to another','HubSpot → Zoho or vice-versa with clean migration.'],
    ]
  },
  { slug:'affiliate-program', cat:'builds', icon:'link',
    name:'Affiliate / Referral Program Build', price:'AED 3,500–8,000', priceShort:'From AED 3,500',
    one:'Launch your own affiliate engine.',
    desc:'A full affiliate + referral program built and launched in one project. Tracking platform (Refersion, UpPromote, Tolt or custom), commission structure, T&Cs, affiliate portal, landing pages, creative pack and a first wave of 5-10 affiliates recruited. Optional monthly management after.',
    steps:[
      ['Brief','Define commission structure, ICP affiliates, brand assets and target launch date.'],
      ['Build','Tracking installed, affiliate portal live, T&Cs and creative pack ready, payout flows wired.'],
      ['Launch','5-10 inaugural affiliates recruited, onboarded and live. Handover with training and SOPs.'],
    ],
    who:[
      ['DTC ecom brands','Affiliates + creators on commission = your best CAC.'],
      ['SaaS & subscription products','Referral programs that compound (Notion, Webflow, Dropbox style).'],
    ]
  },
];

// ───────────────────────────────────────────────────────────────────
// SHARED HTML BUILDERS
// ───────────────────────────────────────────────────────────────────

function head({ title, description, canonical, extraHead='' }) {
  return `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="canonical" href="https://novaagency.me/${canonical}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="https://novaagency.me/${canonical}">
  <meta property="og:image" content="https://novaagency.me/assets/img/og-default.jpg">
  <meta property="og:locale" content="en_AE">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <link rel="icon" type="image/svg+xml" href="/assets/img/nova-logo.svg">
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/favicon-32.png">
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/nova-logo-180.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/assets/css/styles.css">
  ${extraHead}
</head>`;
}

const NAV = ({ activeServices=false } = {}) => `
<a href="#main" class="skip-link" data-en="Skip to main content" data-ar="تخطي إلى المحتوى الرئيسي">Skip to main content</a>

<nav id="navbar" aria-label="Main navigation">
  <div class="nav-inner">

    <a href="/" class="nav-logo" aria-label="Nova Agency home">
      <div class="nav-logo-icon">
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <polyline points="4,28 13,16 20,22 32,8" stroke="#3B6FFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <polyline points="24,8 32,8 32,16" stroke="#3B6FFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="nav-logo-text">
        <span class="nav-logo-name">NOVA<span class="dot">.</span></span>
        <span class="nav-logo-sub" data-en="Agency · Dubai" data-ar="وكالة · دبي">Agency · Dubai</span>
      </div>
    </a>

    <ul class="nav-links">
      <li><a href="/" data-en="Home" data-ar="الرئيسية">Home</a></li>
      <li><a href="/services.html"${activeServices ? ' aria-current="page"' : ''} data-en="Services" data-ar="الخدمات">Services</a></li>
      <li><a href="/pricing.html" data-en="Pricing" data-ar="الأسعار">Pricing</a></li>
      <li><a href="/work.html" data-en="Our Work" data-ar="أعمالنا">Our Work</a></li>
      <li><a href="/about.html" data-en="About" data-ar="من نحن">About</a></li>
      <li><a href="/contact.html" data-en="Contact" data-ar="اتصل">Contact</a></li>
    </ul>

    <a href="https://wa.me/971544285018" class="btn-primary nav-cta" target="_blank" rel="noopener" data-en="WhatsApp Us" data-ar="واتساب">WhatsApp Us</a>

    <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
      <span></span><span></span><span></span>
    </button>
  </div>

  <div class="mobile-menu" id="mobile-menu">
    <ul>
      <li><a href="/" class="mobile-link" data-en="Home" data-ar="الرئيسية">Home</a></li>
      <li><a href="/services.html" class="mobile-link"${activeServices ? ' aria-current="page"' : ''} data-en="Services" data-ar="الخدمات">Services</a></li>
      <li><a href="/pricing.html" class="mobile-link" data-en="Pricing" data-ar="الأسعار">Pricing</a></li>
      <li><a href="/work.html" class="mobile-link" data-en="Our Work" data-ar="أعمالنا">Our Work</a></li>
      <li><a href="/about.html" class="mobile-link" data-en="About" data-ar="من نحن">About</a></li>
      <li><a href="/contact.html" class="mobile-link" data-en="Contact" data-ar="اتصل">Contact</a></li>
      <li><a href="/faq.html" class="mobile-link" data-en="FAQ" data-ar="الأسئلة">FAQ</a></li>
    </ul>
    <a href="https://wa.me/971544285018" class="btn-primary" target="_blank" rel="noopener" data-en="WhatsApp Us" data-ar="واتساب">WhatsApp Us</a>
  </div>
</nav>`;

const FOOTER = `
<footer id="footer" class="site-footer" role="contentinfo">
  <div class="site-footer-inner">

    <div class="footer-col footer-brand">
      <a href="/" class="footer-logo" aria-label="Nova Agency home">
        <div class="nav-logo-icon">
          <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <polyline points="4,28 13,16 20,22 32,8" stroke="#3B6FFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <polyline points="24,8 32,8 32,16" stroke="#3B6FFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <span class="nav-logo-name">NOVA<span class="dot">.</span></span>
      </a>
      <p class="footer-tagline" data-en="AI-powered marketing for Dubai businesses. Built by engineers who code live trading algorithms — not marketers who learned Canva." data-ar="تسويق مدعوم بالذكاء الاصطناعي لشركات دبي. بناء مهندسين، وليس مسوقين.">
        AI-powered marketing for Dubai businesses. Built by engineers who code live trading algorithms — not marketers who learned Canva.
      </p>
    </div>

    <div class="footer-col">
      <h4 class="footer-heading" data-en="Quick Links" data-ar="روابط سريعة">Quick Links</h4>
      <ul class="footer-links">
        <li><a href="/" data-en="Home" data-ar="الرئيسية">Home</a></li>
        <li><a href="/services.html" data-en="Services" data-ar="الخدمات">Services</a></li>
        <li><a href="/pricing.html" data-en="Pricing" data-ar="الأسعار">Pricing</a></li>
        <li><a href="/work.html" data-en="Our Work" data-ar="أعمالنا">Our Work</a></li>
        <li><a href="/contact.html" data-en="Contact" data-ar="اتصل">Contact</a></li>
        <li><a href="/faq.html" data-en="FAQ" data-ar="الأسئلة الشائعة">FAQ</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h4 class="footer-heading" data-en="Services" data-ar="الخدمات">Services</h4>
      <ul class="footer-links">
        <li><a href="/services.html#content" data-en="Content &amp; Social" data-ar="المحتوى والسوشيال">Content &amp; Social</a></li>
        <li><a href="/services.html#platforms" data-en="Specialist Channels" data-ar="قنوات متخصصة">Specialist Channels</a></li>
        <li><a href="/services.html#performance" data-en="Performance Marketing" data-ar="تسويق الأداء">Performance Marketing</a></li>
        <li><a href="/services.html#automation" data-en="AI Automation" data-ar="أتمتة بالذكاء الاصطناعي">AI Automation</a></li>
        <li><a href="/services.html#operations" data-en="Business Operations" data-ar="العمليات">Business Operations</a></li>
        <li><a href="/services.html#builds" data-en="One-Time Builds" data-ar="مشاريع لمرة واحدة">One-Time Builds</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h4 class="footer-heading" data-en="Get In Touch" data-ar="تواصل معنا">Get In Touch</h4>
      <ul class="footer-links">
        <li><a href="https://wa.me/971544285018" target="_blank" rel="noopener" data-en="WhatsApp · +971 54 428 5018" data-ar="واتساب · +971 54 428 5018">WhatsApp · +971 54 428 5018</a></li>
        <li><a href="mailto:hello@novaagency.me">hello@novaagency.me</a></li>
        <li><a href="#" target="_blank" rel="noopener" data-en="Find us on Google Business" data-ar="نحن على Google Business">Find us on Google Business</a></li>
        <li><span data-en="Dubai, UAE" data-ar="دبي، الإمارات">Dubai, UAE</span></li>
      </ul>
    </div>

  </div>

  <div class="footer-bottom">
    <p data-en="© 2026 Nova Agency · Dubai, UAE" data-ar="© 2026 وكالة نوفا · دبي، الإمارات">© 2026 Nova Agency · Dubai, UAE</p>
    <p data-en="Built with AI · Run by humans" data-ar="بُني بالذكاء الاصطناعي · يُدار بأيدي بشرية">Built with AI · Run by humans</p>
  </div>
</footer>`;

const FAB = `
<a href="https://wa.me/971544285018"
   class="fab-whatsapp"
   target="_blank"
   rel="noopener"
   aria-label="Chat with Nova Agency on WhatsApp"
   data-en="Chat with us on WhatsApp"
   data-ar="تحدث معنا على واتساب">
  <span class="fab-whatsapp-pulse" aria-hidden="true"></span>
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M16 3C8.82 3 3 8.82 3 16c0 2.4.66 4.74 1.9 6.78L3 29l6.4-1.86A12.9 12.9 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3Zm0 23.6c-2.05 0-4.06-.55-5.82-1.6l-.42-.25-3.8 1.1 1.13-3.7-.27-.43A10.55 10.55 0 0 1 5.4 16C5.4 10.15 10.15 5.4 16 5.4S26.6 10.15 26.6 16 21.85 26.6 16 26.6Zm5.83-7.92c-.32-.16-1.88-.93-2.17-1.04-.29-.1-.5-.16-.71.16-.21.32-.81 1.04-.99 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.58-1.6a9.7 9.7 0 0 1-1.79-2.23c-.19-.32-.02-.5.14-.66.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.55-.08-.16-.71-1.71-.98-2.34-.26-.62-.52-.53-.71-.54l-.61-.01c-.21 0-.55.08-.84.4-.29.32-1.1 1.07-1.1 2.61 0 1.55 1.12 3.04 1.28 3.25.16.21 2.21 3.38 5.36 4.74.75.32 1.34.52 1.79.66.75.24 1.43.21 1.97.13.6-.09 1.88-.77 2.14-1.51.27-.74.27-1.37.19-1.51-.08-.13-.29-.21-.61-.37Z" fill="currentColor"/>
  </svg>
</a>`;

const COOKIE = `
<aside id="cookie-banner" class="cookie-banner" role="dialog" aria-live="polite" aria-labelledby="cookie-banner-title" hidden>
  <div class="cookie-banner-body">
    <h2 id="cookie-banner-title" class="cookie-banner-title" data-en="We use cookies" data-ar="نحن نستخدم ملفات تعريف الارتباط">We use cookies</h2>
    <p class="cookie-banner-text" data-en="We use cookies to improve your experience. By continuing you agree to our privacy policy." data-ar="نستخدم ملفات تعريف الارتباط لتحسين تجربتك. بمواصلة التصفح فإنك توافق على سياسة الخصوصية الخاصة بنا.">
      We use cookies to improve your experience. By continuing you agree to our privacy policy.
    </p>
  </div>
  <div class="cookie-banner-actions">
    <button type="button" id="cookie-decline" class="btn-ghost" data-en="Decline" data-ar="رفض">Decline</button>
    <button type="button" id="cookie-accept" class="btn-primary" data-en="Accept" data-ar="قبول">Accept</button>
  </div>
</aside>`;

const LANG_TOGGLE = `
<button type="button" id="lang-fab" class="lang-fab" aria-haspopup="true" aria-expanded="false" aria-controls="lang-fab-popup" aria-label="Change language">
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/>
    <path d="M3 12h18" stroke="currentColor" stroke-width="1.8"/>
    <path d="M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9s1.3-6.3 3.8-9z" stroke="currentColor" stroke-width="1.8"/>
  </svg>
  <span id="lang-fab-label">EN</span>
</button>

<div id="lang-fab-popup" class="lang-fab-popup" role="menu" aria-labelledby="lang-fab">
  <button type="button" class="lang-fab-option" data-lang="en" role="menuitemradio" aria-checked="true">
    <span>English</span>
    <svg class="check" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M5 12l5 5L20 7" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
  <button type="button" class="lang-fab-option" data-lang="ar" role="menuitemradio" aria-checked="false">
    <span>العربية</span>
    <svg class="check" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M5 12l5 5L20 7" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
</div>`;

const SCRIPTS = `<script src="/assets/js/main.js" defer></script>
<script src="/assets/js/counter.js" defer></script>`;

// ───────────────────────────────────────────────────────────────────
// services.html
// ───────────────────────────────────────────────────────────────────

function renderServiceCard(s) {
  const icon = ICONS[s.icon] || ICONS.default;
  return `        <a class="service-card fade-in" href="/services/${s.slug}.html">
          <div class="service-icon">${icon}</div>
          <h3>${s.name}</h3>
          <p>${s.one}</p>
          <p style="margin-top:14px;font-family:var(--font-head);font-size:13px;font-weight:700;letter-spacing:1.5px;color:var(--light-blue);">${s.priceShort}</p>
        </a>`;
}

function renderCategorySection(cat) {
  const items = SERVICES.filter(s => s.cat === cat.id).map(renderServiceCard).join('\n');
  return `  <section id="${cat.id}" class="full-section">
    <span class="section-pill fade-in" data-en="${cat.pill}">${cat.pill}</span>
    <h2 class="section-heading fade-in" data-en="${cat.heading}">${cat.heading}</h2>
    <p class="section-sub fade-in">${cat.sub}</p>
    <div class="services-grid">
${items}
    </div>
  </section>
  <div class="gradient-divider"></div>`;
}

function buildServicesIndex() {
  const sections = CATEGORIES.map(renderCategorySection).join('\n\n');
  const body = `
${NAV({ activeServices:true })}

<main id="main">

  <!-- ── Hero ── -->
  <section class="page-hero">
    <span class="section-pill fade-in" data-en="Services" data-ar="الخدمات">Services</span>
    <h1 class="fade-in" data-en="Everything Under One Roof" data-ar="كل ما تحتاجه في مكان واحد"><span class="grad">Everything Under One Roof</span></h1>
    <p class="lede fade-in" data-en="48 services. AI-powered delivery. Pick a tier or build à la carte.">48 services. AI-powered delivery. Pick a tier or build à la carte.</p>
    <div class="hero-ctas fade-in" style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;">
      <a class="btn-primary" href="/pricing.html" data-en="See Pricing">See Pricing →</a>
      <a class="btn-ghost" href="https://wa.me/971544285018" target="_blank" rel="noopener" data-en="Talk to a Human">Talk to a Human</a>
    </div>
  </section>
  <div class="gradient-divider"></div>

${sections}

  <!-- ── CTA ── -->
  <section class="full-section" style="text-align:center;">
    <span class="section-pill fade-in">Not Sure Which to Pick?</span>
    <h2 class="section-heading fade-in" data-en="Take the 60-Second Audit Quiz">Take the 60-Second Audit Quiz</h2>
    <p class="section-sub fade-in">Answer 5 questions and we'll recommend the right tier and services for your business.</p>
    <div class="fade-in" style="margin-top:24px;">
      <a class="btn-primary large" href="/#quiz" data-en="Take the Quiz">Take the Quiz →</a>
    </div>
  </section>

</main>

${FOOTER}
${FAB}
${COOKIE}
${LANG_TOGGLE}

${SCRIPTS}
</body>
</html>`;
  return head({
    title: 'Services — Nova Agency Dubai',
    description: '50 AI-powered marketing services under one roof. Social media, paid ads, automation, chatbots, websites and more. From AED 500/mo.',
    canonical: 'services.html',
  }) + '\n<body>' + body;
}

// ───────────────────────────────────────────────────────────────────
// individual service page
// ───────────────────────────────────────────────────────────────────

function categoryName(catId) {
  return CATEGORIES.find(c => c.id === catId).heading.replace(/ —.*$/, '');
}
function categoryPill(catId) {
  return CATEGORIES.find(c => c.id === catId).pill;
}

function urlEncodeMsg(s) {
  return encodeURIComponent(s).replace(/%20/g, '+');
}

function renderServicePage(s) {
  const catName = categoryName(s.cat);
  const waText = urlEncodeMsg(`Hi Nova, I'm interested in ${s.name}`);
  const steps = s.steps.map(([title, body], i) =>
    `      <div class="step fade-in">
        <h3>${title}</h3>
        <p>${body}</p>
      </div>`).join('\n');
  const who = s.who.map(([title, body]) =>
    `      <div class="who-card fade-in">
        <h3>${title}</h3>
        <p>${body}</p>
      </div>`).join('\n');

  const body = `
${NAV({ activeServices:true })}

<main id="main">

  <!-- ── Hero ── -->
  <section class="service-detail-hero">
    <p class="fade-in" style="font-size:13px;color:rgba(255,255,255,0.5);margin-bottom:18px;" aria-label="Breadcrumb">
      <a href="/" style="color:inherit;text-decoration:none;" data-en="Home" data-ar="الرئيسية">Home</a>
      <span style="opacity:0.5;">›</span>
      <a href="/services.html" style="color:inherit;text-decoration:none;" data-en="Services" data-ar="الخدمات">Services</a>
      <span style="opacity:0.5;">›</span>
      <a href="/services.html#${s.cat}" style="color:inherit;text-decoration:none;">${catName}</a>
      <span style="opacity:0.5;">›</span>
      <span style="color:rgba(255,255,255,0.75);">${s.name}</span>
    </p>
    <span class="section-pill fade-in">${categoryPill(s.cat)}</span>
    <h1 class="fade-in" data-en="${s.name.replace(/"/g,'&quot;')}">${s.name}</h1>
    <p class="lede fade-in">${s.one}</p>

    <div class="hero-ctas fade-in" style="display:flex;gap:14px;flex-wrap:wrap;">
      <a class="btn-primary" href="https://wa.me/971544285018?text=${waText}" target="_blank" rel="noopener" data-en="WhatsApp Us">WhatsApp Us</a>
      <a class="btn-ghost" href="/pricing.html" data-en="See Pricing">See Pricing →</a>
    </div>

    <dl class="service-detail-meta fade-in">
      <div><dt>Price</dt><dd>${s.price}</dd></div>
      <div><dt>Category</dt><dd>${catName}</dd></div>
      <div><dt>Delivery</dt><dd>${s.cat === 'builds' ? 'One-time project' : 'Monthly retainer'}</dd></div>
    </dl>
  </section>
  <div class="gradient-divider"></div>

  <!-- ── Overview ── -->
  <section class="full-section">
    <span class="section-pill fade-in">Overview</span>
    <h2 class="section-heading fade-in" data-en="What's Included">What's Included</h2>
    <p class="section-sub fade-in" style="text-align:left;max-width:820px;margin-left:0;">${s.desc}</p>
  </section>
  <div class="gradient-divider"></div>

  <!-- ── How it works ── -->
  <section class="full-section">
    <span class="section-pill fade-in">How It Works</span>
    <h2 class="section-heading fade-in" data-en="Three Steps to Live">Three Steps to Live</h2>
    <div class="how-it-works-steps" style="margin-top:32px;">
${steps}
    </div>
  </section>
  <div class="gradient-divider"></div>

  <!-- ── Who it's for ── -->
  <section class="full-section">
    <span class="section-pill fade-in">Who It's For</span>
    <h2 class="section-heading fade-in" data-en="Is This Right For You?">Is This Right For You?</h2>
    <div class="who-its-for" style="margin-top:32px;">
${who}
    </div>
  </section>
  <div class="gradient-divider"></div>

  <!-- ── Pricing ── -->
  <section class="full-section">
    <span class="section-pill fade-in">Pricing</span>
    <h2 class="section-heading fade-in" data-en="Transparent. No Discovery Calls.">Transparent. No Discovery Calls.</h2>
    <div style="max-width:420px;margin:32px auto 0;">
      <div class="pricing-card featured-pricing fade-in">
        <div class="tier-name">${categoryPill(s.cat)}</div>
        <div class="tier-price" style="font-size:28px;">${s.price}</div>
        <div class="tier-commit">${s.cat === 'builds' ? 'One-time · Fixed scope' : 'Month-to-month · Cancel anytime'}</div>
        <ul class="tier-features" style="margin-top:18px;list-style:none;padding:0;color:rgba(255,255,255,0.7);font-size:14px;line-height:1.9;">
          <li>✓ ${s.steps[0][0]}: ${s.steps[0][1]}</li>
          <li>✓ ${s.steps[1][0]}: ${s.steps[1][1]}</li>
          <li>✓ ${s.steps[2][0]}: ${s.steps[2][1]}</li>
        </ul>
        <a class="btn-primary tier-cta" href="https://wa.me/971544285018?text=${waText}" target="_blank" rel="noopener" style="margin-top:20px;justify-content:center;">Get Started →</a>
      </div>
    </div>
  </section>
  <div class="gradient-divider"></div>

  <!-- ── Examples placeholder ── -->
  <section class="full-section">
    <span class="section-pill fade-in">Examples</span>
    <h2 class="section-heading fade-in" data-en="Case Studies">Case Studies</h2>
    <p class="section-sub fade-in">We're documenting our first 10 clients. Real numbers, no fluff.</p>
    <div class="examples-grid" style="margin-top:32px;">
      <div class="example-card fade-in">
        <span class="ex-label">Coming Soon</span>
        <h4>Case study coming soon</h4>
        <p>We're documenting our first 10 clients — real numbers, real timelines, no fluff.</p>
      </div>
      <div class="example-card fade-in">
        <span class="ex-label">Coming Soon</span>
        <h4>Case study coming soon</h4>
        <p>We're documenting our first 10 clients — real numbers, real timelines, no fluff.</p>
      </div>
      <div class="example-card fade-in">
        <span class="ex-label">Coming Soon</span>
        <h4>Case study coming soon</h4>
        <p>We're documenting our first 10 clients — real numbers, real timelines, no fluff.</p>
      </div>
    </div>
  </section>
  <div class="gradient-divider"></div>

  <!-- ── Bottom CTA ── -->
  <section class="full-section" style="text-align:center;">
    <h2 class="section-heading fade-in" data-en="Ready to Start?">Ready to Start?</h2>
    <p class="section-sub fade-in">We reply on WhatsApp in under 15 minutes during Dubai business hours.</p>
    <div class="fade-in" style="margin-top:24px;display:flex;gap:14px;justify-content:center;flex-wrap:wrap;">
      <a class="btn-primary large" href="https://wa.me/971544285018?text=${waText}" target="_blank" rel="noopener" data-en="WhatsApp Us">WhatsApp Us →</a>
      <a class="btn-ghost" href="/pricing.html" data-en="Compare Tiers">Or compare tiers →</a>
    </div>
  </section>

</main>

${FOOTER}
${FAB}
${COOKIE}
${LANG_TOGGLE}

${SCRIPTS}
</body>
</html>`;

  return head({
    title: `${s.name} — Nova Agency`,
    description: s.one,
    canonical: `services/${s.slug}.html`,
  }) + '\n<body>' + body;
}

// ───────────────────────────────────────────────────────────────────
// WRITE FILES
// ───────────────────────────────────────────────────────────────────

if (!fs.existsSync(SERVICES_DIR)) fs.mkdirSync(SERVICES_DIR, { recursive: true });

// Write services.html (overview)
fs.writeFileSync(path.join(ROOT, 'services.html'), buildServicesIndex(), 'utf8');
console.log('✓ services.html written');

// Write each detail page
const slugs = new Set();
let count = 0;
for (const s of SERVICES) {
  if (slugs.has(s.slug)) throw new Error(`Duplicate slug: ${s.slug}`);
  slugs.add(s.slug);
  fs.writeFileSync(path.join(SERVICES_DIR, `${s.slug}.html`), renderServicePage(s), 'utf8');
  count++;
}

// Sanity-check counts per category
const byCat = {};
for (const s of SERVICES) byCat[s.cat] = (byCat[s.cat] || 0) + 1;
console.log(`✓ ${count} detail pages written`);
console.log('  Per category:', JSON.stringify(byCat));

const expected = { content: 12, platforms: 6, performance: 10, automation: 5, operations: 2, builds: 15 };
for (const k of Object.keys(expected)) {
  if (byCat[k] !== expected[k]) {
    console.error(`✗ Mismatch in ${k}: expected ${expected[k]}, got ${byCat[k]}`);
    process.exit(1);
  }
}
if (count !== 50) {
  console.error(`✗ Total: expected 50, got ${count}`);
  process.exit(1);
}
console.log('✓ All counts correct (12 + 6 + 10 + 5 + 2 + 15 = 50)');
