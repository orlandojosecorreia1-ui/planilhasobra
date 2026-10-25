import { useState } from "react";
import { Check, Download, FileSpreadsheet, Smartphone, Star } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Container } from "./bits";
import { SalesFooter } from "./close";

const DOWNLOAD_FILE = "/downloads/planilha-de-obras.xlsx";
const DOWNLOAD_NAME = "Planilha-de-Orcamento-de-Obra.xlsx";

const PASSOS = [
  {
    step: "1",
    emoji: "📲",
    title: "Toque no botão de download",
    sub: "o ficheiro começa a descarregar automaticamente no seu telemóvel.",
  },
  {
    step: "2",
    emoji: "📂",
    title: "Abra o Gestor de Ficheiros",
    sub: "a sua planilha já está disponível na pasta 'Downloads' / 'Transferências'.",
  },
  {
    step: "3",
    emoji: "📊",
    title: "Abra e comece a orçar",
    sub: "funciona no Excel Mobile, Google Sheets ou WPS Office — 100% offline.",
  },
];

const DECISAO = [
  {
    value: "0 Kz",
    label: "mensalidades",
    sub: "pagou uma única vez, o acesso é seu para sempre",
  },
  {
    value: "100%",
    label: "offline no telemóvel",
    sub: "funciona no canteiro em Angola mesmo sem rede de dados",
  },
  {
    value: "Hoje",
    label: "no seu aparelho",
    sub: "sem esperar dias — já tem a ferramenta nas suas mãos",
  },
];

const RAZOES = [
  {
    icon: "💰",
    title: "Recupera o valor na 1ª obra",
    sub:
      "Uma única economia de sacos de cimento ou ferro identificada na planilha já paga o investimento várias vezes. É o dinheiro mais bem gasto do seu ano.",
  },
  {
    icon: "🏆",
    title: "Autoridade e respeito em Angola",
    sub:
      "Apresente orçamentos limpos e detalhados aos seus clientes em Luanda, Benguela ou qualquer província. Quem apresenta números claros fecha contratos mais altos.",
  },
  {
    icon: "🔒",
    title: "Controlo absoluto dos seus kwanzas",
    sub:
      "Chega de perder dinheiro com compras a dobrar ou mão de obra sem controlo. Cada kwanza que entra e sai da obra fica registado.",
  },
  {
    icon: "📱",
    title: "Feita para o seu telemóvel",
    sub:
      "Não precisa de levar computador pesado para a poeira da obra. Abra no telefone, consulte preços, preencha no momento e tome decisões na hora.",
  },
];

export function ThanksNav() {
  return (
    <header className="border-b border-border bg-card">
      <Container className="flex h-14 sm:h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex size-7 sm:size-8 items-center justify-center rounded-lg bg-marigold text-sm sm:text-base">
            🧱
          </span>
          <span className="text-xs sm:text-sm font-semibold">Planilha de Obras · Angola</span>
        </div>
        <span className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-semibold text-signal">
          compra aprovada ✓
        </span>
      </Container>
    </header>
  );
}

export function ThanksPage() {
  const [downloaded, setDownloaded] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <ThanksNav />
      <main>
        {/* ── Hero de confirmação ── */}
        <section className="pb-8 pt-8 sm:pb-12 sm:pt-14 md:pt-20">
          <Container className="text-center">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-sky-tint px-3 py-1 sm:px-4 sm:py-1.5 text-xs font-semibold text-signal">
              ✅ Pagamento confirmado · Obrigado!
            </span>

            <h1 className="mx-auto mt-4 sm:mt-6 max-w-[720px] text-2xl xs:text-3xl sm:text-heading font-semibold text-balance md:text-heading-lg leading-tight">
              Receba agora a <span className="font-serif italic">sua planilha</span>
            </h1>

            <p className="mx-auto mt-3 sm:mt-4 max-w-[560px] font-serif text-base sm:text-lg leading-relaxed text-graphite px-2">
              A sua compra foi confirmada com sucesso. Toque no botão abaixo para descarregar
              a planilha diretamente para o seu telemóvel.
            </p>

            {/* ── Botão de download dedicado ao telemóvel ── */}
            <div className="mx-auto mt-6 sm:mt-8 flex w-full max-w-sm flex-col items-center gap-2.5 px-2">
              <a
                href={DOWNLOAD_FILE}
                download={DOWNLOAD_NAME}
                onClick={() => setDownloaded(true)}
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-primary px-5 py-4 sm:py-5 text-base sm:text-lg font-bold text-primary-foreground shadow-mockup transition-all duration-200 hover:bg-primary/90 active:scale-95"
              >
                <Download className="size-5 sm:size-6 shrink-0" aria-hidden="true" />
                Receber agora a minha planilha
              </a>
              <div className="flex items-center gap-2 text-[11px] sm:text-xs text-stone">
                <FileSpreadsheet className="size-3.5 text-signal" />
                <span>Ficheiro Excel (.xlsx) leve · Download em 2 segundos</span>
              </div>
            </div>

            {/* Mensagem pós-clique */}
            {downloaded ? (
              <div className="card-note mx-auto mt-6 max-w-[540px] p-4 sm:p-5 text-left border-signal/40 bg-sky-tint/30 animate-in fade-in zoom-in-95 duration-200">
                <p className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-signal">
                  <Check className="size-4 shrink-0" aria-hidden="true" />
                  Download iniciado — verifica no seu gestor de ficheiros
                </p>
                <p className="mt-2 text-xs sm:text-sm text-graphite leading-relaxed">
                  A sua planilha já está disponível no seu telemóvel na pasta{" "}
                  <strong className="text-foreground">Transferências / Downloads</strong>, com o nome{" "}
                  <span className="font-semibold text-foreground">{DOWNLOAD_NAME}</span>.
                </p>
                <div className="mt-3 flex items-center gap-2 text-[11px] sm:text-xs text-stone">
                  <Smartphone className="size-3.5 shrink-0 text-foreground" />
                  <span>Abra com: Excel Mobile, Google Sheets ou WPS Office.</span>
                </div>
              </div>
            ) : (
              <p className="mx-auto mt-4 sm:mt-6 max-w-[500px] text-xs sm:text-sm text-stone px-4">
                Ao clicar, o download acontece automaticamente — depois é só verificar no seu
                gestor de ficheiros. A planilha já está disponível.
              </p>
            )}
          </Container>
        </section>

        {/* ── Passos simples para telemóvel ── */}
        <section className="py-8 sm:py-12">
          <Container className="max-w-[880px]">
            <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
              {PASSOS.map((passo) => (
                <div key={passo.title} className="card-note p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{passo.emoji}</span>
                    <span className="flex size-6 items-center justify-center rounded-full bg-muted text-xs font-bold text-stone">
                      {passo.step}
                    </span>
                  </div>
                  <p className="mt-3 text-sm font-semibold">{passo.title}</p>
                  <p className="mt-1 text-xs sm:text-sm text-stone">{passo.sub}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Imagem do canteiro ── */}
        <section className="py-6 sm:py-12">
          <Container className="max-w-[960px]">
            <figure className="card-note overflow-hidden">
              <img
                src="/obra-canteiro.jpg"
                alt="Engenheiro e mestres de obra a analisar plantas no canteiro — Angola"
                className="w-full object-cover max-h-[260px] sm:max-h-[440px]"
                loading="lazy"
              />
              <figcaption className="border-t border-border p-3.5 sm:p-5 text-center font-serif text-sm sm:text-base text-graphite">
                É assim que a obra fica sob controlo em Angola: plantas na mesa, números na planilha.
              </figcaption>
            </figure>
          </Container>
        </section>

        {/* ── Melhor decisão (stats) ── */}
        <section className="py-8 sm:py-12">
          <Container>
            <div className="text-center">
              <p className="text-eyebrow font-semibold uppercase text-stone">Boa decisão</p>
              <h2 className="mx-auto mt-2 sm:mt-3 max-w-[700px] text-xl xs:text-2xl sm:text-heading font-semibold text-balance md:text-heading-lg">
                Hoje você tomou a{" "}
                <span className="font-serif italic">melhor decisão</span> da sua obra.
              </h2>
            </div>
            <div className="mt-6 sm:mt-10 grid gap-3 sm:gap-4 md:grid-cols-3">
              {DECISAO.map((item) => (
                <div key={item.value} className="card-note p-4 sm:p-6">
                  <p className="text-xl sm:text-heading font-semibold text-signal">{item.value}</p>
                  <p className="mt-2 text-sm font-medium">{item.label}</p>
                  <p className="mt-1 text-xs text-stone">{item.sub}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Por que foi a melhor decisão ── */}
        <section className="py-8 sm:py-12">
          <Container className="max-w-[960px]">
            <div className="rounded-xl bg-midnight p-5 sm:p-8 md:p-12 text-on-midnight">
              <p className="text-eyebrow font-semibold uppercase text-on-midnight/60">
                Por que foi a melhor decisão da sua vida profissional
              </p>
              <h2 className="mt-2 sm:mt-4 max-w-[640px] text-lg sm:text-heading-sm font-semibold md:text-heading">
                Você acabou de dar um passo que a maioria dos profissionais de
                obra em Angola <span className="font-serif italic">nunca vai dar</span>.
              </h2>
              <div className="mt-6 sm:mt-10 grid gap-3 sm:gap-5 md:grid-cols-2">
                {RAZOES.map((r) => (
                  <div
                    key={r.title}
                    className="flex items-start gap-3 sm:gap-4 rounded-xl bg-midnight-chip p-4 sm:p-5 border border-midnight-line"
                  >
                    <span className="text-xl sm:text-2xl shrink-0">{r.icon}</span>
                    <div>
                      <p className="text-sm sm:text-base font-semibold">{r.title}</p>
                      <p className="mt-1 text-xs sm:text-sm text-on-midnight/70 leading-relaxed">
                        {r.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ── Avaliações / prova social de Angola ── */}
        <section className="py-8 sm:py-12">
          <Container className="max-w-[880px]">
            <div className="text-center mb-6 sm:mb-8">
              <p className="text-eyebrow font-semibold uppercase text-stone">O que dizem</p>
              <h2 className="mt-2 sm:mt-3 text-lg sm:text-heading-sm font-semibold">
                Junte-se a centenas de profissionais angolanos
              </h2>
            </div>
            <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
              {[
                { name: "Tony Reis", city: "Luanda", star: 5, text: "Poupei 180 mil Kz logo na primeira semana. Vale cada kwanza que paguei." },
                { name: "Benvindo Chissola", city: "Benguela", star: 5, text: "Uso no meu telefone Android todos os dias na obra. O cliente ficou impressionado." },
                { name: "Guilhermino Joaquim", city: "Cabinda", star: 5, text: "Finalmente tenho controlo dos materiais. Nunca mais perco dinheiro em cimento." },
              ].map((r) => (
                <div key={r.name} className="card-note p-4 sm:p-5">
                  <div className="flex gap-0.5 text-marigold">
                    {Array.from({ length: r.star }).map((_, i) => (
                      <Star key={i} className="size-3.5 sm:size-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-graphite">"{r.text}"</p>
                  <p className="mt-2.5 text-xs font-semibold">
                    {r.name} · <span className="font-normal text-stone">{r.city}</span>
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Re-download e Upsell suave ── */}
        <section className="pb-16 sm:pb-20 text-center">
          <Container>
            <div className="card-note mx-auto max-w-sm p-4 text-center">
              <p className="text-xs font-semibold">Precisa de descarregar outra vez?</p>
              <a
                href={DOWNLOAD_FILE}
                download={DOWNLOAD_NAME}
                className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-signal underline underline-offset-4"
              >
                <Download className="size-3.5" /> Clique aqui para voltar a baixar
              </a>
            </div>

            <p className="mx-auto mt-6 max-w-[560px] font-serif text-sm sm:text-base text-graphite px-2">
              Quando quiser mais controlo, o{" "}
              <Link
                to="/"
                hash="planos"
                className="font-semibold text-signal underline underline-offset-4"
              >
                Plano Profissional
              </Link>{" "}
              acrescenta a planilha de medição e a versão premium — mas por agora,
              aproveite a sua: orce a próxima obra com ela diretamente no telemóvel.
            </p>
          </Container>
        </section>
      </main>
      <SalesFooter />
    </div>
  );
}
