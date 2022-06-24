'use strict';

const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector('.search input');

const generateTemplate = todo => {
    const html = `
        <li class="list-group-item d-flex justify-content-between aling-items-center">
            <span>${todo}</span>
            <span class="delete">&times;</span>
        </li>
    `;

    list.innerHTML += html;
};

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim().toLowerCase();

    if(todo.length) {
        generateTemplate(todo);
        addForm.reset();
    }
});

// delete todos
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

const filterTodos = term => {
    Array.from(list.children)
    .filter(todo => !todo.textContent.includes(term))
    .forEach(todo => todo.classList.add('filtered'));

    Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'));
};

//keyup event
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});