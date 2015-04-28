mocha.setup('bdd');
chai.expect();

describe('Test case',function(){
    before(function(){
        console.log('before test')
    });

    it('foo is a string',function(){
        var foo = 'string';
        chai.expect(foo).to.be.a('string');
    });
});