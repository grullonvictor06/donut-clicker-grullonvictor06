class DonutMaker {

    constructor(numDonuts, numAutoClickers,costOfautoclicker){
     this.numDonuts = numDonuts;
     this.numAutoclickers = numAutoClickers;
     this.costOfautoclicker = costOfautoclicker;
    }

    addDonut(){
        this.numDonuts += 1;
    }

    addAutoClicker(){
        if(this.numDonuts >= this.costOfautoclicker){
            this.numDonuts -= this.costOfautoclicker;
            this.numAutoclickers += 1;
        }
        if(this.numAutoclickers >= 1){
            this.costOfautoclicker += this.costOfautoclicker * 0.1;
        } 
    }

    addDonutByAutoClicker(){
        this.numDonuts += this.numAutoclickers*5;
    }

    
}

export default DonutMaker;
