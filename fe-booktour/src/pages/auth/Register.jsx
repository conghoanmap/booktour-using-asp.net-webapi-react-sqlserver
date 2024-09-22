import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AccountService from "../../services/AccountService";

const Register = () => {
  const [formData, setFormData] = useState({
    Username: "",
    FullName: "",
    Email: "",
    PhoneNumber: "",
    Password: "",
    ConfirmPassword: "",
  });

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    // console.log(formData);
    try {
      const response = AccountService.Register(formData);
      response.then((res) => {
        // console.log(res);
        setSuccess(res);
        // 5s sau thì set lại giá trị của success
        setTimeout(() => {
          setSuccess('');
        }, 5000);
      }).catch((error) => {

        setError("Đăng kí thất bại, vui lòng kiểm tra lại thông tin đăng kí");
        // 5s sau thì set lại giá trị của success
        setTimeout(() => {
          setError('');
        }, 5000);
      });
    } catch (error) {
      throw error;
    }
  }

  return (
    <section className="layout-pt-lg layout-pb-lg bg-blue-2">
      <div className="container">
        <div className="row justify-center">
          <div className="col-xl-6 col-lg-7 col-md-9">
            <div className="px-50 py-50 sm:px-20 sm:py-20 bg-white shadow-4 rounded-4">
              <div className="row y-gap-20">
                <div className="col-12">
                  <h1 className="text-22 fw-500">Create an account</h1>
                  <p className="mt-10">
                    Already have an account?{" "}
                    <a href="#" className="text-blue-1">
                      Log in
                    </a>
                  </p>
                </div>
                <div className="col-12">
                  <div className="form-input ">
                    <input
                      type="text"
                      name="Username"
                      onChange={(e) =>
                        setFormData({ ...formData, Username: e.target.value })
                      }
                    />
                    <label className="lh-1 text-14 text-light-1">
                      Username
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-input ">
                    <input
                      type="text"
                      name="FullName"
                      onChange={(e) =>
                        setFormData({ ...formData, FullName: e.target.value })
                      }
                    />
                    <label className="lh-1 text-14 text-light-1">
                      Full Name
                    </label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-input ">
                    <input
                      type="text"
                      name="Email"
                      onChange={(e) =>
                        setFormData({ ...formData, Email: e.target.value })
                      }
                    />
                    <label className="lh-1 text-14 text-light-1">Email</label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-input ">
                    <input
                      type="text"
                      name="Phone"
                      onChange={(e) =>
                        setFormData({ ...formData, PhoneNumber: e.target.value })
                      }
                    />
                    <label className="lh-1 text-14 text-light-1">Phone</label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-input ">
                    <input
                      type="password"
                      name="Password"
                      onChange={(e) =>
                        setFormData({ ...formData, Password: e.target.value })
                      }
                    />
                    <label className="lh-1 text-14 text-light-1">
                      Password
                    </label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-input ">
                    <input
                      type="password"
                      name="ConfirmPassword"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          ConfirmPassword: e.target.value,
                        })
                      }
                    />
                    <label className="lh-1 text-14 text-light-1">
                      Confirm Password
                    </label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-input ">
                      {success && <span className="text-teal-500">{success}</span>}
                      {error && <span className="text-red-500">{error}</span>}
                  </div>
                </div>

                {/* <div className="col-12">
                  <div className="d-flex ">
                    <div className="form-checkbox mt-5">
                      <input type="checkbox" name="name" />
                      <div className="form-checkbox__mark">
                        <div className="form-checkbox__icon icon-check"></div>
                      </div>
                    </div>

                    <div className="text-15 lh-15 text-light-1 ml-10">
                      Email me exclusive Agoda promotions. I can opt out later
                      as stated in the Privacy Policy.
                    </div>
                  </div>
                </div> */}

                <div className="col-12">
                  <a
                  onClick={handleRegister}
                    href="#"
                    className="button py-20 -dark-1 bg-blue-1 text-white"
                  >
                    Sign In <div className="icon-arrow-top-right ml-15"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
