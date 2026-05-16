import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [notifications, setNotifications] = useState([]);

  // Priority sorting function
  const getPriorityScore = (item) => {
    const priority = item.Priority || item.priority;

    if (priority === "High") return 3;
    if (priority === "Medium") return 2;
    return 1;
  };

  // Fetch notifications
  const fetchNotifications = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/notifications"
      );

      console.log(response.data);

      // IMPORTANT FIX
      setNotifications(response.data.notifications);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  // Sort notifications
  const sortedNotifications = [...notifications].sort(
    (a, b) => getPriorityScore(b) - getPriorityScore(a)
  );

  // Top 10 notifications
  const topNotifications = sortedNotifications.slice(0, 10);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Campus Notifications</h1>

      <h2>Top Priority Notifications</h2>

      {topNotifications.map((item) => (
        <div
          key={item.ID}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "10px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <p>
            <strong>Type:</strong> {item.Type}
          </p>

          <p>
            <strong>Message:</strong> {item.Message}
          </p>

          <p>
            <strong>Priority:</strong>{" "}
            {item.Priority || item.priority}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;