const links = document.querySelectorAll(".nav-link");

if (links.length) {
    links.forEach((link) => {
        link.addEventListener("click", () => {
            links.forEach((link) => {
                link.classList.remove("active");
            });
            link.classList.add("active");
        });
    });
}

let subMenu = document.getElementById("subMenu");

toggleMenu = () => {
    subMenu.classList.toggle("open-menu");
};