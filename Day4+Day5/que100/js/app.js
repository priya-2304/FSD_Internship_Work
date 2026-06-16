import './errorBoundary.js';
import {addNote,removeNote} from './notes.js';
import {render} from './ui.js';

const form=document.getElementById('noteForm');
const search=document.getElementById('search');

form.addEventListener('submit',e=>{
e.preventDefault();
addNote({
id:Date.now(),
title:title.value,
content:content.value,
tags:tags.value?tags.value.split(',').map(x=>x.trim()):[]
});
form.reset();
render(search.value);
});

document.getElementById('notes').addEventListener('click',e=>{
if(e.target.dataset.action==='delete'){
removeNote(Number(e.target.closest('.note').dataset.id));
render(search.value);
}
});

search.addEventListener('input',e=>render(e.target.value));
render();