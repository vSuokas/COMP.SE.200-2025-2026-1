import { expect } from "chai";
import add from "../src/add.js";
import divide from "../src/divide.js";

describe('Pre planned tests', function () {

  describe('Tests for add()', function () {
    it('Basic functionality', function () {
      expect(add(1,2)).to.equal(3);
    });
    it("Testing associativity", function () {
      expect(add(add(1,2),3)).to.equal(add(1,add(2,3)));
    });
    it("Testing subtraction", function () {
      expect(add(1,-2)).to.equal(-1);
    });
    it("Adding zero", function () {
      expect(add(1,0)).to.equal(1);
    });
  });

  describe("Tests for divide()", function () {
    it("Basic functionality", function () {
      expect(divide(6,4)).to.equal(1.5);
    });
    it("Dividing positive number with zero", function () {
      expect(divide(1,0)).to.equal(Infinity);
    });
    it("Dividing negative number with zero", function () {
      expect(divide(-1,0)).to.equal(-Infinity);
    });
    it("Dividing zero with itself", function () {
      expect(divide(0,0)).to.be.NaN;
    });
  });
});