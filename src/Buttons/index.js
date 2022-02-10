import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone,
  toggleHideDone, setAllDone }) => (
  tasks.length > 0 && (
    <div classNameName="buttons">
      <button
        className="buttons__button"
        onClick={toggleHideDone}
      >
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </button>
      <button
        className="buttons__button"
        disabled={tasks.every(({ done }) => done)}
        onClick={setAllDone}
      >
        Ukończ wszystkie
      </button>
    </div>
  )
);

export default Buttons;