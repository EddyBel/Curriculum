import CV_ES from "./CV-Español.json";
import CV_EN from "./CV-Ingles.json";
import { LANG_CV } from "../web.config";

export default LANG_CV === "ES" ? CV_ES : CV_EN;
