import React from 'react'
import './style.css'
function Switch({value,onChange}) {
    return (
        <div className="switch">
        <label>
          <input type="checkbox"  checked={value} onChange={onChange}/>
          <span className="lever" />
        </label>
      </div>
    )
}

export default Switch
