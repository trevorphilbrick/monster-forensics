import "./App.css";
import Intro from "./components/Intro";
import Questionnaire from "./components/Questionnaire";
import { createContext, useEffect, useState } from "react";

export const QuestionnaireContext = createContext();
export const CurrentDisplayContext = createContext();

function App() {
  const [responses, setResponses] = useState([]);
  const [currentDisplay, setCurrentDisplay] = useState("intro");

  useEffect(() => {
    console.log("Responses: ", responses);
  }, [responses]);

  return (
    <CurrentDisplayContext.Provider
      value={{ currentDisplay, setCurrentDisplay }}
    >
      <QuestionnaireContext.Provider value={{ responses, setResponses }}>
        {currentDisplay === "intro" && <Intro />}
        {currentDisplay === "questionnaire" && <Questionnaire />}
      </QuestionnaireContext.Provider>
    </CurrentDisplayContext.Provider>
  );
}

export default App;
