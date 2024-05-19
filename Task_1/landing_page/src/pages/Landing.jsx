import Hero from "../components/sections/Hero";
import LandingLayout from "../components/layouts/LandingLayout";

export default function Landing() {
  return (
    <LandingLayout>
      <Hero
        title="Landing Page Assignement"
        subtitle="Beutiful landing page which shows different images"
        image="https://source.unsplash.com/collection/404339/800x600"
        ctaText="Contact Us"
        ctaLink="/signup"
      />
    </LandingLayout>
  );
}