import AddNote from "./AddNote";
import Note from "./Note";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          handleDeleteNote={handleDeleteNote}
          text={note.text}
          id={note.id}
          date={note.date}
        ></Note>
      ))}
      <AddNote handleAddNote={handleAddNote}></AddNote>
    </div>
  );
};

export default NotesList;
