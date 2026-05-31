import {
  Briefcase,
  Camera,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Crown,
  Gift,
  Heart,
  Instagram,
  Youtube,
  Facebook,
  MapPin,
  Menu,
  MessageCircle,
  Music4,
  Palette,
  Phone,
  Sparkles,
  Star,
  TentTree,
  Users,
  UtensilsCrossed,
  X,
} from 'lucide-react'
import { useMemo, useState } from 'react'

// ========== GOOGLE DRIVE APPS SCRIPT CONFIGURATION ==========

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw6SIGYY0js6X7C7aTopjjpobuyyIXU_qEz48bh2RsEkjAPzWf_dKq5LnUzudtBCiEOLg/exec'

const categoryFolderMap: Record<string, string> = {
  'Royal Weddings': '1DoqxSV4Oz81VgM5yjkf-euVTkN1-wuFX',
  'Luxury Stage Decor': '1naEXx8-gHskhtIvYtN9oK8bY08_u-IEv',
  'Mehndi Functions': '1UKZ-ZbYpDKkvq7SvMCkgFs0gz7Nk9dOy',
  'Reception Setups': '1tKLdjrYjFJxeQInKC2BO3xkMRpv-qJUo',
  'Palace Venues': '1oPYJYukeKtW9-W65AqaZh-wYf0epM1Gj',
  'Floral Decor': '1Un1BkCzWjILQycp8gMLeZjkkuDpNuytW',
}
// ============================================================

const services = [
  {
    title: 'Wedding Planning',
    description: 'End-to-end curation of regal wedding celebrations with timelines, styling, hospitality, and ceremonies handled with grace.',
    icon: Crown,
  },
  {
    title: 'Destination Weddings',
    description: 'Palace-inspired destination experiences across Jaipur with guest management, logistics, and immersive wedding design.',
    icon: MapPin,
  },
  {
    title: 'Birthday Parties',
    description: 'Luxury birthday concepts crafted with signature decor, entertainment, and memorable guest experiences.',
    icon: Gift,
  },
  {
    title: 'Corporate Events',
    description: 'High-end corporate gatherings, launches, and networking evenings with polished planning and seamless production.',
    icon: Briefcase,
  },
  {
    title: 'DJ Nights',
    description: 'Energetic music-led celebrations with premium sound, lighting, stage setup, and curated entertainment flow.',
    icon: Music4,
  },
  {
    title: 'Haldi & Mehndi',
    description: 'Joyful pre-wedding functions designed with vibrant florals, bespoke seating, and photo-ready styling.',
    icon: Sparkles,
  },
  {
    title: 'Photography',
    description: 'Editorial-style storytelling through candid moments, royal portraits, and cinematic documentation.',
    icon: Camera,
  },
  {
    title: 'Catering',
    description: 'Refined dining experiences with curated menus, premium service, and regionally inspired hospitality.',
    icon: UtensilsCrossed,
  },
  {
    title: 'Venue Decoration',
    description: 'Transformative floral, lighting, and architectural decor to elevate palaces, lawns, and banquet spaces.',
    icon: TentTree,
  },
]

const galleryImages = [
  { src: '/images/gallery-1.jpg', title: 'Royal Weddings' },
  { src: '/images/gallery-2.jpg', title: 'Luxury Stage Decor' },
  { src: '/images/gallery-3.jpg', title: 'Mehndi Functions' },
  { src: '/images/gallery-4.jpg', title: 'Reception Setups' },
  { src: '/images/gallery-5.jpg', title: 'Palace Venues' },
  { src: '/images/gallery-6.jpg', title: 'Floral Decor' },
]

const whyChooseUs = [
  { title: 'Creative Decor', icon: Palette, text: 'Signature styling rooted in regal detail, floral storytelling, and cinematic presentation.' },
  { title: 'Professional Team', icon: Users, text: 'Experienced planners, coordinators, designers, and hospitality experts working in sync.' },
  { title: 'Affordable Luxury', icon: Star, text: 'Elegant experiences shaped with smart planning to deliver premium value beautifully.' },
  { title: 'Complete Planning', icon: CheckCircle2, text: 'From first consultation to final bidaai, every touchpoint is carefully orchestrated.' },
  { title: 'Royal Themes', icon: Crown, text: 'Inspired by Jaipur palaces, heritage textures, and timeless Rajasthani grandeur.' },
  { title: 'Trusted Service', icon: Heart, text: 'Reliable execution, warm communication, and a guest-first approach clients remember.' },
]

const testimonials = [
  {
    name: 'Niharika & Arjun',
    role: 'Royal Palace Wedding',
    image: '/images/gallery-5.jpg',
    quote: 'Event Aura transformed our Jaipur wedding into a magnificent celebration. Every event looked royal, intimate, and flawlessly managed.',
  },
  {
    name: 'Priya Sharma',
    role: 'Luxury Mehndi Celebration',
    image: '/images/gallery-3.jpg',
    quote: 'The decor, color story, and hospitality felt straight out of a luxury wedding magazine. Their team handled everything with poise.',
  },
  {
    name: 'Raghav Bansal',
    role: 'Corporate Gala Host',
    image: '/images/gallery-4.jpg',
    quote: 'Professional, stylish, and dependable. Event Aura delivered a premium guest experience while keeping the event flow completely stress-free.',
  },
]

const packages = [
  {
    name: 'Silver Package',
    tag: 'Refined Essentials',
    features: ['Planning consultation', 'Basic decor styling', 'Vendor coordination', 'Guest assistance'],
  },
  {
    name: 'Gold Package',
    tag: 'Elevated Celebration',
    features: ['Advanced design concept', 'Floral styling', 'Ceremony coordination', 'Premium hospitality support'],
  },
  {
    name: 'Royal Package',
    tag: 'Signature Grandeur',
    features: ['Luxury decor direction', 'Multi-event management', 'Entertainment planning', 'Complete wedding execution'],
  },
  {
    name: 'Destination Package',
    tag: 'Jaipur & Beyond',
    features: ['Travel & stay support', 'Destination logistics', 'Venue styling', 'Guest experience planning'],
  },
]

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Packages', href: '#packages' },
  { label: 'Contact', href: '#contact' },
]

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.45em] text-[#B99246]">{eyebrow}</p>
      <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-[#E8DCC8]/80 sm:text-base">{description}</p>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const currentYear = useMemo(() => new Date().getFullYear(), [])

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [driveImages, setDriveImages] = useState<Array<{ id: string; name: string; src: string }>>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loadingDrive, setLoadingDrive] = useState(false)
  const [currentCategory, setCurrentCategory] = useState('')

  // Fetch images from Apps Script for a given category title
  const fetchImagesForCategory = async (categoryTitle: string) => {
    const folderId = categoryFolderMap[categoryTitle]
    if (!folderId) {
      console.error(`No folder ID found for category: ${categoryTitle}`)
      return []
    }

    const url = `${APPS_SCRIPT_URL}?folderId=${folderId}`
    try {
      const res = await fetch(url)
      const data = await res.json()
      if (data.success && Array.isArray(data.images)) {
        return data.images
      } else {
        console.error('Failed to load images', data.error)
        return []
      }
    } catch (err) {
      console.error('Fetch error:', err)
      return []
    }
  }

  const openLightboxForCategory = async (categoryTitle: string) => {
    setLightboxOpen(true)
    setLoadingDrive(true)
    setCurrentCategory(categoryTitle)
    const images = await fetchImagesForCategory(categoryTitle)
    setDriveImages(images)
    setCurrentIndex(0)
    setLoadingDrive(false)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setDriveImages([])
    setCurrentCategory('')
  }

  const nextImage = () => {
    if (driveImages.length === 0) return
    setCurrentIndex((prev) => (prev + 1) % driveImages.length)
  }

  const prevImage = () => {
    if (driveImages.length === 0) return
    setCurrentIndex((prev) => (prev - 1 + driveImages.length) % driveImages.length)
  }

  return (
    <div className="bg-[#120B0A] text-[#F8F1E7] selection:bg-[#B99246] selection:text-[#120B0A]">
      <a
        href="https://wa.me/917480897482"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_35px_rgba(37,211,102,0.35)] transition hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#120B0A]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full overflow-hidden">
  		<img 
		    src="/images/logo.png"
		    alt="Event Aura Logo"
		    className="h-full w-full object-cover"
		  />
	    </div>
            <div>
              <p className="font-serif text-lg tracking-[0.25em] text-[#F5E7D0] uppercase">Event Aura</p>
              
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-[#F5E7D0]/85 transition hover:text-[#D4AF37]">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="rounded-full border border-[#B99246]/60 px-5 py-2.5 text-sm font-medium text-[#F5E7D0] transition hover:bg-[#B99246] hover:text-[#120B0A]"
            >
              Plan Your Event
            </a>
          </div>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#140C0B]/95 px-4 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="text-sm text-[#F5E7D0]/85">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative min-h-screen overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/hero.jpg" alt="Luxury wedding ambience" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,11,10,0.35),rgba(18,11,10,0.82)_55%,rgba(18,11,10,0.98))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.22),transparent_38%)]" />
          </div>

          <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 pb-16 pt-28 sm:px-6 lg:px-8">
            <div className="grid w-full gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div className="max-w-3xl animate-[fadeUp_0.9s_ease-out]">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#2A1917]/40 px-4 py-2 text-xs uppercase tracking-[0.38em] text-[#EED9A1] backdrop-blur-md">
                  <Sparkles className="h-4 w-4" /> Palace Weddings • Premium Events •
                </div>
                <h1 className="font-serif text-5xl leading-tight font-semibold text-white sm:text-6xl lg:text-7xl">
                  Turning Dreams Into Grand Celebrations
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-[#F3E7D6]/85 sm:text-lg">
                  Luxury Weddings & Premium Events — where royal heritage, modern elegance, and seamless planning come together to create unforgettable celebrations.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-7 py-4 text-sm font-semibold text-[#120B0A] transition hover:scale-[1.02] hover:bg-[#E7C56A]"
                  >
                    Book Now
                  </a>
                  <a
                    href="https://wa.me/917480897482"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition hover:border-[#D4AF37]/70 hover:text-[#E7C56A]"
                  >
                    <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:justify-items-end">
                {[
                  ['120+', 'Events Curated'],
                  ['25+', 'Luxury Venues'],
                  ['100%', 'Tailored Experiences'],
                ].map(([value, label], index) => (
                  <div
                    key={label}
                    className="rounded-[28px] border border-white/10 bg-white/8 p-5 backdrop-blur-lg shadow-[0_18px_60px_rgba(0,0,0,0.25)] animate-[fadeUp_1s_ease-out]"
                    style={{ animationDelay: `${index * 120}ms` }}
                  >
                    <p className="font-serif text-3xl text-[#F8E4B0]">{value}</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[#F5E7D0]/72">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(122,31,43,0.28),transparent_32%),radial-gradient(circle_at_right,rgba(212,175,55,0.14),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="rounded-[32px] border border-[#B99246]/20 bg-[#1A1110] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.3)]">
              <img src="/images/gallery-1.jpg" alt="Royal wedding decor" className="h-full min-h-[420px] w-full rounded-[26px] object-cover" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#B99246]">About Event Aura</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-white sm:text-5xl">Luxury event artistry inspired by the soul of Rajasthan.</h2>
              <p className="mt-6 text-base leading-8 text-[#E8DCC8]/80">
                Event Aura is a India-based event management and wedding planning studio devoted to creating celebrations that feel regal, timeless, and emotionally unforgettable. We blend heritage-inspired aesthetics, modern production, and personalized coordination to design events with warmth, beauty, and effortless flow.
              </p>
              <p className="mt-5 text-base leading-8 text-[#E8DCC8]/75">
                From intimate mehndi gatherings to grand palace weddings and curated corporate evenings, our team crafts each celebration with detail-led elegance, signature decor, and premium hospitality worthy of your story.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {['Royal wedding styling', 'Luxury guest experiences', 'Venue & vendor coordination', 'Jaipur heritage-inspired themes'].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                    <ChevronRight className="h-4 w-4 text-[#D4AF37]" />
                    <span className="text-sm text-[#F5E7D0]/85">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Our Services"
              title="Curated celebrations for every occasion"
              description="From palace weddings to premium social and corporate events, we create elevated experiences through planning, decor, hospitality, and execution."
            />
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {services.map(({ title, description, icon: Icon }) => (
                <div
                  key={title}
                  className="group rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#B99246]/55 hover:shadow-[0_30px_70px_rgba(185,146,70,0.15)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2A1917] text-[#D4AF37] transition group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl text-white">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#E8DCC8]/75">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- GALLERY SECTION (Clickable + Lightbox) ---------- */}
        <section id="gallery" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Gallery"
              title="An Instagram-inspired showcase of royal moments"
              description="Explore cinematic wedding visuals, floral styling, palace settings, and premium event decor designed to leave a lasting impression."
            />
            <div className="mt-8 grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {galleryImages.map((image, index) => (
                <div
                  key={image.title}
                  onClick={() => openLightboxForCategory(image.title)}
                  className={`group relative overflow-hidden rounded-[28px] border border-white/10 cursor-pointer transition hover:scale-[1.02] ${
                    index === 0 || index === 3 ? 'lg:col-span-2' : ''
                  } ${index === 1 ? 'lg:row-span-2 lg:min-h-[456px]' : ''}`}
                >
                  <img src={image.src} alt={image.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(18,11,10,0.88))]" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">Event Aura</p>
                    <h3 className="mt-2 font-serif text-2xl text-white">{image.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {lightboxOpen && (
          <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center">
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </button>

            {loadingDrive ? (
              <div className="text-center">
                <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#D4AF37] border-t-transparent"></div>
                <p className="mt-4 text-white">Loading {currentCategory} gallery...</p>
              </div>
            ) : driveImages.length === 0 ? (
              <div className="text-center text-white">
                <p>No images found in the folder for {currentCategory}.</p>
                <p className="mt-2 text-sm text-[#E8DCC8]/70">
                  Make sure the folder exists, has images, and the Apps Script URL & folder IDs are correct.
                </p>
              </div>
            ) : (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>

                <div className="max-h-[90vh] max-w-[90vw] overflow-hidden">
                  <img
                    src={driveImages[currentIndex]?.src}
                    alt={driveImages[currentIndex]?.name}
                    className="max-h-[85vh] w-auto object-contain"
                    referrerPolicy="no-referrer"
                    crossOrigin="anonymous"
                  />
                  <p className="mt-4 text-center text-white font-serif">{driveImages[currentIndex]?.name}</p>
                  <p className="text-center text-sm text-[#D4AF37]">
                    {currentIndex + 1} / {driveImages.length}
                  </p>
                </div>
              </>
            )}
          </div>
        )}

        <section id="why-us" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Planning with precision, styling with soul"
              description="Our work combines thoughtful coordination with royal visual storytelling to deliver polished celebrations from concept to execution."
            />
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {whyChooseUs.map(({ title, icon: Icon, text }) => (
                <div key={title} className="rounded-[28px] border border-[#B99246]/18 bg-[#17100F] p-7 transition hover:border-[#B99246]/45 hover:bg-[#1C1311]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2A1917] text-[#D4AF37]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl text-white">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#E8DCC8]/75">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Testimonials"
              title="Words from delighted hosts and couples"
              description="A few kind notes from clients who entrusted Event Aura with their meaningful celebrations and milestone events."
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <img src={testimonial.image} alt={testimonial.name} className="h-16 w-16 rounded-full object-cover" />
                    <div>
                      <h3 className="font-serif text-xl text-white">{testimonial.name}</h3>
                      <p className="text-sm text-[#D4AF37]">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="mt-5 flex gap-1 text-[#D4AF37]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-5 text-sm leading-7 text-[#E8DCC8]/78">“{testimonial.quote}”</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="packages" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Wedding Packages"
              title="Premium formats tailored to your celebration style"
              description="Choose a planning experience that matches the scale, mood, and ambition of your event — each package can be customized to fit your vision."
            />
            <div className="grid gap-6 lg:grid-cols-4">
              {packages.map((pkg, index) => (
                <div
                  key={pkg.name}
                  className={`rounded-[30px] border p-7 ${
                    index === 2
                      ? 'border-[#D4AF37]/60 bg-[linear-gradient(180deg,rgba(212,175,55,0.14),rgba(122,31,43,0.14))]'
                      : 'border-white/10 bg-[#17100F]'
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.38em] text-[#C7A35A]">{pkg.tag}</p>
                  <h3 className="mt-4 font-serif text-3xl text-white">{pkg.name}</h3>
                  <ul className="mt-6 space-y-4">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-[#E8DCC8]/80">
                        <CheckCircle2 className="h-4 w-4 text-[#D4AF37]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#F6E7C3] transition hover:text-[#D4AF37]">
                    Enquire now <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[32px] border border-[#B99246]/20 bg-[linear-gradient(180deg,rgba(122,31,43,0.16),rgba(18,11,10,0.88))] p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#B99246]">Contact Us</p>
              <h2 className="mt-4 font-serif text-4xl text-white">Let’s craft your next unforgettable event.</h2>
              <p className="mt-5 text-sm leading-7 text-[#E8DCC8]/80">
                Share your celebration vision and our team will help shape a refined, memorable, and beautifully coordinated experience in Jaipur.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-full bg-white/8 p-3 text-[#D4AF37]"><Phone className="h-5 w-5" /></div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-[#C7A35A]">Call Us</p>
                    <a href="tel:+917480897482" className="mt-1 block text-lg text-white hover:text-[#D4AF37]">+91 7480897482</a>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="https://wa.me/917480897482" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
                <a href="tel:+917480897482" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]">
                  <Phone className="h-4 w-4" /> Call Now
                </a>
              </div>
            </div>

            <form className="rounded-[32px] border border-white/10 bg-[#17100F] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.25)]">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm text-[#E8DCC8]/85">Name</span>
                  <input type="text" placeholder="Your name" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-[#E8DCC8]/35 focus:border-[#D4AF37]" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm text-[#E8DCC8]/85">Phone</span>
                  <input type="tel" placeholder="Your phone number" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-[#E8DCC8]/35 focus:border-[#D4AF37]" />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-sm text-[#E8DCC8]/85">Event Type</span>
                  <select className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[#D4AF37]">
                    <option className="bg-[#17100F]">Wedding Planning</option>
                    <option className="bg-[#17100F]">Destination Wedding</option>
                    <option className="bg-[#17100F]">Birthday Party</option>
                    <option className="bg-[#17100F]">Corporate Event</option>
                    <option className="bg-[#17100F]">Haldi & Mehndi</option>
                    <option className="bg-[#17100F]">Other Celebration</option>
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-sm text-[#E8DCC8]/85">Message</span>
                  <textarea rows={5} placeholder="Tell us about your event vision" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-[#E8DCC8]/35 focus:border-[#D4AF37]" />
                </label>
              </div>
              <button type="button" className="mt-6 inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-7 py-3 text-sm font-semibold text-[#120B0A] transition hover:bg-[#E7C56A]">
                Send Enquiry
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#0F0908] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-serif text-2xl text-white">Event Aura</p>
            <p className="mt-2 max-w-md text-sm text-[#E8DCC8]/70">Luxury wedding planning and premium event management inspired by Jaipur’s royal charm.</p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm text-[#E8DCC8]/75">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-[#D4AF37]">
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/aura_management18" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 text-[#F5E7D0] transition hover:border-[#D4AF37] hover:text-[#D4AF37]">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://www.youtube.com/@EventAura-u4x" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 text-[#F5E7D0] transition hover:border-[#D4AF37] hover:text-[#D4AF37]">
              <Youtube className="h-4 w-4" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61589328693225" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 text-[#F5E7D0] transition hover:border-[#D4AF37] hover:text-[#D4AF37]">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://wa.me/917480897482" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110">
              <MessageCircle className="h-4 w-4" /> WhatsApp CTA
            </a>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-[#E8DCC8]/55">
          © {currentYear} Event Aura. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
