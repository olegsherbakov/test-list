import { combineReducers } from 'redux'
import employees from './employees'
import toggleEditor from './toggleEditor'

export default combineReducers({
  employees,
  toggleEditor,
})
