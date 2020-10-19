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
   
    const editorText = document.createElement('input');
    
    editorText.setAttribute('type', 'text');
    editorText.setAttribute('autofocus', '');
    editorText.setAttribute('maxlength', '54');
    k.appendChild(editorText); // переделать под textarea

    i++;
}

function toggleDone (event) {  //проверка в какой элемент попапл курсор
    if (!event.target.matches('div.note')) return   
} 

mainNotes.addEventListener('click', toggleDone);

st.addEventListener('click', pushTheNote);