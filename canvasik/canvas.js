document.addEventListener('DOMContentLoaded', appStart)

let canvas
let ctx

function appStart(){
    //get canvas
    canvas = document.querySelector('#canvas')
    document
        .querySelector('#darken')
        .addEventListener('click',() => darkenImage())
    ctx = canvas.getContext('2d')
    drawCanvasImage()
}
function drawCanvasImage(){
    const image = new Image()
    image.src = 'pobrane.png'
    image.addEventListener('load', ()=>{
        ctx.drawImage(image, 0, 0, 400, 300)
    })
}
function darkenImage(amount = 30){
    const canvasData = ctx.getImageData(0, 0, 200, 150)
    console.log(canvasData)

    for(let i = 0; i<canvasData.data.length; i++){
        canvasData.data[i] -= amount
    }
    
    ctx.putImageData(canvasData,0,0)
}