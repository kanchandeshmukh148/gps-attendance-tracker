document.getElementById('markAttendance').addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            document.getElementById('locationStatus').textContent = `Location captured: ${latitude}, ${longitude}`;

            // Send location to backend
            const response = await fetch('http://localhost:5000/api/attendance/mark', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ latitude, longitude }),
            });

            const data = await response.json();
            alert(data.message);
        }, (error) => {
            alert('Error capturing location: ' + error.message);
        });
    } else {
        alert('Geolocation is not supported by this browser.');
    }
});