import CV from "../assets/CV";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { IoPlanet } from "react-icons/io5";
import { Cover, CoverImageShadow } from "../components/cover-image";
import { COVER_SHADOW } from "../web.config";

/**
 * Información y cover inicial del CV
 * @returns Componente Hero
 */
export function Hero() {
  const { basics } = CV;
  const { name, label, location, profiles, email, phone, image } = basics;
  const { address, city, region, countryCode } = location;

  return (
    <>
      {/* Section Hero */}
      <section className="flex flex-col-reverse items-center sm:flex-row sm:justify-between gap-4 ">
        <div className="w-full max-w-[550px]">
          <h1 className="text-3xl sulphur-point-bold font-bold mb-2 text-center sm:text-start">
            {name}
          </h1>
          <p className="text-md font-mono text-neutral-950/80 text-center sm:text-start">
            {label}
          </p>
          <a
            href={address}
            className="flex items-center gap-1 pb-[2px] text-sm text-neutral-950/70 font-mono mt-3 mb-2 border-b-[1px] border-transparent hover:border-neutral-950/50 transition-border duration-150 w-[fit-content] m-auto sm:mx-0"
          >
            <FaLocationDot />
            {`${city}, ${region}, ${countryCode}`}
          </a>
          <div className="font-mono italic text-[0.7rem] text-neutral-950/85 items-center flex-wrap gap-2 hidden print:flex">
            <p>{email}</p>-<p>{phone}</p>
            {profiles.map((profile) => (
              <p key={`${profile.url}-${Math.random()}`}>- {profile.url}</p>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-center sm:justify-start gap-2 print:hidden">
            <a
              href={`mailto:${email}`}
              title={`Enviar un correo electrónico a ${name} al correo ${email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-2 text-lg border-[2px] text-neutral-950/80 border-neutral-950/20 rounded-lg w-[fit-content] hover:bg-neutral-200 transition-bg duration-200">
                <MdEmail />
              </div>
            </a>
            <a
              href={`tel:${phone}`}
              title={`Llama al ${phone}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-2 text-lg border-[2px] text-neutral-950/80 border-neutral-950/20 rounded-lg w-[fit-content] hover:bg-neutral-200 transition-bg duration-200">
                <FaPhone />
              </div>
            </a>
            {profiles.map((profile) => (
              <a
                href={`${profile.url}`}
                title={`Visita mi ${profile.network}`}
                target="_blank"
                rel="noopener noreferrer"
                key={`${profile.network}-${Math.random()}`}
              >
                <div className="p-2 text-lg border-[2px] text-neutral-950/80 border-neutral-950/20 rounded-lg w-[fit-content] hover:bg-neutral-200 transition-bg duration-200">
                  {profile.network === "GitHub" ? (
                    <SiGithub />
                  ) : profile.network === "LinkedIn" ? (
                    <FaLinkedin />
                  ) : (
                    <IoPlanet />
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="m-auto">
          {COVER_SHADOW ? (
            <CoverImageShadow url={image} />
          ) : (
            <Cover url={image} />
          )}
        </div>
      </section>
      {/* Section Hero */}
    </>
  );
}
