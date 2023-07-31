/**
 * Retrieves a list of students.
 * @author Adewale Fatoki <https://github.com/adewaleftk>
 * @returns {{id: Number, firstName: String, location: String}[]}
 */

function getListStudents() {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
}

export default getListStudents
