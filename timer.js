document.title = "New Tab";
const content = document.getElementById("container");

const updateTime = () => {
    const time = new Date();
    let hour = time.getHours();
    let status = "AM";

    if (hour >= 12) {
        status = "PM";
        if (hour > 12) {
            hour -= 12;
        }
    }

    hour = hour.toString().padStart(2, "0");
    const minute = time.getMinutes().toString().padStart(2, "0");
    const second = time.getSeconds().toString().padStart(2, "0");
    const displayTime = `${hour}:${minute}:${second} ${status}`;
    content.innerHTML = displayTime;
};

updateTime();
setInterval(updateTime, 1000);
