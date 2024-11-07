function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // Calculate rotation angles
    const secondAngle = seconds * 6; // 360 degrees / 60 seconds
    const minuteAngle = minutes * 6 + seconds * 0.1; // 360 / 60 minutes + extra from seconds
    const hourAngle = hours * 30 + minutes * 0.5; // 360 / 12 hours + extra from minutes

    // Apply rotations to hands
    document.getElementById("seconds").style.transform = `rotate(${secondAngle}deg)`;
    document.getElementById("minutes").style.transform = `rotate(${minuteAngle}deg)`;
    document.getElementById("hours").style.transform = `rotate(${hourAngle}deg)`;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call to set correct time immediately
