import React from "react";
import useQuery from '../../../hooks/useQuery'
import moment from "moment";

const Order = () => {
    const { data } = useQuery("/user/get-my-order"); 
    // console.log(data[0].book[0].book.name);
  return (
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
                {data && data.length > 0 && data.map((item,index)=>{
                    return (
                      <>
                        <tr>
                          <td>{index + 1}</td>
                          <td>
                            {item.book &&
                              item.book.length > 0 &&
                              item.book.map((value, i) => {
                                return (
                                  <p>
                                    - {value.book.name} x {value.quantity}
                                  </p>
                                );
                              })}
                          </td>
                          <td>{moment(new Date(item.startDate)).format("ddd DD/YYY")}</td>
                          <td>Pending</td>
                          <td>$45</td>
                          <td>
                            <a href="cart.html" className="btn">
                              View
                            </a>
                          </td>
                        </tr>
                      </>
                    );
                })}
             
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Order;
