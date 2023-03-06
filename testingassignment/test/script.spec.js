const assert =chai.assert;
const expect =chai.expect;

// Here you need to write the test cases using assert
describe('General Test Cases', function()  {
    it('Should return hello', function()  {
        chai.assert.typeOf(sayHello("bhavani javvadi"), 'string');
          
    });
    //This test case should class factorial function and check the expected result (factorial of a number)
    it('Should return factorial of a number', () => {
       // chai.expect(Factorial(5)).to.be.equal(120) ; 
        chai.assert.equal(Factorial(5), 120);
    });
    //This test case should call factorial() funtion and check the type of returned value to be a number
    it('Factorial() Should return number', () => {
        //chai.expect(Factorial(5)).to.be.a('number') ; 
        chai.assert.typeOf(Factorial(5), 'number'); 
    });
});

// Here you need to write the test cases using expect
describe('New Test Suite', () => {
    // This test case should call getPerson() function and check the age property in person object
    it('Person should have age property', () => {
        chai.expect(getPerson()).to.have.property('age');   
    });

    // This test case should call GetUsers() function and check the name property in person object
    it('User should have name property',function(done)  {
        
        chai.expect(GetUsers()).to.have.property('name') ;
        done()
    });
});