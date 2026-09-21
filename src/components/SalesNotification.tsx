import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, X } from "lucide-react";

interface SaleEvent {
  name: string;
  city: string;
  state: string;
  offer: string;
  timeAgo: string;
}

const SALES_DATA: SaleEvent[] = [
  { name: "Mariana S.", city: "São Paulo", state: "SP", offer: "Oferta Completa", timeAgo: "há 2 min" },
  { name: "Rodrigo M.", city: "Florianópolis", state: "SC", offer: "Oferta Completa", timeAgo: "há 45s" },
  { name: "Camila F.", city: "Rio de Janeiro", state: "RJ", offer: "Oferta Básica", timeAgo: "há 4 min" },
  { name: "Lucas P.", city: "Curitiba", state: "PR", offer: "Oferta Completa", timeAgo: "há 1 min" },
  { name: "Juliana R.", city: "Belo Horizonte", state: "MG", offer: "Oferta Completa", timeAgo: "há 3 min" },
  { name: "Felipe A.", city: "Santos", state: "SP", offer: "Oferta Completa", timeAgo: "há 30s" },
  { name: "Beatriz C.", city: "Campinas", state: "SP", offer: "Oferta Básica", timeAgo: "há 5 min" },
  { name: "Thiago L.", city: "Baln. Camboriú", state: "SC", offer: "Oferta Completa", timeAgo: "há 2 min" },
  { name: "Larissa N.", city: "Vitória", state: "ES", offer: "Oferta Completa", timeAgo: "há 1 min" },
  { name: "Gabriel B.", city: "Porto Alegre", state: "RS", offer: "Oferta Completa", timeAgo: "há 40s" },
  { name: "Fernanda T.", city: "Brasília", state: "DF", offer: "Oferta Básica", timeAgo: "há 6 min" },
  { name: "Matheus O.", city: "Goiânia", state: "GO", offer: "Oferta Completa", timeAgo: "há 2 min" },
];

export function SalesNotification() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2500);

    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    if (!isVisible || isPaused) return;

    // Visible for 4.5 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 4500);

    return () => clearTimeout(hideTimer);
  }, [isVisible, isPaused, currentIndex]);

  useEffect(() => {
    if (isVisible) return;

    // Interval between notifications
    const nextTimer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % SALES_DATA.length);
      setIsVisible(true);
    }, 6000);

    return () => clearTimeout(nextTimer);
  }, [isVisible]);

  const currentSale = SALES_DATA[currentIndex];

  return (
    <div
      className="pointer-events-none fixed top-3 right-3 z-50 flex max-w-[320px] flex-col items-end sm:top-4 sm:right-4"
      aria-live="polite"
    >
      <AnimatePresence>
        {isVisible && currentSale && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96, transition: { duration: 0.2 } }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="pointer-events-auto relative flex items-center gap-2.5 rounded-lg border border-border/80 bg-card/95 px-3 py-2 text-xs shadow-lg backdrop-blur-md"
          >
            {/* Small verified check circle */}
            <div className="grid size-6 shrink-0 place-items-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
              <Check className="size-3.5" strokeWidth={3} />
            </div>

            {/* Essential concise content */}
            <div className="min-w-0 pr-4 leading-tight">
              <div className="flex items-center gap-1 truncate text-foreground font-semibold">
                <span>{currentSale.name}</span>
                <span className="text-muted-foreground font-normal">({currentSale.city}, {currentSale.state})</span>
              </div>
              <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <span className="font-bold text-primary">{currentSale.offer}</span>
                <span>•</span>
                <span>{currentSale.timeAgo}</span>
              </div>
            </div>

            {/* Dismiss button */}
            <button
              type="button"
              onClick={() => setIsVisible(false)}
              className="absolute top-1.5 right-1.5 rounded p-0.5 text-muted-foreground/60 transition-colors hover:text-foreground"
              aria-label="Fechar notificação"
            >
              <X className="size-3" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
