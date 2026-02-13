import { GridIcon } from "lucide-react";
import { useTranslations } from "next-intl";

const Gallery = () => {
  const t = useTranslations();

  const galleryItems = [
    {
      id: 1,
      src: "https://plus.unsplash.com/premium_photo-1661951641996-3685492b78ed?q=80&w=726&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Golden Retriever smiling",
      span: "md:col-span-2 md:row-span-2",
      translationKey: "rusty",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=800&auto=format&fit=crop",
      alt: "Puppy in towel",
      span: "col-span-1 row-span-1",
      translationKey: "bean",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=800&auto=format&fit=crop",
      alt: "Dog with bow",
      span: "col-span-1 row-span-1",
      translationKey: "lola",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=800&auto=format&fit=crop",
      alt: "Happy dog running",
      span: "md:col-span-1 md:row-span-2",
      translationKey: "cooper",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=800&auto=format&fit=crop",
      alt: "Terrier mix",
      span: "col-span-1 row-span-1",
      translationKey: "sparky",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=800&auto=format&fit=crop",
      alt: "Dog in bath",
      span: "md:col-span-2 md:row-span-1",
      translationKey: "luna",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="inline-block bg-orange-100 text-orange-600 font-bold px-4 py-1 rounded-full text-sm mb-4 border-2 border-orange-200 rotate-2">
          {t("gallery.badge")}
        </span>
        <h2 className="text-4xl font-black text-stone-800">
          {t("gallery.title")}
        </h2>
        <p className="text-stone-500 mt-4 text-lg">
          {t("gallery.description")}
        </p>
      </div>

      {/* The Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-6">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className={`group relative rounded-3xl overflow-hidden border-4 border-white shadow-lg cursor-pointer ${item.span}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
            />

            <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="bg-teal-400 text-white text-xs font-bold px-2 py-1 rounded-lg mb-2 inline-block">
                  {t(`gallery.pets.${item.translationKey}.tag`)}
                </span>
                <p className="text-white font-bold text-xl">
                  {t(`gallery.pets.${item.translationKey}.name`)}
                </p>
              </div>
            </div>

            <button className="absolute top-4 right-4 bg-white text-stone-300 hover:text-red-500 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 translate-y-[-10px] group-hover:translate-y-0 transition-all duration-500">
              <span className="material-icons-round text-xl">favorite</span>
            </button>
          </div>
        ))}
      </div>

      {/* Footer Link */}
      <div className="text-center mt-16">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-stone-500 font-bold hover:text-orange-500 transition-colors border-b-2 border-transparent hover:border-orange-500 pb-1"
        >
          <GridIcon className="w-5 h-5" />
          {t("gallery.instagram")}
        </a>
      </div>
    </div>
  );
};

export default Gallery;
