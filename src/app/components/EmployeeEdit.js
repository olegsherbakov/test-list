import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { editEmployee, toggleEmployee } from '../actions'
import styles from './style.scss'

const EmployeeEdit = ({ id, text, visible, editEmployee, toggleEmployee }) => (
  <div className={styles.EmployeeEdit}>
    Item #{id}
    <textarea
      className={styles.Input}
      value={text}
      onChange={(event) => editEmployee(id, event.target.value)}
    >{text}</textarea>
    <button onClick={() => toggleEmployee(id)}>{visible ? 'Remove' : 'Restore'}</button>
  </div>
)

EmployeeEdit.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  editEmployee: (id, text) => dispatch(editEmployee(id, text)),
  toggleEmployee: id => dispatch(toggleEmployee(id))
})

export default connect(() => ({}), mapDispatchToProps)(EmployeeEdit)