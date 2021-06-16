import React from 'react'
import "./index.css"
import { Link } from "react-router-dom"
import { IP_ADDRESS } from "../../../utils/constants";

function EventCardEdit({ event }) {
    return (
        <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="mx-md-2 card  mb-3">
                <div className="card-img-top d-flex flex-row card-images">
                    {
                        event.pictorials.map(img => <div className="grid">
                            <img className="card-img" src={`${IP_ADDRESS}/event/uploads/${img.name}`} alt={img.name} key={img.name} />
                        </div>)
                    }
                </div>
                <div className="card-body">
                    <h5 className="card-title">{event.name}</h5>
                    <p className="card-text">{event.description}</p>
                    <Link to="/edit" className="btn btn-primary">Edit <i className="ml-1 material-icons">edit</i></Link>
                </div>
            </div>
        </div>

    )
}
export default EventCardEdit
