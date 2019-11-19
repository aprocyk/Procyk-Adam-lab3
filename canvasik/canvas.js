document.addEventListener('DOMContentLoaded', appStart)

var imageLoader
let canvas
let ctx


function appStart(){
    //get canvas
    imageLoader = document.getElementById('imageLoader')
        imageLoader.addEventListener('change', handleImage, false)
    canvas = document.querySelector('#canvas')
    
    
    document
        .querySelector('#darken')
        .addEventListener('click',() => darkenImage())
    
    ctx = canvas.getContext('2d')
    //drawCanvasImage()
}
// function drawCanvasImage(){
//     const image = new Image()
//     image.src = 'zabka.jpg'
//     image.addEventListener('load', ()=>{
//         ctx.drawImage(image, 0, 0)
//     })
//}
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