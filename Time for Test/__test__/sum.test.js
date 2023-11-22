import { sum } from "../src/components/sum";

test("Sum of two number",()=>{
    const res=sum(3,6);
    expect(res).toBe(9);
})