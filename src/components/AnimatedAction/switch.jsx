import React from 'react'
import './style.css'
function Switch() {
    return (
        <div className="switch">
        <label>
          <input type="checkbox" />
          <span className="lever" />
        </label>
      </div>
    )
}

export default Switch
