function AddQuestion() {
  return (
    <div className="add-section">
      <form action="">
        <label htmlFor="add-new-question">Add new question:</label>
        <input type="text" id="add-new-question" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddQuestion;
