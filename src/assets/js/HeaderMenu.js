document.addEventListener("DOMContentLoaded", () => {
  const desktopMenu = document.getElementById("desktop_Menu");
  const mobileMenu = document.getElementById("mobile_Menu");
  const dropmenuBtn = document.getElementById("dropmenuBtn");

  dropmenuBtn.addEventListener("click", () => {
    // desktopMenu
    if (window.innerWidth >= 768) {
      
      // Toggle desktop menu
      if (desktopMenu.classList.contains("hidden")) {
        desktopMenu.classList.remove("hidden");
        setTimeout(setTimeout(() => {
          desktopMenu.classList.add("opacity-100");
        }, 500));
      } else {
        setTimeout(setTimeout(() => {
          desktopMenu.classList.add("hidden");
        }, 500));
        desktopMenu.classList.remove("opacity-100");
      } //

    } 
    // mobileMenu
    else {

      // Toggle mobile menu
      if (mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.remove("hidden");
        setTimeout(setTimeout(() => {
          mobileMenu.classList.add("opacity-100");
        }, 500));
      } else {
        setTimeout(setTimeout(() => {
          mobileMenu.classList.add("hidden");
        }, 500));
        mobileMenu.classList.remove("opacity-100");
      } //

    }
  });

  // window rezise
  window.addEventListener("resize", () => {

    desktopMenu.classList.remove("opacity-100");
    desktopMenu.classList.add("hidden");

    mobileMenu.classList.remove("opacity-100");
    mobileMenu.classList.add("hidden");
  }); // 

});

