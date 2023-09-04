/** @format */

import * as React from "react";
import { Note } from "../NotesInterface/NotedModel";
interface INoteCardProps {
  note: Note;
  HandleDelete: (id: string) => void;
}

const NotesCard: React.FC<INoteCardProps> = ({ note, HandleDelete }) => {
  return (
    <>
      <div className="col-lg-3 col-md-6 mb-4 ">
        <div
          className="card h-100 w-100"
          key={note.id}
          style={{
            backgroundColor: note.color,
          }}
        >
          <div className="card-body ">
            <h5 className="card-title">{note.title}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {note.text}
            </h6>
            <p className="card-text">{note.date}</p>
            <button
              className="btn btn-outline-danger "
              onClick={() => HandleDelete(note.id)}
            >
              <i className="fa fa-trash " aria-hidden="true"></i> Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotesCard;
