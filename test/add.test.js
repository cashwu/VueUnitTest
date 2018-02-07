
import add from "../add.js";
import chai from "chai";
let expect = chai.expect;

describe("add test" , function(){
 it("add", function(){
	expect(add(1,1)).to.be.equal(2);
 });

});
