# CarpetCo Dukinfield - Project Documentation

## Project Overview
Professional carpet fitting website for CarpetCo Dukinfield using Next.js 15, React 19, and Tailwind CSS v4.

**Live Site:** https://carpetcodukinfield.co.uk
**Client:** CarpetCo Dukinfield, Wild St, Dukinfield SK16 4DL
**Location:** /home/andrew/code/2025/client-sites/carpet-co-site

---

## Recent Updates (January 2026)

### Layout Restructure
- ✅ Removed About section
- ✅ Moved Opening Hours to Find Us section (alongside Google Map)
- ✅ Moved Contact Information to Contact section (alongside contact form)
- ✅ Updated NavBar: replaced 'About' with 'Find Us'
- ✅ Improved responsive layout with proper centering and consistent styling
- ✅ Reversed mobile column order in contact section (form first, info second)
- ✅ Adjusted Google Maps zoom level (z=14)

### Current Structure
```
Hero
Gallery
Reviews
Find Us (Map + Opening Hours side-by-side)
Contact (Contact Info + Form side-by-side)
Footer
```

---

## Next Steps - SEO & Launch

### 1. Create Sitemap ⚠️ PRIORITY
Create `app/sitemap.ts` with the following content:

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://carpetcodukinfield.co.uk'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
```

**After creating:** Submit sitemap in Google Search Console at `https://carpetcodukinfield.co.uk/sitemap.xml`

### 2. Google Search Console Setup
- ✅ DNS TXT record added in Vercel: `google-site-verification=PvxoqMQp1HLWG7Kl4we25cXj_oUavD7W8I8UH5GR-y0`
- ⏳ Verify ownership in Google Search Console (wait 5-15 min for DNS propagation)
- ⏳ Submit sitemap once verified
- ⏳ Request indexing for main page

**Timeline:**
- Verification: 5-15 minutes after DNS propagates
- Search data appearing: 1-2 days (requires actual search traffic)
- Full indexing: 2-4 weeks for new sites

### 3. SEO Metadata Review
Current metadata in `app/layout.tsx`:
```typescript
title: "CarpetCo Dukinfield | Carpet Fitters of Distinction"
description: "Professional carpet fitting services in Dukinfield..."
```

**Consider adding:**
- Open Graph images (for social sharing)
- Twitter card metadata
- Structured data (LocalBusiness schema)

### 4. Performance Optimization
- [ ] Test with Google PageSpeed Insights: https://pagespeed.web.dev/
- [ ] Optimize images (already using WebP?)
- [ ] Check Core Web Vitals scores
- [ ] Test mobile performance on actual device

### 5. robots.txt
Check if `public/robots.txt` exists and is configured correctly:
```
User-agent: *
Allow: /
Sitemap: https://carpetcodukinfield.co.uk/sitemap.xml
```

---

## Tech Stack

- **Framework:** Next.js 15.5.6 (App Router)
- **React:** 19
- **Styling:** Tailwind CSS v4
- **Fonts:** Montserrat, Bebas Neue
- **Hosting:** Vercel
- **Domain:** carpetcodukinfield.co.uk (Vercel nameservers)

---

## Key Files

- `app/page.tsx` - Main homepage structure
- `app/layout.tsx` - Root layout, metadata, fonts
- `app/components/GoogleMap.tsx` - Map + Opening Hours section
- `app/components/ContactForm.tsx` - Contact Info + Form section
- `app/components/NavBar.tsx` - Navigation menu
- `app/globals.css` - Global styles and color scheme

---

## Color Scheme

**Light Mode:**
- Primary Blue: `--blue`
- Gold Accents: `--gold-dark`, `--gold`
- Background: `--cream`, white

**Dark Mode:**
- Background: black, `--zinc-900`
- Primary: `--gold-light`
- Accent: `--blue`

---

## Deployment

**Current:** Deployed to Vercel at https://carpetcodukinfield.co.uk

**To deploy updates:**
```bash
git add .
git commit -m "Description of changes"
git push
```
Vercel auto-deploys from the main branch.

---

## Testing

**Local Development:**
```bash
npm run dev
```

**Test on Mobile:**
1. Start dev server: `npm run dev`
2. Find local IP: `hostname -I | awk '{print $1}'` (Current: 192.168.1.39)
3. Access on phone (same WiFi): `http://192.168.1.39:3000`

**Build Test:**
```bash
npm run build
npm run start
```

---

## Contact Information

**Client Social Media:**
- Facebook: https://www.facebook.com/profile.php?id=61584835528881
- Instagram: https://www.instagram.com/carpetcodukinfield

**Business Details:**
- Address: Wild St, Dukinfield SK16 4DL
- Phone: 0161 344 5377
- Hours: Monday-Friday 10am-5pm, Closed weekends

---

## Notes

- Mobile layout reverses contact section order (form first, then contact info)
- Google Maps zoom set to z=14 for better area context
- All components fully responsive (desktop row, mobile column)
- Dark mode toggle available in navbar

---

*Last Updated: January 9, 2026*
