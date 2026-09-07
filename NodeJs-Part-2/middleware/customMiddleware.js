const requestLogger = (req, res, next) => {
    const timeStamp = new Date().toISOString();
    const method = req.method;
    const url = req.url;
    const userAgent = req.get('User-Agent') || 'Unknown';
    console.log(`[${timeStamp}] ${method} ${url} - User-Agent: ${userAgent}`);
    next();
}

const addTimeStamp = (req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
}

module.exports = { requestLogger, addTimeStamp }; 