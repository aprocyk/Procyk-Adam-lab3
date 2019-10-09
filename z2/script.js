
const clap = document.querySelector('#aClap');
const channel1 = [];
document.body.addEventListener('keypress', playClap);

function playClap(e) {
    if (e.code == "KeyA") {
        clap.currentTime = 0;
        clap.play();
        const time = Date.now();
        channel1.push({
            key: e.code,
            time: time
        });
    }
    console.log(channel1);
}