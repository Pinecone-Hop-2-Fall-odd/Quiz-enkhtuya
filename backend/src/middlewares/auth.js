import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const token = req.headers['token'];

    if (!token) {
        return res.status(403).json({ status: 'error', message: "user's token required" })
    }
    try {
        const decoded = jwt.verify(token, "PrivateKey");
        req.user = decoded;
    } catch (error) {
        return res.status(401).json({ status: 'error', message: "wrong token" })
    }
    return next();
}