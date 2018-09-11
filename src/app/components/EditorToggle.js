import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/style.scss'

const EditorToggle = ({ toggleEditor, editorVisible }) => (
  <button
    className={styles.ToggleEditor}
    onClick={() => toggleEditor(editorVisible)}
  >
    {editorVisible ? 'Close' : 'Open'} menu
  </button>
)

EditorToggle.propTypes = {
  toggleEditor: PropTypes.func.isRequired,
  editorVisible: PropTypes.bool.isRequired
}

export default EditorToggle