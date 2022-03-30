
setInterval(() => {

    d = new Date();
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hrRotation = (30*hr) + (min/2);
    minRotation = (6*min);
    secRotation = (6*sec);
    

    document.getElementById("hour").style.transform = `rotate(${hrRotation}deg)`;
    minute.style.transform = `rotate(${minRotation}deg)`;
    second.style.transform = `rotate(${secRotation}deg)`;
}, 1000);