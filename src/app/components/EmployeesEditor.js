import React from 'react'
import PropTypes from 'prop-types'
import EmployeeEdit from '../containers/EmployeeEdit'
import styles from '../styles/style.scss'

const EmployeesEditor = ({ employees, editorVisible, addEmployee }) => {
  if (!editorVisible) {
    return null
  }

  return (
    <div className={styles.Editor}>
      <button onClick={addEmployee} title="add item">
        ✚
      </button>
      {employees.map(employee => (
        <EmployeeEdit key={employee.id} {...employee} />
      ))}
    </div>
  )
}

EmployeesEditor.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      visible: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  addEmployee: PropTypes.func.isRequired,
}

export default EmployeesEditor
