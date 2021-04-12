let student={
firstName: "default",
lastName: "default",
grades: [40, 50, 70],
inputNewGrade: function (newGrade) {
this.grades.push(newGrade);
},
computeAverageGrade: function () {
let average = this.grades.reduce(
(sum, item, index, arr) => sum + item / arr.length,
0);
return average;
},
};
let BB = Object.create(student);
BB.firstName = "BBB";
BB.lastName = "TTT";
BB.grades = [50, 30, 90];
let AA = Object.create(student);
AA.firstName = "AAA";
AA.lastName = "RRR";
AA.grades = [75, 45, 63];
let KK = Object.create(student);
KK.firstName = "MM";
KK.lastName = "TT";
KK.grades = [70, 30, 44];
let arr = [BB, AA, KK];
let avg = arr.map((item) => item.computeAverageGrade());
console.log(avg);


// Constructor function 
function Student(firstName, lastName, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = grades;
    }
    Student.prototype.inputNewGrade = function (newGrade) {
    this.grades.push(newGrade);
    return this.grades; 
    };
    Student.prototype.computeAverageGrade = function () {
    let avg = this.grades.reduce(
    (sum, item, index, arr) => sum + item / arr.length,
    0
);
    
    return avg;
     
    };
    let BB = new Student("BB", "TT", [50, 30, 90]);
    let AA = new Student("AA", "MM", [75, 45, 63]);
    let KK = new Student("KK", "TT", [70, 30, 44]);
    let arr = [BB, AA, KK];
    let avg = arr.map((item) => item.computeAverageGrade());
    console.log(averages);
    Student.prototype.sort = function () { 
    let sorted = this.grades.sort((a, b) => a - b);
    console.log(sorted);
    
    return sorted;
   
    };
    
    