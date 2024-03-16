import { AboutMe } from "./view/about-me";
import { Certificates } from "./view/certificates";
import { Education } from "./view/education";
import { Experience } from "./view/experience";
import { Hero } from "./view/hero";
import { Proyects } from "./view/proyects";
import { Skills } from "./view/skills";

function App() {
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

export default App;
