var crsrBlr = document.querySelector("#cursorBlur")

document.addEventListener("mousemove",function(dets){
    setTimeout(() => {
      crsrBlr.style.left = dets.x - 250 + "px"
      crsrBlr.style.top = dets.y - 250 + "px"
    }, 150);
})

let keyPiano = {
  "a" : 'Audio/a.wav',
  "s" : 'Audio/s.wav',
  "d" : 'Audio/d.wav',
  "f" : 'Audio/f.wav',
  "g" : 'Audio/g.wav',
  "h" : 'Audio/h.wav',
  "j" : 'Audio/j.wav',
  "k" : 'Audio/k.wav',
  "l" : 'Audio/l.wav',
  ";" : 'Audio/;.wav',
  "w" : 'Audio/w.wav',
  "e" : 'Audio/e.wav',
  "t" : 'Audio/t.wav',
  "y" : 'Audio/y.wav',
  "u" : 'Audio/u.wav',
  "o" : 'Audio/o.wav',
  "p" : 'Audio/p.wav'
}
document.addEventListener('keydown', 
(event) => playPiano(event.key));
function playPiano(key){
    audio = new Audio(keyPiano[key]); 
    audio.play();
    let keyClick = document.querySelector(`[data-key="${key}"]`);
    if(keyClick){
        keyClick.classList.add('active');
        const remmoveActive = setInterval(() => {
            keyClick.classList.remove('active')
        }, 10);
    }
}
let keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', (e)=>{
        playPiano(key.dataset.key);
    })
})
