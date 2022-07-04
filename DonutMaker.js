class DonutMaker {

    constructor(numDonuts, numAutoClickers,costOfautoclicker,numMultiplier,costOfMultiplier){
     this.numDonuts = numDonuts;
     this.numAutoclickers = numAutoClickers;
     this.costOfautoclicker = costOfautoclicker;
     this.numMultiplier = numMultiplier;
     this.costOfMultiplier = costOfMultiplier;
    }

    addDonut(){
        if(this.numMultiplier === 1){
            this.numDonuts += 1*1.2;
        } else if(this.numMultiplier >= 2){
           this.numDonuts += Math.pow(1.2,this.numMultiplier);
        } else {
            this.numDonuts += 1;
        }
    
        
    }

    addAutoClicker(){
        if(this.numDonuts >= 100){
            this.numDonuts -= this.costOfautoclicker;
            this.numAutoclickers += 1;
        }
        if(this.numAutoclickers >= 2){
            this.costOfautoclicker += this.costOfautoclicker*0.1;
        }

        if(this.numMultiplier === 1){
            this.numDonuts += 1*1.2;
        } else if(this.numMultiplier >= 2){
           this.numDonuts += Math.pow(1.2,this.numMultiplier);
        }
    }

    addDonutByAutoClicker(){
        this.numDonuts += this.numAutoclickers;
    }

    addMultiplier(){
        if(this.numDonuts >= 10){
            this.numMultiplier += 1;
            this.numDonuts -= this.costOfMultiplier;
        }
        if(this.numMultiplier >= 1){
            this.costOfMultiplier += this.costOfMultiplier*0.1
        }
        
        
    }


}

export default DonutMaker;
