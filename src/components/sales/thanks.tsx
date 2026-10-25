import { useState } from "react";
import { Check, Download } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Container } from "./bits";
import { SalesFooter } from "./close";
import equipeFoto from "@/assets/obra-equipe.jpg.asset.json";

const DOWNLOAD_FILE = "/downloads/planilha-de-obras.xlsx";
const DOWNLOAD_NAME = "Planilha-de-Orcamento-de-Obra.xlsx";

const PASSOS = [
  {
    emoji: "🖱️",
    title: "Clique no botão",
    sub: "o download começa automaticamente — nada de esperar por e-mail.",
  },
  {
    emoji: "📂",
    title: "Verifique o gestor de ficheiros",
    sub: "a sua planilha já está disponível na pasta de downloads do telemóvel ou do PC.",
  },
  {
    emoji: "📊",
    title: "Abra e comece a orçar",
    sub: "funciona no Excel, Google Sheets e LibreOffice — sem instalar nada.",
  },
];

const DECISAO = [
  {
    value: "0 Kz",
    label: "por mês, para sempre",
    sub: "pagou uma vez, o acesso é vitalício",
  },
  {
    value: "100%",
    label: "offline",
    sub: "preenche no canteiro, mesmo sem internet",
  },
  {
    value: "Hoje",
    label: "entrega imediata",
    sub: "não esperou dias — a planilha já está no seu aparelho",
  },
];

export function ThanksNav() {
  return (
    <header className="border-b border-border bg-card">
      <Container className="flex h-16 items-center gap-2.5">
        <span className="flex size-8 items-center justify-center rounded-lg bg-marigold text-base">
          🧱
        </span>
        <span className="text-sm font-semibold">Planilha de Obras</span>
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
        <section className="pb-12 pt-14 md:pt-20">
          <Container className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-tint px-4 py-1.5 text-xs font-semibold text-signal">
              ✅ Pagamento confirmado
            </span>
            <h1 className="mx-auto mt-6 max-w-[720px] text-heading font-semibold text-balance md:text-heading-lg">
              Receba agora a <span className="font-serif italic">sua planilha</span>
            </h1>
            <p className="mx-auto mt-4 max-w-[560px] font-serif text-lg leading-relaxed text-graphite">
              A compra foi aceite. Falta um único passo: descarregar a planilha e começar a
              controlar a sua obra hoje mesmo.
            </p>
            <div className="mx-auto mt-8 flex max-w-[420px] flex-col items-center gap-3">
              <a
                href={DOWNLOAD_FILE}
                download={DOWNLOAD_NAME}
                onClick={() => setDownloaded(true)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-colors duration-200 hover:bg-primary/90"
              >
                <Download className="size-5" aria-hidden="true" />
                Receber agora a minha planilha
              </a>
              <p className="text-xs text-stone">
                Planilha de orçamento de obra · .xlsx · Excel e Google Sheets
              </p>
            </div>
            {downloaded ? (
              <div className="card-note mx-auto mt-8 max-w-[540px] p-5 text-left">
                <p className="flex items-center gap-2 text-sm font-semibold">
                  <Check className="size-4 text-signal" aria-hidden="true" />
                  Download iniciado — verifica no seu gestor de ficheiros
                </p>
                <p className="mt-2 text-sm text-graphite">
                  A sua planilha já está disponível na pasta de downloads do telemóvel ou do
                  computador, com o nome <span className="font-semibold">{DOWNLOAD_NAME}</span>.
                  Não apareceu? Clique no botão acima outra vez.
                </p>
              </div>
            ) : (
              <p className="mx-auto mt-8 max-w-[540px] text-sm text-stone">
                Ao clicar, o download acontece automaticamente — depois é só verificar no seu
                gestor de ficheiros.
              </p>
            )}
          </Container>
        </section>

        <section className="py-12">
          <Container className="max-w-[880px]">
            <div className="grid gap-4 md:grid-cols-3">
              {PASSOS.map((passo, index) => (
                <div key={passo.title} className="card-note p-6">
                  <span className="text-2xl">{passo.emoji}</span>
                  <p className="mt-3 text-sm font-semibold">
                    Passo {index + 1} · {passo.title}
                  </p>
                  <p className="mt-1 text-sm text-stone">{passo.sub}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-12">
          <Container>
            <div className="text-center">
              <p className="text-eyebrow font-semibold uppercase text-stone">Boa decisão</p>
              <h2 className="mx-auto mt-3 max-w-[700px] text-heading font-semibold text-balance md:text-heading-lg">
                Hoje você tomou a{" "}
                <span className="font-serif italic">melhor decisão</span> da sua obra.
              </h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {DECISAO.map((item) => (
                <div key={item.value} className="card-note p-6">
                  <p className="text-heading font-semibold">{item.value}</p>
                  <p className="mt-3 text-sm font-medium">{item.label}</p>
                  <p className="mt-1 text-sm text-stone">{item.sub}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-12">
          <Container className="max-w-[880px]">
            <figure className="card-note overflow-hidden">
              <img
                src={equipeFoto.url}
                alt="Equipa de obra a analisar o orçamento no canteiro"
                className="w-full"
                loading="lazy"
              />
              <figcaption className="border-t border-border p-5 text-center font-serif text-lg text-graphite">
                É assim que a obra fica sob controlo: plantas na mesa, números na planilha.
              </figcaption>
            </figure>
          </Container>
        </section>

        <section className="pb-20 text-center">
          <Container>
            <p className="mx-auto max-w-[560px] font-serif text-lg text-graphite">
              Quando quiser mais controlo, o{" "}
              <Link
                to="/"
                hash="planos"
                className="font-semibold text-signal underline underline-offset-4"
              >
                Plano Profissional
              </Link>{" "}
              acrescenta a planilha de medição e a versão premium — mas por agora, aproveite a
              sua: orce a próxima obra com ela.
            </p>
          </Container>
        </section>
      </main>
      <SalesFooter />
    </div>
  );
}
