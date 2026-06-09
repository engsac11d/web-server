import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { getNotes, addNote, removeNote, listNotes, readNotes } from './notes.js';

yargs(hideBin(process.argv))
    .command({
        command: 'add',
        describe: 'Add a new note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'Note body',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            addNote(argv.title, argv.body);
        }
    })
    .command({
        command: 'remove',
        describe: 'Remove a note',
        builder: {
          title: {
            describe: 'Note title',
            demandOption: true,   // Khasab ka dhig ciwaanka note-ka la tirtirayo
            type: 'string'
           }
        
        },
        handler(argv) { // <-- SAX: 'argv' hadda waa la dhex dhigay qawska!
         removeNote(argv.title); // <-- SAX: Kaliya title-ka u baas gareey notes.js
        }
    })
    .command({
        command: 'list',
        describe: 'List your notes',
        handler() {
            listNotes()
        }
    })
    .command({
        command: 'read',
        describe: 'Read a note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true ,
                tyep: 'string'
            }
        },
        
        handler(argv) {
            readNotes(argv.title )
        }
    })
    .parse(); // Xariiqan ayaa muhiim u ah in amarku fulo oo uu console-ka wax ku soo qoro
    
