

//Question 1
let arr=[1,50,40,3,10];
let result=arr.filter(item=>item>20).reduce(function(sum,item){
   return sum+item;
},0);
console.log(result);

// let result=arr.filter(function(item){if(item>20){return item;}}).reduce(function(sum,item){
//     return sum+item;
// },0);

//question number 2
let strarr=["banana","apple","mango","avocado","cherry"];
let filtered=strarr.map(item=>item);
//console.log(filtered);
let resultarr=strarr.filter(function(item){if(item.length>=5 && item.includes('a')){ return item;}})
//console.log(resultarr);

//Question number3
function Employee(firstName,lastName,birthdate){
    this.firstName=firstName;
    this.lastName=lastName;
    this.birthdate=birthdate;
    this.getFullName=function (){
return this.firstName + " " +this.lastName;
    }
    this.getAge=function (){

        let current=new Date().getFullYear();
        let bd=new Date(this.birthdate).getFullYear();
        return current-bd;
    }
}

let employee1=new Employee("BB","YY","1999/06/02");
let employee2=new Employee("CC","DD","2005/07/04");
let employee3=new Employee("AA","MM","1979/05/03");
let employee4=new Employee("LL","UU","1980/01/09");

let arr1=[employee1,employee2,employee3,employee4];

console.log(arr1[0].getFullName());
let found=arr1.filter(function(item){if(item.getAge()>20){return item;}})
console.log(found);
let strarr1=arr1.filter(function(item){if(item.getAge()<21){return item;}}).map(function(item){return item.getFullName();})
//let result1=strarr1.map(function(item){return item.getFullName();})
console.log(strarr1);

