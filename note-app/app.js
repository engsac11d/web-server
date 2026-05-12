import chalk from 'chalk'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'


import getNotes from './notes.js'



// Qeexidda amarka (Command definition)
yargs(hideBin(process.argv))
  .command({
    command: 'add',
    describe: 'Add a new note',
    handler(argv) {
      // Halkan waxaad ku qoraysaa waxa dhacaya marka amarka la bixiyo
      console.log('Adding a new note!')
     
    }
  })
  .command({
    command: 'remove',
    describe: 'remove a note',
    handler(argv) {
      // Halkan waxaad ku qoraysaa waxa dhacaya marka amarka la bixiyo
      console.log('removeing the note')
     
    }
  })
  .command({
    command: 'list',
    describe: 'list your note',
    handler(argv){
        console.log("listing out all notes")
    }
  })
  .command({
    command:'read',
    describe:'read a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'

        }
    },
    handler(argv){
        console.log("Title: "+ argv.title)
    }
  })


  .parse() // Tani waa muhiim si koodhku u falanqeeyo amarkaaga


//   yargs(hideBin(process.argv))
//   .command({
//     command: 'add',
//     describe:'remove a note',
//     handler(argv){
//         console.log('removing the note')
//     }

//   })
//   .parse()

const argv = yargs(hideBin(process.argv)).parse()

console.log(process.argv)
console.log(argv)