# AI Missed Call Recovery Landing Page

A modern, glass morphism-themed landing page for AI-powered missed call recovery service.

## 🌐 Live Site
[ai-missed-call-recovery.vercel.app](https://ai-missed-call-recovery.vercel.app)

## 🎨 Design Features
- **Glass Morphism**: Modern translucent design with blurred backgrounds
- **Gradient Color Palette**: Deep purple/indigo base with pink accents
- **Smooth Animations**: Scroll-triggered animations and micro-interactions
- **Fully Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Single-file HTML with embedded CSS/JS

## 📁 Project Structure

```
ai-missed-call-recovery/
├── index.html              # Main landing page (glass morphism design)
├── api/                    # Vercel Serverless Functions
│   ├── hello.js           # Simple hello world endpoint
│   ├── subscribe.js       # Email capture & lead submission
│   └── status.js          # API health check
├── README.md              # This file
└── vercel.json            # Vercel configuration
```

## 🚀 API Endpoints

### GET /api/hello
Simple hello world endpoint for testing.

**Query Parameters:**
- `name` (optional): Name to greet

**Example:**
```bash
curl https://ai-missed-call-recovery.vercel.app/api/hello?name=John
```

### POST /api/subscribe
Lead capture endpoint for form submissions.

**Body (JSON):**
```json
{
  "businessName": "Example Business",
  "phone": "(555) 123-4567",
  "email": "contact@example.com",
  "businessType": "dental"
}
```

**Example:**
```bash
curl -X POST https://ai-missed-call-recovery.vercel.app/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"businessName":"Test","phone":"(555) 123-4567","email":"test@example.com","businessType":"dental"}'
```

### GET /api/status
Health check endpoint showing API status.

**Example:**
```bash
curl https://ai-missed-call-recovery.vercel.app/api/status
```

## 🛠️ Development

### Local Development
```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Run locally
vercel dev
```

### Deployment
Connected to Vercel for automatic deployments on push to main branch.

```bash
# Manual deployment
vercel --prod
```

## 📋 To-Do for Production

### API Enhancements
- [ ] Connect to database (Supabase, MongoDB, etc.)
- [ ] Implement email confirmation system
- [ ] Add CRM integration (HubSpot, Salesforce)
- [ ] Set up webhook notifications
- [ ] Add rate limiting
- [ ] Implement API authentication

### Landing Page
- [ ] Add more testimonials with real data
- [ ] Create video demo
- [ ] Add FAQ section
- [ ] Implement A/B testing
- [ ] Add live chat widget
- [ ] Connect analytics (Google Analytics, Plausible)

### Marketing
- [ ] SEO optimization
- [ ] Social media meta tags
- [ ] Blog section
- [ ] Case studies page
- [ ] Pricing calculator

## 🎯 UX Flow

1. **Hero Section** - Clear value proposition with strong CTA
2. **Stats Section** - Show the problem with hard numbers
3. **How It Works** - 4-step explanation of the process
4. **Features** - Key capabilities in glass cards
5. **Testimonials** - Social proof from satisfied customers
6. **Pricing** - Transparent pricing with featured plan
7. **CTA + Form** - Final conversion point with lead capture

## 🎨 Color Palette

```css
--primary: #8b5cf6        /* Purple */
--primary-light: #a78bfa  /* Light Purple */
--primary-dark: #7c3aed   /* Dark Purple */
--secondary: #ec4899      /* Pink */
--accent: #06b6d4         /* Cyan */
--dark: #1e1b4b           /* Deep Navy */
```

## 📱 Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Glass morphism effects, animations, gradients
- **Vanilla JavaScript** - Form handling, scroll animations
- **Vercel Functions** - Serverless API endpoints

## 📄 License
Private project - All rights reserved

## 👤 Contact
For questions or support, contact: hello@aicallrecovery.com
# Last updated: Thu Feb  5 00:24:28 EST 2026
