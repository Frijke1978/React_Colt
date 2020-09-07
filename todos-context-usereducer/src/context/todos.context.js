import React, { createContext, useReducer } from "react";
import todoReducer from "../reducer/todo.reducer";
import useTodoState from "../hooks/useTodoState";
import { unstable_createMuiStrictModeTheme } from "@material-ui/core";
const defaultTodos = [
    { id: 1, task: "Mow the lawn using goats", completed: false },
    { id: 2, task: "Release lady bugs in the garden", completed: true }
];
export const TodosContext = createContext();

export function TodosProvider(props) {
    const [todos, dispatch] = useReducer(todoReducer, defaultTodos)
    return (
        <TodosContext.Provider value={{todos, dispatch}}>
            {props.children}
        </TodosContext.Provider>
    );
};

