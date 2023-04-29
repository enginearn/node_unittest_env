import { greeter, testGreeter } from "../src/hello";
describe("test.ts test", () => {
    beforeAll(() => {
        jest.fn().mockImplementation(msg => {
            return console.log(msg);
        });
        jest.spyOn(console, "log");
    });
    test("greeter", () => {
        const person = "World";
        const expected = greeter(person);
        expect(expected).toBe("Hello, World!");
    });
    test("testGreeter", () => {
        const expected = testGreeter();
        expect(console.log).toBeCalled();
        expect(expected).toBe("Hello, Grant!");
    });
});
