"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import {
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Home,
  PawPrint,
  Scissors,
  Bath,
  Sparkles,
} from "lucide-react";

const BookingPage = () => {
  const t = useTranslations("Booking");
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    petName: "",
    petBreed: "",
    service: "fullCut",
    date: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const services = [
    { id: "fullCut", icon: <Scissors size={20} /> },
    { id: "bathTidy", icon: <Bath size={20} /> },
    { id: "miniSpa", icon: <Sparkles size={20} /> },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#FFF9F5] flex items-center justify-center px-6">
        <div className="max-w-md w-full bg-white rounded-[3rem] p-12 text-center shadow-2xl shadow-orange-500/10 border-2 border-stone-50 animate-in zoom-in duration-500">
          <div className="text-7xl mb-6">{t("success.emoji")}</div>
          <h2 className="text-3xl font-black text-stone-800 mb-4">
            {t("success.title")}
          </h2>
          <p className="text-stone-500 font-medium mb-10">
            {t("success.message", {
              petName: formData.petName,
              service: t(`steps.service.options.${formData.service}`),
            })}
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="w-full bg-stone-800 text-white py-4 rounded-2xl font-bold text-lg hover:bg-stone-900 transition-all shadow-lg flex items-center justify-center gap-3"
          >
            <Home size={20} />
            {t("success.backHome")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF9F5] font-['Nunito',_sans-serif] py-12 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-orange-400 text-white rounded-full mb-4 rotate-3 shadow-lg">
            <Calendar size={32} />
          </div>
          <h1 className="text-4xl font-black text-stone-800">{t("header")}</h1>
          <p className="text-stone-500 font-medium">{t("subheader")}</p>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-12 px-4 relative">
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex items-center flex-1 last:flex-none">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold z-10 transition-colors duration-300 ${
                  step >= num
                    ? "bg-teal-500 text-white shadow-lg"
                    : "bg-stone-200 text-stone-400"
                }`}
              >
                {num}
              </div>
              {num !== 3 && (
                <div
                  className={`h-1 flex-1 mx-2 rounded-full transition-colors duration-500 ${
                    step > num ? "bg-teal-500" : "bg-stone-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-orange-500/5 border-2 border-stone-50 relative">
          {/* Step 1: Pet Info */}
          {step === 1 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4">
              <h2 className="text-2xl font-black text-stone-800 flex items-center gap-2">
                {t("steps.petInfo.title")}{" "}
                <PawPrint size={24} className="text-orange-400" />
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder={t("steps.petInfo.namePlaceholder")}
                  className="w-full bg-stone-50 border-2 text-black border-stone-100 rounded-2xl px-6 py-4 focus:border-orange-400 outline-none font-bold text-lg transition-all"
                  value={formData.petName}
                  onChange={(e) =>
                    setFormData({ ...formData, petName: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder={t("steps.petInfo.breedPlaceholder")}
                  className="w-full text-black bg-stone-50 border-2 border-stone-100 rounded-2xl px-6 py-4 focus:border-orange-400 outline-none font-bold text-lg transition-all"
                  value={formData.petBreed}
                  onChange={(e) =>
                    setFormData({ ...formData, petBreed: e.target.value })
                  }
                />
              </div>
              <button
                onClick={nextStep}
                disabled={!formData.petName || !formData.petBreed}
                className="w-full bg-orange-500 text-white py-5 rounded-2xl font-black text-xl shadow-[0_6px_0_rgb(194,65,12)] active:translate-y-1 active:shadow-none transition-all disabled:opacity-50"
              >
                {t("steps.petInfo.continue")}
              </button>
            </div>
          )}

          {/* Step 2: Service Selection */}
          {step === 2 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4">
              <h2 className="text-2xl font-black text-stone-800">
                {t("steps.service.title")}
              </h2>
              <div className="grid gap-3">
                {services.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setFormData({ ...formData, service: s.id })}
                    className={`flex items-center justify-between p-6 rounded-2xl border-2 transition-all ${
                      formData.service === s.id
                        ? "border-teal-500 bg-teal-50 ring-4 ring-teal-500/5"
                        : "border-stone-100 hover:border-orange-200"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-stone-400">{s.icon}</span>
                      <span className="font-bold text-stone-800">
                        {t(`steps.service.options.${s.id}`)}
                      </span>
                    </div>
                    {formData.service === s.id && (
                      <CheckCircle2 className="text-teal-500" size={24} />
                    )}
                  </button>
                ))}
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  onClick={prevStep}
                  className="flex-1 py-4 font-bold text-stone-400 flex items-center justify-center gap-2"
                >
                  <ArrowLeft size={18} /> {t("steps.service.back")}
                </button>
                <button
                  onClick={nextStep}
                  className="flex-[2] bg-orange-500 text-white py-5 rounded-2xl font-black text-xl shadow-[0_6px_0_rgb(194,65,12)]"
                >
                  {t("steps.service.next")}
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Date */}
          {step === 3 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4">
              <h2 className="text-2xl font-black text-stone-800">
                {t("steps.date.title")}
              </h2>
              <div className="space-y-4">
                <p className="text-stone-500 font-medium">
                  {t("steps.date.question", { petName: formData.petName })}
                </p>
                <input
                  type="date"
                  className="w-full text-black bg-stone-50 border-2 border-stone-100 rounded-2xl px-6 py-4 outline-none font-bold text-lg focus:border-teal-400 transition-all"
                  value={formData.date} // Added value prop to make it fully controlled
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                />
              </div>
              <button
                onClick={handleSubmit}
                disabled={!formData.date} // Disables if date is empty
                className="w-full bg-teal-500 text-white py-5 rounded-2xl font-black text-xl shadow-[0_6px_0_rgb(13,148,136)] hover:translate-y-0.5 transition-all disabled:opacity-50 disabled:shadow-none disabled:translate-y-0 disabled:cursor-not-allowed"
              >
                {t("steps.date.submit")}
              </button>
              <button
                onClick={prevStep}
                className="w-full text-stone-400 font-bold"
              >
                {t("steps.date.change")}
              </button>
            </div>
          )}
        </div>

        {/* Footer Exit */}
        <div className="mt-12 text-center">
          <button
            onClick={() => (window.location.href = "/")}
            className="inline-flex items-center gap-2 text-stone-400 font-bold hover:text-stone-600 transition-colors"
          >
            <ArrowLeft size={18} />
            <span>{t("footer.back")}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
