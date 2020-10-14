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
  const text = document.createElement('p');
  const k = document.getElementById(`0${i}`);
  text.textContent = time.value;
  console.log('k: ', k);
  i++;
  k.appendChild(text);
  time.value = '';
}

function toggleDone (event) {  //проверка в какой элемент попапл курсор
    if (!event.target.matches('div.note')) return 
  numberNote = event.target;

} 

mainNotes.addEventListener('click', toggleDone);

st.addEventListener('click', pushTheNote);