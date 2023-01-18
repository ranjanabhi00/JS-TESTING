

function isPrime(x){
    if(x<=1)
    return false;
    for(let i=2;i*i<=x;i++){
        if(x%i==0)
         return false
    }
    return true
}
function getPrimes(arr){
   let res=[];
res=arr.filter((elem)=>isPrime(elem))
return res;
}



module.exports=getPrimes