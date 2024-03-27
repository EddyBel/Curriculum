import { AboutMe } from "./about-me";
import { Certificates } from "./certificates";
import { Education } from "./education";
import { Experience } from "./experience";
import { Hero } from "./hero";
import { Proyects } from "./proyects";
import { Skills } from "./skills";

export function CVPage() {
  return (
    <main className="w-full max-w-[800px] m-auto">
      <article className="w-full py-14 px-5 md:px-2">
        <Hero />
        <AboutMe />
        <Experience />
        <Education />
        <Certificates />
        <Skills />
        <Proyects />
      </article>
    </main>
  );
}
