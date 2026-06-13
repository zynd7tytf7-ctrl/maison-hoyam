"use client";

import React, { useState, FormEvent } from "react";
import { useLanguage } from "./language-context";
import {
  Send,
  CheckCircle,
  AlertCircle,
  User,
  Mail,
  Phone,
  FileText,
  MessageSquare,
} from "lucide-react";

export default function ContactForm() {
  const { t, isRtl } = useLanguage();
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res?.ok) throw new Error("Failed");
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-white/[0.06] border border-brand-gold/15 rounded-2xl px-5 py-4 text-brand-cream text-sm placeholder:text-brand-cream/30 focus:outline-none focus:border-brand-gold/40 focus:ring-2 focus:ring-brand-gold/10 transition-all duration-300";
  const labelClass =
    "text-brand-gold/80 text-xs tracking-[0.15em] uppercase font-medium mb-2 block";

  if (status === "success") {
    return (
      <div className="text-center py-14 animate-scale-in">
        <div className="w-18 h-18 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={36} className="text-green-400" />
        </div>
        <h3 className="font-serif text-2xl text-brand-cream mb-3">
          {isRtl ? "تم الإرسال!" : "Message Sent!"}
        </h3>
        <p className="text-brand-cream/60 text-sm max-w-sm mx-auto">
          {t?.contact?.success ??
            "Thank you for reaching out. We will get back to you soon."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>{t?.contact?.name ?? "Name"}</label>
          <div className="relative">
            <User
              size={16}
              className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? "right-5" : "left-5"} text-brand-gold/50`}
            />
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e?.target?.value ?? "" })
              }
              placeholder={t?.contact?.namePlaceholder ?? "Your name"}
              className={`${inputClass} ${isRtl ? "pr-12" : "pl-12"}`}
            />
          </div>
        </div>
        <div>
          <label className={labelClass}>{t?.contact?.email ?? "Email"}</label>
          <div className="relative">
            <Mail
              size={16}
              className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? "right-5" : "left-5"} text-brand-gold/50`}
            />
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e?.target?.value ?? "" })
              }
              placeholder={t?.contact?.emailPlaceholder ?? "Your email"}
              className={`${inputClass} ${isRtl ? "pr-12" : "pl-12"}`}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>{t?.contact?.phone ?? "Phone"}</label>
          <div className="relative">
            <Phone
              size={16}
              className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? "right-5" : "left-5"} text-brand-gold/50`}
            />
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e?.target?.value ?? "" })
              }
              placeholder={t?.contact?.phonePlaceholder ?? "Your phone"}
              className={`${inputClass} ${isRtl ? "pr-12" : "pl-12"}`}
            />
          </div>
        </div>
        <div>
          <label className={labelClass}>
            {t?.contact?.subject ?? "Subject"}
          </label>
          <div className="relative">
            <FileText
              size={16}
              className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? "right-5" : "left-5"} text-brand-gold/50`}
            />
            <input
              type="text"
              required
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e?.target?.value ?? "" })
              }
              placeholder={t?.contact?.subjectPlaceholder ?? "Subject"}
              className={`${inputClass} ${isRtl ? "pr-12" : "pl-12"}`}
            />
          </div>
        </div>
      </div>

      <div>
        <label className={labelClass}>{t?.contact?.message ?? "Message"}</label>
        <div className="relative">
          <MessageSquare
            size={16}
            className={`absolute top-[18px] ${isRtl ? "right-5" : "left-5"} text-brand-gold/50`}
          />
          <textarea
            required
            rows={5}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e?.target?.value ?? "" })
            }
            placeholder={t?.contact?.messagePlaceholder ?? "Your message..."}
            className={`${inputClass} resize-none ${isRtl ? "pr-12" : "pl-12"}`}
          />
        </div>
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 px-5 py-3.5 rounded-2xl border border-red-500/20 animate-scale-in">
          <AlertCircle size={16} />
          {t?.contact?.error ?? "Something went wrong. Please try again."}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="group w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-gold-mid hover:from-brand-gold-mid hover:to-brand-gold-dark text-white rounded-full transition-all duration-300 text-sm tracking-[0.12em] uppercase font-medium shadow-[0_8px_32px_rgba(212,165,116,0.35)] hover:shadow-[0_16px_48px_rgba(212,165,116,0.5)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-none hover:-translate-y-1.5"
      >
        {status === "sending" ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            {t?.contact?.sending ?? "Sending..."}
          </>
        ) : (
          <>
            {t?.contact?.send ?? "Send Message"}
            <Send
              size={15}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
            />
          </>
        )}
      </button>
    </form>
  );
}
