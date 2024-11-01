import axios from "axios";

export default class TourService {
  static BASE_URL = "http://localhost:8080/api/tour";

  static async getPassengerTypes() {
    try {
      const response = await axios.get(`${this.BASE_URL}/passenger-types`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  static async getTourTypeById(tourTypeId) {
    try {
      const response = await axios.get(
        `${this.BASE_URL}/tour-type/${tourTypeId}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  static async getTourTypes() {
    try {
      const response = await axios.get(`${this.BASE_URL}/tour-types`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  static async getByDestinationId(destinationId) {
    try {
      const response = await axios.get(
        `${this.BASE_URL}?destinationId=${destinationId}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  static async getByTourId(tourId) {
    try {
      const response = await axios.get(`${this.BASE_URL}/${tourId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  // Xem số lượng khách đặt tour theo ngày
  static async getBookingsByTourId(tourId, date) {
    try {
      const response = await axios.get(
        `${this.BASE_URL}/count-booked-people/${tourId}/${date}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Tạo tour mặc định
  static async createDefaultTour(formData) {
    try {
      const response = await axios.get(
        `${this.BASE_URL}/default?days=${formData?.days}&departureId=${formData?.departureId}&destinationId=${formData?.destinationId}`,
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

  // Cập nhật tour
  static async updateTour(tourId, formData) {
    try {
      const response = await axios.put(`${this.BASE_URL}/${tourId}`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Gỡ ngày khởi hành
  static async removeDepartureDate(tourId, departureDates) {
    try {
      const response = await axios.delete(
        `${this.BASE_URL}/departure-date/${tourId}`,
        departureDates,
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
