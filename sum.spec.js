const {Sum, Validate} = require("./sum")

test("Testing Sum Function-1", () => {
    expect(Sum(5, 5)).toBe(10)
})

test("Testing Sum Function-2", () => {
    expect(Sum(15, 5)).toBe(20)
})

test("Testing Validate Function-1", () => {
    expect(Validate("ryan.fandy@gmail.com")).toBe(true)
})

test("Testing Validate Function-2", () => {
    expect(Validate("ryangmail.com")).toBe(false)
})