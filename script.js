const clockElement = document.getElementById('clock');
const timeZoneselect = document.getElementById('timezoneSelect');

function updateClock() {
    const timezone = timeZoneselect.value;
    const now = new Date();

    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: timezone,
        hour12: false
    };

    const timeString = now.toLocaleTimeString('en-GB', options);
    clockElement.textContent = timeString;
}

timeZoneselect.addEventListener('change', updateClock);
setInterval(updateClock, 1000);
updateClock();
