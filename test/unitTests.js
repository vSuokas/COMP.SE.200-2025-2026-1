import { expect } from "chai";
import add from "../src/add.js"

describe('Unit tests', function () {

  describe('Tests for add()', function () {
    it('Basic functionality', function () {
    expect(add(1,2)).to.equal(3);
    });
  });
});