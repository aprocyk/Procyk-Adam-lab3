document.addEventListener('DOMContentLoaded', appStart)

var imageLoader
let canvas
let ctx
let brushsize
let brushout
let brushcolor



function appStart(){
    //get canvas
    const ps = new Photoshop('canvas');

    imageLoader = document.getElementById('imageLoader')
        imageLoader.addEventListener('change', handleImage, false)
    
    canvas = document.querySelector('#canvas')

    document.querySelector('#circleBrush')
        .addEventListener('click', () => ps.setBrushShape('circle')) 

    document.querySelector('#squareBrush')
        .addEventListener('click', () => ps.setBrushShape('square'))
    brushout = document.querySelector('#brushsizeout')
    brushsize = document.querySelector('#sizeBrush')
    brushsize.addEventListener('mouseup',function(){
        brushout.innerHTML = brushsize.value
        ps.setBrushSize(brushsize.value)
    })
    brushcolor = document.querySelector('#brushcolor')
    brushcolor.addEventListener('change',() => ps.setBrushColor(brushcolor.value))
    brushsize.value = 10
    brushout.innerHTML = brushsize.value
    brushcolor.value = 'black';
    
     
        
    
    
    document
        .querySelector('#darken')
        .addEventListener('click',() => darkenImage())

    ctx = canvas.getContext('2d')
}
function handleImage(e){
    var reader = new FileReader()
    reader.onload = function(event){
        var image = new Image()
        image.onload = function(){
            canvas.width = 1200
            canvas.height = 800
            ctx.drawImage(image,0,0)
        }
        image.src = event.target.result
    }
    reader.readAsDataURL(e.target.files[0])
    
}
function darkenImage(amount = 30){
    const canvasData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    console.log(canvasData)

    for(let i = 0; i<canvasData.data.length; i++){
        canvasData.data[i] -= amount
    }
    
    ctx.putImageData(canvasData,0,0)
}