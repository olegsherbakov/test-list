import { connect } from 'react-redux'
import { editEmployee, toggleEmployee } from '../actions'
import EmployeeEdit from '../components/EmployeeEdit'

const mapDispatchToProps = dispatch => ({
  editEmployee: (id, text) => dispatch(editEmployee(id, text)),
  toggleEmployee: id => dispatch(toggleEmployee(id))
})

export default connect(() => ({}), mapDispatchToProps)(EmployeeEdit)