import React, { useContext } from "react";
import TodoList from "./TodoList";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todo-context";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoList
          key={item.id}
          text={item.text}
          onRemove={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
