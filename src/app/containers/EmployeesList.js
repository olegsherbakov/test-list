import { connect } from 'react-redux'
import EmployeesList from '../components/EmployeesList'

const mapStateToProps = state => ({
  employees: state.employees.filter(employee => employee.visible)
})

export default connect(mapStateToProps)(EmployeesList)