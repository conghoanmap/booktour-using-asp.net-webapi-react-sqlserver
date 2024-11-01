import axios from "axios";

export default class AccountService {
  static BASE_URL = "http://localhost:8080/api/account";

  static async Login(formData) {
    try {
      const response = await axios.post(`${this.BASE_URL}/login`, formData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  static async Register(formData) {
    try {
      const response = await axios.post(`${this.BASE_URL}/register`, formData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async GetRoles() {
    try {
      const response = await axios.get(`${this.BASE_URL}/get-roles`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  
  // Đăng xuất
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
