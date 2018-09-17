let nextId = 0

export const addEmployee = () => ({
  type: 'ADD_EMPLOYEE',
  id: ++nextId,
})

export const toggleEditor = visible => ({
  type: 'TOGGLE_EDITOR',
  visible,
})

export const editEmployee = (id, text) => ({
  type: 'EDIT_EMPLOYEE',
  id,
  text,
})

export const toggleEmployee = id => ({
  type: 'TOGGLE_EMPLOYEE',
  id,
})
