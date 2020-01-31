const elements = {
  formInput: document.querySelector('.form__input'),
  formSubmit: document.querySelector('.form__submit'),
  todo: document.querySelector('.todo')
};

function clearInput() {
  elements.formInput.value = '';
}

function getInput() {
  elements.formSubmit.addEventListener('click', e => {
    e.preventDefault();
    const inputVal = elements.formInput.value;
    const todoList = `
        <li>${inputVal} ........................... <span class="list-remove">X</span></li>
    `;
    clearInput();
    elements.todo.insertAdjacentHTML('afterbegin', todoList);

    document.querySelector('.list-remove').addEventListener('click', e => {
      e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    });
  });
}

getInput();
