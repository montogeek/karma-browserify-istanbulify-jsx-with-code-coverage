var My = require('./src/index.js');
var Utils = require('./src/main.coffee');

describe("My", function() {
  it("should compute the square root of 4 as 2", function() {
    expect(My.sqrt(4)).to.be.equal(2);
  });
  it('should return HP is number is negative', function() {
    expect(My.sqrt(-2)).to.be.equal("HP");
  });
  it('should return lol', function() {
    expect(My.lol('lol')).to.be.equal("lol");
  })
});

describe('Utils', function() {
  it('should compute 9 for the pow of 3', function() {
    expect(Utils.pow(3)).to.be.equal(9);
  });
  it('should return hi', function() {
    expect(Utils.hi()).to.be.equal('hi');
  });
});