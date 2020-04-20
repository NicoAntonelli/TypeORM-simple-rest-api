import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from "express";

// Authorized user gets a 24hs Token
export const newToken = (id: Number): string => {
    const token = jwt.sign({_id: id}, process.env.ACCESS_TOKEN_SECRET || "tokentest", {
        expiresIn: 60 * 60 * 24
    });
    return token;
};

// Requests' Token Verification
export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('auth-token');
    if (!token) return res.status(401).json("Access denied");
    const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET || "tokentest") as IPayLoad;
    req.userId = payload._id;
    next();
};
