import React from "react";

import PageTitle from "../../pageTitle";

const UsersData = () => {
  const users = [{ firstName: "onderi", lastName: "jonathan", regNumber: "s13/123/8", country: "Kenya", phoneNumber: "+254742446941" }]
  return (
    <div className="main-content-container px-4 container-fluid">
      {/* Page Header */}
      <div className="row page-header py-4">
        <PageTitle sm="4" title="Active Users" subtitle="Users" className="text-sm-left" />
      </div>

      {/* Default Light Table */}
      <div className="row">
        <div  className="col-12 mb-4">
          <div className="card-header border-bottom">
            <h6 className="m-0">Active Users</h6>
          </div>
          <div className="card-body p-0 pb-3">
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
                </tr>
              </thead>
              <tbody>
                {users.map((user, indx) =>
                  <tr>
                    <td>{indx + 1}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.country}</td>
                    <td>{user.regNumber}</td>
                    <td>{user.phoneNumber}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        </div>
      </div>
     
  )
}
export default UsersData;