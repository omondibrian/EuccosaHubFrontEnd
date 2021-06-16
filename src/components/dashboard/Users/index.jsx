import React from "react";
import PageTitle from "../pageTitle";
import UserEdit from "./UserEdit"
import { Request } from "../../../utils/Request"
import { IP_ADDRESS } from "../../../utils/constants";
import { Link } from "react-router-dom"
const UsersData = () => {
  const [users, setUsers] = React.useState([]);
  const [roles, setRoles] = React.useState([]);
  React.useEffect(() => {
    async function initializeUsers() {
      const {users,status} = await Request(`${IP_ADDRESS}/auth/users`);
      const userRoles = await Request(`${IP_ADDRESS}/roles`)
      setRoles(userRoles.role || [])
      if (status === 200) {
        setUsers(users)
      }

    }
    initializeUsers()
  }, [])
  const [selectedUser, setSelectedUser] = React.useState(null)
  return (
    <div className="main-content-container  container-fluid">
      {/* Page Header */}
      <div className="row page-header py-4">
        <PageTitle sm="4" title="Registered Users" subtitle="Users" className="text-sm-left" />
      </div>

      {/* Default Light Table */}
      <div className="my-3">
        <Link to="/dashboard/users/roles/#change" >edit role<i className="ml-1 material-icons">create</i></Link>
        <Link to="/dashboard/users/roles/#add" className="mx-3">
          add role<i className="ml-1 material-icons">add</i>
        </Link>
        <Link to="/dashboard/users/roles/#change">
          change role<i className="ml-1 material-icons">assignment_ind</i>
        </Link>

      </div>
      <div className="row">
        <div className="col-12 mb-4">
          <div className="card-header border-bottom">
            <h6 className="m-0"> Users</h6>
          </div>
          <div className="card-body p-0 pb-3">
            <div className="table-responsive" style={{ maxHeight: "100vh", overflow: "auto" }}>
              <table className="table mb-0 table-striped">
                <thead className="bg-light">
                  <tr>
                    <th scope="col" className="border-0">
                      #
                    </th>
                    <th scope="col" className="border-0">
                      First Name
                    </th>
                    <th scope="col" className="border-0">
                      Last Name
                    </th>
                    <th scope="col" className="border-0">
                      Country
                    </th>
                    <th scope="col" className="border-0">
                      Reg No
                    </th>
                    <th scope="col" className="border-0">
                      Phone
                    </th>
                    <th scope="col" className="border-0">
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, indx) =>
                    <tr>
                      <td>{indx + 1}</td>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.Address.country}</td>
                      <td>{user.regNumber}</td>
                      <td>{user.phoneNumber}</td>
                      <td>
                        <i className="material-icons text-primary btn" onClick={() => {
                          setSelectedUser(users[indx])
                        }}>edit</i>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* change user account details */}
      {selectedUser &&
        <UserEdit selectedUser={selectedUser} setSelectedUser={setSelectedUser} roles={roles} />
      }

    </div>

  )
}
export default UsersData;