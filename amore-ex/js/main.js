window.onload = function () {
    let bannerDT = document.querySelectorAll(".bannerTabMenu>dt")
    for (let i = 0; i < bannerDT.length; i++) {
      bannerDT[i].addEventListener("click", function () {
        for (let d = 0; d < bannerDT.length; d++) {
          bannerDT[d].classList.remove("on")
        }
        this.classList.add("on")
      })
    }
  
    let tapDT = document.querySelectorAll(".tabMenu>dt")
    for (let t = 0; t < tapDT.length; t++) {
      tapDT[t].addEventListener("click", function () {
        for (let a = 0; a < tapDT.length; a++) {
          tapDT[a].classList.remove("on")
        }
        this.classList.add("on")
      })
    }
  
  }



