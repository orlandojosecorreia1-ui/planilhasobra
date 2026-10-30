import { useEffect, useState } from "react";
import { X, CheckCircle2 } from "lucide-react";
import { RECENT_PURCHASES, type RecentPurchase } from "./data";

const INITIAL_DELAY_MS = 4000; // 4s antes do primeiro aviso
const VISIBLE_DURATION_MS = 5000; // 5s visível
const INTERVAL_DELAY_MS = 12000; // 12s de intervalo entre cada notificação

export function PurchaseNotification() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [closedManually, setClosedManually] = useState(false);

  useEffect(() => {
    let hideTimer: number;
    let nextTimer: number;

    // Inicia após o delay inicial
    const initialTimer = window.setTimeout(() => {
      setVisible(true);

      // Agendamento do ciclo
      hideTimer = window.setTimeout(() => {
        setVisible(false);
        scheduleNext();
      }, VISIBLE_DURATION_MS);
    }, INITIAL_DELAY_MS);

    const scheduleNext = () => {
      nextTimer = window.setTimeout(() => {
        if (document.hidden) {
          // Se a aba estiver em segundo plano, tenta novamente mais tarde
          scheduleNext();
          return;
        }

        setClosedManually(false);
        setIndex((prev) => (prev + 1) % RECENT_PURCHASES.length);
        setVisible(true);

        hideTimer = window.setTimeout(() => {
          setVisible(false);
          scheduleNext();
        }, VISIBLE_DURATION_MS);
      }, INTERVAL_DELAY_MS);
    };

    return () => {
      window.clearTimeout(initialTimer);
      window.clearTimeout(hideTimer);
      window.clearTimeout(nextTimer);
    };
  }, []);

  const current: RecentPurchase | undefined = RECENT_PURCHASES[index];
  if (!current) return null;

  const isVisible = visible && !closedManually;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-4 left-3 right-3 sm:right-auto sm:left-4 z-40 transition-all duration-500 ease-out ${
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <div className="card-note flex max-w-sm items-start gap-3 p-3.5 sm:p-4 shadow-mockup bg-card">
        {/* Avatar com as iniciais */}
        <span
          className={`flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-full text-xs font-bold ${current.avatarColor}`}
        >
          {current.initials}
        </span>

        {/* Informações da compra */}
        <div className="min-w-0 flex-1 pr-1">
          <div className="flex items-center gap-1.5">
            <p className="truncate text-xs sm:text-sm font-semibold text-foreground">
              {current.name}
            </p>
            <span className="inline-flex items-center gap-0.5 rounded-full bg-secondary px-1.5 py-0.5 text-[10px] font-medium text-signal shrink-0">
              <CheckCircle2 className="size-2.5" />
              <span>Verificado</span>
            </span>
          </div>

          <p className="mt-0.5 text-xs text-graphite line-clamp-1">
            Comprou o <strong className="font-semibold text-foreground">{current.plan}</strong>
          </p>

          <p className="mt-1 text-[11px] text-stone">
            {current.city} · {current.timeAgo}
          </p>
        </div>

        {/* Botão fechar */}
        <button
          type="button"
          onClick={() => setClosedManually(true)}
          className="shrink-0 rounded-md p-1 text-stone transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Fechar notificação"
        >
          <X className="size-3.5" />
        </button>
      </div>
    </div>
  );
}

