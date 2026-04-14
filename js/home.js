const registerForm = document.getElementById('registerForm');

if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const gender = document.getElementById('gender').value;
        const age = document.getElementById('age').value;

        const userData = {
            username,
            email,
            gender,
            age
        };
        localStorage.setItem('strideUser', JSON.stringify(userData));

        document.getElementById('registerMessage').textContent = `Welcome ${userData.username}! Your account has been created successfully<3`;

        registerForm.reset();
    });
}