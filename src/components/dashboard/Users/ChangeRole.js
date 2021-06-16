import React from 'react'
import { IP_ADDRESS } from '../../../utils/constants'
import PageTitle from '../pageTitle'
import { Request } from "../../../utils/Request"
import AlertModal from "../alert/ActionAlert"
import { createFlushMessage } from '../../../state/slices/Application'
import { useDispatch } from 'react-redux'

function ChangeRole() {
    const [state, setState] = React.useState({
        roles: [],
        users: [],
        action: null,
        alertDisplay: "none",
        officials: []
    })
    React.useEffect(() => {
        const init = async () => {
            const { users, status } = await Request(`${IP_ADDRESS}/auth/users`);
            const { role, status: roleStatus } = await Request(`${IP_ADDRESS}/roles`)
            const { officials, state: officialsState } = await Request(`${IP_ADDRESS}/roles/officials`)
            if (status === 200 && roleStatus === 200 &&
                officialsState === 200) {
                setState({ users: users, roles: role, officials })
            }
        }
        init()
    }, [])

    const dismiss = () => {
        setState({ ...state, alertDisplay: "none" })
    }
    const changeRoleFormSumit = (e) => {
        e.preventDefault()
        const selectedUser = e.target.user.value
        const selectedRole = e.target.role.value
        if (selectedRole && selectedUser) {
            setState({
                ...state,
                action: `are you sure you want to assign role ${selectedRole.name} to user 
                     ${selectedUser.firstName} ${selectedUser.lastName} `,
                alertDisplay: "block",
                selectedUser,
                selectedRole
            })
        }
    }
    const headers = {
        "Content-Type": "application/json;charset=utf-8",
    }
    const dispatch = useDispatch()
    const confirmFormSubmit = () => {
        setState({
            ...state,
            alertDisplay: "none"
        })
        // send data to backend
        dispatch(
            createFlushMessage({
                className: "alert-success",
                message: `changes have been made`,
            }))

    }
    const getUser = (id) => {
        let user;
        state.users.forEach(item => {
            if (item.id === id)
                user = item
        })
        return `${user.firstName} ${user.lastName}`
    }
    const getRole = (id) => {
        let role;
        state.roles.forEach(item => {
            if (item.id === id)
                role = item
        })
        return role.name
    }
    const deleteRole = async (id) => {
        const { statue, message } = await Request(`${IP_ADDRESS}/roles/`, "DELETE", headers, { "id": id })
        let alertClass = "alert-danger";
        if (statue === 200) {
            alertClass = "alert-success"
        }
        dispatch(
            createFlushMessage({
                className: alertClass,
                message: message,
            }))

    }
    const createRole = async (e) => {
        e.preventDefault()
        if (e.target.name) {
            const { statue, message } = await Request(`${IP_ADDRESS}/roles/`, "POST",
                headers, { "name": e.target.name })
            let alertClass = "alert-danger";
            if (statue === 200) {
                alertClass = "alert-success"
            }
            dispatch(
                createFlushMessage({
                    className: alertClass,
                    message: message,
                }))
        }
    }
    return (
        <div className="main-content-container  container-fluid">
            {/* Page Header */}
            <div className="row page-header py-4">
                <PageTitle sm="4" title="Official Roles" subtitle="officials" className="text-sm-left" />
            </div>
            <table className="table mb-5">
                <thead className="bg-light">
                    <tr>
                        <th scope="col" className="border-0">
                            Role
                        </th>
                        <th scope="col" className="border-0">
                            User
                        </th>
                        <th>
                            Delete
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {state.officials.map(officials =>
                        <tr>
                            <td>{getRole(officials.id)}</td>
                            <td>{getUser(officials.role)}</td>
                            <td>
                                <i className="material-icons text-danger btn" onClick={() => {
                                    deleteRole(officials.id)
                                }}>delete</i>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            {/* change role */}
            <h5 id="change">Change official</h5>
            <form onSubmit={changeRoleFormSumit}>
                <div className="form-row align-items-center">
                    <div className="col-6 col-md-4 my-1">
                        <label className="mr-sm-2" htmlFor="role">Select Role</label>
                        <select className="custom-select mr-sm-2" id="role" name="role">
                            <option selected>Choose...</option>
                            {state.roles.map(role =>
                                <option value={role}>{role.name}</option>)}
                        </select>
                    </div>
                    <div className="col-6 col-md-4 my-1">
                        <label className="mr-sm-2" htmlFor="user">Select User</label>
                        <select className="custom-select mr-sm-2" id="user" name="user">
                            <option selected>Choose...</option>
                            {state.users.map(user =>
                                <option value={user}>{`${user.firstName} ${user.lastName}`}</option>
                            )}
                        </select>
                    </div>
                    <div className="col-12 my-4">
                        <button type="submit" className="btn btn-primary">
                            <i className="material-icons">done</i> Save changes
                        </button>
                    </div>

                </div>
            </form>
            {/* create role */}
            <h5 id="add">create new role</h5>
            <form className="form-row " onSubmit={createRole}>
                <div className="col-6 col-md-4">
                    <input className="form-control" placeholder="role name" required name="name" />
                </div>
                <div className="col-4">
                    <button type="submit form-control" className="btn btn-primary">
                        <i className="material-icons">create</i> create new role
                    </button>
                </div>
            </form>

            <AlertModal
                title="confirm changes"
                confirm={confirmFormSubmit}
                className={state.alertClass}
                description={state.action}
                dismiss={dismiss}
                style={{ display: state.alertDisplay, zIndex: "10000" }}
            />
        </div>
    )
}

export default ChangeRole
