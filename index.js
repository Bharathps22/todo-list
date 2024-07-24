document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-btn');
    const inputField = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', addTodo);

    function addTodo() {
        const todoText = inputField.value.trim();
        if (todoText !== '') {
            const todoItem = document.createElement('li');
            todoItem.classList.add('todo-item');
            todoItem.textContent = todoText;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-btn');
            removeButton.addEventListener('click', () => {
                todoItem.remove();
            });

            todoItem.appendChild(removeButton);
            todoList.appendChild(todoItem);
            inputField.value = '';
        }
    }

    todoList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('completed');
        }
    });
});
