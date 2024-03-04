import { ReactElement, useContext } from "react";
import { TodoContext } from "./context/TodoContextProvider";
import { Todo } from "./Todo";

export function TodoList(): ReactElement{
        const { todoList } = useContext(TodoContext);

        return (
            <>
            {todoList.map((todo) => (
  <Todo key={todo.id} todo={todo} />
            ))}
            </>
        )

}