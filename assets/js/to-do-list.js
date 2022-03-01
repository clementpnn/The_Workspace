const form = document.querySelector('form');
const list = document.querySelector('ul');
const input = document.querySelector('form input');

let allTask = [];

form.addEventListener('submit', event => {
    event.preventDefault();

    const text = input.value.trim();

    if (text !== '') {
        addATask(text);
        input.value = ''; // pour vider l'input
}
})

function addATask(text) {

    const todo = {
        text,
        id: Date.now() // créé un id
    }
    
    showList(todo);
}

function showList(todo) {

    // créé un 'li' avec l'atribut data-key="id"
    const item = document.createElement('li');
    item.setAttribute('data-key', todo.id);

    // créé un 'input' avec l'atribut type="checkbox"
    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.addEventListener('click', taskDone);
    item.appendChild(input);

    // ajouter un 'span' avec le text entrer pour l'utilisateur
    const txt = document.createElement('span');
    txt.innerText = todo.text;
    item.appendChild(txt);

    // créé le boutton de 'delete'
    const btn = document.createElement('button');
    btn.addEventListener('click', deleteTask);
    const img = document.createElement('img');
    img.setAttribute('src', 'assets/img/to-do/cross.svg');
    btn.appendChild(img);
    item.appendChild(btn);

    // ajouter item 'li' et tout les éléments enfant dans list 'ul'
    list.appendChild(item);
    // ajouter item au tableau
    allTask.push(item);
}

function taskDone(e) {

    e.target.parentNode.classList.toggle('endOfTask')
}

function deleteTask(e) {

    allTask.forEach(el => {

        // supprimer l'élément
        if(e.target.parentNode.getAttribute('data-key') === el.getAttribute('data-key')) {
            el.remove();
            
            allTask = allTask.filter(li => li.dataset.key !== el.dataset.key);
        }
    })
}