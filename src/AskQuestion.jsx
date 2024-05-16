function AskQuestion() {
  function handleDrawQuestion() {
    console.log("ook");
  }

  return (
    <div className="ask-section">
      <button className="draw-btn" onClick={handleDrawQuestion}>
        Draw question
      </button>
    </div>
  );
}

export default AskQuestion;
