function initAll(){
    const page=
    document.getElementById("page");
    page.classList.toggle("dark");

   const btn =
   document.getElementById("myBtn");
    btn.addEventListener("click", () => {
    btn.style.backgroundColor = "purple";
        btn.style.color = "white";
   });
}
window.addEventListener("DOMContentLoaded", initAll);