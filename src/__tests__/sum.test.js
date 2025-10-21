import { sum } from "../components/Sum";
test("the function sum should give the sum of 2 numbers",()=>{
    const result=sum(2,5);
    //assertion
    expect(result).toBe(7);
});

