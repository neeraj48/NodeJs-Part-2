require("dotenv").config();
const { configureCors } = require("./config/corsConfig");
const express = require("express");
const {
  requestLogger,
  addTimeStamp,
} = require("./middleware/customMiddleware");
const { apiVersioning } = require("./middleware/apiVersioning");
const { globalErrorHandler } = require("./middleware/errorHandler");
const { createRateLimiter } = require("./middleware/rateLimiting");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(requestLogger);
app.use(addTimeStamp);

app.use(configureCors());
app.use(createRateLimiter(100, 15 * 60 * 1000)); // 100 req in 15 mins
app.use(express.json());

app.use("/api/v1", apiVersioning("v1"));

app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
