const assert = require("chai").assert;
const fibonacci = require("../fibonacci");
const app = require("../fibonacci");

describe("Fibonacci series test", function () {
  //test for negative numbers
  it("fib(-1) = undefined", function () {
    let result = app.fibonacci(-1);
    assert.equal(result, undefined);
  });

  //   //First number is 0
  //   it("Second Number = 1", function () {
  //     let result = app.fibonacci(1);
  //     assert.deepEqual(result, 0);
  //   });

  it("fib(1) = 1", function () {
    let result = app.fibonacci(1);
    assert.equal(result, 1);
  });

  it("fib(2) = 1", function () {
    let result = app.fibonacci(2);
    assert.equal(result, 1);
  });

  it("fib(3) = 2", function () {
    let result = app.fibonacci(3);
    assert.equal(result, 2);
  });

  it("fib(4) = 3", function () {
    let result = app.fibonacci(4);
    assert.equal(result, 3);
  });

  it("fib(9) = 34", function () {
    let result = app.fibonacci(9);
    assert.equal(result, 34);
  });

  it("fib(10) = 55", function () {
    let result = app.fibonacci(10);
    assert.equal(result, 55);
  });

  it("fib(11) = undefined", function () {
    let result = app.fibonacci(11);
    assert.equal(result, undefined);
  });
});
