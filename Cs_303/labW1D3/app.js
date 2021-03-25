/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

/*
Function analyzer
Has an unbound this
Creates an object that contains the following information from the "this" object.
{
	numProperties  	// number of properties
	cntShortName	// count of property names shorter than 3 characters
	cntReferences	// count of reference properties (use the typeof operator to compute this)
}	
*/


function analyzer() {
 
	let count = 0;
	for(let pro in this){
	count++;
	}
	
	let counter = 0;
	for (let key in this){
	if(key.length < 3){
	counter++;
	}
	
	}
	let counter1 = 0;
	for (let key in this){
	if(typeof(this[key]) === "object"){
	counter2++;
	}
	}
	
	
	return {numProperties:count,cntShortName:count1,cntReference:count2}
   }


/* Constructor for a person object
	Person(name, country, grades) creates object
	{
		name: name,  // person's name
		county: country, // person's country
		grades: grades,  // integer array of grades
		computeGrade     // function that computes the grade from grades
	}
*/


	function Person(name, country, grades) {
		this.name = name;
		this.country = country;
		this.grades = grades;
		this.computeGrade = function () {
		  let sum = 0;
		  let arr = this.grades;
		  for (let key of arr) {
			sum += key;

		  }
		  let average = sum / arr.length;
		  return average;
		};
	  }

