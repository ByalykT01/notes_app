const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version('17.7.2')

// Create add command

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Body of a note',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) =>{
    notes.addNote(argv.title, argv.body)
  }

})

// Create remove command

yargs.command({
  command: 'remove',
  describe: 'Remove note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.removeNote(argv.title)
  }
})

yargs.command({
  command: 'list',
  describe: 'List notes',
  handler: () => {
    notes.listNotes()
  }
})


yargs.command({
  command: 'read',
  describe: 'read notes',
  handler: () => {
    console.log('Reading notes')
  }
})


yargs.parse()