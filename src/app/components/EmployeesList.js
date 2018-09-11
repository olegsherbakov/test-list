import React from 'react'
import PropTypes from 'prop-types'
import Employee from './Employee'
import styles from '../styles/style.scss'

const EmployeesList = ({ employees }) => {
  if (!employees.length) {
    return null
  }

  return (
    <div className={styles.EmployeeList}>
      {employees.map(employee =>
        <Employee
          key={employee.id}
          {...employee}
        />
      )}
    </div>
  )
}

EmployeesList.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default EmployeesList