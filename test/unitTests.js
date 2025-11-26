import { expect } from "chai";
import add from "../src/add.js";
import divide from "../src/divide.js";
import toString from "../src/toString.js"

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

describe("Tests planned in phase 2", function () {
  describe("Tests for toString()", function () {
    it("Basic functionality", function () {
      expect(toString(6)).to.equal("6");
    });
    it("Appending strings", function () {
      expect("Earth-" + toString(616)).to.equal("Earth-616")
    });
    it("Stringifying lists", function () {
      expect(toString([1,2,3])).to.equal("1,2,3")
    });
    it("Stringifying a string", function () {
      expect(toString("world")).to.equal("world");
    });
    it("Stringifying null values", function () {
      expect(toString(null)).to.equal("");
    });
    it("Stringifying undefined values", function () {
      expect(toString(undefined)).to.equal("");
    });
    it("Stringifying a list with null value included", function () {
      expect(toString([null,1,2])).to.equal(",1,2");
    });
  });
});
