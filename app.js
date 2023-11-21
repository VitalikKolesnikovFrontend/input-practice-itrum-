const inputLog = document.querySelector('#input-log');
const inputClear = document.querySelector('#input-clear');
const inputBlock = document.querySelector('#input-block');
const inputHide = document.querySelector('#input-hide');
const inputColor = document.querySelector('#input-color');
const inputCreate = document.querySelector('#input-create');
const inputRemove = document.querySelector('#input-remove');
const searchForm = document.querySelector('search-form');
const input = document.querySelector('.input');
const form = document.querySelector('form');
const newDiv = document.querySelector('newDiv');
const newInput = document.querySelector('#new-input');
const inputRemoveNth = document.querySelector('#input-remove-nth');
const newBlocks = document.querySelector('.new-blocks');

inputLog.addEventListener('click', () => {
  console.log(input.value);
});

inputClear.addEventListener('click', () => {
  input.value = '';
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  input.disabled = true;
});

inputBlock.addEventListener('click', () => {
  if (input.disabled === false) {
    input.disabled = true;
  } else {
    input.disabled = false;
  }
});

inputHide.addEventListener('click', () => {
  if (form.style.display === '') {
    form.style.display = 'none';
  } else {
    form.style.display = '';
  }
});

inputColor.addEventListener('click', () => {
  const arrColor = ['black', 'red', 'blue', 'green'];
  const randomColor = Math.floor(Math.random() * arrColor.length);
  input.style.backgroundColor = arrColor[randomColor];
  console.log(input.style.backgroundColor);
});

let newArray = [];
inputCreate.addEventListener('click', () => {
  let newDiv = document.createElement('div');
  newDiv.className = 'newDiv';
  newDiv.textContent = input.value;
  newBlocks.appendChild(newDiv);
  input.value = '';
  newArray.push(newDiv);
  newDiv.id = newArray.length;
  console.log(newArray);
});

inputRemove.addEventListener('click', () => {
  newBlocks.lastChild.remove();
  newArray.pop();
  console.log(newArray);
});

inputRemoveNth.addEventListener('click', () => {
  const count = newInput.value
  newArray[count].remove();
})
