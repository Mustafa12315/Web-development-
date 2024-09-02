
function checkAnswers() {
    const feedback = document.getElementById('feedback');
    let correctAnswers = 0;
    
    // Check capital of India (checkboxes)
    const q1Options = document.querySelectorAll('input[name="q1"]');
    const correctQ1 = document.getElementById('q1_option4'); // Delhi
    let correctQ1Checked = false;

    q1Options.forEach(option => {
        if (option.checked && option === correctQ1) {
            correctQ1Checked = true;
        }
    });

    if (correctQ1Checked) {
        correctAnswers++;
    }
    
    // Check capital of New Zealand (radio buttons)
    const q2Option = document.querySelector('input[name="q2"]:checked');
    const correctQ2 = document.getElementById('q2_option2'); // Auckland
    
    if (q2Option && q2Option === correctQ2) {
        correctAnswers++;
    }
    
    // Check author of 'Hamlet'
    const authorInput = document.getElementById('author').value.trim();
    const correctAuthor = 'Shakespeare'; // The correct answer
    
    if (authorInput.toLowerCase() === correctAuthor.toLowerCase()) {
        correctAnswers++;
    }

/*Taken from Chat Gpt but will learn the function of it */
// Get references to the draggable elements and droppable areas
const draggableElement1 = document.getElementById('draggable');
const draggableElement2 = document.getElementById('draggable2');
const droppableArea1 = document.getElementById('droppable');
const droppableArea2 = document.getElementById('droppable2');

// Event handler for when dragging starts
function handleDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}

// Event handler for when dropping occurs
function handleDrop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    const draggableElement = document.getElementById(data);

    // Check if the drop target is a droppable area
    if (event.target.id === 'droppable' || event.target.id === 'droppable2') {
        event.target.appendChild(draggableElement);
    }
}

// Event handler for when a draggable element is being dragged over the droppable area
function handleDragOver(event) {
    event.preventDefault();
    event.target.classList.add('drag-over');
}

// Event handler for when the draggable element leaves the droppable area
function handleDragLeave(event) {
    event.target.classList.remove('drag-over');
}

// Attach event handlers to the draggable elements
draggableElement1.addEventListener('dragstart', handleDragStart);
draggableElement2.addEventListener('dragstart', handleDragStart);

// Attach event handlers to the droppable areas
droppableArea1.addEventListener('dragover', handleDragOver);
droppableArea1.addEventListener('dragleave', handleDragLeave);
droppableArea1.addEventListener('drop', handleDrop);

droppableArea2.addEventListener('dragover', handleDragOver);
droppableArea2.addEventListener('dragleave', handleDragLeave);
droppableArea2.addEventListener('drop', handleDrop);
/* Till here */

    // Provide feedback
    feedback.textContent = `You got ${correctAnswers} out of 3 questions correct!`;
}
