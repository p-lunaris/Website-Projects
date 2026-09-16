const loadbar = document.getElementById("load");
const blinking = document.getElementById("blinking");
const elapsedTime = document.getElementById("timepassed")
const tip = document.getElementById("tip")
const finished = document.getElementById("finished")

const fullyloaded = 30;
let loading = 0;

const startTime = performance.now();
let timer;

loadbar.textContent = "\u2022".repeat(fullyloaded);

function updateTimer() {
    const elapsed = performance.now() - startTime;

    const totalSeconds = Math.floor(elapsed / 1000);

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    elapsedTime.textContent =
        `(${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")})`;

    if (loading < fullyloaded) {
        timer = requestAnimationFrame(updateTimer);
    }
}

function updateloading(){
    const loaded ="\u25A0".repeat(loading);
    const unloaded = "\u2022".repeat(fullyloaded - loading);

    if(loading > Math.random() * 11){
        tip.style.display ="grid";
    }
    
    loadbar.textContent = loaded + unloaded;
    blinking.classList.remove("animate");
    void blinking.offsetWidth;
    blinking.classList.add("animate")
    
    if (loading < fullyloaded){
        const delay = Math.floor(Math.random() * 501);
        loading++;
        setTimeout(updateloading, delay);
    }

    if (loading == fullyloaded){
        finished.style.display = "grid";
    }
}

updateTimer();

document.addEventListener("keydown", function(event) {
    if(event.key =="Enter" && loading == 0){
        updateloading();
    }
});
