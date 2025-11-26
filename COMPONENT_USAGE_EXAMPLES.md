# Component Usage Examples

This document shows how to use the screenshot-showcase components with real client examples.

---

## Google Maps Component

### Basic Usage

```tsx
import GoogleMap from './components/GoogleMap';

// In your page component
<GoogleMap address="123 Main Street, Dublin, Ireland" />
```

### With Custom Height

```tsx
<GoogleMap
  address="Rue de la Paix, Paris, France"
  height="500px"
  className="my-8"
/>
```

### With Direct Embed URL (Recommended for Production)

```tsx
// Get embed URL from: https://www.google.com/maps
// Click Share > Embed a map > Copy iframe src

<GoogleMap
  embedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3..."
  height="400px"
/>
```

### Example in Contact Section

```tsx
<section id="contact" className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12">Visit Us</h2>

    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <ContactForm />
      </div>
      <div>
        <GoogleMap
          address="Your Business, 123 Street, City, Country"
          height="100%"
        />
      </div>
    </div>
  </div>
</section>
```

---

## Services Component

### Basic Usage (3 Services)

```tsx
import Services from './components/Services';

<Services
  services={[
    {
      icon: 'Wrench',
      title: 'Plumbing Repairs',
      description: 'Professional plumbing repair services for residential and commercial properties.'
    },
    {
      icon: 'Zap',
      title: 'Emergency Service',
      description: 'Available 24/7 for emergency plumbing issues. Fast response guaranteed.'
    },
    {
      icon: 'CheckCircle',
      title: 'Installation',
      description: 'Expert installation of fixtures, appliances, and complete bathroom renovations.'
    }
  ]}
/>
```

### With Custom Title and Description

```tsx
<Services
  title="What We Offer"
  description="Our comprehensive range of services designed to meet all your needs"
  services={[
    // ... services array
  ]}
/>
```

### Gray Background Option

```tsx
<Services
  bgColor="gray"
  services={[
    // ... services array
  ]}
/>
```

### Example: Gite Rental Services

```tsx
<Services
  title="Amenities & Services"
  description="Everything you need for a comfortable stay in our beautiful gite"
  services={[
    {
      icon: 'Home',
      title: 'Spacious Accommodation',
      description: '3 bedrooms, sleeps 6. Fully equipped kitchen and comfortable living areas.'
    },
    {
      icon: 'Wifi',
      title: 'Modern Amenities',
      description: 'High-speed WiFi, Smart TV, and all modern conveniences included.'
    },
    {
      icon: 'Trees',
      title: 'Beautiful Gardens',
      description: 'Private garden with BBQ area, perfect for outdoor dining and relaxation.'
    },
    {
      icon: 'Car',
      title: 'Free Parking',
      description: 'Secure off-street parking for up to 2 vehicles.'
    },
    {
      icon: 'MapPin',
      title: 'Great Location',
      description: 'Close to local attractions, restaurants, and amenities.'
    },
    {
      icon: 'Sparkles',
      title: 'Cleaning Service',
      description: 'Professional cleaning before arrival and optional mid-stay cleaning available.'
    }
  ]}
/>
```

### Example: Service Provider (Accountant)

```tsx
<Services
  title="Accounting Services"
  services={[
    {
      icon: 'Calculator',
      title: 'Tax Preparation',
      description: 'Comprehensive tax preparation and filing for individuals and businesses.'
    },
    {
      icon: 'FileText',
      title: 'Bookkeeping',
      description: 'Accurate and timely bookkeeping services to keep your finances organized.'
    },
    {
      icon: 'TrendingUp',
      title: 'Financial Planning',
      description: 'Strategic financial planning and consulting to help your business grow.'
    }
  ]}
/>
```

---

## Available Lucide Icons for Services

Popular icons for common business types:

### General Business
- `Briefcase`, `Building`, `Building2`, `Store`, `ShoppingBag`

### Services
- `Wrench`, `Hammer`, `Tool`, `Settings`, `Cog`
- `Scissors`, `Paintbrush`, `Palette`
- `Calculator`, `FileText`, `ClipboardCheck`

### Home & Property
- `Home`, `Key`, `DoorOpen`, `Sofa`, `Bed`
- `Trees`, `Flower`, `Sun`, `Umbrella`

### Technology
- `Wifi`, `Monitor`, `Smartphone`, `Laptop`, `Code`
- `Database`, `Server`, `Cloud`

### Communication
- `Phone`, `Mail`, `MessageSquare`, `Send`
- `Users`, `User`, `UserCheck`

### Features/Benefits
- `CheckCircle`, `Check`, `Star`, `Award`, `Shield`
- `ThumbsUp`, `Heart`, `Sparkles`, `Zap`
- `Clock`, `Calendar`, `MapPin`, `Navigation`

### Food & Hospitality
- `Coffee`, `UtensilsCrossed`, `Wine`, `Cookie`

### Transportation
- `Car`, `Truck`, `Plane`, `Ship`

Full list: https://lucide.dev/icons/

---

## Mobile Menu (NavBar)

The mobile menu is now fully functional with the updated NavBar component.

### Features
- ✅ Hamburger icon toggles to X when open
- ✅ Backdrop overlay closes menu when clicked
- ✅ Menu auto-closes when a link is clicked
- ✅ Smooth animations
- ✅ Touch-friendly tap targets

### Customization

To change menu items, edit the `navItems` array in NavBar.tsx:

```tsx
const navItems = [
  { title: 'Home', href: '#home' },
  { title: 'Services', href: '#services' },
  { title: 'Gallery', href: '#gallery' },
  { title: 'About', href: '#about' },
  { title: 'Contact', href: '#contact' },
];
```

---

## Complete Page Example: Local Business

```tsx
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import ContactForm from './components/ContactForm';
import GoogleMap from './components/GoogleMap';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <NavBar />

      <Hero />

      <Services
        title="Our Services"
        description="Professional services tailored to your needs"
        services={[
          {
            icon: 'Wrench',
            title: 'Repairs',
            description: 'Expert repair services'
          },
          {
            icon: 'Settings',
            title: 'Maintenance',
            description: 'Regular maintenance programs'
          },
          {
            icon: 'CheckCircle',
            title: 'Installation',
            description: 'Professional installation'
          }
        ]}
      />

      <About />

      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-forestgreen">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <ContactForm />
            <GoogleMap
              address="123 Business St, Dublin, Ireland"
              height="100%"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
```

---

## Customization Quick Reference

### Colors (globals.css)

Current colors (Carpet Co. brand):
- `--teal: #135160` (primary, from logo)
- `--burgundy: #411934` (accent, from logo)
- Teal variations: light, lighter, dark, darker
- Burgundy variations: light, lighter, dark

Legacy color mappings for backwards compatibility:
- `--forestgreen`, `--darkblue` → teal
- `--orange`, `--lightblue` → teal-light
- `--navy` → burgundy

To change for a client:
1. Update hex values in `/app/globals.css`
2. Colors automatically apply throughout the site

### Typography

Current fonts (Geist Sans & Geist Mono) in `layout.tsx`

To change:
1. Import different Google Font in `layout.tsx`
2. Update font variables

### Content

All Lorem ipsum text can be replaced with client content:
- Hero: Title, subtitle, CTA buttons
- About: Paragraphs
- Services: Title, description, services array
- Contact: Form intro text
- Footer: Company name, links

---

## Testing Checklist

After implementing components for a client:

- [ ] Mobile menu opens/closes properly
- [ ] Mobile menu closes when clicking backdrop
- [ ] Mobile menu closes when clicking a link
- [ ] Services display in correct grid (1/2/3 columns)
- [ ] Services icons render correctly
- [ ] Google Map loads and displays correctly
- [ ] Contact form submits successfully
- [ ] All sections are responsive on mobile
- [ ] Colors match client brand
- [ ] All placeholder text is replaced
- [ ] Footer year is current
- [ ] Smooth scrolling works between sections
