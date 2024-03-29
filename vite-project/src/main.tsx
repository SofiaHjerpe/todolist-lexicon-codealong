import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TodoContextProvider } from './context/TodoContextProvider.tsx'
import { TodoList } from './TodoList.tsx'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TodoContextProvider>
      <App />
     
    </TodoContextProvider>
  </React.StrictMode>
);
