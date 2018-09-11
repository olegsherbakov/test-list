import { connect } from 'react-redux'
import { addEmployee } from '../actions'
import EmployeesEditor from '../components/EmployeesEditor'

const mapStateToProps = state => ({
  employees: state.employees,
  editorVisible: state.toggleEditor
})

const mapDispatchToProps = dispatch => ({
  addEmployee: () => dispatch(addEmployee())
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesEditor)