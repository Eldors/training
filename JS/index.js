'use strict';

const row = document.querySelector('.row');

function createFirstColumn () {
    const firstColumn = document.createElement('div');
    const firstAddColumnName = document.createElement('div');
    const firstEnterName = document.createElement('input');

    firstColumn.className = 'column';
    firstAddColumnName.className = 'create-column';
    firstEnterName.className = 'enter-name';
    firstEnterName.setAttribute('type', 'text');
    firstEnterName.setAttribute('value', 'добавить имя');
    row.appendChild(firstColumn);
    firstColumn.appendChild(firstAddColumnName);
    firstAddColumnName.appendChild(firstEnterName);
}

createFirstColumn();

function createAfterColumn () {
    const afterColumn = document.createElement('div');
    const addColumnName = document.createElement('div');
    const enterName = document.createElement('input');

    afterColumn.className = 'column';
    addColumnName.className = 'create-column';
    enterName.className = 'enter-name';
    enterName.setAttribute('type', 'text');
    enterName.setAttribute('value', 'добавить имя');
    row.appendChild(afterColumn);
    afterColumn.appendChild(addColumnName);
    addColumnName.appendChild(enterName);
}

function addNewColum (event) {
    console.log('1');
    if (!event.target.matches('div.create-column')) return
    const parentColumn = event.target.parentElement;
    const firstCh = parentColumn.firstChild;
    console.log('parentColumn: ', parentColumn);
    const inputName = document.querySelector('.enter-name');
    console.log('inputName: ', inputName);
    inputName.focus();
    inputName.value = '';
    inputName.onblur = function() {
        if(this.value == '') {
            inputName.value = 'Введите название';
        } else {
            parentColumn.removeChild(firstCh);         
            createTitle(inputName,parentColumn);
            createAfterColumn();
         }
    }
}

function createTitle(elem, parelem) {
    const newTitle = document.createElement('div');
    const title = document.createElement('span');

    title.innerHTML = elem.value;

    newTitle.className = 'title';

    parelem.appendChild(newTitle);
    newTitle.appendChild(title);
}

row.addEventListener('click', addNewColum);