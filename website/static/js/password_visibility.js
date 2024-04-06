document.addEventListener('DOMContentLoaded', function () {
    const togglePassword1 = document.getElementById('togglePassword1');
    const password1 = document.getElementById('password1');

    if (togglePassword1 && password1) {
        togglePassword1.addEventListener('click', function () {
            const type = password1.type === 'password' ? 'text' : 'password';
            password1.setAttribute('type', type);

            const eyeIcon = this.querySelector('i.fas');
            if (type === 'password') {
                eyeIcon.classList.remove('fa-eye');
                eyeIcon.classList.add('fa-eye-slash');
            } else {
                eyeIcon.classList.remove('fa-eye-slash');
                eyeIcon.classList.add('fa-eye');
            }
        });
    }

    const togglePassword2 = document.getElementById('togglePassword2');
    const password2 = document.getElementById('password2');

    if (togglePassword2 && password2) {
        togglePassword2.addEventListener('click', function () {
            const type = password2.type === 'password' ? 'text' : 'password';
            password2.setAttribute('type', type);

            const eyeIcon = this.querySelector('i.fas');
            if (type === 'password') {
                eyeIcon.classList.remove('fa-eye');
                eyeIcon.classList.add('fa-eye-slash');
            } else {
                eyeIcon.classList.remove('fa-eye-slash');
                eyeIcon.classList.add('fa-eye');
            }
        });
    }
    // login show & hide password
    const togglePassword = document.getElementById('togglePassword');
    const password = document.getElementById('password');

    if (togglePassword && password) {
        togglePassword.addEventListener('click', function () {
            const type = password.type === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);

            const eyeIcon = this.querySelector('i.fas');
            if (type === 'password') {
                eyeIcon.classList.remove('fa-eye');
                eyeIcon.classList.add('fa-eye-slash');
            } else {
                eyeIcon.classList.remove('fa-eye-slash');
                eyeIcon.classList.add('fa-eye');
            }
        });
    }
});
