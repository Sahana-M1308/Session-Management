loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const validEmail = 'user@example.com';
    const validPassword = 'password123'; 

    if (email === validEmail && password === validPassword) {
        // --- Session Management Implementation ---
        
        // 1. Set a flag in sessionStorage that lasts until the tab closes
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('userEmail', email); // Optional: store user info
        
        // 2. Redirect to the dashboard
        window.location.href = 'dashboard.html';
        
    } else {
        // Handle failed login
        errorMessage.style.display = 'block';
    }
});
