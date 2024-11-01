import axios from "axios";

export default class BookingService {
  static BASE_URL = "http://localhost:8080/api/booking";

  static async Booking(formData) {
    try {
      const response = await axios.post(`${this.BASE_URL}`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async AddPassenger(bookTourId, listData) {
    try {
      const response = await axios.post(`${this.BASE_URL}/passengers/${bookTourId}`, listData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  static async GetBookingById(bookTourId) {
    try {
      const response = await axios.get(`${this.BASE_URL}/${bookTourId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
