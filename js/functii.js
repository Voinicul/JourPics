var settingsmenu = document.querySelector(".settings-menu");

function settingsMenuToggle() {
  settingsmenu.classList.toggle("settings-menu-height");

}

//......................Schimbare culoare buton like,wish

let btn = document.querySelectorAll(".far")
btn.forEach((currentBtn) => {
  currentBtn.addEventListener('click', () => {
    if (currentBtn.classList.contains("fas")) {
      currentBtn.classList.remove("fas");
      currentBtn.classList.add("far");
    } else {
      currentBtn.classList.remove("far");
      currentBtn.classList.add("fas");
    }
  });
});

//..................

