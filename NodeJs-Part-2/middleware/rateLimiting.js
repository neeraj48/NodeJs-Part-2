const rateLimit = require("express-rate-limit");

const createRateLimiter = (maxRequest, time) => {
  return rateLimit({
    max: maxRequest, // max requests
    windowMs: time,
    standartHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  });
};

module.exports = { createRateLimiter };
