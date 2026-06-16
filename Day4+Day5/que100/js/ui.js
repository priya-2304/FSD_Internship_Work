import {getNotes} from './storage.js';
import {highlight} from './utils.js';
import {filterNotes} from './search.js';
export function render(search=''){
const wrap=document.getElementById('notes');
let notes=filterNotes(getNotes(),search);
wrap.innerHTML=notes.map(n=>`<div class="note" data-id="${n.id}">
<h3>${highlight(n.title,search)}</h3>
<p>${highlight(n.content,search)}</p>
<div>${n.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
<button data-action="delete">Delete</button>
</div>`).join('');
}