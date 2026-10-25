import { useEffect, useRef, useState } from "react";
import { Phone, MoreVertical } from "lucide-react";
import { cn } from "@/lib/utils";
import { Cta, Container, SectionHead } from "./bits";
import { CHATS, PLANS, type Bubble, type Chat, type Plan } from "./data";

const OFFER_SECONDS = 23 * 60;
const DEADLINE_KEY = "oferta-relampago-deadline";

/**
 * Countdown da oferta relâmpago, persistido no localStorage: o prazo continua
 * de onde parou entre visitas, em vez de recomeçar a cada refresh.
 */
export function useScarcityCountdown() {
  const [left, setLeft] = useState(OFFER_SECONDS);
  useEffect(() => {
    let deadline = Number(window.localStorage.getItem(DEADLINE_KEY));
    if (!Number.isFinite(deadline) || deadline <= Date.now()) {
      deadline = Date.now() + OFFER_SECONDS * 1000;
      window.localStorage.setItem(DEADLINE_KEY, String(deadline));
    }
    const tick = () => {
      if (deadline <= Date.now()) {
        deadline = Date.now() + OFFER_SECONDS * 1000;
        window.localStorage.setItem(DEADLINE_KEY, String(deadline));
      }
      setLeft(Math.max(0, Math.round((deadline - Date.now()) / 1000)));
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);
  return left;
}

function mmss(total: number) {
  const m = Math.floor(total / 60).toString().padStart(2, "0");
  const s = (total % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={cn(
        "rounded-xl p-8",
        plan.highlight ? "bg-midnight text-on-midnight" : "card-note",
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium">
          {plan.emoji} {plan.name}
        </p>
        {plan.highlight && (
          <span className="rounded-full bg-marigold px-3 py-1 text-xs font-bold text-ink">
            Mais vendido
          </span>
        )}
      </div>
      <h3 className="mt-4 max-w-[300px] text-heading-sm font-semibold">{plan.tagline}</h3>
      <p className="mt-6 text-4xl font-semibold">
        <span className="align-top text-lg font-medium opacity-60">Kz </span>
        {plan.price}
      </p>
      <ul className="mt-6 space-y-2.5 text-sm">
        {plan.items.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <span
              className={cn(
                "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold",
                plan.highlight ? "bg-marigold text-ink" : "bg-sky-tint text-signal",
              )}
            >
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Cta href={plan.url} size="lg" className="w-full">
          Comprar agora
        </Cta>
      </div>
    </div>
  );
}

export function Pricing() {
  const left = useScarcityCountdown();
  return (
    <section id="planos" className="scroll-mt-20 py-16 md:py-24">
      <Container>
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-coral px-4 py-1.5 text-xs font-semibold text-on-midnight">
            🔥 Oferta relâmpago
          </span>
          <h2 className="mx-auto mt-6 max-w-[780px] text-heading font-semibold text-balance md:text-heading-lg">
            Quanto vale parar de{" "}
            <span className="font-serif italic">perder dinheiro</span> em cada obra?
          </h2>
          <p className="mt-4 text-sm text-stone">
            Promoção por tempo limitado — os preços desta oferta voltam ao normal quando
            o tempo terminar.
          </p>
          <div className="mt-6 inline-flex items-center gap-2">
            <span className="text-xs font-medium text-stone">termina em</span>
            <span className="rounded-lg border border-border bg-card px-3 py-1.5 font-semibold tabular-nums">
              {mmss(left)}
            </span>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-[880px] items-start gap-5 md:grid-cols-2">
          {PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-stone">
          Pagamento único · Acesso vitalício
        </p>
      </Container>
    </section>
  );
}

export function ScarcityBar() {
  const left = useScarcityCountdown();
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 shadow-nav backdrop-blur">
      <Container className="flex items-center justify-between gap-3 py-2.5">
        <p className="min-w-0 text-xs font-medium sm:text-sm">
          <span aria-hidden="true">🔥</span> Oferta relâmpago termina em{" "}
          <span className="rounded-md bg-ink px-2 py-0.5 font-semibold tabular-nums text-paper">
            {mmss(left)}
          </span>
        </p>
        <Cta href="#planos" size="sm" className="shrink-0">
          garantir o desconto
        </Cta>
      </Container>
    </div>
  );
}

function BubbleView({ bubble, isLastMe }: { bubble: Bubble; isLastMe: boolean }) {
  const mine = bubble.from === "me";
  return (
    <div
      className={cn(
        "max-w-[85%] rounded-xl px-3 py-2 text-sm leading-snug",
        mine ? "self-end rounded-br-sm bg-sky-tint" : "self-start rounded-bl-sm border border-border bg-card",
      )}
    >
      <p>{bubble.text}</p>
      <p className="mt-0.5 text-right text-[10px] text-stone">
        {bubble.time}
        {mine && isLastMe ? " ✓✓" : ""}
      </p>
    </div>
  );
}

function ChatCard({ chat }: { chat: Chat }) {
  const lastMeIndex = chat.bubbles.reduce(
    (last, bubble, index) => (bubble.from === "me" ? index : last),
    -1,
  );
  return (
    <article className="card-note w-[340px] shrink-0 snap-start">
      <header className="flex items-center gap-3 border-b border-border p-4">
        <span
          className={`flex size-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${chat.avatar}`}
        >
          {chat.initials}
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold">{chat.name}</p>
          <p className="truncate text-xs text-stone">
            online · {chat.city} · {chat.role}
          </p>
        </div>
        <Phone className="size-4 text-stone" aria-hidden="true" />
        <MoreVertical className="size-4 text-stone" aria-hidden="true" />
      </header>
      <div className="flex flex-col gap-2 p-4">
        {chat.bubbles.map((bubble, index) => (
          <BubbleView
            key={`${chat.name}-${index}`}
            bubble={bubble}
            isLastMe={index === lastMeIndex}
          />
        ))}
      </div>
    </article>
  );
}

const CAROUSEL_STEP_MS = 4000;
const CAROUSEL_RESUME_MS = 6000;

export function Chats() {
  const trackRef = useRef<HTMLDivElement>(null);

  /*
   * Carrossel em auto-scroll suave, com as bordas a desvanecer (carousel-fade).
   * Qualquer gesto do visitante pausa o avanço; retoma após alguns segundos.
   */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let paused = false;
    let resumeTimer = 0;
    const pauseWhileHovering = () => {
      paused = true;
      window.clearTimeout(resumeTimer);
    };
    const pauseFor = (ms: number) => {
      paused = true;
      window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(() => (paused = false), ms);
    };
    const id = window.setInterval(() => {
      if (paused || document.hidden) return;
      const card = track.querySelector<HTMLElement>("article");
      const step = card ? card.offsetWidth + 16 : 360;
      const max = track.scrollWidth - track.clientWidth;
      if (max <= 0) return;
      if (track.scrollLeft >= max - 4) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({ left: step, behavior: "smooth" });
      }
    }, CAROUSEL_STEP_MS);
    track.addEventListener("pointerenter", pauseWhileHovering);
    track.addEventListener("pointerleave", () => pauseFor(CAROUSEL_RESUME_MS));
    track.addEventListener("pointerdown", () => pauseFor(CAROUSEL_RESUME_MS));
    track.addEventListener("wheel", () => pauseFor(CAROUSEL_RESUME_MS), { passive: true });
    return () => {
      window.clearInterval(id);
      window.clearTimeout(resumeTimer);
      track.removeEventListener("pointerenter", pauseWhileHovering);
      track.removeEventListener("pointerleave", pauseFor);
      track.removeEventListener("pointerdown", pauseFor);
      track.removeEventListener("wheel", pauseFor);
    };
  }, []);

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHead
          eyebrow="Conversas reais · WhatsApp"
          title="Quem já usa, não larga."
          sub="As conversas passam sozinhas — ou arraste para ver ao seu ritmo."
        />
      </Container>
      <div
        ref={trackRef}
        className="carousel-fade no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:px-6"
      >
        {CHATS.map((chat) => (
          <ChatCard key={chat.name} chat={chat} />
        ))}
      </div>
    </section>
  );
}
