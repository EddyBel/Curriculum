import { useState } from "react";
import { LANG_CV } from "../web.config";

export const useLangCV = () => {
  const [lang, setLang] = useState(LANG_CV);

  const changeLang = () => {
    if (lang === "ES") setLang("EN");
    if (lang === "EN") setLang("ES");
  };

  return {
    changeLang,
    lang,
  };
};
