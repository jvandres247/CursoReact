import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <form>
          <input
            type="text"
            placeholder="Titulo de la nueva nota"
            className="notes__title-input"
          />
          <textarea
            placeholder="Describe la nota"
            className="notes__textarea"
          />
          <div className='notes__image'>
            <img 
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
              alt="imagen"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
