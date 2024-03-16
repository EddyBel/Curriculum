import { useLangCV } from "../hooks/changeLanguage";

export function ButtonLang() {
  const { lang, changeLang } = useLangCV();

  return (
    <button
      className="w-10 h-10 p-1 border-[1px] border-neutral-500/30 rounded-md absolute top-5 right-5 hover:bg-neutral-500/20 transition-background duration-200"
      onClick={changeLang}
    >
      {lang}
    </button>
  );
}
