import DonutMaker from "./DonutMaker";

describe("DonutMaker", () => {

    test("should be able to add a donut and retrieve the total count", () => {
        //Arrange
        const underTest = new DonutMaker(0);
        //Act
        underTest.addDonut();
        //Assert
        expect(underTest.numDonuts).toEqual(1);
    });

    test("should be able to add an autoclicker with 100 donuts", () => {
        //Arrange
        const underTest = new DonutMaker(100,0,100);
        //Act
        underTest.addAutoClicker();
        //Assert
        expect(underTest.numDonuts).toEqual(0);
        expect(underTest.numAutoclickers).toEqual(1);
    });

    test("should Not be able to purchase an autoclicker with 99 donuts", () =>{
        const underTest = new DonutMaker (99,0);
        underTest.addAutoClicker();
        expect(underTest.numDonuts).toEqual(99);
        expect(underTest.numAutoclickers).toEqual(0);
    })

    test("should be able to increase the cost of auto clicker by 10% after each purchase", () => {
        const underTest = new DonutMaker (100,1,100);
        underTest.addAutoClicker();
        expect(underTest.costOfautoclicker).toEqual(110);
    })

    test("should be able to increase the cost of auto clicker by another 10% after 2nd purchase", () => {
        const underTest = new DonutMaker(100,2,110);
        underTest.addAutoClicker();
        expect(underTest.costOfautoclicker).toEqual(121);
    })

    test("should be able to increase more donuts by autoclicker", () => {
        const underTest = new DonutMaker(100,10,100);
        underTest.addDonutByAutoClicker();
        expect(underTest.numDonuts).toEqual(110);
    })

    test("should be able to add a multiplier", () => {
        const underTest = new DonutMaker(200,1,100,0);
        underTest.addMultiplier();
        expect(underTest.numMultiplier).toEqual(1);
    })

    test("should be able to increase the cost of multiplier by 10% after each purchase", () => {
        const underTest = new DonutMaker (200,1,100,1,100);
        underTest.addMultiplier();
        expect(underTest.costOfMultiplier).toEqual(110);
    })

    test("should be able to increase the cost of multiplier by 10% after 2nd purchase", () => {
        const underTest = new DonutMaker (200,2,100,2,110);
        underTest.addMultiplier();
        expect(underTest.costOfMultiplier).toEqual(121);
    })

    test("should Not be able to purchase a multiplier with 199 donuts", () =>{
        const underTest = new DonutMaker (9,0,100,0,10);
        underTest.addMultiplier();
        expect(underTest.numDonuts).toEqual(9);
        expect(underTest.numMultiplier).toEqual(0);
    })

    test("should Multiply donuts by 1.2 for every donut added with clicker", () => {
        const underTest = new DonutMaker (110,0,100,1,10);
        underTest.addMultiplier();
        expect(underTest.numDonuts).toEqual(101.2);
    })

    test("should Multiply donuts by 1.2 by the power of 2 for every donut added with clicker", () => {
        const underTest = new DonutMaker (110,0,100,2,10);
        underTest.addMultiplier();
        expect(underTest.numDonuts).toEqual(101.44);
    })
});