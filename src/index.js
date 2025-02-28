console.log('Hello, world!');

//DOM

const dom = {
    input: document.getElementById('input'),
    submitButton: document.getElementById('submit'),
    displayArea: document.getElementById('display-area')
};

//DATA

let tasks = [];

// Button Events

dom.submitButton.addEventListener('click', () => {
    clickSubmit();
});

dom.input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        clickSubmit();
    }
});

//FUNCTIONS

function updateDisplay() {
    // Empty the display area

    dom.displayArea.innerHTML = '';

    // Go through the tasks[] to load all elements

    tasks.forEach((task, index) => {
        const taskElement = document.createElement('div');

        taskElement.classList.add('task');

        //Each taskElement consists of the text, edit button and done button.

        taskElement.innerHTML = `
      <span class="task-text"> • ${task}</span>
      <button class="task-edit">Edit</button>
      <button class="task-done">Done</button>
    `;

        //Make the task elements JavaScript Object

        const editButton = taskElement.querySelector('.task-edit');
        const doneButton = taskElement.querySelector('.task-done');

        // Task buttons event

        editButton.addEventListener('click', () => {
            dom.input.value = tasks[index];
            tasks.splice(index, 1);
            updateDisplay();
        });

        doneButton.addEventListener('click', () => {
            tasks.splice(index, 1);
            updateDisplay();
        });

        //Add each element to the display area

        dom.displayArea.append(taskElement);
    });
}

function clickSubmit() {
    const taskInput = dom.input;

    // Add input to tasks[]

    if (taskInput.value.trim() !== '') {
        tasks.push(taskInput.value);
    }

    // Empty the input box

    dom.input.value = '';

    // Update the display area

    updateDisplay();
}
