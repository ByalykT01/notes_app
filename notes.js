const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
  return 'your notes.'
}

// Function that adds notes

const addNote = (title, body) => {
  const notes = loadNotes()

  const duplicateNotes = notes.filter((note) => {
    return note.title === title
  })
  if (duplicateNotes.length == 0) {
    notes.push({
    title: title,
    body: body
  })
  saveNotes(notes)
  console.log(chalk.bgGreen('New note added!'))
  }
  else {
    console.log(chalk.bgRed('Title is taken'))
  }
}

//Function that removes notes

const removeNote = (title) => {
  const notes = loadNotes()
  
  const notesToKeep = notes.filter( (note) => {
    return note.title !== title
  })
  
  if (notesToKeep.length != notes.length){
    saveNotes(notesToKeep)
    console.log(chalk.bgGreen('The note has been successfully removed'))
  }
  else {
    console.log(chalk.bgRed('Error - there is no note with title ' + title))
  }

}

//Function that list notes

const listNotes = () => {
  console.log(chalk.italic.inverse('Your notes \n'))
  const notes = loadNotes()

  notes.forEach((note) => {
    console.log(chalk.bold(note.title))
    console.log(note.body + '\n')
  });
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)    
  } catch (e) {
    return []
  }
}  


module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes
}