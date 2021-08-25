const mockBackend = require("./mockBackend")
// @ponicode
describe("mockBackend.configureFakeBackend", () => {
    test("0", () => {
        let callFunction = () => {
            mockBackend.configureFakeBackend()
        }
    
        expect(callFunction).not.toThrow()
    })
})
