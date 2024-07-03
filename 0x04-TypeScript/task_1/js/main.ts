interface Teacher {
  readonly firstName: string,
  readonly fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  lastName: string,
  location: string,
  [key: string]: unknown,
}

interface Directors extends Teacher {
  numberOfReports: number,
}

interface printTeacherF {
  (firstName: string, lastName:string): string
}

const  printTeacher: printTeacherF = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`
}

interface studentConstructor {
  firstName: string;
  lastName: string;
}

interface  studentInterface{
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements studentInterface{
  firstName: string
  lastName: string

  constructor ({ firstName, lastName }: studentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
}
}
