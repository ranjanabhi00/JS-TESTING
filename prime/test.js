const getPrimes = require("./util")



describe('Prime array  should', ()=> {
    [
        {
            i: [3,12,32,31,43,56,123],
            e: [3,31,43],
        },
        {
            i: [42,34,12],
            e: [],
        },
        {
            i: [1],
            e: [],
        },
        {
            i: [23,29,19,107],
            e: [23,29,19,107],
        },
        {
            i: [2],
            e: [2],
        },{
            i: [23423412,2345671232,98765210,45],
            e: [],
        },
    ].forEach(({i: input, e: expected})=>{
        test(`input ${input} be ${expected}`, ()=>{
            expect(getPrimes(input)).toEqual(expected);
        })
    })

});