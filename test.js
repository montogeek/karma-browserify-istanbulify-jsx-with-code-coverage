var My = require('./src/index.js');

describe("sqrt", function() {
  it("should compute the square root of 4 as 2", function() {
    expect(My.sqrt(4)).to.be.equal(2);
    expect(My.sqrt(-2)).to.be.equal("HP");
    expect(My.lol('lol')).to.be.equal("lol");
  });
});