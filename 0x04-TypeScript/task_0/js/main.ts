interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentOne: Student = {
    firstName: 'Deena',
    lastName: 'Kamal',
    age: 30,
    location: 'Cairo'
}

const studentTwo: Student = {
    firstName: 'Ali',
    lastName: 'Ahmed',
    age: 22,
    location: 'Alexandria'
}

const studentsList: Student[] = [studentOne, studentTwo];

function createTablerow(student: Student){
  const tableRow = document.createElement("tr")
  const firstNamecell = document.createElement("td")
  const locationCell = document.createElement("td")

  firstNamecell.textContent =  student.firstName
  locationCell.textContent = student.location

  tableRow.appendChild(firstNamecell)
  tableRow.appendChild(locationCell)
  return tableRow
}

const tableBody = document.getElementById("table")

studentsList.forEach((student) => {
  const tableRow = createTablerow(student)
  tableBody.appendChild(tableRow)
})
