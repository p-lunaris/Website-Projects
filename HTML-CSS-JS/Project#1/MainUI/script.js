let time = document.getElementById("timezone");

setInterval(() => {
    let t = new Date();
    time.innerHTML = t.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
        }
    );
}, 100)