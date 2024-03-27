import { title, body, farewell, name } from "../../assets/Letters-Español.json";

export function LetterPage() {
  return (
    <main className="w-full max-w-[800px] m-auto pt-20 pb-20">
      <h1 className="text-2xl sulphur-point-bold font-bold text-neutral-950 mb-2">
        {title}
      </h1>
      {body?.map((p) => (
        <p key={p} className="font-mono text-neutral-950/90 text-sm my-4">
          {p}
        </p>
      ))}
      <p className="font-mono text-neutral-950/80 text-sm my-4 text-center italic">
        {farewell}
      </p>
      <p className="font-mono text-neutral-950/80 text-sm my-4 text-center italic">
        {name}
      </p>
    </main>
  );
}
