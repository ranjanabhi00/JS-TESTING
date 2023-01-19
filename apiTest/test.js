let axios=require('axios')


    let expectedRes= [
        {
        "name": "house2",
        "ownerName": "Krishna",
        "address": "Patna",
        "areaCode": "100000",
        "rent": "1100",
        "isBachelorAllowed": true,
        "isMarriedAllowed": true,
        "id": 2
        },
        {
        "name": "house3",
        "ownerName": "Bicky",
        "address": "Bangal",
        "areaCode": "300000",
        "rent": "900",
        "isBachelorAllowed": true,
        "isMarriedAllowed": false,
        "id": 3
        }
        ]

test("Checking api get request",async()=>{
    let res=await axios.get("http://localhost:3000/houses")
    expect(res.data).toEqual(expectedRes)
})