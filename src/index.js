import "./styles.css";
import { Todo, TodoList } from "./classes";
import { actualizarConteo, crearTodoHtml } from "./js/componentes";

export const todoList = new TodoList();
todoList.todos.forEach(crearTodoHtml);
actualizarConteo()


 