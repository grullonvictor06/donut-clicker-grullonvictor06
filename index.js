import DonutMaker from "./DonutMaker";

const donutCount = document.querySelector('.donutCount');
const addDonutBtn = document.querySelector('.addDonutBtn');
const autoClickerCount = document.querySelector('.autoClickerCount');
const addAutoClickerBtn = document.querySelector('.addAutoClickerBtn');
const autoClickerCost = document.querySelector('.autoClickerCost');
const multiplierCount = document.querySelector('.multiplierCount');
const addMultiplierBtn = document.querySelector('.multiplierBtn');
const multiplierCost = document.querySelector('.multiplierCost');
const addResetButton = document.querySelector('.resetBtn');
const DonutShop = new DonutMaker(0,0,100,0,10);
updateEveryCount();

function info() {
  document.getElementById("myDropdown").classList.toggle("show");
}

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

addResetButton.addEventListener("click",()=>{
  DonutShop.reset();
  updateEveryCount();
} )

function autoClick(){
  DonutShop.numDonuts += 1;
  updateEveryCount();
}

function updateEveryCount () {
  donutCount.innerText = "Donuts:" + DonutShop.numDonuts;
  autoClickerCount.innerText = "Auto Clicker:" + DonutShop.numAutoclickers;
  autoClickerCost.innerText = "Auto Clicker Cost:" +DonutShop.costOfautoclicker;
  multiplierCount.innerText = "Multipliers:" + DonutShop.numMultiplier;
  multiplierCost.innerText = "Multiplier Cost:" + DonutShop.costOfMultiplier;
  
}