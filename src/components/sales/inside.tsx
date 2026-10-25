import dash from "@/assets/shot-dashboard.jpg";
import cron from "@/assets/shot-cronograma.jpg";
import med from "@/assets/shot-medicao.jpg";
import context from "@/assets/planilha-context.jpg";
import { Cta, Container, SectionHead } from "./bits";
import { BUYERS, INCLUDES, PROFESSIONALS } from "./data";

type Tile = { src: string; alt: string; caption: string; sub: string; wide?: boolean };

const TILES: Tile[] = [
  {
    src: dash,
    alt: "Dashboard de orçamento da obra com receitas, despesas e gráficos",
    caption: "Dashboard e cronograma da obra",
    sub: "receitas, despesas e gráficos automáticos",
    wide: true,
  },
  {
    src: cron,
    alt: "Cronograma da obra por especialidade",
    caption: "Cronograma por especialidade",
    sub: "cada etapa com datas claras",
  },
  {
    src: med,
    alt: "Medição e avanço de obra por especialidade",
    caption: "Medição e gestão executiva da obra",
    sub: "avanço e valores executados",
  },
];

export function Inside() {
  return (
    <section className="py-10 sm:py-16 md:py-24">
      <Container>
        <SectionHead
          eyebrow="Veja por dentro"
          title={
            <>
              É <span className="font-serif italic">assim</span> que funciona.
            </>
          }
        />
        <div className="mt-6 sm:mt-10 grid gap-3 sm:gap-4 md:grid-cols-3">
          {TILES.map((tile) => (
            <figure
              key={tile.caption}
              className={`card-note overflow-hidden p-0 ${tile.wide ? "md:col-span-2" : ""}`}
            >
              <img
                src={tile.src}
                alt={tile.alt}
                loading="lazy"
                width={1280}
                height={800}
                className="w-full object-cover max-h-[300px] sm:max-h-none"
              />
              <figcaption className="border-t border-border p-3 sm:p-4">
                <p className="text-xs sm:text-sm font-semibold">{tile.caption}</p>
                <p className="mt-0.5 text-[11px] sm:text-xs text-stone">{tile.sub}</p>
              </figcaption>
            </figure>
          ))}
          <div className="flex flex-col justify-center gap-2.5 sm:gap-3 rounded-xl bg-midnight p-5 sm:p-6 text-on-midnight">
            <p className="font-semibold text-sm sm:text-base">📱 Feita para usar no telemóvel</p>
            <ul className="space-y-1.5 text-xs sm:text-sm text-on-midnight/80">
              <li>✓ Excel para Android e iPhone</li>
              <li>✓ Google Sheets (100% gratuito)</li>
              <li>✓ LibreOffice e WPS Office</li>
              <li>✓ 100% offline — sem precisar de rede no canteiro</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function Includes() {
  return (
    <section id="inclui" className="scroll-mt-20 py-10 sm:py-16 md:py-24">
      <Container>
        <div className="rounded-xl bg-marigold p-5 sm:p-8 md:p-12">
          <SectionHead
            eyebrow="O que recebes"
            title={
              <>
                Tudo pronto. Sem <span className="font-serif italic">complicação</span>.
              </>
            }
            className="max-w-[640px]"
          />
          <ul className="mt-6 sm:mt-10 grid gap-x-10 gap-y-3 sm:gap-y-4 md:grid-cols-2">
            {INCLUDES.map((item) => (
              <li key={item} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm font-medium text-ink/90">
                <span className="mt-0.5 flex size-4 sm:size-5 shrink-0 items-center justify-center rounded-full bg-card text-[9px] sm:text-[10px] font-bold text-marigold">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 sm:mt-10">
            <Cta href="#planos" size="lg" className="w-full sm:w-auto py-3.5 text-center font-bold">
              ver os planos
            </Cta>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function Professionals() {
  return (
    <section className="py-10 sm:py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-6 sm:gap-10 md:grid-cols-2">
          <div>
            <SectionHead
              eyebrow="Para 5 tipos de profissionais"
              title="Feita para quem constrói."
              sub="Do primeiro orçamento à medição final — quem está no canteiro usa a planilha todos os dias no telemóvel."
            />
            <div className="mt-5 sm:mt-8 flex flex-wrap gap-2">
              {PROFESSIONALS.map((pro) => (
                <span
                  key={pro}
                  className="rounded-full border border-border bg-card px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium"
                >
                  {pro}
                </span>
              ))}
            </div>
          </div>
          <img
            src={context}
            alt="Mestre de obras a usar a planilha no telemóvel, na obra"
            loading="lazy"
            width={1280}
            height={1024}
            className="w-full rounded-xl object-cover max-h-[380px]"
          />
        </div>
      </Container>
    </section>
  );
}

export function SalesFeed() {
  return (
    <section className="py-10 sm:py-16 md:py-24">
      <Container className="max-w-[820px]">
        <div className="card-note p-4 sm:p-6 md:p-8">
          <p className="text-eyebrow font-semibold uppercase text-stone">
            Vendas confirmadas
          </p>
          <h2 className="mt-2 sm:mt-3 text-lg sm:text-heading-sm font-semibold md:text-heading">
            8 planilhas vendidas nas últimas 48 horas.
          </h2>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-stone">
            pagamentos confirmados · entrega imediata no telemóvel
          </p>
          <ul className="mt-4 sm:mt-6 divide-y divide-border">
            {BUYERS.map((buyer) => (
              <li key={buyer.name} className="flex items-center gap-2.5 sm:gap-3 py-2.5 sm:py-3">
                <span
                  className={`flex size-8 sm:size-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${buyer.avatar}`}
                >
                  {buyer.initials}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs sm:text-sm font-semibold">{buyer.name}</p>
                  <p className="truncate text-[10px] sm:text-xs text-stone">
                    {buyer.city} · {buyer.when} · Planilha de Obra
                  </p>
                </div>
                <span className="rounded-full bg-secondary px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs font-semibold text-signal shrink-0">
                  pago ✓
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
