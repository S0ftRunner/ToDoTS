import { IToDoModel } from "../types";
import { IViewItem, IViewItemConstructor } from "./Item";
import { IForm, IFormConstructor } from "./Form";
import { IPage } from './Page';
/**
 * Презентер отвечает за взаимодействие между классами рендера и работы с данными. Паттерн Facade
 */
export class ItemPresenter {
  protected itemTemplate: HTMLTemplateElement;
  protected formTemplate: HTMLTemplateElement;
  protected todoForm: IForm;
  protected todoEditForm: IForm;

  constructor(
    protected model: IToDoModel,
    protected formConstuctor: IFormConstructor,
    protected viewPageContainer: IPage,
    protected viewItemConstructor: IViewItemConstructor
  ) {
    this.itemTemplate = document.querySelector('#todo-item-tempplate') as HTMLTemplateElement;
    this.formTemplate = document.querySelector('#todo-form-template') as HTMLTemplateElement;
  }

  init() {
    this.todoForm = new this.formConstuctor(this.formTemplate);
    this.todoForm.setHandler(this.handleFormSubmit.bind(this));
    this.viewPageContainer.formContainer = this.todoForm.render();
  }

  handleFormSubmit(data: string) {
    this.model.addItem(data);
    this.renderView();
    this.todoForm.clearValue();
  }

  renderView() {
    const itemList = this.model.items.map(item => {
      const todoItem = new this.viewItemConstructor(this.itemTemplate);
      const itemElement = todoItem.render(item);
      return itemElement;
    }).reverse();

    this.viewPageContainer.todoContainer = itemList;
  }
}