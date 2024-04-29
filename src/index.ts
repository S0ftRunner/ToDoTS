import "./styles/styles.css";
import { Page } from "./components/Page";
import { todos } from "./utils/constants";
import { Item } from "./components/Item";
import { Form } from "./components/Form";
import { ToDoModel } from "./components/ToDoModel";

const contentElement = document.querySelector(".content") as HTMLElement;

const itemTemplate = document.querySelector(
  ".#todo-item-template"
) as HTMLTemplateElement;
const formTemplate = document.querySelector(
  ".#todo-form-template"
) as HTMLTemplateElement;

const page = new Page(contentElement);

const todoModel = new ToDoModel();
todoModel.items = todos;

const todoForm = new Form(formTemplate);  
todoForm.setHandler(handleFormSubmit);

page.formContainer = todoForm.render();

function handleFormSubmit(data: string) {
  todoModel.addItem(data);
  todoForm.clearValue();
  renderTodoItems();
}


function renderTodoItems() {
  page.todoContainer = todoModel.items.map((item) => {
    const todoItem = new Item(itemTemplate);
    const itemElement = todoItem.render(item);
    return(itemElement);
  }).reverse();
}

renderTodoItems();
