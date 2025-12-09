import { HeroSection } from "./hero-section";
import { ContentSection } from "./content-section";

export function HomePage() {
  return (
    <div className="pb-8">
      <HeroSection />

      <ContentSection />
    </div>
  );
}
