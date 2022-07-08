import DonutMaker from "./DonutMaker";

const donutCount = document.querySelector('.donutCount');
const addDonutBtn = document.querySelector('.addDonutBtn');
const autoClickerCount = document.querySelector('.autoClickerCount');
const addAutoClickerBtn = document.querySelector('.addAutoClickerBtn');
const autoClickerCost = document.querySelector('.autoClickerCost');
const multiplierCount = document.querySelector('.multiplierCount');
const addMultiplierBtn = document.querySelector('.multiplierBtn');
const multiplierCost = document.querySelector('.multiplierCost');
const DonutShop = new DonutMaker(0,0,100,0,10);
updateEveryCount();

addDonutBtn.addEventListener("click", ()=>{
  DonutShop.addDonut();
  updateEveryCount();
})

addAutoClickerBtn.addEventListener("click", ()=>{
  DonutShop.addAutoClicker();
  setInterval(autoClick,1000);
  updateEveryCount();
})

addMultiplierBtn.addEventListener("click", ()=>{
  DonutShop.addMultiplier();
  updateEveryCount();
})


function autoClick(){
  DonutShop.numDonuts += 1;
  updateEveryCount();
}

function updateEveryCount () {
  donutCount.innerText = "Donuts:" + DonutShop.numDonuts;
  autoClickerCount.innerText = "Auto Clicker:" + DonutShop.numAutoclickers;
  autoClickerCost.innerText = "Auto Clicker Cost:" +DonutShop.costOfautoclicker;
  multiplierCount.innerText = "Multipliers:" + DonutShop.numMultiplier;
  multiplierCost.innerText = "MultiplierCost:" + DonutShop.costOfMultiplier;
}


function info() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}