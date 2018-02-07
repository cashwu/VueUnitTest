
var add = require("../add.js");
var expect = require("chai").expect;

describe("add test" , function(){
 it("add", function(){
	expect(add(1,1)).to.be.equal(2);
 });

});
