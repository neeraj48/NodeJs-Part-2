const apiVersioning = (version) => (req, res, next) => {
  if (req.path.startsWith(`/api/${version}`)) {
    next();
  } else {
    res.status(400).json({
      success: false,
      error: "Invalid API Version",
    });
  }
};

const headerVersioning = (version) => (req, res, next) => {
  if (req.get("Accept-Version") === version) {
    next();
  } else {
    res.status(400).json({
      success: false,
      error: "Invalid API Version in Header",
    });
  }
};

const contentTypeVersioning = (version) => (req, res, next) => {
  const contentType = req.get("Content-Type");
  if (contentType && contentType.includes(`version=${version}`)) {
    next();
  } else {
    res.status(400).json({
      success: false,
      error: "Invalid API Version in Content-Type Header",
    });
  }
};

module.exports = { apiVersioning, headerVersioning, contentTypeVersioning };
