import { useContext, useState } from 'react'
import './App.css'
import { TodoContext } from './context/TodoContextProvider'
import { TodoList } from './TodoList';
import { CreateTodo } from './CreateTodo';

function App() {



    const {todoList} = useContext(TodoContext)
      return (
        <>
        <CreateTodo />
          <TodoList />
        </>
      );
}

export default App
