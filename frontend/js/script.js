document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, role }),
    });

    const data = await response.json();
    if (response.ok) {
        alert(data.message);
        if (data.role === 'student') {
            // Redirect to student dashboard
            window.location.href = '/student-dashboard.html';
        } else if (data.role === 'teacher') {
            // Redirect to teacher dashboard
            window.location.href = '/teacher-dashboard.html';
        } else if (data.role === 'admin') {
            // Redirect to admin dashboard
            window.location.href = '/admin-dashboard.html';
        }
    } else {
        alert(data.message);
    }
});