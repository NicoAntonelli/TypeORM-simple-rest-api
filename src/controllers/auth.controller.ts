import { Request, Response } from "express";

// Root
export const root = async (req: Request, res: Response): Promise<Response> => {
    const msg = `
    TypeORM Simple Rest API, by: Nico Antonelli
    <hr>
    Some Possible Routes: /api/users, /api/profiles, /api/languages, /api/photos, /api/myprofile...
    <br>
    ...Or send a Request with POSTMAN!
    `
    return res.send(msg);
};

// --- Under Construction

// Sign Up
export const signup = async (req: Request, res: Response): Promise<Response> => {
    return res.send("signup");
};

// Login
export const login = async (req: Request, res: Response): Promise<Response> => {
    return res.send("login");
};

// My Profile
export const myprofile = async (req: Request, res: Response): Promise<Response> => {
    return res.send("myprofile");
};
