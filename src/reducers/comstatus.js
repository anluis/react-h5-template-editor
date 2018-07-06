// 当前选中组件状态
import { SET_CURRENT_ID } from '../actions'
const comstatus = (state = null, action) => {
  switch (action.type) {
    case SET_CURRENT_ID:
      console.dir(action)
      return {
        style: {
          ...action.style
        },
        id: action.id,
        text: action.text
      }
    default:
      return state
  }
}

export default comstatus