# Dual Language Implementation Guide

This guide explains how to customize the dual language feature for client projects.

## Quick Start

The screenshot-showcase template comes with **English and French** languages pre-configured using **next-intl**.

### URL Structure
- English: `https://yoursite.com/en/`
- French: `https://yoursite.com/fr/`

The middleware automatically redirects root URL (`/`) to `/en/` (default language).

---

## How to Customize Content for a Client

### 1. Update English Translations

Edit `/messages/en.json`:

```json
{
  "Nav": {
    "SiteName": "Your Client's Business Name",
    "Home": "Home",
    "Gallery": "Gallery",
    "About": "About",
    "Contact": "Contact",
    "Services": "Services"
  },
  "Hero": {
    "Title": "Client's Hero Title",
    "Subtitle": "Client's tagline or description",
    "ViewGallery": "View Gallery",
    "GetInTouch": "Get in Touch"
  },
  "Contact": {
    "Title": "Get In Touch",
    "Description": "Contact form intro text",
    "Name": "Name",
    "Email": "Email",
    // ... etc
  }
}
```

### 2. Update French Translations

Edit `/messages/fr.json` with the French versions:

```json
{
  "Nav": {
    "SiteName": "Nom de l'Entreprise du Client",
    "Home": "Accueil",
    "Gallery": "Galerie",
    "About": "À Propos",
    "Contact": "Contact",
    "Services": "Services"
  },
  "Hero": {
    "Title": "Titre Principal du Client",
    "Subtitle": "Slogan ou description du client",
    "ViewGallery": "Voir la Galerie",
    "GetInTouch": "Nous Contacter"
  }
  // ... etc
}
```

### 3. Test Both Languages

```bash
npm run dev

# Visit:
# http://localhost:3000/en  (English)
# http://localhost:3000/fr  (French)
```

Click the language switcher dropdown in the nav to test switching.

---

## Translation File Structure

All text content is organized by **namespace** (component/section):

```json
{
  "Nav": { /* Navigation text */ },
  "Hero": { /* Hero section text */ },
  "Gallery": { /* Gallery section text */ },
  "About": { /* About section text */ },
  "Contact": { /* Contact form text */ },
  "Services": { /* Services section text */ },
  "GoogleMap": { /* Map component text */ },
  "Footer": { /* Footer text */ }
}
```

**Key Rule**: Both `en.json` and `fr.json` must have the **exact same keys**. Only the values change.

---

## Adding a New Language

Want to add Spanish, German, or another language?

### 1. Add Locale to Config

Edit `/src/i18n/routing.ts`:

```typescript
export const routing = defineRouting({
  locales: ['en', 'fr', 'es'], // Add 'es' for Spanish
  defaultLocale: 'en'
});
```

### 2. Create Translation File

Create `/messages/es.json` with Spanish translations (copy structure from `en.json`).

### 3. Update Middleware

Edit `/src/middleware.ts`:

```typescript
export const config = {
  matcher: ['/', '/(fr|en|es)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
  //                        ^^ Add 'es'
};
```

### 4. Update Language Switcher

Edit `/app/[locale]/components/LanguageSwitcher.tsx`:

```typescript
const languages = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' } // Add Spanish
];
```

---

## How Translation Works in Components

### Client Components

Use the `useTranslations` hook:

```tsx
'use client';
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('Hero'); // Namespace from JSON

  return (
    <div>
      <h1>{t('Title')}</h1>
      <p>{t('Subtitle')}</p>
    </div>
  );
}
```

### Server Components

Use `getTranslations` (async):

```tsx
import { getTranslations } from 'next-intl/server';

export default async function MyServerComponent() {
  const t = await getTranslations('Gallery');

  return (
    <div>
      <h2>{t('Title')}</h2>
      <p>{t('Description')}</p>
    </div>
  );
}
```

---

## Common Customization Tasks

### Changing Default Language

Edit `/src/i18n/routing.ts`:

```typescript
export const routing = defineRouting({
  locales: ['en', 'fr'],
  defaultLocale: 'fr' // Change to French as default
});
```

Also update middleware in `/src/middleware.ts`:

```typescript
export default createMiddleware({
  locales: ['en', 'fr'],
  defaultLocale: 'fr' // Match the routing config
});
```

### Hiding the Language Switcher

If client only needs one language, remove `<LanguageSwitcher />` from:
- `/app/[locale]/components/NavBar.tsx` (lines ~43 and ~51)

But you'll still need to keep the `[locale]` structure - just remove one language from the config.

### SEO for Dual Language Sites

Each language gets its own URL:
- `/en/about` → English About page
- `/fr/about` → French About page

Search engines index them separately, which is great for SEO!

To add language-specific meta tags, update `/app/[locale]/layout.tsx`:

```tsx
export async function generateMetadata({ params }: LayoutProps) {
  const { locale } = await params;

  return {
    title: locale === 'fr' ? 'Titre Français' : 'English Title',
    description: locale === 'fr'
      ? 'Description en français'
      : 'English description'
  };
}
```

---

## Client Content Checklist

When gathering content from client for dual language site:

- [ ] Business name in both languages
- [ ] Hero section title + subtitle (EN & FR)
- [ ] About section paragraphs (EN & FR)
- [ ] Service/product names and descriptions (EN & FR)
- [ ] Contact form labels (usually standard, but verify)
- [ ] Footer text (EN & FR)
- [ ] Any custom page content (EN & FR)
- [ ] Button text (EN & FR)
- [ ] Error messages if any (EN & FR)

**Important**: Make it clear to client they must provide ALL content in BOTH languages. You're not a translator!

---

## Troubleshooting

### Error: "locale is not a valid locale"

Check that:
1. Locale is in `routing.ts` config
2. Locale is in `middleware.ts` matcher
3. Translation file exists (e.g., `messages/en.json`)

### Language switcher not working

Make sure:
1. `LanguageSwitcher` component is imported in NavBar
2. `locale` prop is passed from page to NavBar
3. Links use correct format: `/${lang.code}${currentRoute}`

### Translations not updating

1. Restart dev server: `npm run dev`
2. Clear `.next` folder: `rm -rf .next && npm run dev`
3. Check JSON syntax (no trailing commas, valid JSON)

---

## Best Practices

1. **Keep translation keys consistent** - Never change keys between languages
2. **Use descriptive namespaces** - Group related translations together
3. **Test both languages** - Always verify both EN and FR versions work
4. **Client provides translations** - You're not responsible for translation quality
5. **Document custom keys** - If you add new translation keys, note them for client

---

## File Reference

| File | Purpose |
|------|---------|
| `/messages/en.json` | English translations |
| `/messages/fr.json` | French translations |
| `/src/i18n/routing.ts` | Locale configuration |
| `/src/i18n/request.ts` | Translation loader |
| `/src/middleware.ts` | Locale detection & routing |
| `/app/[locale]/layout.tsx` | Root layout with i18n provider |
| `/app/[locale]/components/LanguageSwitcher.tsx` | Language dropdown |

---

## Need Help?

- next-intl docs: https://next-intl-docs.vercel.app/
- Your bois_renard reference: `/home/andrew/Code/2025/bois_renard`
- This template: `/home/andrew/Code/2025/TestProject/screenshot-showcase`
