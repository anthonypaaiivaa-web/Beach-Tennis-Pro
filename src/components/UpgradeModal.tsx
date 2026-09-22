import React, { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Flame, LockKeyhole, ShieldCheck, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  upgradeCheckoutUrl: string;
  essentialCheckoutUrl: string;
}

export function UpgradeModal({
  isOpen,
  onClose,
  upgradeCheckoutUrl,
  essentialCheckoutUrl,
}: UpgradeModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="upgrade-modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ type: "spring", duration: 0.35, bounce: 0.15 }}
            className="relative z-10 w-full max-w-lg rounded-2xl border-2 border-primary/40 bg-card p-6 sm:p-8 text-card-foreground shadow-2xl overflow-hidden"
          >
            {/* Close button */}
            <button
              id="close-upgrade-modal"
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Fechar"
            >
              <X className="size-5" />
            </button>

            {/* Top alert badge */}
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3.5 py-1 text-xs font-black uppercase text-primary tracking-wide">
                <Flame className="size-3.5" />
                Oportunidade Única
              </span>
            </div>

            {/* Modal Heading */}
            <div className="mt-4 text-center">
              <h3 className="font-display text-xl sm:text-2xl font-black uppercase leading-tight text-foreground">
                Leve o pacote completo por{" "}
                <span className="text-primary">R$ 5,90</span>
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground">
                Desbloqueie todos os bônus por apenas mais <strong className="text-foreground">R$ 3,00</strong>:
              </p>
            </div>

            {/* Included bonuses list */}
            <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-3.5 sm:p-4">
              <ul className="space-y-2 text-xs sm:text-sm font-semibold text-foreground">
                <li className="flex items-center gap-2.5">
                  <div className="grid size-4 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-2.5" strokeWidth={3} />
                  </div>
                  <span>500 Treinos de Beach Tennis</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="grid size-4 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-2.5" strokeWidth={3} />
                  </div>
                  <span>+20 Vídeo Aulas de Beach Tennis</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="grid size-4 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-2.5" strokeWidth={3} />
                  </div>
                  <span>227 Exercícios de Musculação</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="grid size-4 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-2.5" strokeWidth={3} />
                  </div>
                  <span>Planilha de Treino</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="grid size-4 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-2.5" strokeWidth={3} />
                  </div>
                  <span>15 Drills para Beach Tennis</span>
                </li>
              </ul>
            </div>

            {/* Price compare block */}
            <div className="mt-4 text-center">
              <p className="text-xs text-muted-foreground">
                De <span className="line-through">R$ 9,90</span> por apenas:
              </p>
              <p className="font-display text-3xl sm:text-4xl font-black text-primary">
                R$ 5,90
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-5 flex flex-col gap-2.5">
              <Button
                id="accept-upgrade-button"
                asChild
                className="h-auto min-h-12 w-full whitespace-normal px-4 py-3 text-center text-xs sm:text-sm font-black uppercase shadow-cta cursor-pointer"
              >
                <a href={upgradeCheckoutUrl}>
                  Quero o pacote completo por R$ 5,90
                </a>
              </Button>

              <a
                id="decline-upgrade-link"
                href={essentialCheckoutUrl}
                className="text-center text-xs text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors py-1"
              >
                Não, prefiro somente os 500 treinos por R$ 2,90
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-5 flex items-center justify-center gap-4 text-[11px] text-muted-foreground pt-3 border-t border-border/60">
              <span className="flex items-center gap-1">
                <LockKeyhole className="size-3 text-primary" /> Compra segura
              </span>
              <span className="flex items-center gap-1">
                <Zap className="size-3 text-primary" /> Acesso imediato
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="size-3 text-primary" /> 7 dias de garantia
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
