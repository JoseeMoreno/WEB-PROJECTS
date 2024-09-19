// Function to display all students in the table
function displayRow() {
    const TABLE = document.getElementById("studentList");
    let row = "";

    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        row += `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.age}</td>
                <td>${student.gender}</td>
                <td>${student.grade1}</td>
                <td>${student.grade2}</td>
                <td>${student.grade3}</td>
                <td>${student.gpa.toFixed(2)}</td>
                <td><button class="btn btn-danger" onclick="deleteStudent('${student.id}')">Delete</button></td>
            </tr>
        `;
    }

    TABLE.innerHTML = row; // Update the table
    displayTotal(); // Update the total count of students
}

// Function to update the total number of registered students
function displayTotal() {
    document.getElementById("total").textContent = students.length;
}

// Function to delete a student by their ID
function deleteStudent(id) {
    students = students.filter(student => student.id !== id);
    displayRow(); // Re-render the table after deletion
}
