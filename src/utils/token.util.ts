import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from "express";

interface IPayLoad {
    _id: string;
    iat: number;
    exp: number;
}

export const newToken = (id: Number): string => {
    const token = jwt.sign({_id: id}, process.env.SECRET_TOKEN || "tokentest", {
        expiresIn: 60 * 60 * 24
    });
    return token;
};

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('auth-token');
    if (!token) return res.status(401).json("Access denied");
    const payload = jwt.verify(token, process.env.SECRET_TOKEN || "tokentest") as IPayLoad;
    // req.userId = payload._id;
    next();
};
