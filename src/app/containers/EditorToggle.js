import { connect } from 'react-redux'
import { toggleEditor } from '../actions'
import EditorToggle from '../components/EditorToggle'

const mapStateToProps = state => ({
  editorVisible: state.toggleEditor
})

const mapDispatchToProps = (dispatch) => ({
  toggleEditor: visible => dispatch(toggleEditor(visible))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditorToggle)