
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJyZW90ZWNoMjQyNEBnbWFpbC5jb20iLCJleHAiOjE3Nzg5MzQ0NDQsImlhdCI6MTc3ODkzMzU0NCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImVjYWM4N2YzLTI1MGUtNGVlMi04OGEzLWNjYWRmN2QyMjc2MiIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImRoYXRjaGFuYSBtb29ydGh5IHIiLCJzdWIiOiI1ODg3NTVhYS1jZTI1LTRhODAtODM3OC05MGIwNjBlYTFkZDEifSwiZW1haWwiOiJyZW90ZWNoMjQyNEBnbWFpbC5jb20iLCJuYW1lIjoiZGhhdGNoYW5hIG1vb3J0aHkgciIsInJvbGxObyI6IjIybWlzMDU3MSIsImFjY2Vzc0NvZGUiOiJTZkZ1V2ciLCJjbGllbnRJRCI6IjU4ODc1NWFhLWNlMjUtNGE4MC04Mzc4LTkwYjA2MGVhMWRkMSIsImNsaWVudFNlY3JldCI6IlBmTUtYalF6ZmVhZm5qVU4ifQ.P8mvDdqFGRS8l41qcv3aMzsLOxtpoKHNRSddjtAWRZw";

app.get("/notifications", async (req, res) => {
  try {
    const response = await axios.get(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.log(error.response?.data || error.message);

    res.status(500).json({
      error: "Failed to fetch notifications",
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});