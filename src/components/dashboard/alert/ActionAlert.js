import React from 'react'
import "./modal.css"

function ActionModal({ confirm, description, dismiss, style, title }) {
    return (
        <div style={style} className="modal" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                        <button type="button" className="close" aria-label="Close"
                            onClick={dismiss}>
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {description}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" onClick={dismiss}>cancel</button>
                        <button type="button" className="btn btn-primary" onClick={confirm}>confirm</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ActionModal
