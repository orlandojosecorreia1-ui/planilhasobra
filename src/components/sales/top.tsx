import mockup from "@/assets/planilha-mockup.png";
import { Cta, Container, SectionHead } from "./bits";
import { CHECKOUT_FOUNDACAO, HERO_CHECKS, STATS } from "./data";

const HERO_MARKS = [
  { emoji: "👷", border: "border-signal" },
  { emoji: "🏗️", border: "border-coral" },
  { emoji: "📐", border: "border-marigold" },
  { emoji: "🧱", border: "border-sky-wash" },
  { emoji: "📋", border: "border-mocha" },
];

export function SalesNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/90 shadow-nav backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-lg bg-marigold text-base">
            🧱
          </span>
          <span className="text-sm font-semibold">Planilha de Obras</span>
        </a>
        <div className="flex items-center gap-2">
          <Cta href="#planos" variant="ghost" size="sm" className="hidden sm:inline-flex">
            ver os planos
          </Cta>
          <Cta href={CHECKOUT_FOUNDACAO} size="sm">
            quero a minha planilha
          </Cta>
        </div>
      </Container>
    </header>
  );
}

export function Hero() {
  return (
    <section id="top" className="pb-20 pt-14 md:pb-28 md:pt-20">
      <Container className="flex flex-col items-center text-center">
        <div className="flex items-center gap-3" aria-hidden="true">
          {HERO_MARKS.map((mark) => (
            <span
              key={mark.emoji}
              className={`flex size-11 items-center justify-center rounded-full border-2 bg-card text-lg ${mark.border}`}
            >
              {mark.emoji}
            </span>
          ))}
        </div>

        <span className="mt-8 inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-graphite">
          🔥 Oferta relâmpago · a partir de{" "}
          <strong className="font-semibold text-foreground">4.997 Kz</strong>
        </span>

        <h1 className="mt-6 max-w-[900px] text-heading font-semibold text-balance md:text-display">
          Cada saco de cimento, cada kwanza, sob{" "}
          <span className="inline-block rounded-full bg-peach px-6 py-1.5 text-foreground">
            controlo
          </span>
          .
        </h1>

        <p className="mt-6 max-w-[640px] font-serif text-lg leading-relaxed text-graphite">
          A planilha usada por engenheiros e mestres de obras em Angola para orçar do
          alicerce ao acabamento. Excel e Google Sheets · funciona offline no telemóvel
          e no PC.
        </p>

        <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-foreground/90">
          {HERO_CHECKS.map((check) => (
            <li key={check}>{check}</li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Cta href={CHECKOUT_FOUNDACAO} size="lg">
            quero a minha planilha agora
          </Cta>
          <Cta href="#inclui" variant="ghost" size="lg">
            ver o que inclui →
          </Cta>
        </div>

        <p className="mt-4 text-xs text-stone">
          Entrega imediata · a partir de 4.997 Kz · vitalício
        </p>

        <div className="relative mt-14 w-full max-w-[980px]">
          <span className="absolute right-4 top-4 z-10 rounded-full bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-mockup md:right-6 md:top-6">
            ✓ pronto para usar
          </span>
          <img
            src={mockup}
            alt="Planilha de orçamento de obra aberta no computador e no telemóvel"
            className="w-full rounded-xl shadow-mockup"
            width={1920}
            height={1080}
          />
          <span className="absolute bottom-4 left-4 rounded-full bg-marigold px-3 py-1.5 text-xs font-semibold text-ink md:bottom-6 md:left-6">
            abre no telefone mesmo sem net
          </span>
        </div>
      </Container>
    </section>
  );
}

export function Stats() {
  return (
    <section className="py-16 md:py-24">
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
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.value} className="card-note p-6">
              <p className="text-heading font-semibold">
                <span className="mr-2 text-stone">↗</span>
                {stat.value}
              </p>
              <p className="mt-3 text-sm font-medium">{stat.label}</p>
              <p className="mt-1 text-sm text-stone">{stat.sub}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
