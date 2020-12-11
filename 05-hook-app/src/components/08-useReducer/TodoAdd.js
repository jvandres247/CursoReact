import React from "react";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ handleAddTodo }) => {

    const [{ description }, handelInputChange, reset] = useForm({
        description: "",
      });

      const handelSubmit = (e) => {
        e.preventDefault();
    
        if (description.trim().length <= 1) {
          return;
        }
    
        const newTodo = {
          id: new Date().getTime(),
          desc: description,
          done: false,
        };
    
        handleAddTodo(newTodo);
        reset();
      };

  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          name="description"
          placeholder="Ingrese una nueva tarea..."
          autoComplete="off"
          className="form-control"
          value={description}
          onChange={handelInputChange}
        />
        <button
          type="submit"
          className="btn btn-outline-primary mt-1 btn-block"
        >
          Agregar
        </button>
      </form>
    </>
  );
};
