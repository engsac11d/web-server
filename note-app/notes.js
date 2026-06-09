import fs from 'fs';
import chalk from 'chalk'
const getNotes = () => {
    return 'Your notes...';
};

// 1. Shaqada ku darista Note-ka iyo hubinta duplicate-ka
const addNote = (title, body) => {
    const notes = loadNotes();
    
    // Waxay shaandhaynaysaa haddii uu jiro note isku ciwaan ah
    const duplicateNote = notes.find((note) => note.title === title)

    debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'));
    } else {
        console.log(chalk.red.inverse('Note title is taken!'));
    }
};
const removeNote = (title) => {
    // 1. Soo rar dhammaan note-yadii horey u jiray
    const notes = loadNotes();
    
    // 2. Shaandhee: Reeb dhammaan kuwa aan la midka ahayn title-ka la soo dhiibay
    const notesToKeep = notes.filter((note) => note.title !== title);

    // 3. Isbarbardhig dhererka array-yada si loo ogaado in wax la tirtiray
    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep); // Badbaadi liiska cusub ee uu ka maqan yahay kan la delete-gareeyay
        console.log(chalk.green.inverse('Note removed!'));
    } else {
        console.log(chalk.red.inverse('No note found!')); // Haddii ciwaanka la soo dhiibay barnaamijku uu waayo
    }
};
// 2. Shaqada kaydisa Notes-ka
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

// 3. Shaqada soo akhrida Notes-ka jiray
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

const listNotes = () => {
    
    console.log(chalk.inverse("your Notes"))

    const notes = loadNotes()

    notes.forEach((note) => {
        console.log(note.title)
    })



}

const readNotes = (title) => {
    const notes = loadNotes()

    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.yellow.inverse(note.title))
        console.log(chalk.inverse(note.body))

    } else {
        console.log(chalk.red.inverse('Note not found!'))

    }

}

export { addNote, getNotes, removeNote, listNotes, readNotes};