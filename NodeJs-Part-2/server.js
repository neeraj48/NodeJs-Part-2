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
const itemRoutes = require("./routes/item-route");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(requestLogger);
app.use(addTimeStamp);

app.use(configureCors());
app.use(createRateLimiter(100, 15 * 60 * 1000)); // 100 req in 15 mins
app.use(express.json());

app.use(apiVersioning("v1"));

app.use(globalErrorHandler);

app.use("/api/v1", itemRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
