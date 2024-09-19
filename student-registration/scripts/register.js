const inputID = document.getElementById('txtStudentID');
const inputName = document.getElementById('txtName');
const inputEmail = document.getElementById('txtEmail');
const inputAge = document.getElementById('txtAge');
const inputGender = document.getElementById('txtGender');
const inputGrade1 = document.getElementById('txtGrade1');
const inputGrade2 = document.getElementById('txtGrade2');
const inputGrade3 = document.getElementById('txtGrade3');
const registerBtn = document.getElementById('btnRegister');
let students = [];

// Constructor function for creating students
function Student(id, name, email, age, gender, grade1, grade2, grade3) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.age = age;
    this.gender = gender;
    this.grade1 = grade1;
    this.grade2 = grade2;
    this.grade3 = grade3;
    this.gpa = (Number(grade1) + Number(grade2) + Number(grade3)) / 3;
}

// Function to check if the Student ID is unique
function isUniqueID(id) {
    return !students.some(student => student.id === id);
}

// Function to register a new student
function register() {
    let id = inputID.value;
    let email = inputEmail.value;

    // Validate inputs
    if (isUniqueID(id) && inputName.value && inputAge.value && inputGender.value && inputGrade1.value && inputGrade2.value && inputGrade3.value) {
        let newStudent = new Student(id, inputName.value, email, inputAge.value, inputGender.value, inputGrade1.value, inputGrade2.value, inputGrade3.value);
        students.push(newStudent);
        displayRow();
        clearForm();  // Clear form after successful registration
    } else {
        alert('Please fill all fields or use a unique Student ID.');
    }
}

// Function to clear the form inputs
function clearForm() {
    inputID.value = "";
    inputName.value = "";
    inputEmail.value = "";
    inputAge.value = "";
    inputGender.value = "";
    inputGrade1.value = "";
    inputGrade2.value = "";
    inputGrade3.value = "";
}

// Initialize the event listeners and default students
function init() {
    registerBtn.addEventListener('click', register);

    // Add default students for testing
    let student1 = new Student("101", "Test1", "test1@example.com", 20, "M", 8, 9, 7);
    let student2 = new Student("102", "Test2", "test2@example.com", 22, "F", 7, 8, 9);
    students.push(student1, student2);
    displayRow();
}

window.onload = init;
