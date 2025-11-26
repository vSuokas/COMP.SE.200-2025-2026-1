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


describe('Copiliot generated tests', function () {
  
  describe('Tests for add()', function () {
    it('Adds two positive numbers', function () {
      expect(add(6, 4)).to.equal(10);
    });

    it('Adds a positive and a negative number', function () {
      expect(add(6, -4)).to.equal(2);
    });

    it('Adds two negative numbers', function () {
      expect(add(-6, -4)).to.equal(-10);
    });

    it('Adds zero and a number', function () {
      expect(add(0, 5)).to.equal(5);
      expect(add(5, 0)).to.equal(5);
    });

    it('Adds floating point numbers', function () {
      expect(add(0.1, 0.2)).to.be.closeTo(0.3, 1.0e-9)
    });

    it('Handles undefined values by using default (0)', function () {
      expect(add(undefined, 5)).to.equal(5)
      expect(add(5, undefined)).to.equal(5)
      expect(add(undefined, undefined)).to.equal(0)
    });
    
    it('Handles non-numeric values gracefully', function () {
      expect(add('6', 4)).to.equal(10) // coerces string to number
      expect(add(null, 4)).to.equal(4)
    });
  });

  describe("Tests for divide()", function () {
    it("Divides two positive numbers", function () {
      expect(divide(6, 4)).to.equal(2);
    });

    it("Divides a positive by a negative number", function () {
      expect(divide(6, -3)).to.equal(-2);
    });

    it("Divides two negative numbers", function () {
      expect(divide(-6, -3)).to.equal(2);
    });

    it("Divides by 1", function () {
      expect(divide(6, 1)).to.equal(6);
    });

    it("Divides zero by a number", function () {
      expect(divide(0, 5)).to.equal(0);
    });

    it("Handles floating point division", function () {
      expect(divide(7, 2)).to.be.closeTo(3.5, 1.0e-9);
    });

    it("Handles undefined values using default (1)", function () {
      expect(divide(undefined, 5)).to.equal(5); // dividend defaults to 1
      expect(divide(5, undefined)).to.equal(5); // divisor defaults to 1
      expect(divide(undefined, undefined)).to.equal(1);
    });

    it("Handles division by zero", function () {
      expect(divide(5, 0)).to.equal(Infinity);
      expect(divide(-5, 0)).to.equal(-Infinity);
    });

    it("Handles non-numeric values gracefully", function () {
      expect(divide('6', 3)).to.equal(2);
      expect(divide(null, 3)).to.equal(0); // null coerces to 0
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
