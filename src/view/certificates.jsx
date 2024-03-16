import CV from "../assets/CV";
import { LANG_CV } from "../web.config";

/**
 * Renderiza las certificaciones y cursos que has realizado
 * @returns Componente de certificaciones
 */
export function Certificates() {
  const { certificates } = CV;

  return (
    <>
      <section className="mt-12">
        <h1 className="text-2xl sulphur-point-bold font-bold text-neutral-950 mb-5">
          {LANG_CV === "ES" ? "Certificados" : "Certificates"}
        </h1>
        <div className="grid grid-cols-2 gap-2">
          {certificates.map((certificate) => (
            <div
              key={`${certificate.name}-${Math.random()}`}
              className="flex flex-wrap justify-between border-[1px] border-neutral-400/70 rounded-md p-2"
            >
              <div>
                <h1 className="text-md sulphur-point-bold">
                  {certificate.name}
                </h1>
                <h3 className="text-md text-neutral-800 font-mono">
                  {certificate.issuer}
                </h3>
              </div>
              <p className="text-sm text-neutral-500/80 font-mono">
                {certificate.date}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
