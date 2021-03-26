/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

// Remove the even characters from string, e.g removeEvenCharacters("abcd") === "bd"
function removeEvenCharacters(string) {

    if (string === "") {
        return "";
    }
    if (string === undefined) {
        return "missing argument";
    }
    if (!isNaN(string)) {
        return "argument not string";
    }
    let outputstr = "";
    for (let i = 0; i < string.length; i++) {
        if (i % 2 !== 0) {
            outputstr = outputstr.concat(string[i]);
        }
    }
    return outputstr;
}


// Sum the numbers that are greater than zero of array, e.g. sumPositiveNumbers([-1,4,5,-2,-3,10]) === 19
// Must use the reduce method of the Array object to do this!!!
function sumPositiveNumbers(array) {
   function compare(num1,num2){
       if(num2>0){
           return num1+num2;
       }else {
           return num1;
       }
   }
   return array.reduce(compare,0);
    }

function sumPositiveNumbers(val) {
    let biggert = val.reduce((acc, val)=>{
        if(val > 0){
        acc += val;
        }return acc;
    },0);
    return biggert;
}

// Write a construction function
// Input an array containing numbers and string, e.g. [1, "a", "c", 2, 4]
// Creates an object with two array properties numbers and strings, e.g.
// new ArrayDemo([1, "a", "c", 2, 4]) returns {numbers:[1, 2, 4]; strings:["a", "c"}
function ArrayDemo(array) {
function strfilter(element){
        return typeof element=="string"
    }
function numfilter(element){
    return typeof element=="number";
}
this.numbers=array.filter(numfilter);
this.strings=array.filter(strfilter);

}


// Makes all negative numbers of the input array positive
function makePositive(array) {
    for(let i=0;i<array.length;i++){
        if(typeof array[i]=="number"){
            if(array[i]<0){
                array[i]=-array[i];
            }
        }
    }
    return array;

}



// Replaces sequences of 0s with an "*", e.g.
// removeZeros([3, 0, 0, 0, 5, 6, 0, 0, 7, 0]) returns [3, "*", 5, "*", 7, "*"];
function removeZeros(array) {

    let newarr=[];
    let k=0;
    for(let i=0;i<array.length;i++){
        if(array[i]===0){
            if(newarr.length===0){
                newarr[k++]="*";
            }else if(newarr[k-1]!=="*"){
                newarr[k++]="*";
            }
        }else{
            newarr[k++]=array[i];
        }
    }
return newarr;
}




