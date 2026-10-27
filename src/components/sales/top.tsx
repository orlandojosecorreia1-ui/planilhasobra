import mockup from "@/assets/mockup-devices.png";
import { Cta, Container, SectionHead } from "./bits";
import { CHECKOUT_FOUNDACAO, HERO_CHECKS, STATS } from "./data";
import { useScarcityCountdown } from "./offer";

const HERO_MARKS = [
  { emoji: "👷", border: "border-signal" },
  { emoji: "🏗️", border: "border-coral" },
  { emoji: "📐", border: "border-marigold" },
  { emoji: "🧱", border: "border-sky-wash" },
  { emoji: "📋", border: "border-mocha" },
];

export function SalesNav() {
  const left = useScarcityCountdown();
  const m = Math.floor(left / 60).toString().padStart(2, "0");
  const s = (left % 60).toString().padStart(2, "0");
  const countdown = `${m}:${s}`;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 shadow-nav backdrop-blur">
      {/* Faixa superior de escassez no navbar */}
      <div className="border-b border-border/50 bg-coral/10 py-1 px-3 text-center">
        <Container className="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs font-medium text-coral">
          <span className="flex size-1.5 rounded-full bg-coral animate-pulse shrink-0" />
          <span>Oferta termina em</span>
          <span className="rounded bg-coral px-1.5 py-0.5 font-mono text-[11px] sm:text-xs font-bold text-white tabular-nums">
            {countdown}
          </span>
          <span className="hidden sm:inline text-stone">· Garanta o preço promocional</span>
        </Container>
      </div>

      <Container className="flex h-13 sm:h-16 items-center justify-between gap-2">
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <span className="flex size-7 sm:size-8 items-center justify-center rounded-lg bg-marigold text-sm sm:text-base">
            🧱
          </span>
          <span className="text-xs sm:text-sm font-semibold truncate max-w-[160px] xs:max-w-none">
            Planilha de Obras
          </span>
        </a>

        <div className="flex items-center gap-2 shrink-0">
          <Cta href="#planos" variant="ghost" size="sm" className="hidden sm:inline-flex">
            Ver os planos
          </Cta>
          <Cta href={CHECKOUT_FOUNDACAO} size="sm" className="text-xs px-2.5 py-1.5 sm:text-sm sm:px-4 sm:py-2">
            Comprar agora
          </Cta>
        </div>
      </Container>
    </header>
  );
}

export function Hero() {
  const left = useScarcityCountdown();
  const m = Math.floor(left / 60).toString().padStart(2, "0");
  const s = (left % 60).toString().padStart(2, "0");
  const countdown = `${m}:${s}`;

  return (
    <section id="top" className="pb-12 pt-8 sm:pb-20 sm:pt-14 md:pb-28 md:pt-20">
      <Container className="flex flex-col items-center text-center">
        <div className="flex items-center gap-2 sm:gap-3" aria-hidden="true">
          {HERO_MARKS.map((mark) => (
            <span
              key={mark.emoji}
              className={`flex size-8 sm:size-11 items-center justify-center rounded-full border-2 bg-card text-sm sm:text-lg ${mark.border}`}
            >
              {mark.emoji}
            </span>
          ))}
        </div>

        <div className="mt-5 sm:mt-8 inline-flex max-w-[95vw] items-center gap-1.5 sm:gap-2 rounded-full border border-coral/30 bg-card px-3 py-1 sm:px-4 sm:py-1.5 text-xs font-medium shadow-sm">
          <span className="flex size-2 rounded-full bg-coral animate-pulse shrink-0" />
          <span className="truncate">🔥 Promoção termina em:</span>
          <span className="rounded bg-coral px-1.5 py-0.5 font-mono text-xs font-bold text-white tabular-nums shrink-0">
            {countdown}
          </span>
          <span className="text-stone hidden xs:inline">· 4.997 Kz</span>
        </div>

        <h1 className="mt-5 sm:mt-6 max-w-[900px] text-2xl xs:text-3xl sm:text-4xl md:text-display font-semibold leading-tight text-balance">
          Cada saco de cimento, cada kwanza, sob{" "}
          <span className="inline-block rounded-full bg-peach px-3 py-0.5 sm:px-6 sm:py-1.5 text-foreground">
            controlo
          </span>
          .
        </h1>

        <p className="mt-4 sm:mt-6 max-w-[640px] font-serif text-base sm:text-lg leading-relaxed text-graphite">
          A planilha usada por engenheiros e mestres de obras em Angola para orçar do
          alicerce ao acabamento. Funciona 100% offline no telemóvel (Android/iPhone) e no PC.
        </p>

        <ul className="mt-5 sm:mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 sm:gap-x-6 sm:gap-y-2 text-xs sm:text-sm font-medium text-foreground/90">
          {HERO_CHECKS.map((check) => (
            <li key={check} className="flex items-center gap-1">
              <span className="text-signal">✓</span> {check}
            </li>
          ))}
        </ul>

        <div className="mt-6 sm:mt-8 flex w-full max-w-xs sm:max-w-none sm:w-auto flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
          <Cta href={CHECKOUT_FOUNDACAO} size="lg" className="w-full sm:w-auto py-3.5 sm:py-4 text-center font-bold shadow-md active:scale-95">
            Quero a minha planilha agora
          </Cta>
          <Cta href="#inclui" variant="ghost" size="lg" className="w-full sm:w-auto text-center">
            Ver o que inclui →
          </Cta>
        </div>

        <p className="mt-3 sm:mt-4 text-[11px] sm:text-xs text-stone">
          Entrega imediata · A partir de 4.997 Kz · Vitalício
        </p>

        <div className="mt-8 sm:mt-14 w-full max-w-[720px]">
          <img
            src={mockup}
            alt="Planilha de orçamento de obra aberta no computador e no telemóvel"
            className="w-full rounded-xl shadow-mockup"
            width={523}
            height={425}
          />
        </div>
      </Container>
    </section>
  );
}

export function Stats() {
  return (
    <section className="py-10 sm:py-16 md:py-24">
      <Container>
        <SectionHead
          eyebrow="Provas em número"
          title={
            <>
              Um pequeno investimento que evita{" "}
              <span className="font-serif italic">grandes prejuízos</span>.
            </>
          }
        />
        <div className="mt-6 sm:mt-10 grid gap-3 sm:gap-4 md:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.value} className="card-note p-4 sm:p-6">
              <p className="text-xl sm:text-heading font-semibold">
                <span className="mr-2 text-stone">↗</span>
                {stat.value}
              </p>
              <p className="mt-2 sm:mt-3 text-sm font-medium">{stat.label}</p>
              <p className="mt-1 text-xs sm:text-sm text-stone">{stat.sub}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
