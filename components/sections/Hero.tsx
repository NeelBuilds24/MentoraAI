import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-32">

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl"></div>

      <Container>
        <div className="relative z-10 max-w-4xl">

          <h1 className="logo-font text-5xl leading-tight md:text-7xl">
            Learn AI
            <span className="bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
              {" "}Smarter
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
            Personalized AI learning roadmaps, real-world projects,
            and adaptive mentorship designed for modern learners.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button text="Start Learning" />
            <Button text="Explore Roadmaps" variant="secondary" />
          </div>

        </div>
      </Container>
    </section>
  );
}