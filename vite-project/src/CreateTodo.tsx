import { FormEventHandler, ReactElement, useContext, useId, useState } from "react";
import { TodoContext } from "./context/TodoContextProvider";
import { v4 as uuidv4 } from "uuid";
import { ITodo } from "./interfaces";

export function CreateTodo(): ReactElement {
  const { createTodo } = useContext(TodoContext);

  const [value, setValue] = useState("");
  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event?.preventDefault();

    const newTodo: ITodo = {
      id: uuidv4(),
      content: value,
    };
    createTodo(newTodo);
    setValue("");
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="todo">Todo</label>
      <input type="text" id="todo" onChange={(e) => setValue(e.target.value)} />
      <button type="submit">Create</button>
    </form>
  );
}
