import CV_ES from "./CV-Español.json";
import CV_EN from "./CV-Ingles.json";
import CV_ES_JUNIOR from "./CV-Junior-Español.json"
import CV_ES_COMPL from "./CV-Espanol-completo.json"
import { LANG_CV } from "../web.config";

export default LANG_CV === "ES" ? CV_ES_COMPL : CV_EN;
