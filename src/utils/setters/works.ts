import { State } from '../../reducers/work/pagesReducer'
import { Com } from '../../types/coms'
import { Page } from '../../types/pages'
export const addComOrderInCurrentPage = (state: State, currentPageId: number, com: Com) => {
  let stateCopy = [...state]
  stateCopy.map((item: Page, index: number) => {
    if (item.id === currentPageId) {
      item.order = item.order.concat([com.id])
    }
  })
  return stateCopy
}

export const removeComOrderInCurrentPage = (state: State, targetPageId: number, comId: number, ) => {
  let stateCopy = [...state]
  stateCopy.map((item: Page, pageIndex) => {
    if (item.id === targetPageId) {
      // item.order.filter(n => n !== comId)
      stateCopy[pageIndex].order = item.order.filter(n => n !== comId)
    }
  })
  console.log(stateCopy)
  return stateCopy
}