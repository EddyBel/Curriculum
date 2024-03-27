import CV from "../../assets/CV";
import { LANG_CV } from "../../web.config";

/**
 * Componente que renderiza las habilidades
 * @returns Componente Skills
 */
export function Skills() {
  const { skills } = CV;

  return (
    <>
      {/* Section skills */}
      <section className="mt-5">
        <h1 className="text-2xl sulphur-point-bold font-bold text-neutral-950 mb-5">
          {LANG_CV === "ES" ? "Habilidades" : "Skills"}
        </h1>
        <div className="flex flex-wrap gap-1">
          {skills.map((skill) => (
            <div
              className="p-1 px-3 text-[0.7rem] font-bold rounded-lg bg-neutral-950/95 text-neutral-200 font-mono"
              key={`${skill.name}`}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </section>
      {/* Section skills */}
    </>
  );
}
