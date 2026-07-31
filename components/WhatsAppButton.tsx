"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export default function WhatsAppButton({
  phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918929490433",
  defaultMessage = "Hello Deep Tech Solutions! I'm visiting deeptechsolutions.online and would like to learn more about your web design & lead generation services.",
}: WhatsAppButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Strip non-numeric characters for wa.me URL
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <div className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3">
      {/* Tooltip Badge */}
      <motion.div
        initial={{ opacity: 0, x: 10, scale: 0.95 }}
        animate={
          isHovered
            ? { opacity: 1, x: 0, scale: 1 }
            : { opacity: 0, x: 10, scale: 0.95 }
        }
        transition={{ duration: 0.2 }}
        className="pointer-events-none hidden sm:flex items-center gap-2 rounded-xl bg-[#1E2022]/95 px-3.5 py-2 text-xs font-medium text-white shadow-xl border border-white/10 backdrop-blur-md"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
        </span>
        Chat with us on WhatsApp
      </motion.div>

      {/* Main Floating Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat on WhatsApp"
        id="floating-whatsapp-btn"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 hover:bg-[#20bd5a] hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)] active:scale-95"
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        {/* Glow / Pulse effect around button */}
        <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-30 blur-md transition-opacity group-hover:opacity-60" />

        {/* Official WhatsApp SVG Icon */}
        <svg
          className="h-7 w-7 fill-current transition-transform duration-300 group-hover:scale-110"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </motion.a>
    </div>
  );
}
