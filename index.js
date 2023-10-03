// Write your code here!
const newHeader = document.createElement('h1');

newHeader.id = 'victory';

newHeader.textContent = 'Brian Cherus is the champion';

document.body.appendChild(newHeader);

const mainElement = document.querySelector('#main');
if (mainElement) {
  mainElement.remove();
}