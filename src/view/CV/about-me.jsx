import CV from "../../assets/CV";
import { LANG_CV } from "../../web.config";

/**
 * Muestra breve información sobre mi
 * @returns Componente Sobre mi
 */
export function AboutMe() {
  const { basics } = CV;
  const { summary } = basics;

  let yearExperience = new Date().getFullYear() - new Date("01/12/2019").getFullYear()
  if (yearExperience > 5 && yearExperience < 10) yearExperience = "5+";
  if (yearExperience > 10 && yearExperience < 15) yearExperience = "10+";
  if (yearExperience > 15) yearExperience = "15+"

  return (
    <>
      {/* Section about me */}
      <section className="mt-5">
        <h1 className="text-2xl sulphur-point-bold font-bold text-neutral-950 mb-2">
          {LANG_CV === "ES" ? "Sobre mí" : "About"}
        </h1>
        <p className="font-mono text-neutral-950/70 text-[0.8rem]">{summary.replace("{{EXPERIENCE_IN_YEARS}}", yearExperience)}</p>
      </section>
      {/* Section about me */}
    </>
  );
}
