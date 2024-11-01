import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AccountService } from "../services";
import BreadCrumbs from "../components/BreadCrumbs";

const Register = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [formValidations, setFormValidations] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const handleRegister = async () => {
    try {
      const response = await AccountService.Register(formData);
      alert(response);
      // console.log(response);
      setFormValidations({
        username: "",
        password: "",
        confirmPassword: "",
        fullName: "",
        email: "",
        phoneNumber: "",
      });
    } catch (error) {
      console.log(error.response?.data);

      if (error.response?.data?.status === 400) {
        setFormValidations({
          username: error.response?.data?.errors?.Username[0]
            ? error.response?.data?.errors?.Username[0]
            : "",
          password: error.response?.data?.errors?.Password[0]
            ? error.response?.data?.errors?.Password[0]
            : "",
          confirmPassword: error.response?.data?.errors?.ConfirmPassword[0]
            ? error.response?.data?.errors?.ConfirmPassword[0]
            : "",
          fullName: error.response?.data?.errors?.FullName[0]
            ? error.response?.data?.errors?.FullName[0]
            : "",
          email: error.response?.data?.errors?.Email[0]
            ? error.response?.data?.errors?.Email[0]
            : "",
          phoneNumber: error.response?.data?.errors?.PhoneNumber[0]
            ? error.response?.data?.errors?.PhoneNumber[0]
            : "",
        });
      } else {
        alert(error.response?.data[0]?.description);
      }
    }
  };
  return (
    <>
      <BreadCrumbs breadCrumbs={props.breadCrumbs} />
      <section className="bg-white my-5 container mx-auto">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-5/6 xl:col-span-6">
            <img
              alt=""
              src="https://cdn.pixabay.com/photo/2021/10/11/18/58/lake-6701636_1280.jpg"
              className="absolute inset-0 h-full w-full object-cover rounded-lg"
            />
          </aside>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <a className="block text-sky-600" href="#">
                <span className="sr-only">Home</span>
                <svg
                  className="h-8 sm:h-10"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Đăng kí tài khoản
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Đăng kí để mang lại những trải nghiệm tốt nhất
              </p>

              <div className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label
                    htmlFor="Username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Tên đăng nhập
                  </label>

                  <input
                    type="text"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    value={formData.username}
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                  />
                  <span className="text-rose-600">
                    {formValidations?.username}
                  </span>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mật khẩu
                  </label>

                  <input
                    type="password"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                  <span className="text-rose-600">
                    {formValidations?.password}
                  </span>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Xác nhận mật khẩu
                  </label>

                  <input
                    type="password"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                  />
                  <span className="text-rose-600">
                    {formValidations?.confirmPassword}
                  </span>
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="Name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Họ và tên
                  </label>

                  <input
                    type="text"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                  />
                  <span className="text-rose-600">
                    {formValidations?.fullName}
                  </span>
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Email{" "}
                  </label>

                  <input
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  <span className="text-rose-600">
                    {formValidations?.email}
                  </span>
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Điện thoại
                  </label>

                  <input
                    type="text"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, phoneNumber: e.target.value })
                    }
                  />
                  <span className="text-rose-600">
                    {formValidations?.phoneNumber}
                  </span>
                </div>

                <div className="col-span-6">
                  <label htmlFor="MarketingAccept" className="flex gap-4">
                    <input
                      type="checkbox"
                      id="MarketingAccept"
                      name="marketing_accept"
                      className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                    />

                    <span className="text-sm text-gray-700">
                      Tôi đồng ý với các điều khoản và điều kiện
                    </span>
                  </label>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    onClick={handleRegister}
                    className="inline-block shrink-0 rounded-md border border-sky-600 bg-sky-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-sky-600 focus:outline-none focus:ring active:text-sky-500"
                  >
                    Đăng kí
                  </button>

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Đã có tài khoản?
                    <Link to="/login" className="text-gray-700 underline">
                      Đăng nhập
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default Register;
