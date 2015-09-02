var My = require('./src/index.js');
var Utils = require('./src/main.coffee');
var MyReact = require('./src/react.jsx');
var React = require('react');

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

describe('React', function() {
  before(function() {
    document.body.innerHTML = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>React</title></head><body><div id="app"></div></body></html>';
    // React.render(<MyReact />, document.getElementById('app'));
  });

  it('React component mounted', function() {
    expect('lol').to.be.equal('lol');
  });
})