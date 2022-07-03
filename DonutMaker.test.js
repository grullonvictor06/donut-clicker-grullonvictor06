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

    test("should be able to increase more donuts by autoclicker times 5", () => {
        const underTest = new DonutMaker(100,10,100);
        underTest.addDonutByAutoClicker();
        expect(underTest.numDonuts).toEqual(150);
    })

    test("should be able to add a mulitplier with 200 donuts", () => {
        const underTest = new DonutMaker()
        underTest.
    })
});