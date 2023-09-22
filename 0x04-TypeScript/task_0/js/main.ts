// main.ts

export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Alice',
  lastName: 'Smith',
  age: 22,
  location: 'Los Angeles',
};

const studentsList: Student[] = [student1, student2];

function renderTable() {
  const table = document.createElement('table');

  studentsList.forEach((student) => {
    const row = table.insertRow();
    const cell = row.insertCell();
    cell.textContent = student.firstName + ', ' + student.location;
  });

  document.body.appendChild(table);
}

renderTable();
