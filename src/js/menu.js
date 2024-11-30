document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const menuAside = document.getElementById("menu-aside");
    const menuIcons = menuToggle.querySelectorAll("i");

    menuToggle.addEventListener("click", () => {
        menuAside.classList.toggle("hidden");
        menuAside.classList.add("flex")
        menuIcons.forEach(icon => icon.classList.toggle("hidden"));
    });
});