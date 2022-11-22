const nav = document.querySelector('navbar');

        window.addEventListener('scroll', () => {
            if (window.scrollY >= 0) {
                nav.classList.add('active_navbar');
            } else {
                nav.classList.remove('active_navbar');
            }
}) 