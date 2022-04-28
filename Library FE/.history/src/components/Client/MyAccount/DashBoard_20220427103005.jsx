import React from "react";
import { useDispatch,useSelector } from "react-redux";
import DetailUser from "./DetailUser";

const DashBoard = () => {
  const {userInfo} = useSelector(state => state.user)
  return (
    <>
      <div className="page-section inner-page-sec-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                {/* My Account Tab Menu Start */}
                <div className="col-lg-3 col-12">
                  <div className="myaccount-tab-menu nav" role="tablist">
                    <a href="#dashboad" className="active" data-bs-toggle="tab">
                      <i className="fas fa-tachometer-alt" />
                      Dashboard
                    </a>
                    <a href="#orders" data-bs-toggle="tab">
                      <i className="fa fa-cart-arrow-down" /> Orders
                    </a>
                    <a href="#account-info" data-bs-toggle="tab">
                      <i className="fa fa-user" /> Account Details
                    </a>
                  </div>
                </div>
                {/* My Account Tab Menu End */}
                {/* My Account Tab Content Start */}
                <div className="col-lg-9 col-12 mt--30 mt-lg--0">
                  <div className="tab-content" id="myaccountContent">
                    {/* Single Tab Content Start */}
                    <div
                      className="tab-pane fade show active"
                      id="dashboad"
                      role="tabpanel"
                    >
                      <div className="myaccount-content">
                        <h3>Dashboard</h3>
                        <div className="welcome mb-20">
                          <p>
                            Hello, <strong>{userInfo?.name}</strong>
                          </p>
                        </div>
                        <p className="mb-0">
                          From your account dashboard. you can easily check
                          &amp; view your recent orders, manage your shipping
                          and billing addresses and edit your password and
                          account details.
                        </p>
                      </div>
                    </div>
                    {/* Single Tab Content End */}
                    {/* Single Tab Content Start */}
                    <div className="tab-pane fade" id="orders" role="tabpanel">
                      <div className="myaccount-content">
                        <h3>Orders</h3>
                        <div className="myaccount-table table-responsive text-center">
                          <table className="table table-bordered">
                            <thead className="thead-light">
                              <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Total</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>Mostarizing Oil</td>
                                <td>Aug 22, 2018</td>
                                <td>Pending</td>
                                <td>$45</td>
                                <td>
                                  <a href="cart.html" className="btn">
                                    View
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Katopeno Altuni</td>
                                <td>July 22, 2018</td>
                                <td>Approved</td>
                                <td>$100</td>
                                <td>
                                  <a href="cart.html" className="btn">
                                    View
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Murikhete Paris</td>
                                <td>June 12, 2017</td>
                                <td>On Hold</td>
                                <td>$99</td>
                                <td>
                                  <a href="cart.html" className="btn">
                                    View
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    {/* Single Tab Content End */}
                    {/* Single Tab Content Start */}
                    <DetailUser userInfo={userInfo}/>
                    {/* Single Tab Content End */}
                  </div>
                </div>
                {/* My Account Tab Content End */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
