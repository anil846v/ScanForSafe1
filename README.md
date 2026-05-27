# ScanForSafe — Upgraded Website

## What Changed

### 🎨 Design & Theme
- Full green/white theme: `soft-green: #dcfce7`, `primary-brand: #166534`, `heading-dark: #064e3b`
- Glassmorphism cards with backdrop blur
- Smooth hover animations and transitions
- Custom scrollbar in brand green

### 📐 Logo
- Logo size increased from `w-11 h-11` → `w-16 h-16` in Navbar for better visibility

### 🏠 Hero Section
- Green gradient background replacing blue
- NFC badge added alongside QR mention
- Trust badges updated (NFC + QR)

### 🎥 Video Animation Section (NEW — HomeHero.jsx)
- Full-width demo video section below hero
- Animated QR code floating elements
- Play button with glow effect
- Feature pills: App Notifications, NFC, GPS, Video Message

### 📍 Use Cases (6 cards)
- Motorcycles & Bikes — QR sticker 3.5cm on fuel tank/handlebar
- Bags & Luggage — QR sticker 3.5cm on bag strap
- Pets (dogs/cats) — QR collar tag
- **Children Safety** — QR hand band + shoulder tag ✅
- Laptops & Valuables — NFC + QR dual sticker
- **Senior Citizens** — Emergency QR + NFC wristband ✅ (NEW)
- All cards have realistic Unsplash images

### 🚗 Vehicle Details Section (NEW)
- Vehicle Info, GPS Tracking, Alert System, Security cards
- 3.5cm QR sticker size callout banner

### 💻 Valuables & Pet Details (NEW)
- Side-by-side detailed profile field cards
- Shows what data is stored per item type

### 👴 Senior Citizen Section (NEW)
- Medical profile mockup card (blood group, conditions, allergies, vet)
- Emergency contact with call buttons
- NFC tap + QR scan dual mode display
- 4 feature highlights

### 📡 NFC Integration Section (NEW)
- Full dark green section
- Animated NFC pulse rings
- Dual mode comparison: NFC tap vs QR scan
- Available on all new tags callout

### 💬 Testimonials
- Header CTA button hidden ✅

### 📱 Notifications
- WhatsApp demoted to emergency only
- App notifications as primary alert method (mentioned in video section, features)

## Setup

```bash
npm install
npm run dev
```

## File Structure

```
src/
  components/
    Hero.jsx              — Hero + Video intro section
    Navbar.jsx            — Larger logo, green theme
    NFCSection.jsx        — NFC feature (NEW)
    SeniorCitizenSection.jsx — Senior care (NEW)
    VehicleDetails.jsx    — Vehicle info (NEW)
    ValuablesPetDetails.jsx — Valuables + Pet details (NEW)
    UseCases.jsx          — 6 use cases with real images
    Testimonials.jsx      — CTA button hidden
    Features.jsx          — Green themed
    HowItWorks.jsx        — Green themed
    Products.jsx
    Footer.jsx
  pages/
    Home.jsx              — All new sections included
    ...
  index.css               — Brand CSS variables + animations
tailwind.config.js        — Green brand colors defined
```
