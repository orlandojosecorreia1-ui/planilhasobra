import { createFileRoute } from "@tanstack/react-router";
import { ThanksPage } from "@/components/sales/thanks";

export const Route = createFileRoute("/obrigado")({
  head: () => ({
    meta: [
      {
        title: "Pedido confirmado · Receba a sua Planilha de Obras",
      },
      {
        name: "description",
        content:
          "O seu pagamento foi confirmado. Descarregue agora a planilha de orçamento de obras — verifica no seu gestor de ficheiros, já está disponível.",
      },
      {
        property: "og:title",
        content: "Pedido confirmado · Receba a sua Planilha de Obras",
      },
      {
        property: "og:description",
        content:
          "Receba agora a sua planilha de orçamento de obras. Download imediato após a compra.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ThankYou,
});

function ThankYou() {
  return <ThanksPage />;
}
