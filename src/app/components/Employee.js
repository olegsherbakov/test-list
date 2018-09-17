import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/style.scss'

const Employee = ({ id, text }) => (
  <div className={styles.Employee}>
    {id}. {text || '{no description}'}
  </div>
)

Employee.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
}

export default Employee
