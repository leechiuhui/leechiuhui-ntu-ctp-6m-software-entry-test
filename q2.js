/*
    Task 1: 
    - Declare an array that are going to be used to store patient's name.

    Task 2: 
    - Add code to add patient's name into the array declared in task 1.

    Task 3: 
    - Implement listPatient() function to print all patient's name stored in the array
*/


// Task 1: Add code here
const patients = [];

function addPatient(patientName){
    // Task 2: Add code here
        i=patients.length
        patients[i]=patientName;
  
}

// Task 3: Add code here
function listPatient(){
    for(let j = 0; j < patients.length; j++){
        console.log(patients[j]);
      }
}

addPatient("John");
addPatient("Mary");
addPatient("Mark");

listPatient(); // This should list ["John", "Mary", "Mark"]