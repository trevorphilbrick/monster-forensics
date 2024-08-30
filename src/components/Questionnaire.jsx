import { useState } from "react";
import { questions } from "../data/questions.js";

function Questionnaire() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(
    questions[currentQuestion].options[0]
  );

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  return (
    <form
      className="flex flex-col justify-center container mx-auto my-12 items-start"
      onSubmit={handleSubmit}
    >
      <p className="mb-4 font-bold text-lg">
        {questions[currentQuestion].question}
      </p>
      {questions[currentQuestion].options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            id={option}
            name="answer"
            value={option}
            className="mr-2"
            checked={selectedOption === option}
            onChange={handleChange}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}

      <button
        className="self-end px-4 py-2 bg-green-400 text-white font-bold"
        type="submit"
      >
        {currentQuestion < questions.length - 1
          ? "Next Question"
          : "Get Results"}
      </button>
    </form>
  );
}

export default Questionnaire;
