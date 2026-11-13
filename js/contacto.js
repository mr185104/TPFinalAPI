// js/contacto.js
document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('form-contacto');

    formulario.addEventListener('submit', (e) => {
        // Cortamos el envío por defecto para validar con JavaScript
        e.preventDefault();

        // Capturamos los valores
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const motivo = document.getElementById('motivo').value;
        const mensaje = document.getElementById('mensaje').value.trim();

        // Validaciones obligatorias
        if (nombre.length < 4) {
            alert('⚠️ El campo "Nombre y Apellido" debe tener al menos 4 caracteres.');
            document.getElementById('nombre').focus();
            return;
        }

        // Validación simple de email
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
            alert('⚠️ Por favor, ingresa un correo electrónico válido.');
            document.getElementById('email').focus();
            return;
        }

        // Validación de teléfono (exactamente 10 dígitos numéricos)
        const regexTelefono = /^[0-9]{10}$/;
        if (!regexTelefono.test(telefono)) {
            alert('⚠️ El teléfono debe contener exactamente 10 dígitos numéricos (ej. 1123456789).');
            document.getElementById('telefono').focus();
            return;
        }

        // Validación del select
        if (motivo === '') {
            alert('⚠️ Por favor, seleccioná un motivo de consulta.');
            document.getElementById('motivo').focus();
            return;
        }

        // Validación del textarea
        if (mensaje.length < 10) {
            alert('⚠️ El mensaje debe tener al menos 10 caracteres.');
            document.getElementById('mensaje').focus();
            return;
        }

        // Si todo es correcto: Éxito
        alert('¡Formulario enviado con éxito! Gracias por comunicarte con el Recetario Web.');
        
        // Reseteamos el formulario
        formulario.reset();
    });
});