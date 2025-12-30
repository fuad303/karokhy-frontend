import api from "../config/axios.interceptor";
import type { UserInterface } from "../interfaces/Adminmanage.interface";

export class Loader {
  static async dashboardLoader() {
    return {
      status: 200,
      message: "Hello from loader",
    };
  }

  static async userListLoader() {
    try {
      const res = await api.get("/user");

      return {
        users: res.data as UserInterface[],
      };
    } catch (error) {
      console.log(error);

      throw new Response("Failed to load users", { status: 500 });
    }
  }
}
