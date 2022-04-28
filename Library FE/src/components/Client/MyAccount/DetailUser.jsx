import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getInfor, updateInfo } from "../../../store/action/user";

const DetailUser = () => {
  let { userInfo } = useSelector((state) => state.user);
  let initialState = {
    name: userInfo?.name,
    avatar: userInfo?.avatar,
    birthday: userInfo?.birthday,
    gender: userInfo?.gender,
    address: userInfo?.address,
  };
  useEffect(() => {
    if (userInfo) {
      initialState = {
        name: userInfo.name,
        avatar: userInfo.avatar,
        birthday: userInfo.birthday,
        gender: userInfo.gender,
        address: userInfo.address,
      };
    }
  }, [userInfo]);

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: initialState,
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(4, "Must be 4 character or more !!!"),
      birthday: Yup.string()
        .required("Required"),
      gender: Yup.string().required("Required"),
      address: Yup.string()
        .required("Required")
        .min(20, "Must be 20 character or more !!!"),
    }),
    onSubmit: (values) => {
      dispatch(updateInfo(values));
      dispatch(getInfor())
    },
  });
  return (
    <>
      <div className="tab-pane fade" id="account-info" role="tabpanel">
        <div className="myaccount-content">
          <h3>Account Details</h3>
          <div className="account-details-form">
            <form action="#">
              <div className="row">
                <div className="col-lg-6 col-12  mb--30">
                  <input
                    id="first-name"
                    disabled
                    value={userInfo?.idStudent}
                    type="text"
                  />
                </div>
                <div className="col-lg-6 col-12  mb--30">
                  <input
                    id="last-name"
                    disabled
                    value={userInfo?.classUser}
                    type="text"
                  />
                </div>
                <div className="col-12  mb--30">
                  <input
                    id="name"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    type="text"
                  />
                  {formik.errors && formik.errors.name && (
                    <p class="text-danger">{formik.errors.name}</p>
                  )}
                </div>
                <div className="col-12  mb--30">
                  <input
                    id="email"
                    disabled
                    value={userInfo?.email}
                    type="email"
                  />
                </div>
                <div className="col-lg-6 col-12  mb--30">
                  <input
                    id="birthday"
                    name="birthday"
                    onChange={formik.handleChange}
                    value={formik.values.birthday}
                    type="date"
                  />
                  {formik.errors && formik.errors.birthday && (
                    <p class="text-danger">{formik.errors.birthday}</p>
                  )}
                </div>
                <div className="col-lg-6 col-12  mb--30">
                  <select
                    name="gender"
                    id="gender"
                    onChange={formik.handleChange}
                    value={formik.values.gender}
                  >
                    <option value="m">Male</option>
                    <option value="f">Female</option>
                    <option value="o">Other</option>
                  </select>
                  {formik.errors && formik.errors.gender && (
                    <p class="text-danger">{formik.errors.gender}</p>
                  )}
                </div>
                <div className="col-12  mb--30">
                  <input
                    id="address"
                    name="address"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                    type="text"
                  />
                  {formik.errors && formik.errors.address && (
                    <p class="text-danger">{formik.errors.address}</p>
                  )}
                </div>
                {/* <div className="col-12  mb--30">
                  <h4>Password change</h4>
                </div>
                <div className="col-12  mb--30">
                  <input
                    id="current-pwd"
                    placeholder="Current Password"
                    type="password"
                  />
                </div>
                <div className="col-lg-6 col-12  mb--30">
                  <input
                    id="new-pwd"
                    placeholder="New Password"
                    type="password"
                  />
                </div>
                <div className="col-lg-6 col-12  mb--30">
                  <input
                    id="confirm-pwd"
                    placeholder="Confirm Password"
                    type="password"
                  />
                </div> */}
                <div className="col-12">
                  <button
                    onClick={formik.handleSubmit}
                    className="btn btn--primary"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailUser;
