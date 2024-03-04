import { createContext, ReactElement,  useState } from "react";
import { ITodo } from "../interfaces";
import { v4 as uuidv4 } from "uuid";

interface IContext {
  todoList: ITodo[];
  deleteTodo: (todoId: string) => void;
  createTodo: (newTodo: ITodo) => void;
}

interface ITodoContextProviderProps {
  children: ReactElement;
}

export const TodoContext = createContext({} as IContext);

export function TodoContextProvider({ children }: ITodoContextProviderProps): ReactElement {
  const [todoList, setTodoList] = useState<ITodo[]>([
    { id: uuidv4(), content: "buy food" },
    { id: uuidv4(), content: "buy car" },
  ]);

//   useEffect(() => {
//     //
//   }, [])
  const deleteTodo = (todoId: string): void => {
    const updatedArray = todoList.filter((todo) => todo.id !== todoId);
    setTodoList(updatedArray);
  };

  const createTodo = (newTodo: ITodo) => {
    //todoList.push(newTodo) Do not do this, woont woek .
    //therefore react wont notice the change

    const updatedTodoList = [newTodo, ...todoList]; //Spread syntax, creates a new aeeay with the old todos and the new todo.
  setTodoList(updatedTodoList)
};
  const values: IContext = {
    createTodo,
    todoList,
    deleteTodo,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
}
