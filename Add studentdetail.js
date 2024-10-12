document.addEventListener('DOMContentLoaded', () => {  
    const studentForm = document.getElementById('studentForm');  
    const studentList = document.getElementById('studentList');  
    let students = [];  
  
    studentForm.addEventListener('submit', (event) => {  
        event.preventDefault();  
  
        const name = document.getElementById('name').value;  
        const age = document.getElementById('age').value;  
        const grade = document.getElementById('grade').value;  
  
        const newStudent = {  
            name,  
            age,  
            grade  
        };  
  
        students.push(newStudent);  
        updateStudentList();  
  
        // Clear form fields  
        studentForm.reset();  
    });  
  
    const updateStudentList = () => {  
        studentList.innerHTML = '';  
        students.forEach((student, index) => {  
            const listItem = document.createElement('li');  
            listItem.textContent = `${index + 1}. Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`;  
            studentList.appendChild(listItem);  
        });  
    };  
});
