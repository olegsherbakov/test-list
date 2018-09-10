import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from './reducers';
import EmployeeList from './components/EmployeesList'
import EditorToggle from './components/EditorToggle'
import EmployeeEditor from './components/EmployeeEditor'
import styles from './style.scss'

const store = createStore(rootReducer)

export default class ApplicationComponent extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className={styles.Container}>
          <h3>Список сотрудников</h3>
          <EmployeeList />
          <EditorToggle />
          <EmployeeEditor />
        </div>
      </Provider>
    );
  }
}