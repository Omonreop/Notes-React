import { useState } from "react";
import "./styles.css";

export default function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "hello",
    },
  ]);
  const [inputNote, setInputNote] = useState("");

  function handleInputChange(e) {
    setInputNote(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputNote.trim() !== "") {
      const newNote = {
        id: new Date().getTime(),
        text: inputNote,
      };

      setNotes([...notes, newNote]);
      setInputNote("");
    }
  }

  function handleDeleteNote(id) {
    const updateNotes = notes.filter((note) => note.id !== id);
    setNotes(updateNotes);
  }
  return (
    <div className="App">
      <h1>Notes</h1>
      <form className="note-input" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add a note"
          onChange={handleInputChange}
          value={inputNote}
        />
        <button>add</button>
      </form>
      <ul className="note-list">
        {notes.map((note) => (
          <li key={note.id}>
            {note.text}
            <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
