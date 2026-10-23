import { createFileRoute } from "@tanstack/react-router";
import { SalesPage } from "@/components/sales/page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Planilha de Orçamento de Obras · Angola · 4.997 Kz",
      },
      {
        name: "description",
        content:
          "A planilha usada por engenheiros e mestres de obras em Angola para orçar do alicerce ao acabamento. Excel e Google Sheets · funciona offline no telemóvel e no PC.",
      },
      {
        property: "og:title",
        content: "Planilha de Orçamento de Obras · Angola · 4.997 Kz",
      },
      {
        property: "og:description",
        content:
          "Cada saco de cimento, cada kwanza, sob controlo. Orçamento de obras em Excel e Google Sheets — funciona offline.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <SalesPage />;
}
