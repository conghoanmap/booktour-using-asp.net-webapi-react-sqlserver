import React, { createContext, useEffect, useState } from "react";
import AccountService from "./services/AccountService";
// import ProductService from "./services/ProductService";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  // const [allInfoUser, setAllInfoUser] = useState({});
  // const [relativeProducts, setRelativeProducts] = useState([]);

  // const [objectQuery, setObjectQuery] = useState({
  //   ProductName: "",
  //   SortBy: "ProductId",
  //   IsDecsending: "false",
  //   PageNumber: 1,
  //   PageSize: 4,
  // });

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await ProductService.getAllProducts(objectQuery);
  //       // Lấy ra 5 sản phẩm liên quan
  //       setRelativeProducts(response);
  //     } catch (error) {
  //       throw error;
  //     }
  //   }

  //   fetchProducts();
  // }, []);

  useEffect(() => {
    const constructor = async () => {
      const loggedIn = await AccountService.isAuthenticated();
      setIsLogin(loggedIn);
    };

    constructor();
  }, []);

  // useEffect(() => {
  //   const fetchInfoUser = async () => {
  //     if (!isLogin) return;
  //     try {
  //       const response = AccountService.GetProfile();
  //       response.then((res) => {
  //         // console.log(res);
          
  //         setAllInfoUser(res);
  //       });
  //     } catch (error) {
  //       console.log("Error: ", error);
  //     }
  //   }

  //   fetchInfoUser();
  // }, [isLogin]);

  // const updateAccountBalance = async (newBalance) => {
  //   setAllInfoUser({
  //     ...allInfoUser,
  //     accountBalance: newBalance
  //   });
  // };



  const formatNumber = (number) => {
    if (number !== undefined && number !== null) {
        return number.toLocaleString();
      } else {
        return 'Invalid number';
      }
  };

  const value = {
    isLogin,
    setIsLogin,
    // allInfoUser,
    // relativeProducts,
    formatNumber,
    // setAllInfoUser,
    // updateAccountBalance
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };
