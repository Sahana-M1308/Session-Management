function logout() {
    // Remove all session-related items
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('userEmail');

    // Redirect to the login page
    window.location.href = 'login.html';
}
