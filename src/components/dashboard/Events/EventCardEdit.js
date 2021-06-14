import React from 'react'
import "./index.css"
import { Link } from "react-router-dom"
import { IP_ADDRESS } from "../../../utils/constants";

function EventCardEdit({ event }) {
    return (
        <div className="card mx-3" style={{ width: '18rem' }}>
            <div className="card-img-top d-flex flex-row card-images">
                {
                    event.pictorials.map(img => <div className="grid">
                        <img className="card-img" src={`${IP_ADDRESS}/event/uploads/${img.name}`} alt={img.name} key={img.name}/>
                    </div>)
                }
            </div>
            <div className="card-body">
                <h5 className="card-title">{event.name}</h5>
                <p className="card-text">{event.description}</p>
                <Link to="/edit" className="btn btn-primary">Edit</Link>
            </div>
        </div>

    )
}
export default EventCardEdit
