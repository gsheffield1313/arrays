//declare and empy array by//
let customerNames=[];
customerNames.push('sam');
customerNames.push('micahel');

//acces first by//

console.log(customerNames[0]);
console.log(customerNames[1]);

//write a for loop for array//

for (let i =0; i<customerNames.length;i++){
    console.log(customerNames[i]);
}

for(name of customerNames){
    console.log(name);
}

let firstName='Mary';
let lastName='Brown';
let assignmentOne=100;
let assignmentTwo=79;
let assignmentThree=80;
let assignmentFour=90;
let assignmentFive=100;

console.log("Student:"+ firstName + " " + lastName);
console.log("Grades:");
console.log("1:"+assignmentOne);
console.log("2:"+assignmentTwo);
console.log("3:"+assignmentThree);
console.log("4:"+assignmentFour);
console.log("5:"+assignmentFive);

// declaring an array//
//How do we declare an array?  Arrays can be declared a number of ways, but each declaration has the same components:  

//(1) let or var
//(2) a way to tell JavaScript that you want an array:   either new Array() or [] 
//(3) a name. 
//

 //let gradesArray = new Array(5); //

//let gradesArray =[100,79,80,90,100];//

//let gradesArray= new Array(100,79,80,90,100);//

//creating an array without a length//
//
//let gradesArray =[];
//let gradesArray= new Array();


// add push values to the array by doing the following

//gradesArray.push(100);
//gradesArray.push(79);
//gradesArray.push(80);
//gradesArray.push(90);
//gradesArray.push(100);//

let fullName = "Mary" + " " + "Brown"
let gradesArray= [100,79,80,90,100];

console.log("\n\nStudent:" + fullName);
console.log("Grades:");
for(let i=0; i<5; i++) {
    console.log((i+1)+":"+gradesArray[i]);
}