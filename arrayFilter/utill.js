

function getTotalPromoted(studentArray){
    let count=0;
    studentArray.forEach(student => {
        if(student.promoted==true)
          count++;
    });
    return count;
}
function getTotalAgePromoted(studentArray){
    let age=0;
    let Promoted=studentArray.filter((stud)=>stud.promoted==true)
    if(Promoted.length==0)
    return 0;
    age=Promoted.reduce((prev,curr)=>prev+curr.age,0)
   
    return age/Promoted.length;
   
}
function getTotalAgePromotedMen(studentArray){
    let age=0;
    let menPromoted=studentArray.filter((stud)=>stud.promoted==true && stud.gender=='Male')
    if(menPromoted.length==0)
     return 0;
   age=menPromoted .reduce((prev,curr)=>prev+curr.age,0)
    return age
}
function getPromotedUnder15(studentArray){
    let count=0;
    studentArray.forEach((student)=>{
        if(student.age<15 && student.promoted==true)
        count++;
    })
    return count;
}
function getPromotedFemalesAscAge(studentArray){
    let res=[];
    let femalePromoted=studentArray.filter((stud)=>stud.gender=='Female' && stud.promoted==true)
      res=femalePromoted. sort((femStud1,femStud2)=>femStud1.age-femStud2.age)

      return res;
}
function getFilteredObj(studentArray){

    let ans={};
    if(studentArray.length==0)
    return ans;
    let totalPromoted=getTotalPromoted(studentArray);
    let totalPromotedAvgAge=(Number)(getTotalAgePromoted(studentArray).toFixed(2))
    let totalPromotedUnder15=getPromotedUnder15(studentArray)
    let totalAgePromotedMale=getTotalAgePromotedMen(studentArray)
    let totalPromotedFemaleAscByAge=getPromotedFemalesAscAge(studentArray)
    ans={
        totalPromoted,
        totalPromotedAvgAge,
        totalPromotedUnder15,
        totalAgePromotedMale,
        totalPromotedFemaleAscByAge
    }
    return ans;

}
let studentArray= [
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
 

   module.exports=getFilteredObj

   