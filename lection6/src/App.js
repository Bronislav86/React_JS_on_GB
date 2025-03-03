import React from "react";
import './App.css';
import CounterComponent from "./components/CounterComponent";
import ButtonComponent from "./components/ButtonComponent";
import ButtonComponentDecrement from "./components/ButtonComponentDecrement";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

//npm install react-redux
//npm install @reduxjs/toolkit

function App() {
    return (
        <div>
            <CounterComponent/>
            <ButtonComponent/>
            <ButtonComponentDecrement/>
            <h2>Список задач</h2>
            <AddTodo/>
            <TodoList/>
            <TodoFilter/>
        </div>
    );
}

export default App;
