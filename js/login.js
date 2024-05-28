document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene que el formulario se envíe de manera tradicional

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if ((username === 'Assa' && password === 'Assa12345') || (username === 'AntoP' && password === 'Anto96')) {
        // Establecer un indicador de sesión en localStorage
        localStorage.setItem('isAuthenticated', 'true');
        // Redirigir a la página principal
        window.location.href = 'bot.html'; // Cambia 'index.html' por el nombre real de tu página principal
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene que el formulario se envíe de manera tradicional

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if ((username === 'Assa' && password === 'Assa12345') || (username === 'AntoP' && password === 'Anto96')) {
        // Guardar el nombre de usuario en localStorage
        localStorage.setItem('loggedInUser', username);

        // Redirigir a la página del bot
        window.location.href = 'index.html'; // Cambia 'index.html' por el nombre real de tu página del bot
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
});
