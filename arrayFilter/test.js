const getFilteredObj = require("./utill");

let inputArray=[
    {
    name: "Hewie",
    age: 9,
    promoted: true,
    gender: "Male",
    },
    {
    name: "Brantley",
    age: 14,
    promoted: true,
    gender: "Female",
    },
    {
    name: "Sophie",
    age: 8,
    promoted: true,
    gender: "Female",
    },
    {
    name: "alvin",
    age: 14,
    promoted: false,
    gender: "Male",
    },
   ];

   let expectedObj={
    "totalPromoted": 3,
    "totalPromotedAvgAge": 10.33,
    "totalPromotedUnder15": 3,
    "totalAgePromotedMale": 9,
    "totalPromotedFemaleAscByAge": [
      { name: 'Sophie', age: 8, promoted: true, gender: 'Female' },
      { name: 'Brantley', age: 14, promoted: true, gender: 'Female' }
    ]
  }

  test("Filteres object  ",()=>{
       expect(getFilteredObj(inputArray)).toEqual(expectedObj)
  })