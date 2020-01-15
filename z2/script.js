document.addEventListener('DOMContentLoaded',appStart);

let startTime, clap, hihat, kick, openhat, ride, snare, tom, tink, stateChannel1, stateChannel2, stateChannel3, stateChannel4;
let channel1 = [];
let channel2= [];
let channel3= [];
let channel4= [];

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
    stateChannel2 = 0;
    stateChannel3 = 0;
    stateChannel4 = 0;
    document.body.addEventListener('keypress',playSound);
    document.body.addEventListener('keydown',activatePad);
    document.body.addEventListener('keyup',deactivatePad);
    document
        .querySelector('#playAll')
        .addEventListener('click',playAll)
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
    document
        .querySelector('#recordItCh2')
        .addEventListener('click',recordCh2)
    document
        .querySelector('#playItCh2')
        .addEventListener('click',playCh2)
    document
        .querySelector('#stopItCh2')
        .addEventListener('click',stopRecCh2)
    document
        .querySelector('#clearItCh2')
        .addEventListener('click',clearCh2)
    document
        .querySelector('#recordItCh3')
        .addEventListener('click',recordCh3)
    document
        .querySelector('#playItCh3')
        .addEventListener('click',playCh3)
    document
        .querySelector('#stopItCh3')
        .addEventListener('click',stopRecCh3)
    document
        .querySelector('#clearItCh3')
        .addEventListener('click',clearCh3)
    document
        .querySelector('#recordItCh4')
        .addEventListener('click',recordCh4)
    document
        .querySelector('#playItCh4')
        .addEventListener('click',playCh4)
    document
        .querySelector('#stopItCh4')
        .addEventListener('click',stopRecCh4)
    document
        .querySelector('#clearItCh4')
        .addEventListener('click',clearCh4)

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
function recordSoundCh2(e){
    switch(e.code){
        case 'KeyA':
            pushCh2(e);
            break
        case 'KeyS':
            pushCh2(e);
            break
        case 'KeyD':
            pushCh2(e);
            break
        case 'KeyF':
            pushCh2(e);
            break
        case 'KeyG':
            pushCh2(e);
            break
        case 'KeyH':
            pushCh2(e);
            break
        case 'KeyJ':
            pushCh2(e);
            break
        case 'KeyK':
            pushCh2(e);
            break
        case 'KeyL':
            pushCh2(e);
            break
    }
}
function recordSoundCh3(e){
    switch(e.code){
        case 'KeyA':
            pushCh3(e);
            break
        case 'KeyS':
            pushCh3(e);
            break
        case 'KeyD':
            pushCh3(e);
            break
        case 'KeyF':
            pushCh3(e);
            break
        case 'KeyG':
            pushCh3(e);
            break
        case 'KeyH':
            pushCh3(e);
            break
        case 'KeyJ':
            pushCh3(e);
            break
        case 'KeyK':
            pushCh3(e);
            break
        case 'KeyL':
            pushCh3(e);
            break
    }
}
function recordSoundCh4(e){
    switch(e.code){
        case 'KeyA':
            pushCh4(e);
            break
        case 'KeyS':
            pushCh4(e);
            break
        case 'KeyD':
            pushCh4(e);
            break
        case 'KeyF':
            pushCh4(e);
            break
        case 'KeyG':
            pushCh4(e);
            break
        case 'KeyH':
            pushCh4(e);
            break
        case 'KeyJ':
            pushCh4(e);
            break
        case 'KeyK':
            pushCh4(e);
            break
        case 'KeyL':
            pushCh4(e);
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
function playCh2(){
    for(let i = 0; i < channel2.length; i++){
        setTimeout(playRecordSound, channel2[i].time, channel2[i].code);
    }
}
function stopRecCh2(){
    document.body.removeEventListener('keypress', recordSoundCh2);
    if(stateChannel2 === 1){
        document.querySelector("#stopItCh2").disabled = true;
        stateChannel2++;
    }
}
function recordCh2(){
    startTime = Date.now();
    document.body.addEventListener('keypress',recordSoundCh2);
    document.querySelector("#recordItCh2").disabled = true;
    stateChannel2++;
}
function clearCh2(){
    if(stateChannel2 === 2){
        channel2 = [];
        document.querySelector("#recordItCh2").disabled = false;
        document.querySelector("#stopItCh2").disabled = false;
        stateChannel2 = 0;
    }
}
function pushCh2(e){
    const time = Date.now() - startTime;
    channel2.push({
        code: e.code,
        time: time
    })
}
function playCh3(){
    for(let i = 0; i < channel3.length; i++){
        setTimeout(playRecordSound, channel3[i].time, channel3[i].code);
    }
}
function stopRecCh3(){
    document.body.removeEventListener('keypress', recordSoundCh3);
    if(stateChannel3 === 1){
        document.querySelector("#stopItCh3").disabled = true;
        stateChannel3++;
    }
}
function recordCh3(){
    startTime = Date.now();
    document.body.addEventListener('keypress',recordSoundCh3);
    document.querySelector("#recordItCh3").disabled = true;
    stateChannel3++;
}
function clearCh3(){
    if(stateChannel3 === 2){
        channel3 = [];
        document.querySelector("#recordItCh3").disabled = false;
        document.querySelector("#stopItCh3").disabled = false;
        stateChannel3 = 0;
    }
}
function pushCh3(e){
    const time = Date.now() - startTime;
    channel3.push({
        code: e.code,
        time: time
    })
}
function playCh4(){
    for(let i = 0; i < channel4.length; i++){
        setTimeout(playRecordSound, channel4[i].time, channel4[i].code);
    }
}
function stopRecCh4(){
    document.body.removeEventListener('keypress', recordSoundCh4);
    if(stateChannel4 === 1){
        document.querySelector("#stopItCh4").disabled = true;
        stateChannel4++;
    }
}
function recordCh4(){
    startTime = Date.now();
    document.body.addEventListener('keypress',recordSoundCh4);
    document.querySelector("#recordItCh4").disabled = true;
    stateChannel4++;
}
function clearCh4(){
    if(stateChannel4 === 2){
        channel4 = [];
        document.querySelector("#recordItCh4").disabled = false;
        document.querySelector("#stopItCh4").disabled = false;
        stateChannel4 = 0;
    }
}
function pushCh4(e){
    const time = Date.now() - startTime;
    channel4.push({
        code: e.code,
        time: time
    })
}
function playAll(){
    playCh1()
    playCh2()
    playCh3()
    playCh4()
}
function activatePad(e){
    switch(e.code){
        case 'KeyA':
            document.querySelector('#Apad').classList.add('padactive');
            document.querySelector('#Apad').classList.remove('pad');
            break
        case 'KeyS':
            document.querySelector('#Spad').classList.add('padactive');
            document.querySelector('#Spad').classList.remove('pad');
            break
        case 'KeyD':
            document.querySelector('#Dpad').classList.add('padactive');
            document.querySelector('#Dpad').classList.remove('pad');
            break
        case 'KeyF':
            document.querySelector('#Fpad').classList.add('padactive');
            document.querySelector('#Fpad').classList.remove('pad');
            break
        case 'KeyG':
            document.querySelector('#Gpad').classList.add('padactive');
            document.querySelector('#Gpad').classList.remove('pad');
            break
        case 'KeyH':
            document.querySelector('#Hpad').classList.add('padactive');
            document.querySelector('#Hpad').classList.remove('pad');
            break
        case 'KeyJ':
            document.querySelector('#Jpad').classList.add('padactive');
            document.querySelector('#Jpad').classList.remove('pad');
            break
        case 'KeyK':
            document.querySelector('#Kpad').classList.add('padactive');
            document.querySelector('#Kpad').classList.remove('pad');
            break
        case 'KeyL':
            document.querySelector('#Lpad').classList.add('padactive');
            document.querySelector('#Lpad').classList.remove('pad');
            break
    }
}
function deactivatePad(e){
    switch(e.code){
        case 'KeyA':
            document.querySelector('#Apad').classList.add('pad');
            document.querySelector('#Apad').classList.remove('padactive');
            break
        case 'KeyS':
            document.querySelector('#Spad').classList.add('pad');
            document.querySelector('#Spad').classList.remove('padactive');
            break
        case 'KeyD':
            document.querySelector('#Dpad').classList.add('pad');
            document.querySelector('#Dpad').classList.remove('padactive');
            break
        case 'KeyF':
            document.querySelector('#Fpad').classList.add('pad');
            document.querySelector('#Fpad').classList.remove('padactive');
            break
        case 'KeyG':
            document.querySelector('#Gpad').classList.add('pad');
            document.querySelector('#Gpad').classList.remove('padactive');
            break
        case 'KeyH':
            document.querySelector('#Hpad').classList.add('pad');
            document.querySelector('#Hpad').classList.remove('padactive');
            break
        case 'KeyJ':
            document.querySelector('#Jpad').classList.add('pad');
            document.querySelector('#Jpad').classList.remove('padactive');
            break
        case 'KeyK':
            document.querySelector('#Kpad').classList.add('pad');
            document.querySelector('#Kpad').classList.remove('padactive');
            break
        case 'KeyL':
            document.querySelector('#Lpad').classList.add('pad');
            document.querySelector('#Lpad').classList.remove('padactive');
            break
    }
}