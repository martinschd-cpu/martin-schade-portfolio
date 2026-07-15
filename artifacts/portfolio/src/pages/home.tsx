import React, { useEffect, useState, useCallback } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useDocumentHead } from "@/hooks/use-document-head";
import { useSendContactMessage } from "@workspace/api-client-react";
import { useLanguage } from "@/lib/language-context";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import martinPhoto from "@/assets/martin-photo.webp";

const heroSlide1 = "/hero-slide-1.webp";
const heroSlide2 = "/hero-slide-2.webp";
const heroSlide3 = "/hero-slide-3.webp";
const heroSlide4 = "/hero-slide-4.webp";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
} as const;

const SLIDE_IMAGES = [heroSlide1, heroSlide2, heroSlide3, heroSlide4];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { toast } = useToast();
  const { t } = useLanguage();
  const h = t.home;

  useDocumentHead({
    title: h.meta.title,
    description: h.meta.description,
    path: "/",
  });

  const nextSlide = useCallback(() => {
    setCurrentSlide((s) => (s + 1) % SLIDE_IMAGES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const formSchema = z.object({
    name: z.string().min(2, h.kontakt.form.nameRequired),
    email: z.string().email(h.kontakt.form.emailInvalid),
    topic: z.string().min(1, h.kontakt.form.topicRequired),
    message: z.string().min(10, h.kontakt.form.messageTooShort),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      topic: "",
      message: "",
    },
  });

  const sendContactMessage = useSendContactMessage();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    sendContactMessage.mutate(
      { data: values },
      {
        onSuccess: () => {
          toast({
            title: h.kontakt.form.toastSuccessTitle,
            description: h.kontakt.form.toastSuccessDesc,
          });
          form.reset();
        },
        onError: () => {
          toast({
            title: h.kontakt.form.toastErrorTitle,
            description: h.kontakt.form.toastErrorDesc,
            variant: "destructive",
          });
        },
      },
    );
  };

  return (
    <div className="bg-[#F4F0E8] min-h-screen text-[#1A1815] font-sans">
      {/* NAVIGATION */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0D1930]/95 backdrop-blur-md py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-end gap-8">
          <div className="hidden md:flex items-center gap-8 font-mono text-sm">
            <a href="#situationen" className="text-[#B8C2D4] hover:text-white transition-colors">{h.nav.situationen}</a>
            <a href="#ki" className="text-[#B8C2D4] hover:text-white transition-colors">{h.nav.ki}</a>
            <a href="#track-record" className="text-[#B8C2D4] hover:text-white transition-colors">{h.nav.trackRecord}</a>
            <a href="#kontakt" className="text-[#60A5FA] hover:text-white transition-colors">{h.nav.kontakt}</a>
            <LanguageSwitcher variant="dark" instanceId="desktop" />
          </div>
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher variant="dark" instanceId="mobile" />
            <button
              data-testid="button-mobile-menu"
              className="flex flex-col justify-center items-center w-8 h-8 gap-[5px] group"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={h.nav.menuAriaLabel}
            >
              <span className={`block w-6 h-px bg-[#B8C2D4] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
              <span className={`block w-6 h-px bg-[#B8C2D4] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-px bg-[#B8C2D4] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-[#0D1930]/98 border-t border-[#ffffff15] px-6 pb-6 pt-4 flex flex-col gap-5 font-mono text-sm">
            {[
              { href: "#situationen", label: h.nav.situationen },
              { href: "#ki", label: h.nav.ki },
              { href: "#track-record", label: h.nav.trackRecord },
              { href: "#kontakt", label: h.nav.kontakt },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#B8C2D4] hover:text-white transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* 01 HERO — Full-screen image slider */}
      <section id="hero" className="relative min-h-screen overflow-hidden">
        {/* Slides */}
        <AnimatePresence mode="sync">
          <motion.img
            key={currentSlide}
            src={SLIDE_IMAGES[currentSlide]}
            alt=""
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority={currentSlide === 0 ? "high" : "auto"}
            loading={currentSlide === 0 ? "eager" : "lazy"}
            decoding={currentSlide === 0 ? "sync" : "async"}
          />
        </AnimatePresence>

        {/* Permanent dark overlay */}
        <div className="absolute inset-0 bg-[#0D1930]/72" />

        {/* Eyebrow — fixed below nav */}
        <div className="absolute top-20 md:top-24 left-0 right-0 z-10 px-6 md:px-16 lg:px-24">
          <h1 className="font-mono text-[#60A5FA] text-xs md:text-sm uppercase tracking-[0.2em] font-normal">
            {h.hero.eyebrow}
          </h1>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-start pt-40 md:pt-44 pb-8 px-6 md:px-16 lg:px-24">
          <div className="max-w-4xl">
            <div className="min-h-[9rem] md:min-h-[15rem] lg:min-h-[19rem] mb-8">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentSlide}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight"
                >
                  "{h.hero.slides[currentSlide]}"
                </motion.h2>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-[#B8C2D4] italic text-lg md:text-xl mb-10 max-w-2xl leading-relaxed"
            >
              {h.hero.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mb-10"
            >
              <p className="font-serif text-lg md:text-2xl text-white/90">
                {h.hero.bio}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex items-center gap-8"
            >
              <Button
                asChild
                data-testid="button-cta-contact"
                className="bg-[#60A5FA] hover:bg-[#60A5FA]/90 text-[#0D1930] rounded-none px-8 py-6 text-base font-medium"
              >
                <a href="https://calendar.app.google/wmZefEZTVz5YUmi57" target="_blank" rel="noopener noreferrer">
                  {h.hero.cta}
                </a>
              </Button>

              {/* Slide dots */}
              <div className="flex items-center gap-3">
                {SLIDE_IMAGES.map((_, i) => (
                  <button
                    key={i}
                    data-testid={`button-slide-${i}`}
                    onClick={() => setCurrentSlide(i)}
                    className={`transition-all duration-300 rounded-full ${
                      i === currentSlide
                        ? "w-6 h-2 bg-[#60A5FA]"
                        : "w-2 h-2 bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`${h.hero.slideAriaLabel} ${i + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <div className="bg-[#0D1930] border-t border-[#ffffff15]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-0">
          {h.stats.map((stat, i) => (
            <div key={i} className="p-6 md:p-8 border-r border-[#ffffff15] last:border-r-0 border-b md:border-b-0">
              <div className="font-serif text-2xl md:text-3xl text-[#60A5FA] mb-1">{stat.num}</div>
              <div className="font-mono text-xs text-[#B8C2D4] leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 02 VIER SITUATIONEN */}
      <section id="situationen" className="py-24 px-6 md:px-12 bg-[#F4F0E8]">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mt-4">{h.situationen.heading}</h2>
          </div>

          <div className="border-t border-[#1A1815]/20">
            {h.situationen.items.map((block, i) => (
              <motion.div 
                key={i} 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 py-12 border-b border-[#1A1815]/20"
              >
                <div className="text-lg leading-relaxed">{block.symptom}</div>
                <div>
                  <div className="font-mono text-sm text-[#60A5FA] mb-4 uppercase tracking-wider">{block.label}</div>
                  <div className="text-lg leading-relaxed text-[#1A1815]/80">{block.answer}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 KI / AI-KOMPETENZ */}
      <section id="ki" className="py-24 px-6 md:px-12 bg-[#0D1930] text-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mt-4 max-w-3xl leading-tight">
              {h.ki.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-[#ffffff33]">
            {h.ki.cards.map((card, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="p-8 border-b border-r border-[#ffffff33]"
              >
                <h3 className="font-serif text-2xl mb-6 text-[#60A5FA]">{card.title}</h3>
                <p className="text-[#B8C2D4] leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 TRACK RECORD */}
      <section id="track-record" className="py-24 px-6 md:px-12 bg-[#F4F0E8]">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mt-4">{h.trackRecord.heading}</h2>
          </div>

          <div className="space-y-0 border-t border-[#1A1815]/15">
            {h.trackRecord.items.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeInUp}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-12 border-b border-[#1A1815]/15"
              >
                <div className="md:col-span-4">
                  <h3 className="font-serif text-xl md:text-2xl mb-2 leading-snug">{item.company}</h3>
                  <div className="font-mono text-xs text-[#60A5FA] tracking-widest uppercase">{item.role}</div>
                </div>
                <div className="md:col-span-8">
                  <p className="text-[#1A1815]/80 leading-relaxed mb-5">{item.intro}</p>
                  <ul className="space-y-3">
                    {item.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-[#1A1815]/75 leading-relaxed">
                        <span className="mt-[9px] shrink-0 w-4 h-px bg-[#60A5FA]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 REFERENZEN */}
      <section className="py-24 px-6 md:px-12 bg-[#0D1930] text-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mt-4">{h.referenzen.heading}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-[#ffffff33]">
            {h.referenzen.items.map((ref, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="p-8 border-b border-r border-[#ffffff33] flex flex-col justify-between"
              >
                <div className="font-serif text-xl italic leading-relaxed text-[#B8C2D4] mb-8">"{ref.quote}"</div>
                <div className="font-mono text-xs text-[#60A5FA] tracking-wider uppercase">— {ref.author}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 ZERTIFIKATE & QUALIFIKATIONEN */}
      <section className="py-24 px-6 md:px-12 bg-[#F4F0E8]">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mt-4">{h.zertifikate.heading}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl mb-6">{h.zertifikate.certificationsHeading}</h3>
              {h.zertifikate.certifications.map((cert, i) => (
                <div key={i} className="font-mono text-sm p-4 border border-[#60A5FA]/30 bg-white/50 text-[#1A1815]">
                  {cert}
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="font-serif text-2xl mb-6">{h.zertifikate.educationHeading}</h3>
              {h.zertifikate.education.map((edu, i) => (
                <div
                  key={i}
                  className={i < h.zertifikate.education.length - 1 ? "pb-4 border-b border-[#1A1815]/10" : ""}
                >
                  <div className="font-mono text-sm text-[#60A5FA] mb-2">{edu.degree}</div>
                  <div className="text-[#1A1815]/80">{edu.school}</div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="font-serif text-2xl mb-6">{h.zertifikate.languagesHeading}</h3>
              <div className="space-y-3 font-mono text-sm text-[#1A1815]/80">
                {h.zertifikate.languages.map((lang, i) => (
                  <div key={i}>{lang}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07 TOOLS & STACK */}
      <section className="py-24 px-6 md:px-12 bg-[#0D1930] text-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mt-4">{h.toolsStack.heading}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-[#ffffff33]">
            {h.toolsStack.items.map((stack, i) => (
              <div key={i} className="p-8 border-b border-r border-[#ffffff33] flex flex-col">
                <div className="h-12 flex items-center">
                  <div className="font-mono text-xs text-[#60A5FA] tracking-widest uppercase">{stack.cat}</div>
                </div>
                <div className="w-full h-px bg-white/20 mb-6" />
                <div className="text-white leading-relaxed">{stack.tools}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08 ÜBER MICH */}
      <section className="py-24 px-6 md:px-12 bg-[#F4F0E8]">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mt-4">{h.about.heading}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="md:col-span-4 lg:col-span-5">
              <img
                src={martinPhoto}
                alt="Martin Schade"
                width={700}
                height={1052}
                loading="lazy"
                decoding="async"
                className="w-full object-cover object-top"
              />
            </div>
            
            <div className="md:col-span-8 lg:col-span-7 space-y-6 text-lg leading-relaxed text-[#1A1815]/90">
              {h.about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 09 KONTAKT */}
      <section id="kontakt" className="py-32 px-6 md:px-12 bg-[#0D1930] text-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16">
            <h2 className="font-serif text-5xl md:text-7xl mt-4 mb-4">{h.kontakt.heading}</h2>
            <p className="text-[#B8C2D4] text-xl">{h.kontakt.subheading}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-[#B8C2D4] font-normal tracking-wide">{h.kontakt.form.name}</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="" 
                            {...field} 
                            className="bg-transparent border-0 border-b border-[#ffffff33] rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#60A5FA] text-lg h-12 text-white placeholder:text-white/20"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400 font-mono text-xs" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-[#B8C2D4] font-normal tracking-wide">{h.kontakt.form.email}</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="" 
                            {...field} 
                            className="bg-transparent border-0 border-b border-[#ffffff33] rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#60A5FA] text-lg h-12 text-white placeholder:text-white/20"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400 font-mono text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="topic"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-[#B8C2D4] font-normal tracking-wide">{h.kontakt.form.topicLabel}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-transparent border-0 border-b border-[#ffffff33] rounded-none px-0 focus:ring-0 focus:border-[#60A5FA] text-lg h-12 text-white">
                              <SelectValue placeholder={h.kontakt.form.topicPlaceholder} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[#0D1930] border-[#ffffff33] text-white font-sans">
                            <SelectItem value="interim" className="focus:bg-[#60A5FA]/20 focus:text-white">{h.kontakt.form.topics.interim}</SelectItem>
                            <SelectItem value="audit" className="focus:bg-[#60A5FA]/20 focus:text-white">{h.kontakt.form.topics.audit}</SelectItem>
                            <SelectItem value="sales" className="focus:bg-[#60A5FA]/20 focus:text-white">{h.kontakt.form.topics.sales}</SelectItem>
                            <SelectItem value="proxy" className="focus:bg-[#60A5FA]/20 focus:text-white">{h.kontakt.form.topics.proxy}</SelectItem>
                            <SelectItem value="sonstiges" className="focus:bg-[#60A5FA]/20 focus:text-white">{h.kontakt.form.topics.sonstiges}</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-400 font-mono text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-[#B8C2D4] font-normal tracking-wide">{h.kontakt.form.message}</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="" 
                            {...field} 
                            className="bg-transparent border-[#ffffff33] rounded-none focus-visible:ring-0 focus-visible:border-[#60A5FA] text-lg min-h-[150px] text-white resize-y"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400 font-mono text-xs" />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-[#60A5FA] hover:bg-[#60A5FA]/90 text-[#0D1930] rounded-none h-14 text-lg font-medium mt-8"
                  >
                    {h.kontakt.form.submit}
                  </Button>
                </form>
              </Form>
            </div>

            <div className="space-y-8 pt-8 md:pt-0">
              <div className="pb-8 border-b border-[#ffffff33]">
                <div className="font-mono text-sm text-[#60A5FA] mb-2 tracking-widest uppercase">{h.kontakt.info.emailLabel}</div>
                <a href="mailto:ms@martin-schade.de" className="text-xl hover:text-[#60A5FA] transition-colors">ms@martin-schade.de</a>
              </div>
              <div className="pb-8 border-b border-[#ffffff33]">
                <div className="font-mono text-sm text-[#60A5FA] mb-2 tracking-widest uppercase">{h.kontakt.info.phoneLabel}</div>
                <a href="tel:+491629161676" className="text-xl hover:text-[#60A5FA] transition-colors">+49 162 9161676</a>
              </div>
              <div className="pb-8 border-b border-[#ffffff33]">
                <div className="font-mono text-sm text-[#60A5FA] mb-2 tracking-widest uppercase">{h.kontakt.info.linkedinLabel}</div>
                <a href="https://www.linkedin.com/in/martin-schade-product/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-[#60A5FA] transition-colors">linkedin.com/in/martin-schade-product</a>
              </div>
              <div>
                <div className="font-mono text-sm text-[#60A5FA] mb-2 tracking-widest uppercase">{h.kontakt.info.locationLabel}</div>
                <div className="text-xl text-[#B8C2D4]">{h.kontakt.info.locationValue}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#0a1222] py-8 border-t border-[#ffffff11]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-[#B8C2D4]/50">
            © {new Date().getFullYear()} Martin Schade. {h.footer.rights}
          </div>
          <div className="flex gap-6 font-mono text-xs text-[#B8C2D4]/50">
            <Link href="/impressum" className="hover:text-[#60A5FA] transition-colors">
              {h.footer.impressum}
            </Link>
            <Link href="/datenschutz" className="hover:text-[#60A5FA] transition-colors">
              {h.footer.datenschutz}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
