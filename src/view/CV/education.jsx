import CV from "../../assets/CV";
import { LANG_CV } from "../../web.config";

/**
 * Sección que muestra las insituciones de educación
 * @returns Componente Educación
 */
export function Education() {
  const { education } = CV;
  const actuallyText = LANG_CV === "ES" ? "Actualmente" : "At Present";

  return (
    <>
      {/* Section education */}
      <section className="mt-5">
        <h1 className="text-2xl sulphur-point-bold font-bold text-neutral-950 mb-2">
          {LANG_CV === "ES" ? "Educación" : "Education"}
        </h1>
        {education.map((school) => (
          <div key={`${school.institution}`}>
            <div className="flex items-center flex-wrap justify-between mb-1">
              <a
                href={school.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl sulphur-point-bold text-neutral-950/90 font-mono border-b-[1px] border-transparent hover:border-neutral-950/50 transition-border duration-150"
              >
                {school.institution}
              </a>
              <p className="font-mono text-sm text-neutral-950/70">
                {school.startDate} - {school.endDate ?? actuallyText}
              </p>
            </div>
            <p className="text-md sulphur-point-bold font-mono text-neutral-950/80">
              {school.area}
            </p>
          </div>
        ))}
      </section>
      {/* Section education */}
    </>
  );
}
