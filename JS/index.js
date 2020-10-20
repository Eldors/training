'use strict';

let i = 0;

const button = document.querySelector('button');
const mainNotes = document.querySelector('.main-notes');
const row = document.querySelector('.row');
const column = document.querySelector('.column')
const addColumn = document.querySelector('.add-column');
const newColumn = document.querySelector('.new-column');

function pushTheNote() {
    const newcolumn = document.createElement('div');
    newcolumn.className = 'column';
    row.insertBefore(newcolumn, addColumn);
   /* const newNote = document.createElement('div'); 
    newNote.className = 'note';
    newNote.id = `0${i}`;
    mainNotes.appendChild(newNote);
    
    pusheTheTextarea();*/
}

function pusheTheTextarea () {
    const k = document.getElementById(`0${i}`);
   
    const editorText = document.createElement('input');
    
    editorText.setAttribute('type', 'text');
    editorText.setAttribute('autofocus', '');
    editorText.setAttribute('maxlength', '54');
    //k.appendChild(editorText); // переделать под textarea

    i++;
}

function toggleDone (event) {  //проверка в какой элемент попапл курсор
    if (!event.target.matches('div.note')) return  
    console.log('1');
    
} 

function addNewColum (event) {
    if (!event.target.matches('div.new-column')) return   
    pushTheNote();
    console.log(event.target);
}
mainNotes.addEventListener('click', toggleDone);

button.addEventListener('click', pushTheNote);
addColumn.addEventListener('click', addNewColum);