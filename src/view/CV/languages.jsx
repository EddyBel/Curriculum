import CV from "../../assets/CV";
import { LANG_CV } from "../../web.config";

/**
 * Componente que muestra los idiomas que conosco
 * @returns Componente lenguaje
 */
export function Languages() {
  const { languages } = CV;

  return (
    <>
      <section className="mt-4">
        <h1 className="text-2xl sulphur-point-bold font-bold text-neutral-950 mb-2">
          {LANG_CV === "ES" ? "Idiomas" : "Languages"}
        </h1>
        <div className="flex flex-wrap gap-5">
          {languages.map((lang) => (
            <div
              key={lang.language}
              className="border-[1px] border-neutral-400/50 rounded-lg p-2 px-4"
            >
              <h3 className="text-lg sulphur-point-bold">{lang.language}</h3>
              <p className="text-sm font-mono text-neutral-950/70">
                {lang.fluency}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
