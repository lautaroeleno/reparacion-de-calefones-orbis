// Esperamos a que todo el HTML esté cargado antes de ejecutar el JS
document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA MENÚ MÓVIL ---
    const btnAbrir = document.getElementById('btn-abrir');
    const btnCerrar = document.getElementById('btn-cerrar');
    const menuMovil = document.getElementById('menu-movil');
    const links = document.querySelectorAll('.link-menu');

    // Usamos condicionales (if) para evitar errores si el elemento no existe en la página
    if (btnAbrir && menuMovil) {
        btnAbrir.onclick = () => {
            menuMovil.classList.remove('hidden');
            document.body.classList.add('overflow-hidden');
        };
    }

    if (btnCerrar && menuMovil) {
        btnCerrar.onclick = () => {
            menuMovil.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
        };
    }

    links.forEach(link => {
        link.onclick = () => {
            if (menuMovil) {
                menuMovil.classList.add('hidden');
                document.body.classList.remove('overflow-hidden');
            }
        };
    });

    // --- LÓGICA ACORDEÓN MÚLTIPLE ---
    const faqBtns = document.querySelectorAll('.faq-btn');

    faqBtns.forEach(btn => {
        btn.onclick = () => {
            // El contenido es el siguiente hermano del botón
            const content = btn.nextElementSibling;
            const icon = btn.querySelector('.faq-icon');
            
            // Verificamos si está abierto
            const isOpen = content.classList.contains('grid-rows-[1fr]');

            // 1. Opcional: Cerrar los demás antes de abrir el actual
            if (!isOpen) {
                faqBtns.forEach(otherBtn => {
                    const otherContent = otherBtn.nextElementSibling;
                    const otherIcon = otherBtn.querySelector('.faq-icon');
                    
                    otherContent.classList.remove('grid-rows-[1fr]');
                    otherContent.classList.add('grid-rows-[0fr]');
                    if (otherIcon) otherIcon.classList.remove('rotate-180');
                    otherBtn.classList.remove('rounded-b-none');
                });
            }

            // 2. Toggle del botón actual (usamos add/remove en vez de replace para más seguridad)
            if (isOpen) {
                content.classList.remove('grid-rows-[1fr]');
                content.classList.add('grid-rows-[0fr]');
                if (icon) icon.classList.remove('rotate-180');
                btn.classList.remove('rounded-b-none');
            } else {
                content.classList.remove('grid-rows-[0fr]');
                content.classList.add('grid-rows-[1fr]');
                if (icon) icon.classList.add('rotate-180');
                btn.classList.add('rounded-b-none');
            }
        };
    });
});