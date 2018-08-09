import React from 'react'
import { Input } from 'antd'

const Image = ({ focusCom, updateCom, style }) => {
  if (focusCom === undefined) {
    return null
  } else {
    return (
      <div className="attr-item img" style={style}>
        图片:
        <Input
          onChange={e => {
            let updatedAttr = {
              ...focusCom.attribute,
              imgUrl: e.target.value
            }
            updateCom(focusCom.id, updatedAttr)
          }}
          value={focusCom.attribute.imgUrl}
        />
      </div>
    )
  }
}
export default Image
