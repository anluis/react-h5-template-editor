import React from 'react'
import { Input } from 'antd'

const Vedio = ({ focusCom, updateCom, style }) => {
  if (focusCom === undefined) {
    return null
  } else {
    return (
      <div className="attr-item img" style={style}>
        视频:
        <Input
          onChange={e => {
            let updatedAttr = {
              ...focusCom.attribute,
              vedioUrl: e.target.value
            }
            updateCom(focusCom.id, updatedAttr)
          }}
          value={focusCom.attribute.vedioUrl}
        />
      </div>
    )
  }
}
export default Vedio
