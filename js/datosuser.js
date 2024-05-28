// Funcion del boton AGENDAME! //

document.getElementById('btnAgendame').addEventListener('click', function() {
    const mensaje = `Agendame yo soy Cielo! Así te llegan las promociones🤗 🎁  Te cuento que también tenemos un plan de referidos para que ganes fichas gratis! 
    Por cada persona que réferis te regalamos 2000 fichas en tu próxima carga 
     solo menciona el usuario que referiste y te las acreditamos🔥`;

    // Crear un textarea temporal para copiar el texto
    const textarea = document.createElement('textarea');
    textarea.value = mensaje;
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, 99999); // Para dispositivos móviles

    try {
        document.execCommand('copy');
        
    } catch (err) {
        console.error('Error al copiar al portapapeles: ', err);
    }

    // Eliminar el textarea temporal
    document.body.removeChild(textarea);
});

// Asignar evento al botón "Restablecer Usuario"
document.getElementById("btnReestablecerUsuario").addEventListener("click", function() {
    // Obtener el nombre de usuario ingresado
    let nombreUsuario = document.getElementById('nombreUsuario').value.trim();

    // Verificar si se ingresó un nombre de usuario
    if (nombreUsuario === '') {
        alert('No hay un nombre de usuario para restablecer.');
        return;
    }

    // Mensaje de restablecimiento de usuario
    let mensaje = `Tu usuario fue restablecido exitosamente.\n\nUsuario: ${nombreUsuario}\nContraseña: casino1\n\nIngresa nuevamente.`;

    // Copiar el mensaje al portapapeles
    navigator.clipboard.writeText(mensaje)
        .then(function() {
            // Mostrar alerta de éxito
            alert('Mensaje de restablecimiento de usuario copiado al portapapeles:\n' + mensaje);
        })
        .catch(function(err) {
            // Mostrar alerta en caso de error
            console.error('Error al copiar al portapapeles: ', err);
            alert('Error al copiar al portapapeles:\n' + mensaje);
        });
});


document.getElementById('btnPlataformaWeb').addEventListener('click', function() {
    const mensaje = "Nuestra plataforma es:\n\njuegasi.com";

    // Crear un textarea temporal para copiar el texto
    const textarea = document.createElement('textarea');
    textarea.value = mensaje;
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, 99999); // Para dispositivos móviles

    try {
        document.execCommand('copy');
        
    } catch (err) {
        console.error('Error al copiar al portapapeles: ', err);
    }

    // Eliminar el textarea temporal
    document.body.removeChild(textarea);
});

// Script para el modal de "Tope de Retiros"
document.getElementById('btnTopeRetiros').addEventListener('click', function() {
    document.getElementById('topeRetirosModal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('topeRetirosModal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('topeRetirosModal')) {
        document.getElementById('topeRetirosModal').style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Función para actualizar la fecha y hora
    function updateDateTime() {
        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();

        document.getElementById('currentDate').innerText = date;
        document.getElementById('currentTime').innerText = time;
    }

    // Actualizar la fecha y hora cada segundo
    setInterval(updateDateTime, 1000);

    // Mostrar el usuario conectado
    const loggedInUser = localStorage.getItem('loggedInUser') || 'Usuario Desconocido';
    document.getElementById('loggedInUser').innerText = `Usuario: ${loggedInUser}`;

    // Ejemplo de almacenamiento del usuario al iniciar sesión (debe ser configurado en el login)
    // localStorage.setItem('loggedInUser', 'Assa');
});



