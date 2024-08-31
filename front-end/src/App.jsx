import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Questionnaire from "./components/Questionnaire";
import Results from "./components/Results";
import { createContext, useEffect, useState, useCallback } from "react";

export const QuestionnaireContext = createContext();
export const CurrentDisplayContext = createContext();

function App() {
  const [responses, setResponses] = useState([]);
  const [currentDisplay, setCurrentDisplay] = useState("intro");
  const [apiResponse, setApiResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const submitResponse = useCallback(async () => {
    setLoading(true);
    const response = await fetch(
      `${import.meta.env.VITE_CONVEX_ACTIONS_URL}/create-image`,
      {
        body: JSON.stringify(responses),
        method: "POST",
      }
    );
    const data = await response.json();

    setApiResponse(data);
    setLoading(false);
  }, [responses]);

  useEffect(() => {
    if (currentDisplay === "results" && responses.length > 0) {
      submitResponse();
    }
  }, [currentDisplay, responses.length, submitResponse]);

  return (
    <CurrentDisplayContext.Provider
      value={{ currentDisplay, setCurrentDisplay }}
    >
      <QuestionnaireContext.Provider value={{ responses, setResponses }}>
        <Header />
        {currentDisplay === "intro" && <Intro />}
        {currentDisplay === "questionnaire" && <Questionnaire />}
        {currentDisplay === "results" && (
          <Results apiResponse={apiResponse} loading={loading} />
        )}
      </QuestionnaireContext.Provider>
    </CurrentDisplayContext.Provider>
  );
}

export default App;
