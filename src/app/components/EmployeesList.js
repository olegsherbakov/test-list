import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Employee from './Employee'
import styles from './style.scss'

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
      text: PropTypes.string.isRequired,
      visible: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired
};

const getVisibleEmployees = (employees) => {
  return employees.filter(employee => employee.visible)
}

const mapStateToProps = (state) => {
  return {
    employees: getVisibleEmployees(state.employees)
  }
}

export default connect(mapStateToProps)(EmployeesList)