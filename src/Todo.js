import React, { useContext, memo } from "react";
import useToggleState from "./hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Checkbox, IconButton, ListItemSecondaryAction } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { DispatchContext } from "./contexts/todos.context";

function Todo({ id, task, completed }) {
  const dispatch = useContext(DispatchContext);
  const [isEditing, toggle] = useToggleState(false);

  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditTodoForm id={id} task={task} toggleEditForm={toggle} />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={() => dispatch({ type: "TOGGLE", id: id })}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() => dispatch({ type: "REMOVE", id: id })}
            >
              <Delete />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggle}>
              <Edit />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}
export default memo(Todo);
