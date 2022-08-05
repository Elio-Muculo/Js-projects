const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const todo = input.value;

    if (todo) {
        const todoEl = document.createElement('li');
        todoEl.innerHTML = todo;

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle("completed");
        });

        todos.addEventListener('contextmenu', (e) => {
            e.preventDefault();

            todoEl.remove();
        });

        todos.appendChild(todoEl);  

        input.value = '';
    }
});