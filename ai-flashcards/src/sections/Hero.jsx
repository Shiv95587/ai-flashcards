import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-bg py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <div className="hero-content">
          <h1 className="hero-title text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Transform the Way You Learn with Interactive Flashcards
          </h1>
          <p className="hero-paragraph text-base md:text-xl mb-8 opacity-80">
            Create, Share, and Learn with custom flashcards tailored to your
            needs.
          </p>
          <Link
            href="/main"
            className="cta-button py-3 px-6 rounded-full text-lg font-semibold"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </section>
  );
}
