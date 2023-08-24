document.title = "New Tab";
const content = document.getElementById("container");

const updateTime = () => {
    const time = new Date();
    let hour = time.getHours().toString().padStart(2, "0");
    let status = true;
    if (hour > 12) {
        hour -= 12;
        hour = hour.toString().padStart(2, "0");
        status = false;
    } else if (hour == 0) {
        hour = 12;
        hour = hour.toString().padStart(2, "0");
    }
    const minute = time.getMinutes().toString().padStart(2, "0");
    const second = time.getSeconds().toString().padStart(2, "0");
    const displayTime = `${hour}:${minute}:${second} ${status ? "AM" : "PM"}`;
    content.innerHTML = displayTime;
};

updateTime();
setInterval(updateTime, 1000);
