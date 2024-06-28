/* eslint-disable */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.validateString(name, 'Name');
    this._length = this.validateNumber(length, 'Length');
    this._students = this.validateArray(students, 'Students');
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this.validateString(newName, 'Name');
  }

  // Getter and setter for length
  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = this.validateNumber(newLength, 'Length');
  }

  // Getter and setter for students
  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = this.validateArray(newStudents, 'Students');
  }

  // Validation methods
  validateString(value, propName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${propName} must be a string`);
    }
    return value;
  }

  validateNumber(value, propName) {
    if (typeof value !== 'number' || isNaN(value)) {
      throw new TypeError(`${propName} must be a number`);
    }
    return value;
  }

  validateArray(value, propName) {
    if (!Array.isArray(value)) {
      throw new TypeError(`${propName} must be an array`);
    }
    value.forEach((item, index) => {
      if (typeof item !== 'string') {
        throw new TypeError(
          `Element at index ${index} of ${propName} must be a string`,
        );
      }
    });
    return value;
  }
}
