import { useState } from "react";

function AskQuestion() {
  const [question, setNewQuestion] = useState("");
  function handleDrawQuestion() {
    let newQuestion =
      "Text shadow is a visual effect that adds shadows to text, enhancing its appearance and readability against various backgrounds in graphic design and web development. It typically involves specifying parameters such as the shadow's color, blur radius, and offsets along the x and y axes.";
    setNewQuestion(newQuestion);
  }

  return (
    <div className="ask-section">
      <button className="draw-btn" onClick={handleDrawQuestion}>
        Draw question
      </button>
      {question && <div className="current-question">{question}</div>}
    </div>
  );
}

export default AskQuestion;
