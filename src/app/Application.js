import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import EmployeesList from './containers/EmployeesList'
import EditorToggle from './containers/EditorToggle'
import EmployeesEditor from './containers/EmployeesEditor'
import styles from './styles/style.scss'

const store = createStore(rootReducer)

export default class ApplicationComponent extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className={styles.Container}>
          <h1>Employees list</h1>
          <EmployeesList />
          <EmployeesEditor />
          <EditorToggle />
        </div>
      </Provider>
    )
  }
}
