import "./styles/styles.css";
import { Page } from "./components/Page";
import { todos } from "./utils/constants";
import { ToDoModel } from "./components/ToDoModel";
import { ItemPresenter } from './components/ToDoPresenter';
import { Form } from "./components/Form";
import { Item } from "./components/Item";
import { Popup } from "./components/Popup";

const contentElement = document.querySelector(".content") as HTMLElement;

const popup = document.querySelector('.popup') as HTMLElement;

const itemContainer = new Page(contentElement);

const todoModel = new ToDoModel();
todoModel.items = todos;

const modal = new Popup(popup);

const itemPresenter = new ItemPresenter(todoModel, Form, itemContainer, Item, modal);

itemPresenter.init();
itemPresenter.renderView();