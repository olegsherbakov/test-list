import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/style.scss'

const EmployeeEdit = ({ id, text, visible, editEmployee, toggleEmployee }) => (
  <div className={styles.EmployeeEdit}>
    Item #{id}
    <textarea
      className={styles.Input}
      value={text}
      onChange={event => editEmployee(id, event.target.value)}
    />
    <button onClick={() => toggleEmployee(id)}>
      {visible ? 'Remove' : 'Restore'}
    </button>
  </div>
)

EmployeeEdit.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
}

export default EmployeeEdit
