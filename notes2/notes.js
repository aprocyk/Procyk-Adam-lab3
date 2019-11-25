document.addEventListener('DOMContentLoaded', appStart)
let notesArr = []
let create 
let ttle 
let desc
let body  

class Note{
    constructor(title='', description=''){
        this.title = title
        this.description = description
        this.color = 'red'
        // let date = new Date()
        // this.created = date.toISOString()
        this.pinned = false
    }
}
function appStart(){
    
    create = document.querySelector('#crt')
        create.addEventListener('click', createNote)
    ttle = document.querySelector('#title')
    desc = document.querySelector('#desc')
    body = document.querySelector('body')
    fakeNote();
    loadNotes();
    
    
}
function fakeNote(){
    
    const nt = new Note()
    nt.title = 'Testowa notka'
    nt.description = 'To jest testowa notka, po dodaniu nowej zostanie ona usunięta'
    notesArr.push(nt)
    localStorage.setItem('test', JSON.stringify(notesArr))
    
}
function createNote(){
    localStorage.removeItem('test')
    const nt = new Note()
    nt.title = ttle.value
    nt.description = desc.value
    notesArr.push(nt)
    localStorage.setItem('notes', JSON.stringify(notesArr))
}

function loadNotes(){
    notesArr = JSON.parse(localStorage.getItem('notes'))
    notesArr = JSON.parse(localStorage.getItem('test'))
    notesArr.forEach(item => {
        const div = document.createElement('div')
        div.className = 'notka'
        div.id = item.title
        div.textContent = item.title+" "+item.description
        div.style.background = item.color
        body.appendChild(div)
         
    })
    
}



