//fonctinos sur tableau

const notes = [12, 17, 18, 8, 9];

console.log(notes.at(-1));

const goodNotes = notes.filter(note => note >= 10);  
console.log(goodNotes);

const found = notes.find(note => note > 15);  //on a aussi findLast
console.log(found);

const indexFound = notes.findIndex(note => note > 15); //et findLastIndex
console.log(indexFound);

notes.forEach((note,index) => {
    console.log(note,index);
});

notes.forEach((note, index) => console.log(note, index));

const mot = "foo";
const reMot = Array.from(mot);
console.log(reMot);

console.log(notes.includes(12));

console.log(notes.indexOf(18));

console.log(notes.join('.'));

const newNotes = notes.map(note => note * 2);
console.log(newNotes);

console.log(notes.reduce((acc, note) => acc + note, 0));

console.log(notes.shift(), notes);

console.log(notes.slice(2,4));

console.log(notes.slice().shift(), notes);

console.log(notes.push(5), notes);

console.log(notes.unshift(5), notes);


//Fonction sur objet :


