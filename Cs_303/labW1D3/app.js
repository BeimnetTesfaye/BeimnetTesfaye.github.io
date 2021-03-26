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

	let output = {};
	let key = Object.keys(this);
		
	output.numProperties=key.length;

		let count = 0;
		for (let value of Object.keys(this)) {
			
			if (value.length < 3)  count++;
				
			
	}
	output.cntShortName = count;
	
		let countervalue = 0;
		for (let value of Object.values(this)) {
			if (typeof value==="object") {
				countervalue++;
			}
		}
	output.cntReference=countervalue;
	return output;
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
		let average;
		for (let value of grades){
			sum += value;
		}
		average=sum/grades.length;
		return average;
			
	}
}