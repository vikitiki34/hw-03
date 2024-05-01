window.onload = function () {
    // Функція, яка викликається при завантаженні сторінки
    function init() {
        var menuIcon = document.getElementById('menu');
        menuIcon.onclick = toggleMenu; // Назначаємо функцію toggleMenu на клік по іконці меню
    }

    // Функція, що переключає видимість мобільного меню
    function toggleMenu() {
        var mobileMenu = document.getElementById("mobileMenu");
        if (mobileMenu.style.display === "block") {
            mobileMenu.style.display = "none";
        } else {
            mobileMenu.style.display = "block";
        }
    }

    init(); // Викликаємо функцію ініціалізації
};
