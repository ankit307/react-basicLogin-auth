const rewire = require("rewire")
const login_service = rewire("./login.service")
const login = login_service.__get__("login")
const logout = login_service.__get__("logout")
const getAll = login_service.__get__("getAll")
// @ponicode
describe("login", () => {
    test("0", () => {
        let callFunction = () => {
            login(-1, "!Lov3MyPianoPony")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            login(-10, "!Lov3MyPianoPony")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            login("username", 0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            login("user123", "bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            login(123, -1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            login(-Infinity, -Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("logout", () => {
    test("0", () => {
        let callFunction = () => {
            logout()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getAll", () => {
    test("0", () => {
        let callFunction = () => {
            getAll()
        }
    
        expect(callFunction).not.toThrow()
    })
})
