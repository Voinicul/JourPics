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

let checkBtn = document.querySelectorAll(".check-btn");
let likeIcon = document.querySelectorAll(".check-icon");
let count = document.querySelectorAll(".count");
let clicked=false;

checkBtn.forEach(checkbtn => {
checkbtn.addEventListener('click',() =>{
if(!clicked){
    clicked=true;
    likeIcon.innerHTML = ` <i class="fas fa-check-square"></i> `;
    count.textContent++;
}else{
    clicked=false;
    likeIcon.innerHTML = ` <i class="far fa-check-square"></i> ` ;
    count.textContent--;
}


});

});
