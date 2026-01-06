// src/components/Global/GlobalElements.tsx
import MessengerBubble from "./MessengerBubble";
import MessengerPanel from "./MessengerPanel";
import ScrollToTop from "./ScrollToTop";

export default function GlobalElements() {
  return (
    <>
      {/* These are fixed positioned — always visible on screen, outside sidebar */}
      <MessengerBubble />
      <MessengerPanel />
      <ScrollToTop />
    </>
  );
}