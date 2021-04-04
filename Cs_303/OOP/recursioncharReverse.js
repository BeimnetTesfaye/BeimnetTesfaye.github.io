function reverseChar(str){
    if(str.length===0){
        return;
    }else{
        reverseChar(str.substring(1));
        console.log(str.charAt(0));
    }
}

//console.log(reverseChar("abc"));
console.log("abc".substring(0));

let nubers=[10,20];
let [a,b]=nubers;

let user={};
[user.name,user.lasname]="john smith".split(" ");
console.log(user);