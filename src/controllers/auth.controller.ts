import { Request, Response } from "express";
import { getRepository, Like } from "typeorm";
import { User } from "../entity/User";
import { hashPassword, validatePassword } from "../utils/encrypt.util";
import { newToken } from "../utils/token.util";

// Root
export const root = async (req: Request, res: Response): Promise<Response> => {
    const port = 3000;
    const base = "http://localhost:"+port+"/api";
    const msg = `
    TypeORM Simple Rest API, by: Nico Antonelli
    <hr>
    Some Possible Routes:<br>
    <a href="${base}/users">/api/users</a><br>
    <a href="${base}/profiles">/api/profiles</a><br>
    <a href="${base}/languages">/api/languages</a><br>
    <a href="${base}/photos">/api/photos</a><br>
    <a href="${base}/myprofile">/api/myprofile</a>(Token Required)<br>
    ...
    <hr>
    Send a Request with POSTMAN!
    `
    return res.send(msg);
};

// Sign Up
export const signup = async (req: Request, res: Response): Promise<Response> => {
    req.body.password = await hashPassword(req.body.password);
    const newEntity = getRepository(User).create(req.body) as unknown as User;
    const savedEntity = await getRepository(User).save(newEntity);
    const id = newEntity.id;
    const token: string = newToken(id);
    return res.header('auth-token', token).json(savedEntity);
};

// Login
export const login = async (req: Request, res: Response): Promise<Response> => {
    const entity = await getRepository(User).findOne({email: req.body.email});
    
    if (entity === undefined) return res.status(400).json("Wrong Email or Password");
    const validation: Boolean = await validatePassword(req.body.password, entity.password);
    if (validation === false) return res.status(400).json("Wrong Email or Password");

    const token: string = newToken(entity.id);
    return res.header('auth-token', token).json(entity);
};

// My Profile
export const myprofile = async (req: Request, res: Response): Promise<Response> => {
    // Token Validation Enabled
    const entity = await getRepository(User).findOne(req.userId);
    if (entity === undefined) res.status(400).json("User not found");
    return res.json(entity);
};

// Logout
export const logout = async (req: Request, res: Response): Promise<Response> => {
    // Token Validation Enabled
    return res.header('auth-token', '').json("Logout Successfully");
};
