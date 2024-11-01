import axios from "axios";

export default class LocationService {
  static BASE_URL = "http://localhost:8080/api/location";

  static async getByRegionId(regionId) {
    try {
      const response = await axios.get(`${this.BASE_URL}/${regionId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  static async getByLocationId(locationId) {
    try {
      const response = await axios.get(`${this.BASE_URL}/id/${locationId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  static async getRegionsAndLocationsOfRegion() {
    try {
      const response = await axios.get(`${this.BASE_URL}/regions`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
