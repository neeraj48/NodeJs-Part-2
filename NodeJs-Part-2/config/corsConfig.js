const cors = require("cors");

const configureCors = () => {
  return cors({
    origin: (origin, callback) => {
      const allowedOrigins = [
        "http://localhost:3000", //local dev
        "http://produrl.com", //production URL
      ];
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true); //giving permission so that req are allowed
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept-Version"],
    exposedHeaders: ["X-Total-Count", "Content-Range"],
    credentials: true,
    preflightContinue: false,
    maxAge: 600, //10 mins
    optionsSuccessStatus: 204,
  });
};

module.exports = { configureCors };