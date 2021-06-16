import React from 'react'

function UserEdit({ selectedUser, setSelectedUser, roles }) {
    const closeModal = () => {
        setSelectedUser(null)
    }
    // const inputValueChange = () => { }
    return (
        <div className="modal mx-auto d-block mb-5"
            style={{
                zIndex: "10000",
                backgroundColor: "rgba(0,0,0,0.5)",
                marginTop: "60px",
                overflow: "scroll"
            }}
            id="edit user " tabIndex={-1} role="dialog"
            aria-labelledby="edit user Label"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="edit user Label">change user details</h5>
                        <button
                            type="button"
                            className="close"
                            aria-label="Close"
                            onClick={closeModal}>

                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="row form-group">
                                {/* First Name */}
                                <div className="col-md-6 form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input
                                        readOnly className="form-control"
                                        id="firstName"
                                        placeholder="First Name"
                                        value={selectedUser.firstName}
                                        name="firstName" />

                                </div>
                                {/* Last Name */}
                                <div className="col-md-6 form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input
                                        readOnly className="form-control"
                                        placeholder="Last Name"
                                        id="lastName"
                                        value={selectedUser.lastName}
                                        name="lastName" />
                                </div>
                            </div>
                            <div className="row form-group">
                                {/* email */}
                                <div className="col-md-6 form-group">
                                    <label htmlFor="feemail">email</label>
                                    <input
                                        readOnly className="form-control"
                                        type="email"
                                        placeholder="email Address"
                                        id="email"
                                        name="email"
                                        autoComplete="email"
                                        value={selectedUser.email}
                                    />

                                </div>

                                <div className="col-md-6 form-group">
                                    <label htmlFor="phoneNumber">PhoneNumber</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="+2547123456"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        autoComplete="current-phoneNumber"
                                        value={selectedUser.phoneNumber}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-4 form-group">
                                    <label htmlFor="street">street</label>
                                    <input
                                        className="form-control"
                                        id="street"
                                        name="street"
                                        value={selectedUser.Address.street}
                                        readOnly
                                    />
                                </div>
                                {/* City */}
                                <div className="col-md-4 form-group">
                                    <label htmlFor="city">City</label>
                                    <input
                                        className="form-control"
                                        id="city"
                                        value={selectedUser.Address.city}
                                        name="city"
                                        readOnly
                                    />
                                </div>
                                <div className="col-md-4 form-group">
                                    <label htmlFor="country">country</label>
                                    <input
                                        className="form-control"
                                        id="county"
                                        value={selectedUser.Address.country}
                                        name="country"
                                        readOnly />
                                </div>
                                {/* <div className="col-md-6 form-group">
                                    <label htmlFor="role">user role</label>
                                    <select
                                        id="role"
                                        name="role"
                                        className="form-control"
                                        value={selectedUser.role}
                                    >
                                        {roles.map(role => <option key={role.id}>{role.name}</option>)}
                                        <option>...</option>
                                    </select>
                                </div> */}
                                <div className="col-md-12 form-group">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="active"
                                            checked={selectedUser.isActive}
                                        />
                                        <label className="form-check-label" htmlFor="active">
                                            is active
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer mb-5">
                        <button type="button" className="btn btn-danger">delete user</button>
                        <button type="button" className="btn btn-secondary" onClick={closeModal} >
                            Close
                        </button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserEdit
