import CV from "../../assets/CV";
import { LANG_CV } from "../../web.config";

/**
 * Renderiza cartas que muestran los proyectos realizados
 * @returns Componente Proyects
 */
export function Proyects() {
  const { projects } = CV;

  return (
    <>
      {/* Section proyects */}
      <section className="mt-5">
        <h1 className="text-2xl sulphur-point-bold font-bold text-neutral-950 mb-5">
          {LANG_CV === "ES" ? "Proyectos" : "Projects"}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {projects.map((project) => (
            <div
              className="py-4 px-3 border-[1px] border-neutral-600/30 rounded-lg flex flex-col justify-between"
              key={`${project.name}`}
            >
              <div>
                <a
                  href={project.github}
                  className="sulphur-point-bold text-xl mb-1 flex items-center gap-3 border-b-[1px] border-transparent hover:border-neutral-950/50 transition-border duration-150 w-[fit-content]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                  {project.isActive ? (
                    <div className="w-1 h-1 rounded-full bg-green-600/30 relative">
                      <div className="w-full h-full absolute top-0 left-0 rounded-full bg-green-600 filter blur-sm scale-125"></div>
                    </div>
                  ) : (
                    <></>
                  )}
                </a>
                <p className="text-[0.8rem] text-neutral-950/80 font-mono my-2 mb-4">
                  {project.description}
                </p>
              </div>
              <div className="flex gap-1 flex-wrap">
                {project.highlights.map((tag) => (
                  <div
                    className="p-1 px-3 text-[0.7rem] font-bold rounded-md bg-neutral-400/20 text-neutral-950/70 font-mono"
                    key={`${tag}`}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Section proyects */}
    </>
  );
}
