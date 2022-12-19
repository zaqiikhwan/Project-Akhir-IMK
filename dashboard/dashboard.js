let page = document.getElementsByClassName("page")
let currentPage = 1;

activePage = () => {
  for(p of page){
    p.classList.remove("active");
  }
  event.target.classList.add("active");
  currentPage = event.target.value;
};