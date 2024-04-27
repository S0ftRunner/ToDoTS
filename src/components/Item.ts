import {IItem} from '../types/index'

export class Item {
  protected itemElement: HTMLElement;
  protected title: HTMLElement;
  protected _id: string;

  constructor(template: HTMLTemplateElement) {
    this.itemElement = template.content.querySelector('.todo-item').cloneNode(true) as HTMLElement;
    this.title = this.itemElement.querySelector('.todo-item__text');
  }

  get id(): string {
    return this._id || '';
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this.title.textContent || '';
  }

  set name(value: string) {
    this.title.textContent = value;
  }



  render(item: IItem) {
    this.name = item.name;
    this.id = item.id;
    return this.itemElement;
  }
}