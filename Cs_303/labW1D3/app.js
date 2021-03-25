function load() {
	let id = document.getElementById("result");
	id.innerHTML = "Lab W1D3";
}
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
	//let person = new Person("bob", "usa", [100, 90]);

	let outputObject = {};
	let key = Object.keys(this);
		
	outputObject.numProperties=key.length;

		let count = 0;
		for (let elements of Object.keys(this)) {
			
			if (elements.length < 3)  count++;
				
			
	}
	outputObject.cntShortName = count;
	// Let's count the values in the object
		let countval = 0;
		for (let element of Object.values(this)) {
			if (typeof element==="object") {
				countval++;
			}
		}
	outputObject.cntReference=countval;
	return outputObject;
	}
	


analyzer()


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
	this.computeGrade = function() {
		let sum = 0;
		for (let score of grades){
			sum += score;
		}
		return sum/grades.length;
			
	}
}