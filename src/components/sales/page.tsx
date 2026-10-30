import { SalesNav, Hero, Stats } from "./top";
import { Inside, Includes, Professionals, SalesFeed } from "./inside";
import { Pricing, Chats } from "./offer";
import { Faq, FinalCta, SalesFooter } from "./close";
import { PurchaseNotification } from "./purchase-notification";

export function SalesPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SalesNav />
      <main>
        <Hero />
        <Stats />
        <Inside />
        <Includes />
        <Professionals />
        <SalesFeed />
        <Pricing />
        <Chats />
        <Faq />
        <FinalCta />
      </main>
      <SalesFooter />
      <PurchaseNotification />
    </div>
  );
}
