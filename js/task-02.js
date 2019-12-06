 let countProps = function(obj)  {
 let totalValueOfProps = 0;

 const values = Object.values(obj); 

 for (const value of values) {
      totalValueOfProps ++;
 }
 return totalValueOfProps;
 };



console.log(countProps({})); // 0

console.log(countProps({
    name: 'Mango',
    age: 2
})); // 2

console.log(countProps({
    mail: 'poly@mail.com',
    isOnline: true,
    score: 500
})); // 3