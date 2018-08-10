// 顶部功能区域
import { connect } from 'react-redux'
import { addCom } from '../../actions/Coms'
import { undo } from '../../actions/index'
import TopBar from '../../components/TopBar/TopBar'
import {
  imageModule,
  backgroundModule,
  inputModule,
  vedioModule,
  textModule
} from '../../components/Module/Module'
import {
  IMG_MODULE,
  BACKGROUND_MODULE,
  INPUT_MODULE,
  VEDIO_MODULE,
  TEXT_MODULE
} from '../../constants/ModuleTypes'

const mapStateToProps = state => {
  console.dir(state)
  return {
    currentPageId: state.status.present.page.current
  }
}

const mapDispatchToProps = dispatch => ({
  addCom: (targetPageId, moduleType) => {
    switch (moduleType) {
      case IMG_MODULE:
        dispatch(addCom(imageModule, targetPageId))
        break
      case BACKGROUND_MODULE:
        dispatch(addCom(backgroundModule, targetPageId))
        break
      case INPUT_MODULE:
        dispatch(addCom(inputModule, targetPageId))
        break
      case VEDIO_MODULE:
        dispatch(addCom(vedioModule, targetPageId))
        break
      case TEXT_MODULE:
        dispatch(addCom(textModule, targetPageId))
        break
      default:
        break
    }
  },
  undo: () => {
    dispatch(undo())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar)
