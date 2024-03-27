import { Routes as Switch, Route } from "react-router-dom";
import { CVPage } from "../view/CV";
import { LetterPage } from "../view/Letter";

export function RouterWeb() {
  return (
    <Switch>
      <Route path="/" element={<CVPage />} />
      <Route path="/letter" element={<LetterPage />} />
    </Switch>
  );
}
