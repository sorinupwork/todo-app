import React, { useContext } from "react";
import Todo from "./Todo";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { TodosContext } from "./contexts/todos.context";

function TodoList() {
  const todos = useContext(TodosContext);
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <>
              <Todo {...todo} key={todo.id} />
              {i < todos.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
  return null;
}

export default TodoList;
