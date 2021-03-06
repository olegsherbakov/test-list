const employeesList = []

const employees = (state = employeesList, action) => {
  const { type, id, text } = action

  switch (type) {
    case 'ADD_EMPLOYEE':
      return [...state, { id, text: '', visible: true }]
    case 'EDIT_EMPLOYEE':
      return state.map(
        employee => (id === employee.id ? { ...employee, text } : employee)
      )
    case 'TOGGLE_EMPLOYEE':
      return state.map(
        employee =>
          id === employee.id
            ? { ...employee, visible: !employee.visible }
            : employee
      )
    default:
      return state
  }
}

export default employees
