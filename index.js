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


// const link = document.getElementById("nav-link");

// if (link) {
//     link.addEventListener("click", (e) => {
//         e.preventDefault();
//         link.classList.toggle("active");
//     });
//     link.classList.remove("active")
// }

// function changeStyle(){
//     var element = document.querySelectorAll(".nav-link");
//     element.classList.add("active");
//     // if (!element === "null") {
//     //     element.addEventListener("click", (e) => {
//     //         e.preventDefault();
//     //     })
//     // } else {
//     //     element.classList.remove("active")
//     // }
//     // console.log(element);
// }
// const links = document.querySelectorAll("#nav-link");

// if (links.length) {
//     for (const link of links) {
//         link.addEventListener("click", (e) => {
//             for (const link of links) {
//                 link.classList.remove("active");
//             }
//             this.classList.toggle("active");
//         });
//     }
// }

// function changeStyle() {
//     var element = document.getElementById("nav-link");

//     if (element.id === "nav-link") {
//         element.classList.toggle("");
//     } else {
//         element.classList.toggle("active");
//     }
// }