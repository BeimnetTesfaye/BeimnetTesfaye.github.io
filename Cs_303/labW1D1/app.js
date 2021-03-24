/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

function pow(x, n) {
	return x ** n;
}

function add2(n1, n2) {
	return n1 + n2;
}

function add(...args) {
	let count = arguments.length;
	let sum = 0;
	for (let i=0; i<count; i++) {
		sum += arguments[i];		
	}
	
	return sum;
}

/*
	Input: grades is an array of integers
	Output: compute average of grades and report letter grade as follows:
	90 - 100 A
	80 - 89  B
	70 - 79  C
	60 - 69  D
	0 - 59   NC
*/
function computeGrade(grades) {
	let sum=0;
	let average;

	for(let i=0;i<grades.lenght;i++){
	sum=sum+grades[i];
		}
		average=sum/grades.length;
	if(average>=90) return "A";
	else if(average>=80)return "B";
	else if(average>=70)return "C";
	else if(average>=60)return "D";
	else return "NC";

	
}

