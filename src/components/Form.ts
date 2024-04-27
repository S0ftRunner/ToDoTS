export class From {
  protected formElement: HTMLFormElement;
  protected inputField: HTMLInputElement;

  constructor(formElement: HTMLFormElement, protected handleFormSubmit: Function) {
    this.formElement = formElement;
    this.inputField = this.formElement.querySelector('.todo-form__input');
    this.formElement.addEventListener('submit', evt => {
      evt.preventDefault();
      this.handleFormSubmit(this.inputField);
    })
  }

  render() {
    return this.formElement;
  }

  setValue(data: string) {
    this.inputField.value = data;
  }

  getValue() {
    return this.inputField.value;
  }

  clearValue() {
    this.formElement.reset();
  }
}