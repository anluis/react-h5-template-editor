import {
  FOCUS_COM,
  ADD_COM,
  UPDATE_PAGE_ORDER,
  ADD_PAGE,
  FOCUS_PAGE,
  UPDATE_COM_ZINDEX
} from '../../constants/ActionTypes'
import { arrayMove } from 'react-sortable-hoc'
const initState = {
  page: {
    order: [0],
    current: 0
  },
  com: {
    order: [],
    current: null
  }
}

const status = (state = initState, action) => {
  switch (action.type) {
    case ADD_COM:
      state.com.current = action.id
      return state
    case FOCUS_COM:
      state.com.current = action.id
      return state
    case UPDATE_COM_ZINDEX:
      state.com.current = action.chooseComId
      return state
    case UPDATE_PAGE_ORDER:
      return {
        ...state,
        ...{
          page: {
            order: arrayMove(
              state.page.order,
              action.oldIndex,
              action.newIndex
            ),
            current: state.page.current
          }
        }
      }
    case ADD_PAGE:
      return {
        ...state,
        ...{
          page: {
            order: state.page.order.concat([action.id]),
            current: action.id
          },
          com: {
            current: null
          }
        }
      }
    case FOCUS_PAGE:
      return {
        ...state,
        ...{
          com: {
            current: null
          },
          page: {
            order: state.page.order,
            current: action.id
          }
        }
      }
    default:
      return state
  }
}

export default status
