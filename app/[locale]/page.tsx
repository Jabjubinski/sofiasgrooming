"use client";

import Head from "next/head";
import Gallery from "@/components/Gallery";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Scissors,
  Bath,
  Sparkles,
  PawPrint,
  Languages,
  Star,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";
import whatsapp from "@/public/whatsapp.png";

// Import translations
import en from "../../messages/en.json";
import ka from "../../messages/ka.json";
import Image from "next/image";

const translations = { en, ka };

export default function CasualGrooming() {
  const params = useParams();
  const locale = params?.locale || "en";

  // Translation helper function
  const t = (key) => {
    const keys = key.split(".");
    const currentDict = translations[locale] || translations.en;
    return keys.reduce((acc, curr) => acc?.[curr], currentDict) || key;
  };

  return (
    <>
      <Head>
        <title>Sofia's Grooming | {t("hero.titleSuffix")}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Link
        href={"https://wa.me/995595488842"}
        target="_blank"
        className="fixed z-100 shadow-md bottom-5 right-5 h-16 w-16 hidden md:flex md:justify-center md:items-center bg-white text-orange-500 rounded-full"
      >
        <Image src={whatsapp} fill alt="whatsapp logo" />
      </Link>

      <div className="bg-[#FFF9F5] font-['Nunito',_sans-serif] text-stone-700 selection:bg-orange-200">
        {/* Navigation */}
        <nav className="fixed w-full z-50 top-4">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white/90 backdrop-blur-sm border-2 border-stone-100 rounded-full px-4 md:px-6 py-3 shadow-lg flex justify-between items-center">
              {/* Logo: Smaller on mobile */}
              <div className="flex items-center gap-2">
                <div className="bg-orange-400 text-white p-2 rounded-full rotate-3">
                  <PawPrint size={18} />
                </div>
                <span className="font-extrabold text-lg md:text-xl tracking-tight text-stone-800">
                  Sofia's <span className="hidden xs:inline">Grooming</span>
                </span>
              </div>

              <div className="flex items-center gap-3 md:gap-8 font-bold text-sm text-stone-500">
                {/* Nav Links: Hidden on small mobile, shown on desktop */}
                <div className="hidden lg:flex items-center gap-6">
                  <a
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    {t("nav.home")}
                  </a>
                  <a
                    href="#services"
                    className="hover:text-orange-500 transition-colors"
                  >
                    {t("nav.services")}
                  </a>
                  <a
                    href="#gallery"
                    className="hover:text-orange-500 transition-colors"
                  >
                    {t("nav.gallery")}
                  </a>
                </div>

                {/* Language Toggle: Responsive padding/sizing */}
                <Link
                  href={locale === "en" ? "/ka" : "/en"}
                  className="flex items-center gap-1.5 bg-stone-50 px-3 py-2 md:py-1.5 rounded-full text-stone-600 hover:bg-orange-100 transition-all border border-stone-100 active:scale-95"
                  aria-label="Toggle Language"
                >
                  <Languages size={16} className="text-orange-500" />
                  <span className="uppercase text-[10px] md:text-xs font-black tracking-tighter md:tracking-normal">
                    {locale === "en" ? "ქართული" : "English"}
                  </span>
                </Link>

                {/* Book Now: Compact on mobile */}
                <Link
                  href="https://wa.me/995595488842"
                  target="_blank"
                  className="bg-teal-400 text-white px-4 md:px-6 py-2 rounded-full hover:bg-teal-500 transition-all shadow-[0_4px_0_rgb(13,148,136)] active:translate-y-[2px] active:shadow-none text-xs md:text-sm whitespace-nowrap"
                >
                  {t("nav.bookNow")}
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-40 pb-20 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-in fade-in slide-in-from-left-6 duration-700">
                <div className="inline-block bg-yellow-100 text-yellow-700 font-bold px-4 py-1 rounded-full text-sm mb-6 -rotate-1 border-2 border-yellow-200">
                  {t("hero.newPups")}
                </div>
                <h1 className="text-5xl lg:text-7xl font-black text-stone-800 leading-tight mb-6">
                  {t("hero.titlePrefix")} <br />
                  <span className="text-orange-500 underline decoration-wavy decoration-teal-300 decoration-4 underline-offset-4">
                    {t("hero.titleSuffix")}
                  </span>
                </h1>
                <p className="text-xl text-stone-500 font-medium mb-8 leading-relaxed">
                  {t("hero.description")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="https://wa.me/995595488842"
                    target="_blank"
                    className="bg-stone-800 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-stone-900 transition-all shadow-xl text-center"
                  >
                    {t("hero.ctaMain")}
                  </Link>
                  {/* <button className="px-8 py-4 rounded-2xl font-bold text-lg text-stone-600 border-2 border-stone-200 hover:bg-orange-50 transition-all">
                    {t("hero.ctaSecondary")}
                  </button> */}
                </div>
                <div className="mt-10 flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <img
                        key={i}
                        src={`https://i.pravatar.cc/100?img=${i + 15}`}
                        className="w-10 h-10 rounded-full border-4 border-white shadow-sm"
                        alt="User"
                      />
                    ))}
                  </div>
                  <p className="text-sm font-bold text-stone-400">
                    {t("hero.socialProof")}
                  </p>
                </div>
              </div>

              <div className="relative animate-in fade-in zoom-in duration-700">
                <div className="absolute top-10 right-10 w-full h-full bg-orange-200 rounded-[3rem] rotate-6 -z-10"></div>
                <div className="absolute top-10 right-10 w-full h-full bg-teal-200 rounded-[3rem] -rotate-3 -z-20"></div>
                <img
                  src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2069&auto=format&fit=crop"
                  className="rounded-[2.5rem] border-8 border-white shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
                  alt="Happy Dog"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border-b-4 border-stone-100 rotate-3 animate-bounce duration-[3000ms] flex items-center gap-2">
                  <span className="text-2xl">🛁</span>
                  <span className="font-bold text-stone-700">
                    {t("hero.squeakyClean")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-white relative">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-teal-500 font-bold tracking-wider uppercase text-sm">
                {t("services.badge")}
              </span>
              <h2 className="text-4xl font-black text-stone-800 mt-2">
                {t("services.title")}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Scissors className="text-orange-500" size={32} />}
                title={t("services.fullCut.title")}
                desc={t("services.fullCut.desc")}
                color="bg-[#FFF9F5]"
              />
              <ServiceCard
                icon={<Bath className="text-teal-500" size={32} />}
                title={t("services.bathTidy.title")}
                desc={t("services.bathTidy.desc")}
                color="bg-teal-50"
              />
              <ServiceCard
                icon={<Sparkles className="text-yellow-600" size={32} />}
                title={t("services.miniSpa.title")}
                desc={t("services.miniSpa.desc")}
                color="bg-yellow-50"
              />
            </div>
          </div>
        </section>

        <section id="gallery" className="py-24 bg-[#FFF9F5]">
          <Gallery />
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-24 bg-[#FFF9F5]">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl font-black text-center text-stone-800 mb-16">
              {t("reviews.title")}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Review 1 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border-2 border-stone-100 relative">
                <div className="absolute -top-4 -right-4 bg-orange-400 text-white text-xs font-bold px-3 py-1 rounded-full rotate-12 flex items-center gap-1">
                  <Star size={10} fill="currentColor" /> {t("reviews.stars")}
                </div>
                <p className="text-lg text-stone-600 italic mb-6">
                  {t("reviews.review1.text")}
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src="https://i.pravatar.cc/100?img=5"
                    className="w-12 h-12 rounded-full"
                    alt="Avatar"
                  />
                  <div>
                    <p className="font-bold text-stone-800">
                      {t("reviews.review1.author")}
                    </p>
                    <p className="text-xs text-stone-400 font-bold uppercase">
                      {t("reviews.review1.breed")}
                    </p>
                  </div>
                </div>
              </div>
              {/* Review 2 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border-2 border-stone-100 md:translate-y-8 relative">
                <div className="absolute -top-4 -right-4 bg-teal-400 text-white text-xs font-bold px-3 py-1 rounded-full -rotate-6">
                  {t("reviews.woof")}
                </div>
                <p className="text-lg text-stone-600 italic mb-6">
                  {t("reviews.review2.text")}
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src="https://i.pravatar.cc/100?img=11"
                    className="w-12 h-12 rounded-full"
                    alt="Avatar"
                  />
                  <div>
                    <p className="font-bold text-stone-800">
                      {t("reviews.review2.author")}
                    </p>
                    <p className="text-xs text-stone-400 font-bold uppercase">
                      {t("reviews.review2.breed")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="location"
          className="w-full flex flex-col items-center justify-center py-8 px-4"
        >
          <h2 className="text-4xl font-black text-center text-stone-800 mb-16">
            {t("location.title")}
          </h2>
          <div className="w-full sm:max-w-4xl md:max-w-7xl overflow-hidden rounded-[2.5rem] shadow-lg border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.4982042751276!2d44.72807744114708!3d41.709767171380314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404473460ecc5c2f%3A0x7cb41277a76b308!2sSofia&#39;s%20Grooming!5e0!3m2!1sen!2sge!4v1770986427052!5m2!1sen!2sge"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        {/* Footer */}
        <section
          id="book"
          className="py-20 bg-teal-900 text-teal-50 rounded-t-[3rem] mt-12"
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-black text-white mb-6">
              {t("footer.cta")}
            </h2>
            <p className="text-teal-200 text-xl mb-10">{t("footer.subtext")}</p>

            <div className="bg-teal-800/50 backdrop-blur-sm p-8 rounded-[2.5rem] grid md:grid-cols-3 gap-12 text-left">
              <FooterItem
                icon={<MapPin className="text-teal-400" />}
                label={t("footer.visit")}
                content={t("footer.address")}
              />
              <FooterItem
                icon={<Phone className="text-teal-400" />}
                label={t("footer.call")}
                content={t("footer.phone")}
              />
              <FooterItem
                icon={<Clock className="text-teal-400" />}
                label={t("footer.hours")}
                content={t("footer.schedule")}
              />
            </div>

            <div className="mt-16 pt-8 border-t border-teal-800 text-teal-400 text-sm">
              <p>
                © {new Date().getFullYear()} {t("footer.copy")}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// Sub-components for cleaner code
function ServiceCard({ icon, title, desc, color }) {
  return (
    <div
      className={`${color} p-8 rounded-[2.5rem] border-2 border-transparent hover:border-orange-200 hover:shadow-xl hover:-translate-y-2 transition-all group`}
    >
      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-stone-800 mb-2">{title}</h3>
      <p className="text-stone-500 mb-6 font-medium leading-relaxed">{desc}</p>
    </div>
  );
}

function FooterItem({ icon, label, content }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2 text-teal-400">
        {icon}
        <p className="text-xs font-black uppercase tracking-widest">{label}</p>
      </div>
      <p className="text-lg font-bold text-white whitespace-pre-line">
        {content}
      </p>
    </div>
  );
}
