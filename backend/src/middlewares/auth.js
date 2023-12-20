import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const token = req.headers['token'];

    if (!token) {
        return res.status(403).json({ success: 'error', message: "user's token required" })
    }
    try {
        const decoded = jwt.verify(token, "PrivateKey");
        req.user = decoded;
    } catch (error) {
        return res.status(401).json({ success: 'error', message: "wrong token" })
    }
    return next();
}