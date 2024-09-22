import axios from "axios";

class AccountService {
  static BASE_URL = "http://localhost:5178/api/account";

  static async Login(account) {
    try {
      const response = await axios.post(`${this.BASE_URL}/login`, account);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async Register(account) {
    try {
      const response = await axios.post(`${this.BASE_URL}/register`, account);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  static Logout() {
    localStorage.removeItem("token");
  }
  // Kiểm tra đăng nhập
  static isAuthenticated() {
    const token = localStorage.getItem("token");
    // console.log('token', token);
    return token !== null;
  }
}

export default AccountService;
