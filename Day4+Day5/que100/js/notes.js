import {getNotes,saveNotes} from './storage.js';
export function addNote(note){const n=getNotes();n.push(note);saveNotes(n);}
export function removeNote(id){saveNotes(getNotes().filter(x=>x.id!==id));}
export function updateNote(note){saveNotes(getNotes().map(x=>x.id===note.id?note:x));}