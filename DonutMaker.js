class DonutMaker {

    constructor(numDonuts, numAutoClickers,costOfautoclicker,numMultiplier,costOfMultiplier){
     this.numDonuts = numDonuts;
     this.numAutoclickers = numAutoClickers;
     this.costOfautoclicker = costOfautoclicker;
     this.numMultiplier = numMultiplier;
     this.costOfMultiplier = costOfMultiplier;
    }

    addDonut(){
        this.numDonuts += 1;
    }

    addAutoClicker(){
        if(this.numDonuts >= 100){
            this.numDonuts -= this.costOfautoclicker;
            this.numAutoclickers += 1;
        }
        if(this.numAutoclickers >= 1){
            this.costOfautoclicker += this.costOfautoclicker * 0.1;
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
        if(this.numMultiplier >= 1){
            this.numDonuts += 1*1.2;
        
        }
        
    }

    // addDonutsByMultiplier(){
    //     this.numDonuts += 1*1.2;
    // }


}

export default DonutMaker;
