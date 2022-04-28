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
