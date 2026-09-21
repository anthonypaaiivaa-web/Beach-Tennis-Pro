import React, { useState } from "react";
import {
  ArrowRight,
  Brain,
  Check,
  ChevronRight,
  CircleCheck,
  Dumbbell,
  Footprints,
  Gauge,
  LockKeyhole,
  ShieldCheck,
  Smartphone,
  Target,
  Trophy,
  Zap,
  Star,
} from "lucide-react";

import productMockup from "@/assets/capa-beach-tennis-pro.png";
import avatarCamila from "@/assets/prova-social-ana.jpg";
import avatarRafael from "@/assets/prova-social-jogador.jpg";
import avatarMariana from "@/assets/istockphoto-1706398106-612x612.jpg";
import { SalesNotification } from "@/components/SalesNotification";
import { UpgradeModal } from "@/components/UpgradeModal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const CHECKOUT_ESSENCIAL = "https://pay.lowify.com.br/checkout?product_id=CbRinF";
const CHECKOUT_COMPLETO = "https://pay.lowify.com.br/checkout?product_id=ISgAEY";
const CHECKOUT_UPGRADE = "https://pay.lowify.com.br/checkout?product_id=GioFDd";

const exercises = [
  { icon: Gauge, title: "Técnica e controle", text: "Domine os fundamentos e ganhe consistência em cada golpe." },
  { icon: Footprints, title: "Agilidade e movimentação", text: "Mova-se melhor na areia e chegue preparado em cada bola." },
  { icon: Dumbbell, title: "Evolução física", text: "Desenvolva as capacidades necessárias para render mais em quadra." },
  { icon: Target, title: "Precisão", text: "Treine direção, profundidade e controle para jogar com confiança." },
  { icon: Trophy, title: "Situações reais de jogo", text: "Pratique cenários que você encontra em partidas e treinos." },
  { icon: Brain, title: "Estratégia e decisão", text: "Leia o jogo e escolha a melhor resposta em cada momento." },
];

const bonuses = [
  {
    number: "01",
    icon: Smartphone,
    title: "+20 Vídeo Aulas de Beach Tennis",
    text: "Conteúdos em vídeo para complementar os exercícios e facilitar o aprendizado e a execução dos movimentos.",
  },
  {
    number: "02",
    icon: Dumbbell,
    title: "227 Exercícios de Musculação para Beach Tennis",
    text: "Exercícios voltados à preparação física para desenvolver capacidades importantes para a prática do Beach Tennis.",
  },
  {
    number: "03",
    icon: CircleCheck,
    title: "Planilha de Treino para Beach Tennis",
    text: "Uma forma simples e organizada de estruturar os treinos e acompanhar a rotina de evolução.",
  },
];

const faqs = [
  ["O Beach Tennis Pro é para iniciantes?", "Sim. O material possui exercícios que podem ser utilizados desde níveis mais básicos até treinos mais avançados."],
  ["Como vou receber o material?", "Após a confirmação do pagamento, você receberá as instruções para acessar o conteúdo digital."],
  ["O produto é físico?", "Não. O Beach Tennis Pro é um produto 100% digital."],
  ["Os bônus estão inclusos nas duas ofertas?", "Não. As +20 Vídeo Aulas, os 227 Exercícios de Musculação e a Planilha de Treino estão disponíveis na oferta completa de R$ 9,90."],
  ["Posso acessar pelo celular?", "Sim. O conteúdo poderá ser acessado em dispositivos compatíveis com os formatos disponibilizados."],
  ["Existe garantia?", "Sim. A compra possui garantia de 7 dias."],
];

const testimonials = [
  {
    name: "Camila",
    avatar: avatarCamila,
    text: "Uso nas minhas aulas e sempre encontro treinos diferentes para os alunos.",
  },
  {
    name: "Rafael",
    avatar: avatarRafael,
    text: "Material muito completo. Tem treino para praticamente tudo no Beach Tennis.",
  },
  {
    name: "Mariana",
    avatar: avatarMariana,
    text: "Agora ficou muito mais fácil saber o que treinar. Tem muita variedade!",
  },
];

function ScrollCta({ children }: { children: React.ReactNode }) {
  return (
    <Button asChild size="lg" className="h-auto min-h-14 w-full max-w-lg whitespace-normal px-5 py-4 text-center text-sm font-extrabold uppercase tracking-normal shadow-cta sm:text-base">
      <a href="#ofertas">
        {children}
        <ArrowRight aria-hidden="true" />
      </a>
    </Button>
  );
}

export default function App() {
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <SalesNotification />
      <UpgradeModal
        isOpen={isUpgradeModalOpen}
        onClose={() => setIsUpgradeModalOpen(false)}
        upgradeCheckoutUrl={CHECKOUT_UPGRADE}
        essentialCheckoutUrl={CHECKOUT_ESSENCIAL}
      />

      <div className="bg-primary px-4 py-2.5 text-center text-xs font-extrabold uppercase text-primary-foreground sm:text-sm">
        Oferta somente até hoje
      </div>

      <section className="relative bg-background py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black uppercase leading-tight text-foreground">
            500 treinos de Beach Tennis <span className="text-primary">para evoluir seu jogo</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Treinos práticos para desenvolver técnica, movimentação e controle de jogo — do básico ao avançado.
          </p>

          <div className="relative mx-auto mt-10 w-full max-w-lg">
            <div className="absolute -inset-3 rotate-2 rounded-lg border border-primary/20 bg-primary/5" aria-hidden="true" />
            <img src={productMockup} alt="Beach Tennis Pro — 500 Treinos em formato digital" width={1254} height={1254} className="relative aspect-square w-full rounded-lg object-cover shadow-2xl" />
          </div>

          <div className="mt-8 flex justify-center">
            <ScrollCta>Quero começar agora</ScrollCta>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-title mt-0">O que você vai receber</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {exercises.map(({ icon: Icon, title, text }, index) => (
              <article key={title} className="exercise-card group flex flex-col items-center text-center">
                <div className="flex w-full items-start justify-between gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground shadow-sm"><Icon className="size-5" aria-hidden="true" /></span>
                  <span className="font-display text-3xl font-black text-border">0{index + 1}</span>
                </div>
                <h3 className="mt-6 text-lg font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sport px-5 py-20 text-sport-foreground sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-black uppercase leading-tight text-sport-foreground sm:text-5xl">
              Bônus exclusivos
            </h2>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {bonuses.map(({ number, icon: Icon, title, text }) => (
              <article key={number} className="bonus-card text-center">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase text-primary">Bônus {number}</span>
                  <Icon className="size-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-extrabold leading-tight">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-sport-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ofertas" className="scroll-mt-4 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-black uppercase leading-tight text-primary sm:text-5xl">
              Escolha sua oferta
            </h2>
          </div>
          <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
            <article className="price-card text-center">
              <p className="text-xs font-extrabold uppercase text-muted-foreground">Oferta essencial</p>
              <h3 className="mt-3 font-display text-2xl font-black uppercase">Beach Tennis Pro</h3>
              <ul className="mx-auto mt-7 max-w-xs space-y-3 text-left text-sm">
                {["500 Treinos de Beach Tennis", "Material digital", "Acesso imediato"].map((item) => <li key={item} className="flex gap-3"><Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" /><span>{item}</span></li>)}
              </ul>
              <div className="mt-auto pt-10 text-center">
                <p className="text-sm text-muted-foreground">Por apenas:</p>
                <p className="font-display text-5xl font-black text-foreground">R$ 2,90</p>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsUpgradeModalOpen(true)}
                  className="mt-6 h-auto min-h-14 w-full whitespace-normal px-4 py-3 text-center text-xs font-extrabold uppercase cursor-pointer hover:border-primary hover:text-primary transition-all"
                >
                  <span>Quero somente os 500 treinos</span>
                  <ChevronRight aria-hidden="true" />
                </Button>
              </div>
            </article>

            <article className="price-card featured-price-card text-center">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary px-4 py-2 text-[11px] font-black uppercase text-primary-foreground shadow-cta">Mais completo</div>
              <p className="text-xs font-extrabold uppercase text-primary">Oferta completa — mais vantajosa</p>
              <h3 className="mt-3 font-display text-2xl font-black uppercase">Beach Tennis Pro + Bônus</h3>
              <ul className="mx-auto mt-7 max-w-sm space-y-3 text-left text-sm">
                {["500 Treinos de Beach Tennis", "+20 Vídeo Aulas de Beach Tennis", "227 Exercícios de Musculação para Beach Tennis", "Planilha de Treino para Beach Tennis", "Material digital", "Acesso imediato"].map((item) => <li key={item} className="flex gap-3"><Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" /><span>{item}</span></li>)}
              </ul>
              <div className="mt-auto pt-10 text-center">
                <p className="text-sm text-muted-foreground">Tudo por apenas:</p>
                <p className="font-display text-6xl font-black text-primary">R$ 9,90</p>
                <Button asChild className="mt-6 h-auto min-h-14 w-full whitespace-normal px-4 py-3 text-center text-xs font-extrabold uppercase shadow-cta sm:text-sm animate-pulse-cta">
                  <a href={CHECKOUT_COMPLETO}>Quero o Beach Tennis Pro + Bônus <ArrowRight aria-hidden="true" /></a>
                </Button>
              </div>
            </article>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><LockKeyhole className="size-3.5" /> Compra segura</span>
            <span className="flex items-center gap-1.5"><Zap className="size-3.5" /> Acesso imediato</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="size-3.5" /> 7 dias de garantia</span>
          </div>
        </div>
      </section>

      <section className="bg-sport px-5 py-20 text-sport-foreground sm:px-8 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-xs font-extrabold uppercase tracking-wider text-primary">Provas Sociais</p>
            <h2 className="mt-2 font-display text-3xl font-black uppercase leading-tight text-sport-foreground sm:text-4xl">
              Quem usa e aprova
            </h2>
          </div>

          <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-black/20 p-6 sm:p-8 backdrop-blur-sm shadow-xl">
            {testimonials.map(({ name, avatar, text }, index) => (
              <article key={name} className={`flex items-start gap-4 ${index === 0 ? "pb-6" : index === testimonials.length - 1 ? "pt-6" : "py-6"}`}>
                <img
                  src={avatar}
                  alt={name}
                  className="size-12 rounded-full object-cover ring-2 ring-primary/40 shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-base sm:text-lg font-bold text-sport-foreground">{name}</h3>
                  <p className="mt-1 text-sm sm:text-base leading-relaxed text-sport-muted">
                    &ldquo;{text}&rdquo;
                  </p>
                  <div className="mt-3 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 fill-amber-400 text-amber-400"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto grid size-24 place-items-center rounded-full border-2 border-primary bg-background text-primary shadow-soft">
            <ShieldCheck className="size-12" strokeWidth={1.5} aria-hidden="true" />
          </div>
          <h2 className="mt-6 font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
            Garantia incondicional de 7 dias
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Acesse o material com tranquilidade. Se o conteúdo não atender às suas expectativas, você pode solicitar 100% de reembolso em até 7 dias.
          </p>
          <p className="mt-5 text-sm font-bold">Compra segura <span className="text-primary">•</span> Acesso imediato <span className="text-primary">•</span> Garantia de 7 dias</p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="section-title mt-0">Perguntas Frequentes</h2>
          </div>
          <Accordion type="single" collapsible className="mt-10 space-y-3">
            {faqs.map(([question, answer], index) => (
              <AccordionItem key={question} value={`faq-${index}`} className="rounded-md border bg-card px-5 shadow-soft">
                <AccordionTrigger className="py-5 text-left text-base font-bold hover:no-underline">{question}</AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="border-t bg-sport px-5 py-8 text-center text-xs text-sport-muted">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 text-center">
          <p className="font-display font-extrabold uppercase text-sport-foreground">Beach Tennis <span className="text-primary">Pro</span></p>
          <p className="leading-relaxed">
            @2026 Beach Tennis Pro<br />Todos os Direitos Reservados
          </p>
        </div>
      </footer>
    </main>
  );
}
