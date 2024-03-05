import "./App.css";
import Header from "./components/Header";
import {Footer} from "./components/Footer";
import {Todos} from "./components/Todos";
import {TodoItem} from "./components/TodoItem";
import { useState } from "react";
import {AddTodo} from "./components/AddTodo";


export function App (){

  let onDelete = (todo) =>{
    console.log("I am onDelete of todo", todo);
    // Deleting this way in react does not work, we will have to use useState
    // let index = todo.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e)=>{
      return e !== todo;
    }))
  }

  const [todos, setTodos] = useState([       // useState is a hook function
    {
    sno: 1, 
    title: "go to the market",
    description: "to bring vegetables"
    },
    {
      sno: 2, 
      title: "go to the school",
      description: "to study"
      },
      {
        sno: 3, 
        title: "go to the shop",
        description: "to bring soap"
        },

  ])
  return (
    <>
    <Header  title= "MyTodoList" searchBar={false} />
    <AddTodo/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

// export default App;
