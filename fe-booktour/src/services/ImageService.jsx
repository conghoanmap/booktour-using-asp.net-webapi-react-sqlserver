import axios from "axios";

export default class TourService {
  static BASE_URL = "http://localhost:8080/api/image";

  static async getAllImages(formData) {
    try {
      const response = await axios.get(`${this.BASE_URL}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async uploadImage(files) {
    try {
      // Nếu files không phải là mảng, chuyển nó thành mảng
      const filesArray = Array.isArray(files) ? files : [files];

      const formData = new FormData();
      
      // Dùng filesArray để đảm bảo luôn là mảng
      filesArray.forEach((file) => {
          formData.append("files", file); // "files" là tên tham số trong API
      });

      const response = await axios.post(`${this.BASE_URL}`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
