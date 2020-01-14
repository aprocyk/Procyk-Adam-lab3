document.addEventListener('DOMContentLoaded',appStart);

let startTime, clap, hihat, kick, openhat, ride, snare, tom, tink, stateChannel1;
let channel1 = [];


function appStart(){

    clap = document.querySelector('#aClap')
    boom = document.querySelector('#bBoom')
    hihat = document.querySelector('#hihat')
    kick = document.querySelector('#kick')
    openhat = document.querySelector('#openhat')
    ride = document.querySelector('#ride')
    snare = document.querySelector('#snare')
    tom = document.querySelector('#tom')
    tink = document.querySelector('#tink')
    stateChannel1 = 0;
    document.body.addEventListener('keypress',playSound);
    document
        .querySelector('#recordItCh1')
        .addEventListener('click',recordCh1)
    document
        .querySelector('#playItCh1')
        .addEventListener('click',playCh1)
    document
        .querySelector('#stopItCh1')
        .addEventListener('click',stopRecCh1)
    document
        .querySelector('#clearItCh1')
        .addEventListener('click',clearCh1)

}
function playSound(e){
    switch(e.code){
        case 'KeyA':
            clap.currentTime = 0;
            clap.play();
            break
        case 'KeyS':
            boom.currentTime = 0;
            boom.play();
            break
        case 'KeyD':
            hihat.currentTime = 0;
            hihat.play();
            break
        case 'KeyF':
            kick.currentTime = 0;
            kick.play();
            break
        case 'KeyG':
            openhat.currentTime = 0;
            openhat.play();
            break
        case 'KeyH':
            ride.currentTime = 0;
            ride.play();
            
            break
        case 'KeyJ':
            snare.currentTime = 0;
            snare.play();
            break
        case 'KeyK':
            tom.currentTime = 0;
            tom.play();
            break
        case 'KeyL':
            tink.currentTime = 0;
            tink.play();
            break
    }
}
function recordSoundCh1(e){
    switch(e.code){
        case 'KeyA':
            pushCh1(e);
            break
        case 'KeyS':
            pushCh1(e);
            break
        case 'KeyD':
            pushCh1(e);
            break
        case 'KeyF':
            pushCh1(e);
            break
        case 'KeyG':
            pushCh1(e);
            break
        case 'KeyH':
            pushCh1(e);
            break
        case 'KeyJ':
            pushCh1(e);
            break
        case 'KeyK':
            pushCh1(e);
            break
        case 'KeyL':
            pushCh1(e);
            break
    }
}
function playRecordSound(e){
    switch(e){
        case 'KeyA':
            clap.currentTime = 0;
            clap.play();
            break
        case 'KeyS':
            boom.currentTime = 0;
            boom.play();
            break
        case 'KeyD':
            hihat.currentTime = 0;
            hihat.play();
            break
        case 'KeyF':
            kick.currentTime = 0;
            kick.play();
            break
        case 'KeyG':
            openhat.currentTime = 0;
            openhat.play();
            break
        case 'KeyH':
            ride.currentTime = 0;
            ride.play();
            
            break
        case 'KeyJ':
            snare.currentTime = 0;
            snare.play();
            break
        case 'KeyK':
            tom.currentTime = 0;
            tom.play();
            break
        case 'KeyL':
            tink.currentTime = 0;
            tink.play();
            break
    }
}
function playCh1(){
    for(let i = 0; i < channel1.length; i++){
        setTimeout(playRecordSound, channel1[i].time, channel1[i].code);
    }
}
function stopRecCh1(){
    document.body.removeEventListener('keypress', recordSoundCh1);
    if(stateChannel1 === 1){
        document.querySelector("#stopItCh1").disabled = true;
        stateChannel1++;
    }
}
function recordCh1(){
    startTime = Date.now();
    document.body.addEventListener('keypress',recordSoundCh1);
    document.querySelector("#recordItCh1").disabled = true;
    stateChannel1++;
}
function clearCh1(){
    if(stateChannel1 === 2){
        channel1 = [];
        document.querySelector("#recordItCh1").disabled = false;
        document.querySelector("#stopItCh1").disabled = false;
        stateChannel1 = 0;
    }
}
function pushCh1(e){
    const time = Date.now() - startTime;
    channel1.push({
        code: e.code,
        time: time
    })
}