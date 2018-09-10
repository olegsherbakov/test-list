import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { toggleEditor } from '../actions'
import styles from './style.scss'

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

const mapStateToProps = (state) => ({
  editorVisible: state.toggleEditor
})

const mapDispatchToProps = (dispatch) => ({
  toggleEditor: (visible) => dispatch(toggleEditor(visible))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditorToggle)