document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const backButton = document.querySelector('.back-button');
    const socialButtons = document.querySelectorAll('.social-button');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email && password) {
            handleLogin(email, password);
        }
    });

    backButton.addEventListener('click', () => {
        window.history.back();
    });

    socialButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const provider = e.currentTarget.querySelector('span').textContent;
            handleSocialLogin(provider);
        });
    });

    function handleLogin(email, password) {
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = '/dashboard';
            }
        })
        .catch(error => {
            console.error('Login error:', error);
        });
    }

    function handleSocialLogin(provider) {
        fetch(`/api/auth/${provider.toLowerCase()}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            if (data.authUrl) {
                window.location.href = data.authUrl;
            }
        })
        .catch(error => {
            console.error('Social login error:', error);
        });
    }
});