import { greeting } from "./external/helper-functions/greeting.js";

test('greets a user', ()=>{
    expect(greeting("github user")).toBe("hello, github user!");
});