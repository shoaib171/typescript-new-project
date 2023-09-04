/** @format */

import * as React from "react";
import { Note } from "../NotesInterface/NotedModel";
import NotesCard from "./NotesCard";
interface INotesListProps {
  NotesData: Note[];
  setNotesData: React.Dispatch<React.SetStateAction<Note[]>>;
}

const ListNotes: React.FC<INotesListProps> = ({ NotesData, setNotesData }) => {
  const RenderNotesList = () => {
    return NotesData.map((note) => {
      return (
        <NotesCard key={note.id} note={note} HandleDelete={HandleDelete} />
      );
    });
  };
  const HandleDelete = (id: string) => {
    // console.log("This particluar id is deleted", id);
    setNotesData(NotesData.filter((item) => item.id !== id));
  };
  return (
    <>
      <div className="container mt-2">
        {RenderNotesList() && RenderNotesList().length > 0 && (
          <h2 className="FontFamily">Notes</h2>
        )}
      </div>
      <div className="container">
        <div className="row ">{RenderNotesList()}</div>
      </div>
    </>
  );
};

export default ListNotes;
