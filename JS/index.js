'use strict';

let i = 0;
let numberNote;
const time = document.querySelector('input');
const st = document.querySelector('button');
const mainNotes = document.querySelector('.main-notes');

function pushTheNote() {
    const newNote = document.createElement('div'); 
    newNote.className = 'note';
    newNote.id = `0${i}`;
    mainNotes.appendChild(newNote);
    
    pusheTheTextarea();
}

function pusheTheTextarea () {
    const k = document.getElementById(`0${i}`);
    console.log('k: ', k);
    i++;
}

function toggleDone (event) {  //проверка в какой элемент попапл курсор
    if (!event.target.matches('div.note')) return 

    const idElement = event.target.id;
   
    const editorText = document.createElement('div');
    const spanChild = document.getElementById(idElement).firstChild;
    editorText.setAttribute('contenteditable', 'true')
    spanChild.value = editorText.value;
    console.log('spanChild: ', spanChild);

    console.log('idElement: ', idElement);
   


    event.target.appendChild(editorText);
    

} 

mainNotes.addEventListener('click', toggleDone);

st.addEventListener('click', pushTheNote);