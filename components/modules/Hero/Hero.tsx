import { lazy, Suspense } from "react";
import { Container } from "@/components/container";
import { ConfiguredVideoPlayer } from "@/components/shared";

export default function Hero() {
  return (
    <Container className="relative h-[60vh] md:h-screen w-full overflow-hidden">
      <ConfiguredVideoPlayer module="hero" />
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
    </Container>
  );
}
