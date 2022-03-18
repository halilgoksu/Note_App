import React, {  useState } from "react";
import "./App.css";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import Search from "./components/Seach";
import Header from "./components/Header";


const App = () => {


  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);


  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is a note ",
      date: "12/22/2021",
    },
    {
      id: nanoid(),
      text: "this is aa note ",
      date: "12/22/2021",
    },
    {
      id: nanoid(),
      text: "this is 3a note ",
      date: "12/22/2021",
    },

    {
      id: nanoid(),
      text: "this is 4a note ",
      date: "12/22/2021",
      name: "",
    },
  ]);

  const handleAddNote = (noteTexti) => {
    const datee = new Date();
    const newNote = {
      id: nanoid(),
      text: noteTexti,
      date: datee.toLocaleString(),
      
     
    };
    const newTotalNotes = [...notes, newNote];
   
    setNotes(newTotalNotes);
   
  };

  const handleDeleteNote = (id) => {
    const newTotalNotes = notes.filter((noter) => noter.id !== id);
 
    setNotes(newTotalNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode}></Header>
        <Search handleSearchNote={setSearchText}></Search>
        <NotesList
          handleDeleteNote={handleDeleteNote}
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={handleAddNote}
        ></NotesList>
      </div>
    </div>

  );
};

export default App;
