'use strict';

let i = 0;

const button = document.querySelector('button');
const mainNotes = document.querySelector('.main-notes');

const row = document.querySelector('.row');
const column = document.querySelector('.column')
const title = document.querySelector('.title');
const addTheNote = document.querySelector('.add-the-note');
const addColumn = document.querySelector('.add-column');
const newColumn = document.querySelector('.new-column');
/*
function pushTheNote() {
   const newNote = document.createElement('div'); 
    newNote.className = 'note';
    newNote.id = `0${i}`;
    mainNotes.appendChild(newNote);
    pusheTheTextarea();
}*/

function addNewColum (event) {
    if (!event.target.matches('div.new-column')) return

    const addNameColumn = document.createElement('input');

    addNameColumn.className = 'create-column';
    addNameColumn.setAttribute('type', 'text');
    
    //newColumn.classList.add('none');
    extinguishElement(newColumn);

    addColumn.appendChild(addNameColumn).focus();
   
    addNameColumn.onblur = function() {

        if(this.value == '') {
            addColumn.removeChild(addNameColumn);
            showElement(newColumn);
           // newColumn.classList.remove('none');
        } else {
            const newTitle = document.createElement('div');
            const title = document.createElement('span');

            title.innerHTML = addNameColumn.value;

            newTitle.className = 'title';
           // title.value = addNameColumn.value;
            addColumn.removeChild(addNameColumn);
            addColumn.removeChild(newColumn);
            addColumn.className = 'column';

            addColumn.appendChild(newTitle);
            newTitle.appendChild(title);
           
        }
    }

    /*const tit = document.createElement('div');
    const text = document.createElement('textarea');
    text.className = 'text';
    tit.className = 'title';
    text.setAttribute('autofocus', '')
    const allColumn = document.querySelectorAll('.column');
    const lastColumn = allColumn[allColumn.length - 1];
    
    lastColumn.appendChild(tit);
    
    tit.appendChild(text);

    
    addNote(lastColumn);
   const column = document.createElement('div');
    column.className = 'column';

    row.insertBefore(column, addColumn);
    addTitle();*/
}

function extinguishElement (elem) {
    elem.classList.add('none');
}

function showElement (elem) {
    elem.classList.remove('none');
}

function addTitle () {
    const tit = document.createElement('div');
    const text = document.createElement('textarea');
    text.className = 'text';
    tit.className = 'title';
    text.setAttribute('autofocus', '')
    const allColumn = document.querySelectorAll('.column');
    const lastColumn = allColumn[allColumn.length - 1];
    
    lastColumn.appendChild(tit);
    
    tit.appendChild(text);

    
    addNote(lastColumn);

}

function addNote (a) {
    if (a != undefined) {
        const addnote = document.createElement('div');
        addnote.className = 'note';

    }   
}

function pusheTheTextarea () {
    const k = document.getElementById(`0${i}`);
   
    const editorText = document.createElement('textarea');
    
    editorText.setAttribute('type', 'text');
    editorText.setAttribute('autofocus', '');
    editorText.setAttribute('maxlength', '54');
    k.appendChild(editorText); // переделать под textarea

    i++;
}

function toggleDone (event) {  //проверка в какой элемент попапл курсор
    if (!event.target.matches('div.note')) return  
    console.log('1');
    
} 



////mainNotes.addEventListener('click', toggleDone);

//button.addEventListener('click', pushTheNote);
addColumn.addEventListener('click', addNewColum);