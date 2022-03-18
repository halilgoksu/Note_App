import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");

  const HandleChange = (event) => {
    if (carachterLimit - event.target.value.length >= 0)
      setNoteText(event.target.value);
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);

      setNoteText("");
    }
  };
  const carachterLimit = 200;

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type note"
        value={noteText}
        onChange={HandleChange}
      ></textarea>
      <div className="note-footer">
        <small>{carachterLimit - noteText.length} Remaind</small>
        <button onClick={handleSaveClick} className="save">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
