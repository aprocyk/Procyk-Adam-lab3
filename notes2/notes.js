document.addEventListener('DOMContentLoaded', appStart)
let notesArr = []
let noteOut = []
let create
let ttle
let desc
let body
let clr
//let dlt


class Note {
    constructor(title = '', description = '', color='') {
        this.title = title
        this.description = description
        this.color = color
        // let date = new Date()
        // this.created = date.toISOString()
        this.pinned = false
    }

}
function appStart() {

    create = document.querySelector('#crt')
    create.addEventListener('click', createNote)
    ttle = document.querySelector('#title')
    desc = document.querySelector('#desc')
    body = document.querySelector('body')
    clr = document.querySelector('#color')
    
    
    if(localStorage.length > 0){
        loadNotes();
    }
        


}
function createNote() {
    
    let nt = new Note()
    nt.title = ttle.value
    nt.description = desc.value
    nt.color = clr.value
    notesArr.push(nt)
    localStorage.setItem('notes', JSON.stringify(notesArr))

}

function loadNotes() {
        
        notesArr = JSON.parse(localStorage.getItem('notes'))

        notesArr.forEach((item,index) => {
            const div = document.createElement('div')
            const bar = document.createElement('div')
            const content = document.createElement('div')
            const del = document.createElement('button')
            bar.className = 'bar'
            bar.innerHTML = item.title
            bar.style.background = 'lightgray'
            del.className = 'delbut'
            del.addEventListener('click',()=>{
                console.log(index)
                notesArr.splice(index, 1)
                localStorage.setItem('notes', JSON.stringify(notesArr))
                location.reload()
                
            })
            content.className = 'content'
            content.innerHTML = item.description 
            content.style.background = item.color
            div.id = item.title
            div.className = 'notka' 
            div.appendChild(bar)
            bar.appendChild(del)
            div.appendChild(content)
            body.appendChild(div)
        })
    
}




