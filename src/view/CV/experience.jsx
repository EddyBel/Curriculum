import CV from "../../assets/CV";
import { LANG_CV } from "../../web.config";

/**
 * Muestra la experiencia laboral en lista
 * @returns Componente experiencia laboral
 */
export function Experience() {
  const { work } = CV;
  const actuallyText = LANG_CV === "ES" ? "Actualmente" : "At Present";

  return (
    <>
      {/* Section experience */}
      <section className="mt-5">
        <h1 className="text-2xl sulphur-point-bold font-bold text-neutral-950 mb-2">
          {LANG_CV === "ES" ? "Experiencia laboral" : "Work Experience"}
        </h1>
        <div>
          {work.map((w) => (
            <div className="my-5" key={`${w.summary}`}>
              <div className="w-full flex items-center flex-wrap justify-between mb-2 font-mono">
                <div>
                  <h1 className="sulphur-point-bold text-xl text-neutral-950">
                    {w.name}
                  </h1>
                  <h2 className="text-neutral-950/90 sulphur-point-bold">
                    {w.position}
                  </h2>
                </div>
                <p className="font-md text-neutral-950/70 text-sm">
                  {w.startDate} - {w.endDate ?? actuallyText}
                </p>
              </div>
              <p className="font-mono text-neutral-950/70 text-[0.8rem]">
                {w.summary}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Section experience */}
    </>
  );
}
