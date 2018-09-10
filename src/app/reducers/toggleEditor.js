const toggleEditor = (state = false, action) => {
  const { type, visible } = action;

  switch (type) {
    case 'TOGGLE_EDITOR':
      return !visible;
    default:
      return state;
  }
};

export default toggleEditor;