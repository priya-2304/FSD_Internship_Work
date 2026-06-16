const KEY='notes';
export const getNotes=()=>JSON.parse(localStorage.getItem(KEY)||'[]');
export const saveNotes=n=>localStorage.setItem(KEY,JSON.stringify(n));