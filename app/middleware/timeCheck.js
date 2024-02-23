const timeCheck = (req, res, next) => {
    const date = new Date();
    const dayOfWeek = date.getDay();
    const hour = date.getHours();
    
    if (dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 9 && hour < 17) {
        next();
    } else {
        res.status(403).send('Access denied. The website is only available during working hours.');
    }
};

module.exports = timeCheck;
