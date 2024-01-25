const form = document.querySelector('#name-form');
const computerResponse = document.querySelector('#computer-response');
const enemies = ['Glen', 'Chad', 'Bert']

form.addEventListener('submit', e => {
  e.preventDefault();
  const userInput = document.querySelector('#user-input').value;
  
  if(enemies.includes(userInput)) {
    computerResponse.textContent = 'Go Away!';
  } else {
    computerResponse.textContent = `Hello, ${userInput}`;
  }
  
});


