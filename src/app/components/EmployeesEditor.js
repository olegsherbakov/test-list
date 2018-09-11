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
      {employees.map(employee =>
        <EmployeeEdit
          key={employee.id}
          {...employee}
        />
      )}
      <button onClick={addEmployee}>Add item</button>
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
  addEmployee: PropTypes.func.isRequired
}

export default EmployeesEditor