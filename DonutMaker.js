class DonutMaker {

    constructor(numDonuts, numAutoClickers,costOfautoclicker,numMultiplier,costOfMultiplier){
     this.numDonuts = numDonuts;
     this.numAutoclickers = numAutoClickers;
     this.costOfautoclicker = costOfautoclicker;
     this.numMultiplier = numMultiplier;
     this.costOfMultiplier = costOfMultiplier;
    }

    addDonut(){
        if(this.numMultiplier >= 1){
           this.numDonuts += Math.round(this.numMultiplier*1.2);
        } else {
            this.numDonuts += 1;
        }
    
        
    }

    addAutoClicker(){
        if(this.numDonuts >= this.costOfautoclicker){
            this.numDonuts -= this.costOfautoclicker;
            this.numAutoclickers += 1;
            this.costOfautoclicker += Math.round(this.costOfautoclicker*0.1);
        }
        
        if(this.numMultiplier >= 1){
           this.numDonuts += Math.round(this.numMultiplier*1.2);
        }
       
    }
   

    

    addMultiplier(){
        if(this.numDonuts >= 10){
            this.numMultiplier += 1;
            this.numDonuts -= this.costOfMultiplier;
        }
        if(this.numMultiplier >= 1){
            this.costOfMultiplier += Math.round(this.costOfMultiplier*0.1);
        }
    }

    reset(){
        this.numDonuts == 0;
        this.autoClickerCount = 0;
        this.autoClickerCost = 100;
        this.multiplierCost = 10;
        this.multiplierCount = 0;
      }


}

export default DonutMaker;
