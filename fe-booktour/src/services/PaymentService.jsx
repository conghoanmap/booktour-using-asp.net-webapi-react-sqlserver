import axios from "axios";

export default class PaymentService {
  static BASE_URL = "http://localhost:8080/api/payment";

  static async getPaymentMethods() {
    try {
      const response = await axios.get(`${this.BASE_URL}/payment-methods`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async PaymentTour(formData) {
    try {
      const response = await axios.post(
        `${this.BASE_URL}/payment-tour`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
