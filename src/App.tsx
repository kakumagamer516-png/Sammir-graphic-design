import React, { useState, useEffect } from "react";
import { 
  Phone, 
  Coffee, 
  Image as ImageIcon, 
  Flag, 
  Shirt, 
  Rocket, 
  Upload, 
  Truck, 
  CheckCircle, 
  Star, 
  Instagram, 
  Facebook, 
  Twitter,
  MessageSquare, 
  Menu, 
  X,
  ChevronRight,
  ShieldCheck,
  Zap,
  DollarSign
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const WHATSAPP_LINK = "https://wa.me/254799301003"; // Sammr Graphic Design WhatsApp

const NavItem = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-sm font-medium text-slate-300 hover:text-electric-orange transition-colors duration-200"
  >
    {children}
  </a>
);

const ServiceCard = ({ icon: Icon, title, description, delay, image }: { icon: any, title: string, description: string, delay: number, image: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -10 }}
    className="glass-card rounded-2xl overflow-hidden group"
  >
    <div className="h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="p-6">
      <div className="w-12 h-12 bg-electric-orange/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-electric-orange/20 transition-colors">
        <Icon className="w-6 h-6 text-electric-orange" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-slate-400 text-sm">{description}</p>
    </div>
  </motion.div>
);

const StepCard = ({ number, title, description, icon: Icon, delay }: { number: string, title: string, description: string, icon: any, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="flex flex-col items-center text-center p-6"
  >
    <div className="relative mb-6">
      <div className="w-16 h-16 bg-navy-light rounded-full border-2 border-electric-orange flex items-center justify-center relative z-10">
        <Icon className="w-8 h-8 text-electric-orange" />
      </div>
      <span className="absolute -top-2 -right-2 w-8 h-8 bg-electric-orange text-white text-xs font-bold rounded-full flex items-center justify-center z-20">
        {number}
      </span>
    </div>
    <h4 className="text-lg font-bold mb-2">{title}</h4>
    <p className="text-slate-400 text-sm max-w-[200px]">{description}</p>
  </motion.div>
);

const TrustBadge = ({ icon: Icon, title, delay }: { icon: any, title: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="flex items-center gap-3 bg-navy-light/30 px-6 py-4 rounded-xl border border-white/5"
  >
    <Icon className="w-6 h-6 text-electric-orange" />
    <span className="font-semibold text-sm uppercase tracking-wider">{title}</span>
  </motion.div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Promo Banner */}
      <div className="bg-electric-orange text-white text-center py-2 text-xs font-bold uppercase tracking-[0.2em] relative z-60">
        🎉 Free delivery on your first order!
      </div>

      {/* Navigation */}
      <nav className={`fixed top-12 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-navy-dark/95 backdrop-blur-md py-3 shadow-xl" : "bg-transparent py-6"}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex flex-col">
            <span className="text-2xl font-display font-bold tracking-tighter text-white">SAMMR</span>
            <span className="text-[8px] uppercase tracking-[0.3em] text-electric-orange -mt-1 font-bold">Graphic Design</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <NavItem href="#services">Services</NavItem>
            <NavItem href="#how-it-works">How It Works</NavItem>
            <NavItem href="#gallery">Gallery</NavItem>
            <NavItem href="#testimonials">Reviews</NavItem>
            <a 
              href={WHATSAPP_LINK}
              className="bg-electric-orange hover:bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all glow-button flex items-center gap-2"
            >
              Order Now <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-[60] bg-navy-dark p-10 flex flex-col items-center justify-center gap-8"
          >
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-10 right-10 text-white"><X size={32}/></button>
            <NavItem href="#services" onClick={() => setIsMenuOpen(false)}>Services</NavItem>
            <NavItem href="#how-it-works" onClick={() => setIsMenuOpen(false)}>How It Works</NavItem>
            <NavItem href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</NavItem>
            <NavItem href="#testimonials" onClick={() => setIsMenuOpen(false)}>Reviews</NavItem>
            <a href={WHATSAPP_LINK} className="w-full text-center bg-electric-orange py-4 rounded-xl font-bold">WhatsApp Us</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1614850523296-62c0af47517a?auto=format&fit=crop&q=80&w=1920" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-electric-orange font-bold uppercase tracking-[0.4em] text-xs mb-4 block">Your Brand. Your Story. On Everything.</span>
            <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.9] mb-6 text-white">
              Elevate Your <span className="text-gradient">Style</span> with Custom Design
            </h1>
            <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-xl">
              From premium phone covers to personalized mugs and banners—we turn your creative visions into high-quality physical products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#services" 
                className="bg-electric-orange hover:bg-orange-600 text-white px-10 py-5 rounded-full font-bold text-lg transition-all glow-button text-center"
              >
                Get Your Custom Order
              </a>
              <a 
                href={WHATSAPP_LINK} 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-10 py-5 rounded-full font-bold text-lg transition-all text-center"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-navy-dark/50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Specialties</h2>
            <div className="w-20 h-1.5 bg-electric-orange mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <ServiceCard 
              icon={Phone} 
              title="Phone Covers" 
              description="Sleek, durable cases with your favorite photos or artwork." 
              delay={0.1}
              image="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=600"
            />
            <ServiceCard 
              icon={Coffee} 
              title="Photo Mugs" 
              description="Start your morning with a unique mug that tells a story." 
              delay={0.2}
              image="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600"
            />
            <ServiceCard 
              icon={ImageIcon} 
              title="Photo Frames" 
              description="Preserve your best memories in custom-crafted frames." 
              delay={0.3}
              image="https://images.unsplash.com/photo-1544450298-6c845b64c489?auto=format&fit=crop&q=80&w=600"
            />
            <ServiceCard 
              icon={Flag} 
              title="Banners" 
              description="Bold, professional banners for events and business branding." 
              delay={0.4}
              image="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600"
            />
            <ServiceCard 
              icon={Shirt} 
              title="Custom T-Shirts" 
              description="Wear your design. High-quality prints on premium fabric." 
              delay={0.5}
              image="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=600"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto glass-card rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-electric-orange/10 blur-[100px] -z-10" />
            
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">How It Works</h2>
              <p className="text-slate-400 font-medium italic">Your journey from idea to doorstep.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-12 left-[25%] right-[25%] h-0.5 bg-white/10" />
              
              <StepCard 
                number="1" 
                icon={Rocket} 
                title="Choose Product" 
                description="Browse our selection and select the item you want to customize." 
                delay={0.1}
              />
              <StepCard 
                number="2" 
                icon={Upload} 
                title="Upload Photo" 
                description="Send us your high-resolution image or design idea." 
                delay={0.3}
              />
              <StepCard 
                number="3" 
                icon={Truck} 
                title="We Deliver" 
                description="Sit back and relax. We print with care and deliver to you." 
                delay={0.5}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-navy-light/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            <TrustBadge icon={Zap} title="Fast Turnaround" delay={0.1} />
            <TrustBadge icon={ShieldCheck} title="Premium Quality" delay={0.2} />
            <TrustBadge icon={DollarSign} title="Affordable Prices" delay={0.3} />
            <TrustBadge icon={CheckCircle} title="100% Custom" delay={0.4} />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-navy-dark/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-16">Our Masterpieces</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1579541814924-49fef17c5be5?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1583394838336-acd977730f5a?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1526170315873-3a9861e2c9ad?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?auto=format&fit=crop&q=80&w=400"
            ].map((src, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="aspect-square rounded-2xl overflow-hidden hover:opacity-80 transition-opacity cursor-pointer group"
              >
                <img src={src} alt={`Portfolio ${idx}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display font-bold text-center mb-16">Customer Love</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah J.", text: "The T-shirt quality is incredible! The print is sharp and didn't fade even after multiple washes. Highly recommend Sammr!", rating: 5 },
              { name: "Michael T.", text: "Awesome service. Delivered my custom photo mugs in just 2 days. The pricing is very affordable compared to competitors.", rating: 5 },
              { name: "Jessica R.", text: "Absolutely love my new phone cover! The colors are so vibrant and it feels so premium in hand. Thank you!", rating: 5 }
            ].map((review, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="glass-card p-8 rounded-2xl flex flex-col items-center text-center"
              >
                <div className="flex gap-1 mb-4 text-electric-orange">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
                </div>
                <p className="text-slate-300 italic mb-6">"{review.text}"</p>
                <span className="font-bold text-white">— {review.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-electric-orange to-orange-400 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10"><Shirt size={300} /></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Ready to Create Something Amazing?</h2>
            <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto italic">Join thousands of happy customers and bring your ideas to life today.</p>
            <a 
              href={WHATSAPP_LINK}
              className="bg-navy-dark text-white hover:bg-navy-light px-12 py-6 rounded-full font-bold text-xl inline-flex items-center gap-3 transition-transform hover:scale-105"
            >
              Order via WhatsApp <MessageSquare />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-dark pt-20 pb-10 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
              <a href="#" className="flex flex-col mb-6">
                <span className="text-3xl font-display font-bold text-white">SAMMR</span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-electric-orange font-bold">Graphic Design</span>
              </a>
              <p className="text-slate-400 max-w-sm mb-8 italic">
                From branding to personalized gifts, we are your one-stop shop for everything custom. "Your Brand. Your Story. On Everything."
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/yahye.aden.jamac" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-electric-orange transition-colors" title="Facebook - yahye aden jamac"><Facebook size={20} /></a>
                <a href="https://twitter.com/kakuma_gamer" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-electric-orange transition-colors" title="Twitter - @kakuma_gamer"><Twitter size={20} /></a>
                <a href="https://www.tiktok.com/@kakuma_gamer" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-electric-orange transition-colors font-bold text-[10px]" title="TikTok - @kakuma_gamer">TikTok</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-widest">Connect</h4>
              <ul className="flex flex-col gap-4 text-slate-400 text-sm">
                <li>Email: <a href="mailto:sammirofficial@gmail.com" className="hover:text-white">sammirofficial@gmail.com</a></li>
                <li>WhatsApp & Call: <a href={WHATSAPP_LINK} className="hover:text-white">+254 799 301003</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-widest">Quick Links</h4>
              <ul className="flex flex-col gap-4 text-slate-400 text-sm">
                <li><a href="#services" className="hover:text-white">Services</a></li>
                <li><a href="#how-it-works" className="hover:text-white">How It Works</a></li>
                <li><a href="#gallery" className="hover:text-white">Portfolio</a></li>
                <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
              </ul>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-white/5 text-slate-500 text-xs">
            © {new Date().getFullYear()} Sammr Graphic Design. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={WHATSAPP_LINK}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl text-white overflow-hidden"
      >
        <MessageSquare size={32} />
      </motion.a>
    </div>
  );
}
