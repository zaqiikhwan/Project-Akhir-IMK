let page = document.getElementsByClassName("page")
let currentPage = 1;

activePage = () => {
  for(p of page){
    p.classList.remove("active");
  }
  event.target.classList.add("active");
  currentPage = event.target.value;
};


const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
    // toggle the icon
    this.classList.toggle("bi-eye");
});
// var sidebarOpen = false;
// var sidebar = document.getElementById("sidebar");

// function openSidebar() {
//   if(!sidebarOpen) {
//     sidebar.classList.add("sidebar-responsive");
//     sidebarOpen = true;
//   }
// }

// function closeSidebar() {
//   if(sidebarOpen) {
//     sidebar.classList.remove("sidebar-responsive");
//     sidebarOpen = false;
//   }
// }