import axios from "axios";

export const fetchNotifications = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5000/notifications"
    );

    console.log(response.data);

    return response.data || [];
  } catch (error) {
    console.log(error);

    return [];
  }
};