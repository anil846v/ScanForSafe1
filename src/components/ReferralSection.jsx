import { useNavigate } from "react-router-dom";

// ─── STYLE: flat vector, 2.8px stroke, rounded card bg, reference-image style ─

// 1. Share Referral Link – chain links with share sparkle
const IconLink = () => (
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="56" height="56" rx="14" fill="#dbeafe"/>
    {/* left link ring */}
    <rect x="14" y="30" width="22" height="12" rx="6" fill="none" stroke="#3b82f6" strokeWidth="2.8" strokeLinecap="round"/>
    {/* right link ring */}
    <rect x="36" y="30" width="22" height="12" rx="6" fill="none" stroke="#3b82f6" strokeWidth="2.8" strokeLinecap="round"/>
    {/* overlap fill to create chain illusion */}
    <rect x="36" y="33" width="9" height="6" fill="#dbeafe"/>
    <line x1="36" y1="33" x2="36" y2="39" stroke="#dbeafe" strokeWidth="1.5"/>
    {/* share arrow top-right */}
    <path d="M52 16 L58 16 L58 22" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="52" y1="22" x2="58" y2="16" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// 2. Activate ScanForSafe – person silhouette + checkmark badge
const IconActivation = () => (
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="56" height="56" rx="14" fill="#ede9fe"/>
    {/* person head */}
    <circle cx="30" cy="26" r="9" fill="none" stroke="#7c3aed" strokeWidth="2.8"/>
    {/* person body */}
    <path d="M14 56 C14 44 46 44 46 56" fill="none" stroke="#7c3aed" strokeWidth="2.8" strokeLinecap="round"/>
    {/* check badge */}
    <circle cx="52" cy="50" r="11" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2.5"/>
    <path d="M46 50 L50 54 L58 44" stroke="#7c3aed" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// 3. Earn Rewards – wallet with dollar coin
const IconGiftBox = () => (
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background */}
    <rect x="8" y="8" width="56" height="56" rx="14" fill="#dcfce7" />

    {/* Gift Box Bottom */}
    <rect
      x="18"
      y="32"
      width="36"
      height="22"
      rx="4"
      fill="#bbf7d0"
      stroke="#16a34a"
      strokeWidth="2.8"
    />

    {/* Gift Box Lid */}
    <rect
      x="16"
      y="26"
      width="40"
      height="10"
      rx="3"
      fill="#dcfce7"
      stroke="#16a34a"
      strokeWidth="2.8"
    />

    {/* Vertical Ribbon */}
    <rect x="33" y="26" width="6" height="28" fill="#16a34a" />

    {/* Horizontal Ribbon */}
    <rect x="18" y="38" width="36" height="5" fill="#16a34a" />

    {/* Bow Left */}
    <path
      d="M36 26C32 18 24 19 24 25C24 29 29 30 36 26Z"
      fill="#86efac"
      stroke="#16a34a"
      strokeWidth="2"
    />

    {/* Bow Right */}
    <path
      d="M36 26C40 18 48 19 48 25C48 29 43 30 36 26Z"
      fill="#86efac"
      stroke="#16a34a"
      strokeWidth="2"
    />

    {/* Sparkles */}
    <path
      d="M55 20L56 23L59 24L56 25L55 28L54 25L51 24L54 23Z"
      fill="#16a34a"
    />
    <path
      d="M18 18L19 21L22 22L19 23L18 26L17 23L14 22L17 21Z"
      fill="#16a34a"
    />
  </svg>
);

// 4. Vehicle Tag – car with QR tag
const IconVehicle = () => (
  <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="52" height="52" rx="14" fill="#dcfce7"/>
    {/* car body */}
    <rect x="10" y="38" width="48" height="18" rx="6" fill="#bbf7d0" stroke="#16a34a" strokeWidth="2.5"/>
    {/* car roof */}
    <path d="M16 38 L22 26 H46 L52 38" fill="#dcfce7" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    {/* windshield */}
    <rect x="24" y="27" width="20" height="11" rx="3" fill="#a7f3d0" stroke="#16a34a" strokeWidth="1.6"/>
    {/* divider line */}
    <line x1="10" y1="44" x2="58" y2="44" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round"/>
    {/* wheel left */}
    <circle cx="21" cy="56" r="5" fill="#16a34a"/>
    <circle cx="21" cy="56" r="2" fill="#dcfce7"/>
    {/* wheel right */}
    <circle cx="47" cy="56" r="5" fill="#16a34a"/>
    <circle cx="47" cy="56" r="2" fill="#dcfce7"/>
    {/* QR tag badge */}
    <rect x="44" y="14" width="16" height="14" rx="3" fill="#fff" stroke="#16a34a" strokeWidth="1.8"/>
    <line x1="47" y1="17" x2="47" y2="25" stroke="#16a34a" strokeWidth="1.3" strokeLinecap="round"/>
    <line x1="50" y1="17" x2="50" y2="25" stroke="#16a34a" strokeWidth="1.3" strokeLinecap="round"/>
    <line x1="53" y1="17" x2="53" y2="25" stroke="#16a34a" strokeWidth="1.3" strokeLinecap="round"/>
    <line x1="56" y1="17" x2="56" y2="25" stroke="#16a34a" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);

// 5. Senior Band – elder person with wristband + check
const IconSenior = () => (
  <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="52" height="52" rx="14" fill="#fef9c3"/>
    {/* head */}
    <circle cx="30" cy="24" r="10" fill="none" stroke="#ca8a04" strokeWidth="2.8"/>
    {/* hair arc (senior) */}
    <path d="M22 20 C23 16 37 16 38 20" fill="none" stroke="#ca8a04" strokeWidth="2" strokeLinecap="round"/>
    {/* body */}
    <path d="M14 55 C14 43 46 43 46 55" fill="none" stroke="#ca8a04" strokeWidth="2.8" strokeLinecap="round"/>
    {/* wristband */}
    <rect x="46" y="36" width="14" height="8" rx="4" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2.2"/>
    {/* check on band */}
    <path d="M49 40 L52 43 L57 37" fill="none" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// 6. Child Tag – smiley child with ID tag
const IconChild = () => (
  <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="52" height="52" rx="14" fill="#dbeafe"/>
    {/* head */}
    <circle cx="28" cy="24" r="10" fill="none" stroke="#3b82f6" strokeWidth="2.8"/>
    {/* eyes */}
    <circle cx="24" cy="23" r="1.5" fill="#3b82f6"/>
    <circle cx="32" cy="23" r="1.5" fill="#3b82f6"/>
    {/* smile */}
    <path d="M24 28 C26 31 30 31 32 28" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round"/>
    {/* body */}
    <path d="M12 54 C12 42 44 42 44 54" fill="none" stroke="#3b82f6" strokeWidth="2.8" strokeLinecap="round"/>
    {/* ID tag card */}
    <rect x="40" y="20" width="20" height="24" rx="4" fill="#fff" stroke="#3b82f6" strokeWidth="2"/>
    {/* tag string */}
    <line x1="50" y1="20" x2="50" y2="14" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="50" cy="13" r="2" fill="none" stroke="#3b82f6" strokeWidth="1.6"/>
    {/* ID text lines */}
    <text x="50" y="33" fontFamily="sans-serif" fontSize="7" fontWeight="800" fill="#1d4ed8" textAnchor="middle">ID</text>
    <line x1="43" y1="36" x2="57" y2="36" stroke="#93c5fd" strokeWidth="1.4" strokeLinecap="round"/>
    <line x1="43" y1="39" x2="57" y2="39" stroke="#93c5fd" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);

// 7. Pet Tag – cat face with collar + tag
const IconPet = () => (
  <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="52" height="52" rx="14" fill="#fce7f3"/>
    {/* ears */}
    <polygon points="22,24 16,14 28,18" fill="#fce7f3" stroke="#ec4899" strokeWidth="2.2" strokeLinejoin="round"/>
    <polygon points="46,24 52,14 40,18" fill="#fce7f3" stroke="#ec4899" strokeWidth="2.2" strokeLinejoin="round"/>
    {/* head */}
    <ellipse cx="34" cy="34" rx="18" ry="16" fill="#fce7f3" stroke="#ec4899" strokeWidth="2.8"/>
    {/* eyes */}
    <circle cx="27" cy="31" r="2.5" fill="#ec4899"/>
    <circle cx="41" cy="31" r="2.5" fill="#ec4899"/>
    {/* nose */}
    <path d="M32 37 L34 35 L36 37 L34 39 Z" fill="#ec4899"/>
    {/* whiskers */}
    <line x1="16" y1="36" x2="28" y2="37" stroke="#ec4899" strokeWidth="1.3" strokeLinecap="round"/>
    <line x1="40" y1="37" x2="52" y2="36" stroke="#ec4899" strokeWidth="1.3" strokeLinecap="round"/>
    <line x1="16" y1="39" x2="28" y2="39" stroke="#ec4899" strokeWidth="1.3" strokeLinecap="round"/>
    <line x1="40" y1="39" x2="52" y2="39" stroke="#ec4899" strokeWidth="1.3" strokeLinecap="round"/>
    {/* collar */}
    <path d="M18 46 C20 52 48 52 50 46" fill="none" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round"/>
    {/* tag circle */}
    <circle cx="34" cy="55" r="7" fill="#fff" stroke="#ec4899" strokeWidth="2"/>
    <text x="34" y="58" fontFamily="sans-serif" fontSize="6" fontWeight="800" fill="#be185d" textAnchor="middle">PET</text>
  </svg>
);

// 8. Luggage Tag – suitcase with dangling tag
const IconLuggage = () => (
  <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="52" height="52" rx="14" fill="#dbeafe"/>
    {/* handle */}
    <path d="M24 26 C24 19 44 19 44 26" fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round"/>
    {/* suitcase body */}
    <rect x="14" y="26" width="40" height="30" rx="6" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2.8"/>
    {/* mid seam */}
    <line x1="14" y1="38" x2="54" y2="38" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="3 2.5"/>
    {/* plus cross */}
    <line x1="34" y1="40" x2="34" y2="52" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
    <line x1="28" y1="46" x2="40" y2="46" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
    {/* wheels */}
    <rect x="16" y="52" width="6" height="8" rx="3" fill="#93c5fd"/>
    <rect x="46" y="52" width="6" height="8" rx="3" fill="#93c5fd"/>
    {/* tag dangling */}
    <line x1="52" y1="28" x2="60" y2="18" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round"/>
    <rect x="55" y="11" width="12" height="10" rx="3" fill="#fff" stroke="#3b82f6" strokeWidth="1.8"/>
    <line x1="57" y1="14" x2="65" y2="14" stroke="#93c5fd" strokeWidth="1.3" strokeLinecap="round"/>
    <line x1="57" y1="17" x2="65" y2="17" stroke="#93c5fd" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);

// 9. Safe & Secure – shield with lock
const IconShield = () => (
  <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="52" height="52" rx="14" fill="#dcfce7"/>
    {/* shield */}
    <path d="M34 14 L54 21 L54 36 C54 48 34 56 34 56 C34 56 14 48 14 36 L14 21 Z" fill="#bbf7d0" stroke="#16a34a" strokeWidth="2.8" strokeLinejoin="round"/>
    {/* lock body */}
    <rect x="25" y="36" width="18" height="14" rx="5" fill="#dcfce7" stroke="#16a34a" strokeWidth="2.5"/>
    {/* lock shackle */}
    <path d="M29 36 L29 32 C29 27 39 27 39 32 L39 36" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round"/>
    {/* keyhole */}
    <circle cx="34" cy="42" r="2.5" fill="#16a34a"/>
    <line x1="34" y1="44.5" x2="34" y2="47" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// 10. Dedicated Support – headset with mic
const IconHeadset = () => (
  <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="52" height="52" rx="14" fill="#ede9fe"/>
    {/* arc */}
    <path d="M14 36 C14 22 54 22 54 36" fill="none" stroke="#7c3aed" strokeWidth="2.8" strokeLinecap="round"/>
    {/* left ear cup */}
    <rect x="11" y="34" width="9" height="14" rx="4.5" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2.5"/>
    {/* right ear cup */}
    <rect x="48" y="34" width="9" height="14" rx="4.5" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2.5"/>
    {/* cord to mic */}
    <path d="M57 47 L57 50 C57 53 54 55 51 55 L42 55" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"/>
    {/* mic pill */}
    <rect x="36" y="51" width="12" height="7" rx="3.5" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2"/>
    {/* sound wave dots */}
    <circle cx="28" cy="20" r="2.5" fill="#a78bfa" opacity="0.7"/>
    <circle cx="34" cy="18" r="2.5" fill="#7c3aed" opacity="0.5"/>
    <circle cx="40" cy="20" r="2.5" fill="#a78bfa" opacity="0.7"/>
  </svg>
);

// ─── CATEGORY ICONS (compact, used inside card 2) ────────────────────────────

const CatVehicle = () => (
  <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="18" width="30" height="13" rx="4" fill="#dcfce7" stroke="#16a34a" strokeWidth="2.2"/>
    <path d="M8 18 L12 9 H28 L32 18" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="13" cy="31" r="4" fill="#16a34a"/>
    <circle cx="13" cy="31" r="1.8" fill="#dcfce7"/>
    <circle cx="27" cy="31" r="4" fill="#16a34a"/>
    <circle cx="27" cy="31" r="1.8" fill="#dcfce7"/>
    <line x1="5" y1="23" x2="35" y2="23" stroke="#16a34a" strokeWidth="1.6" strokeLinecap="round"/>
    <rect x="14" y="10" width="12" height="8" rx="2" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5"/>
  </svg>
);
const CatSenior = () => (
  <svg 
    width="40" 
    height="40" 
    viewBox="0 0 40 40" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Head */}
    <circle 
      cx="20" 
      cy="13" 
      r="7.5" 
      fill="#fefce8" 
      stroke="#d4a94c" 
      strokeWidth="2.5"
    />
    
    {/* Senior hair / bald top with sides
    <ellipse 
      cx="20" 
      cy="9" 
      rx="6.5" 
      ry="4" 
      fill="#854d0e" 
    /> */}

    {/* Eyes */}
    <circle cx="17" cy="12.5" r="1" fill="#1f2937" />
    <circle cx="23" cy="12.5" r="1" fill="#1f2937" />
    
    {/* Smile */}
    <path 
      d="M16.5 17 Q20 19 23.5 17" 
      fill="none" 
      stroke="#1f2937" 
      strokeWidth="1" 
      strokeLinecap="round"
    />

    {/* Body */}
    <rect 
      x="13.5" 
      y="20.5" 
      width="13" 
      height="14" 
      rx="3" 
      fill="#facc15" 
      stroke="#d1bf97" 
      strokeWidth="2.5"
    />

    {/* Arms */}
    <path 
      d="M14 24 Q10 26 11.5 31" 
      fill="none" 
      stroke="#ca8a04" 
      strokeWidth="2.8" 
      strokeLinecap="round"
    />
    <path 
      d="M26 24 Q30 26 28.5 31" 
      fill="none" 
      stroke="#ca8a04" 
      strokeWidth="2.8" 
      strokeLinecap="round"
    />

    {/* Legs */}
    <path 
      d="M18 33.5 L16.5 39" 
      fill="none" 
      stroke="#ca8a04" 
      strokeWidth="2.8" 
      strokeLinecap="round"
    />
    <path 
      d="M22 33.5 L23.5 39" 
      fill="none" 
      stroke="#ca8a04" 
      strokeWidth="2.8" 
      strokeLinecap="round"
    />

    {/* Cane */}
    <path 
      d="M29 26 L30.5 37" 
      fill="none" 
      stroke="#966935" 
      strokeWidth="2.6" 
      strokeLinecap="round"
    />
    <path 
      d="M28 37 Q30 38.5 32 37.5" 
      fill="none" 
      stroke="#6a5e50" 
      strokeWidth="2.6" 
      strokeLinecap="round"
    />
  </svg>
);

const CatChild = () => (
  <svg 
    width="40" 
    height="40" 
    viewBox="0 0 40 40" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Head */}
    <circle 
      cx="20" 
      cy="13" 
      r="7.5" 
      fill="#e0f2fe" 
      stroke="#3b82f6" 
      strokeWidth="2.5"
    />
    
    
    {/* Eyes */}
    <circle cx="17" cy="12.5" r="1.1" fill="#1e40af" />
    <circle cx="23" cy="12.5" r="1.1" fill="#1e40af" />
    
    {/* Happy smile */}
    <path 
      d="M16.5 17 Q20 19.5 23.5 17" 
      fill="none" 
      stroke="#1e40af" 
      strokeWidth="1.1" 
      strokeLinecap="round"
    />

    {/* Body */}
    <rect 
      x="13.5" 
      y="20.5" 
      width="13" 
      height="14.5" 
      rx="3.5" 
      fill="#60a5fa" 
      stroke="#3b82f6" 
      strokeWidth="2.5"
    />

    {/* Arms */}
    <path 
      d="M13.5 24 Q9.5 26 11 31" 
      fill="none" 
      stroke="#3b82f6" 
      strokeWidth="2.8" 
      strokeLinecap="round"
    />
    <path 
      d="M26.5 24 Q30.5 26 29 31" 
      fill="none" 
      stroke="#3b82f6" 
      strokeWidth="2.8" 
      strokeLinecap="round"
    />

    {/* Legs */}
    <path 
      d="M18 34 L16 39" 
      fill="none" 
      stroke="#3b82f6" 
      strokeWidth="2.8" 
      strokeLinecap="round"
    />
    <path 
      d="M22 34 L24 39" 
      fill="none" 
      stroke="#3b82f6" 
      strokeWidth="2.8" 
      strokeLinecap="round"
    />
  </svg>
);
const CatPet = () => (
  <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="14,16 10,8 18,12" fill="#fce7f3" stroke="#ec4899" strokeWidth="1.8" strokeLinejoin="round"/>
    <polygon points="26,16 30,8 22,12" fill="#fce7f3" stroke="#ec4899" strokeWidth="1.8" strokeLinejoin="round"/>
    <ellipse cx="20" cy="24" rx="10" ry="9" fill="#fce7f3" stroke="#ec4899" strokeWidth="2.2"/>
    <circle cx="16" cy="22" r="1.5" fill="#ec4899"/>
    <circle cx="24" cy="22" r="1.5" fill="#ec4899"/>
    <path d="M18 27 L20 25 L22 27 L20 29 Z" fill="#ec4899"/>
    <path d="M12 33 C14 37 26 37 28 33" stroke="#ec4899" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="20" cy="36" r="4" fill="#fff" stroke="#ec4899" strokeWidth="1.6"/>
    <text x="20" y="38.5" fontFamily="sans-serif" fontSize="3.8" fontWeight="800" fill="#be185d" textAnchor="middle">PET</text>
  </svg>
);

const CatLuggage = () => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Suitcase */}
    <rect
      x="9"
      y="12"
      width="22"
      height="20"
      rx="4"
      fill="#dbeafe"
      stroke="#3b82f6"
      strokeWidth="2.2"
    />

    {/* Handle */}
    <path
      d="M16 12V9.5C16 7.8 17.8 7 20 7C22.2 7 24 7.8 24 9.5V12"
      stroke="#3b82f6"
      strokeWidth="2.2"
      strokeLinecap="round"
    />

    {/* Center divider */}
    <line
      x1="20"
      y1="12"
      x2="20"
      y2="32"
      stroke="#3b82f6"
      strokeWidth="1.8"
    />

    {/* Luggage tag */}
    <rect
      x="23"
      y="17"
      width="6"
      height="8"
      rx="1.5"
      fill="#bfdbfe"
      stroke="#2563eb"
      strokeWidth="1.4"
    />

    <circle
      cx="26"
      cy="19"
      r="0.8"
      fill="#2563eb"
    />

    {/* Wheels */}
    <circle cx="14" cy="34" r="1.8" fill="#60a5fa" />
    <circle cx="26" cy="34" r="1.8" fill="#60a5fa" />
  </svg>
);

// ─── TRUST BAR ICONS ──────────────────────────────────────────────────────────

const TrustShield = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
    <path d="M13 3 L22 6.5 V12.5 C22 18 17.5 22 13 24 C8.5 22 4 18 4 12.5 V6.5 Z" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M9 13 L12 16 L17 10" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TrustLock = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
    <rect x="5" y="12" width="16" height="11" rx="3" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.8"/>
    <path d="M9 12 V9 C9 6.2 17 6.2 17 9 V12" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="13" cy="17" r="2" fill="#3b82f6"/>
    <line x1="13" y1="19" x2="13" y2="21" stroke="#3b82f6" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const TrustCheck = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
    <circle cx="13" cy="13" r="10" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.8"/>
    <path d="M8 13 L11.5 16.5 L18 9" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TrustTag = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
    <path d="M13 3 H7 C5 3 4 4 4 6 V12 L14 22 L22 14 Z" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.8" strokeLinejoin="round"/>
    <circle cx="9" cy="9" r="1.8" fill="#ca8a04"/>
    <path d="M16 7 L20 11" stroke="#ca8a04" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const TrustHeadset = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
    <path d="M4 13 C4 7.5 9 3 13 3 C17 3 22 7.5 22 13" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round"/>
    <rect x="3" y="12" width="4" height="7" rx="2" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.6"/>
    <rect x="19" y="12" width="4" height="7" rx="2" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.6"/>
    <path d="M23 18 V20 C23 21.7 21.7 23 20 23 H16" stroke="#7c3aed" strokeWidth="1.6" strokeLinecap="round"/>
    <rect x="13" y="21" width="5" height="3.5" rx="1.75" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.4"/>
  </svg>
);

const IconGiftBtn = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="9" width="18" height="13" rx="2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <line x1="3" y1="13" x2="21" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <line x1="12" y1="9" x2="12" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8.5 9 C8.5 6 10 4 12 4 C14 4 15.5 6 15.5 9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M9 4 C7 2 5 4 7 6 L9 9" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M15 4 C17 2 19 4 17 6 L15 9" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function ReferralSection() {
  const navigate = useNavigate();

  const categories = [
    { Icon: CatVehicle,  label: "Vehicle\nTags",   bg: "#f0fdf4", border: "#bbf7d0" },
    { Icon: CatSenior,   label: "Senior\nBands",   bg: "#fffbeb", border: "#fde68a" },
    { Icon: CatChild,    label: "Child\nTags",     bg: "#eff6ff", border: "#bfdbfe" },
    { Icon: CatPet,      label: "Pet\nTags",       bg: "#fdf2f8", border: "#fbcfe8" },
    { Icon: CatLuggage,  label: "Luggage\nTags",   bg: "#eff6ff", border: "#bfdbfe" },
  ];

  const trustItems = [
    { Icon: TrustShield,  bg: "#dcfce7", title: "100% Safe",         sub: "and Secure" },
    { Icon: TrustLock,    bg: "#dbeafe", title: "Your Data",         sub: "Remains Private" },
    { Icon: TrustCheck,   bg: "#dcfce7", title: "Trusted by",        sub: "Thousands" },
    { Icon: TrustTag,     bg: "#fef9c3", title: "Exclusive Rewards", sub: "& Offers" },
    { Icon: TrustHeadset, bg: "#ede9fe", title: "Dedicated",         sub: "Support" },
  ];

  return (
    <section style={{
      width: "100%",
      background: "#f0f7f1",
      padding: "52px 0",
      fontFamily: "'DM Sans', sans-serif",
      overflowX: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap');

        .rs-wrap { max-width: 1060px; margin: 0 auto; padding: 0 24px; }

        .rs-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 7px 18px 7px 12px; border-radius: 999px;
          border: 1.5px solid #c6e9c8; background: #fff; margin-bottom: 20px;
        }
        .rs-badge-icon {
          width: 26px; height: 26px; background: #dcfce7;
          border-radius: 50%; display: flex; align-items: center; justify-content: center;
        }
        .rs-badge-text {
          font-family: 'Sora', sans-serif; font-size: 11px; font-weight: 700;
          color: #166534; letter-spacing: 0.1em; text-transform: uppercase;
        }

        .rs-heading {
          font-family: 'Sora', sans-serif;
          font-size: clamp(1.9rem, 4vw, 2.9rem);
          font-weight: 900; color: #0d1a0f; line-height: 1.08;
          letter-spacing: -0.03em; margin: 0 0 14px;
        }
        .rs-heading .green { color: #16a34a; }

        .rs-desc {
          font-size: 15px; color: #4b6453; line-height: 1.7;
          max-width: 580px; margin: 0 auto 36px;
        }

        .rs-row {
          display: flex; align-items: stretch; gap: 0; margin-bottom: 16px;
        }

        .rs-card {
          flex: 1; background: #fff; border: 1.5px solid #e2ece3;
          border-radius: 20px; padding: 32px 22px 28px;
          display: flex; flex-direction: column; align-items: center;
          text-align: center; position: relative;
          box-shadow: 0 2px 16px rgba(0,0,0,0.04); min-height: 420px;
        }

        .rs-step {
          position: absolute; top: 14px; left: 14px;
          width: 26px; height: 26px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Sora', sans-serif; font-size: 11px; font-weight: 800;
        }

        .rs-icon-wrap {
          width: 110px; height: 110px; border-radius: 24px;
          display: flex; align-items: center; justify-content: center;
          margin: 6px 0 22px;
        }

        .rs-card-title {
          font-family: 'Sora', sans-serif; font-size: 16px; font-weight: 800;
          color: #0d1a0f; margin: 0 0 10px; letter-spacing: -0.02em;
        }
        .rs-card-desc {
          font-size: 13.5px; color: #5a7060; line-height: 1.65;
          margin: 0 0 18px; flex: 1; max-width: 230px;
        }

        .rs-pill {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 7px 16px; border-radius: 999px;
          font-size: 12px; font-weight: 600; white-space: nowrap; margin-top: auto;
        }

        .rs-arrow {
          width: 40px; flex-shrink: 0; display: flex;
          align-items: center; justify-content: center; padding-bottom: 80px;
        }

        .rs-cats {
          display: flex; gap: 6px; align-items: flex-start;
          justify-content: center; width: 100%; margin-top: 6px;
          flex-wrap: nowrap;
        }
        .rs-cat {
          display: flex; flex-direction: column; align-items: center;
          gap: 5px; flex: 1; min-width: 0;
        }
        .rs-cat-box {
          width: 48px; height: 48px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .rs-cat-label {
          font-size: 9px; font-weight: 600; color: #5a7060;
          text-align: center; line-height: 1.3; white-space: pre-line;
        }

        .rs-trust {
          display: flex; align-items: stretch; background: #fff;
          border: 1.5px solid #e2ece3; border-radius: 16px;
          margin-bottom: 32px; overflow: hidden;
        }
        .rs-trust-item {
          flex: 1; display: flex; align-items: center; gap: 10px;
          padding: 14px 14px; border-right: 1.5px solid #e8ede9;
        }
        .rs-trust-item:last-child { border-right: none; }
        .rs-trust-icon {
          width: 44px; height: 44px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .rs-trust-title {
          font-family: 'Sora', sans-serif; font-size: 12px;
          font-weight: 700; color: #0d1a0f; line-height: 1.25;
        }
        .rs-trust-sub { font-size: 11px; color: #7a9382; margin-top: 2px; }

        .rs-cta {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 16px 48px; border-radius: 999px;
          background: linear-gradient(135deg, #166534 0%, #16a34a 50%, #0f4a2a 100%);
          color: #fff; font-family: 'Sora', sans-serif; font-size: 16px;
          font-weight: 700; border: none; cursor: pointer; letter-spacing: -0.01em;
          transition: opacity 0.2s, transform 0.15s;
        }
        .rs-cta:hover { opacity: 0.9; transform: translateY(-2px); }

        .rs-sub {
          display: flex; align-items: center; gap: 6px; justify-content: center;
          font-size: 13px; color: #5a7060; margin-top: 14px;
        }

        @media (max-width: 780px) {
          .rs-row { flex-direction: column; gap: 12px; }
          .rs-arrow { display: none; }
          .rs-card { min-height: unset; width: 100%; }
          .rs-cats { flex-wrap: wrap; }
          .rs-trust { flex-wrap: wrap; }
          .rs-trust-item { flex: 0 0 calc(50% - 1px); border-right: none; border-bottom: 1.5px solid #e8ede9; }
          .rs-trust-item:nth-child(odd) { border-right: 1.5px solid #e8ede9; }
          .rs-trust-item:last-child { border-bottom: none; }
          .rs-cta { width: 100%; justify-content: center; }
        }
      `}</style>

      <div className="rs-wrap">

        {/* ── HEADER ── */}
        <div style={{ textAlign: "center" }}>
          <div className="rs-badge">
            <div className="rs-badge-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <span className="rs-badge-text">Referral Program</span>
          </div>

          <h2 className="rs-heading">
            Share Safety. <span className="green">Earn Rewards.</span>
          </h2>

          <p className="rs-desc">
            Invite your friends and family to ScanForSafe and help them stay protected.<br />
            When they activate a product, you earn rewards credited directly to your wallet.
          </p>
        </div>

        {/* ── 3 CARDS ── */}
        <div className="rs-row">

          {/* Card 1 – Share Link */}
          <div className="rs-card">
            <div className="rs-step" style={{ background: "#dbeafe", color: "#1d4ed8" }}>01</div>
            <div className="rs-icon-wrap" style={{ background: "#dbeafe" }}>
              <IconLink />
            </div>
            <h3 className="rs-card-title">Share Your Referral Link</h3>
            <p className="rs-card-desc">
              Get your unique referral link or code from your dashboard and share it with friends and family.
            </p>
            <div className="rs-pill" style={{ background: "#eff6ff", border: "1.5px solid #bfdbfe", color: "#1d4ed8" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
              </svg>
              Unique to You &nbsp;•&nbsp; Easy to Share
            </div>
          </div>

          {/* Arrow */}
          <div className="rs-arrow">
            <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
              <path d="M1 10h8M7 5l5 5-5 5" stroke="#c0d0c2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11 10h8M17 5l5 5-5 5" stroke="#d8e8da" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Card 2 – Activate */}
          <div className="rs-card">
            <div className="rs-step" style={{ background: "#ede9fe", color: "#6d28d9" }}>02</div>
            <div className="rs-icon-wrap" style={{ background: "#ede9fe" }}>
              <IconActivation />
            </div>
            <h3 className="rs-card-title">They Activate ScanForSafe</h3>
            <p className="rs-card-desc">
              When your friends purchase and activate any ScanForSafe product, the activation is linked to your referral.
            </p>
            <div className="rs-cats">
              {categories.map(({ Icon, label, bg, border }) => (
                <div className="rs-cat" key={label}>
                  <div className="rs-cat-box" style={{ background: bg, border: `1.5px solid ${border}` }}>
                    <Icon />
                  </div>
                  <span className="rs-cat-label">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div className="rs-arrow">
            <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
              <path d="M1 10h8M7 5l5 5-5 5" stroke="#c0d0c2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11 10h8M17 5l5 5-5 5" stroke="#d8e8da" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Card 3 – Earn Rewards */}
          <div className="rs-card">
            <div className="rs-step" style={{ background: "#dcfce7", color: "#16a34a" }}>03</div>
            <div className="rs-icon-wrap" style={{ background: "#dcfce7" }}>
              <IconGiftBox  />
            </div>
            <h3 className="rs-card-title">Earn Rewards</h3>
            <p className="rs-card-desc">
              You earn cash rewards or premium subscription benefits credited directly to your wallet.
            </p>
            <div className="rs-pill" style={{ background: "#f0fdf4", border: "1.5px solid #bbf7d0", color: "#16a34a" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>
              </svg>
              Direct to Wallet &nbsp;•&nbsp; Instant Credit
            </div>
          </div>

        </div>

        {/* ── TRUST BAR ── */}
        <div className="rs-trust">
          {trustItems.map(({ Icon, bg, title, sub }, i) => (
            <div className="rs-trust-item" key={i}>
              <div className="rs-trust-icon" style={{ background: bg }}>
                <Icon />
              </div>
              <div>
                <div className="rs-trust-title">{title}</div>
                <div className="rs-trust-sub">{sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div style={{ textAlign: "center" }}>
          <button className="rs-cta" onClick={() => navigate("/qr-form")}>
            <IconGiftBtn />
            Start Referring Today
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </button>
          <div className="rs-sub">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            Protect more people. Earn more rewards.
            <svg width="13" height="13" viewBox="0 0 24 24" fill="#e74c3c">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}