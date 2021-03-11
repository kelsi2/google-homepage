const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.textContent = 'Hey I\'m red!';
para.style.color = 'red';

container.appendChild(para);

const h3 = document.createElement('h3');
h3.textContent = 'I\'m a blue h3!';
h3.style.color = 'blue';

container.appendChild(h3);

const div = document.createElement('div');
div.style.border = '1px solid black';
div.style.backgroundColor = 'pink';

const h1 = document.createElement('h1');
h1.textContent = 'I\'m in a div';

const divPara = document.createElement('p');
divPara.textContent = 'ME TOO!'

div.appendChild(h1);
div.appendChild(divPara);

container.appendChild(div);