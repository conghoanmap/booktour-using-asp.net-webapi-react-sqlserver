import React, { useEffect, useState, useContext } from "react";
import AccountService from "../../services/AccountService";
import { GlobalContext } from "../../GlobalContext";

const Login = () => {

  const context = useContext(GlobalContext);

  const [formData, setFormData] = useState({
    Username: "",
    Password: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = AccountService.Login(formData);
      response
        .then((res) => {
          console.log(res);

          localStorage.setItem("token", res.token);
          context.setIsLogin(true);

          setSuccess("Đăng nhập thành công");
          // 5s sau thì set lại giá trị của success
          setTimeout(() => {
            setSuccess("");
          }, 5000);
        })
        .catch((error) => {
          setError("Đăng nhập thất bại, tài khoản hoặc mật khẩu không đúng");
          // 5s sau thì set lại giá trị của success
          setTimeout(() => {
            setError("");
          }, 5000);
        });
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <section className="layout-pt-lg layout-pb-lg bg-blue-2">
        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-6 col-lg-7 col-md-9">
              <div className="px-50 py-50 sm:px-20 sm:py-20 bg-white shadow-4 rounded-4">
                <div className="row y-gap-20">
                  <div className="col-12">
                    <h1 className="text-22 fw-500">Welcome back</h1>
                    <p className="mt-10">
                      Do not have an account yet?{" "}
                      <a href="#" className="text-blue-1">
                        Sign up for free
                      </a>
                    </p>
                  </div>

                  <div className="col-12">
                    <div className="form-input ">
                      <input
                        type="text"
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
                        type="password"
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
                      {success && (
                        <span className="text-teal-500">{success}</span>
                      )}
                      {error && <span className="text-red-500">{error}</span>}
                    </div>
                  </div>

                  <div className="col-12">
                    <a
                      href="#"
                      className="text-14 fw-500 text-blue-1 underline"
                    >
                      Forgot your password?
                    </a>
                  </div>

                  <div className="col-12">
                    <a
                      onClick={handleLogin}
                      href="#"
                      className="button py-20 -dark-1 bg-blue-1 text-white"
                    >
                      Đăng nhập{" "}
                      <div className="icon-arrow-top-right ml-15"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
