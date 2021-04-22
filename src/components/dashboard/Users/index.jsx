import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../../pageTitle";

const UsersData = () => {
  const users = [{ firstName: "onderi", lastName: "jonathan", regNumber: "s13/123/8",country:"Kenya",phoneNumber:"+254742446941" }]
  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Active Users" subtitle="Users" className="text-sm-left" />
      </Row>

      {/* Default Light Table */}
      <Row>
        <Col>
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Active Users</h6>
            </CardHeader>
            <CardBody className="p-0 pb-3">
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
                      <td>{indx+1}</td>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.country}</td>
                      <td>{user.regNumber}</td>
                      <td>{user.phoneNumber}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </CardBody>
          </Card>
        </Col>
      </Row>


    </Container>
  )
}
export default UsersData;