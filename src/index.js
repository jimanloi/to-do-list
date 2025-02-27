console.log('Hello, world!');

//DOM

const dom = {
    input: document.getElementById('input'),
    submitButton: document.getElementById('submit'),
    displayArea: document.getElementById('display-area')
};

//DATA

let tasks = [];

dom.submitButton.addEventListener('click', () => {
    const taskInput = dom.input;

    // Add input to tasks[]

    if (taskInput !== '') {
        tasks.push(taskInput.value);
    }

    // Empty the input box

    dom.input.value = '';

    // Update the display area

    updateDisplay();
});

//FUNCTIONS

function updateDisplay() {
    // Empty the display area

    dom.displayArea.innerHTML = '';

    // Go through the tasks[] to load all elements

    tasks.forEach((task) => {
        const taskElement = document.createElement('div');

        taskElement.classList.add('task');

        //Each taskElement consists of the text, edit button and done button.

        taskElement.innerHTML = `
      <span class="task-text"> • ${task}</span>
      <button class="task-edit">Edit</button>
      <button class="task-done">Done</button>
    `;

        //Add each element to the display area

        dom.displayArea.append(taskElement);
    });
}
