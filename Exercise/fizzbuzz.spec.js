const fizzBuzz = require("./fizzbuzz")

test("FizzBuzz Function", () => {
    expect(fizzBuzz(5)).toEqual(expect.arrayContaining([1, 2, "Fizz", 4, "Buzz"]))
})