import { Cta, Container, SectionHead } from "./bits";
import { CHECKOUT_FOUNDACAO, FAQS } from "./data";

export function Faq() {
  return (
    <section className="py-16 md:py-24">
      <Container className="max-w-[760px]">
        <SectionHead
          center
          eyebrow="FAQ"
          title="Perguntas frequentes."
          sub="Tudo o que precisas saber antes de comprar a planilha."
        />
        <div className="mt-10">
          {FAQS.map((faq) => (
            <details key={faq.q} className="group border-b border-border py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold [&::-webkit-details-marker]:hidden">
                {faq.q}
                <span
                  aria-hidden="true"
                  className="text-xl leading-none text-stone transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-graphite">{faq.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="pb-20 pt-4 md:pb-28">
      <Container>
        <div className="rounded-xl bg-midnight p-10 text-center text-on-midnight md:p-16">
          <p className="text-eyebrow font-semibold uppercase text-on-midnight/60">
            Última chamada
          </p>
          <h2 className="mx-auto mt-4 max-w-[680px] text-heading font-semibold text-balance md:text-heading-lg">
            Comece a controlar a sua obra{" "}
            <span className="font-serif italic">ainda hoje</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-[480px] font-serif text-lg text-on-midnight/70">
            Um investimento único que se paga em poucos dias.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Cta href={CHECKOUT_FOUNDACAO} size="lg">
              quero a minha planilha agora
            </Cta>
            <Cta href="#inclui" variant="midnight" size="lg">
              rever o que inclui
            </Cta>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function SalesFooter() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-center gap-2 text-center">
        <p className="text-sm font-medium">planilha de orçamento de obras · angola</p>
        <p className="text-xs text-stone">
          © 2026 · planilha entregue por download imediato
        </p>
      </Container>
    </footer>
  );
}
