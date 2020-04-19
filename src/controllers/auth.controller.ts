import { Request, Response } from "express";
import { getRepository, Like } from "typeorm";
import { User } from "../entity/User";
import { hashPassword, validatePassword } from "../utils/encrypt.util";
import { newToken } from "../utils/token.util";

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
    req.body.password = await hashPassword(req.body.password);
    const newEntity = getRepository(User).create(req.body);
    const savedEntity = await getRepository(User).save(newEntity);
    // try {
    //     const repository = await getRepository(User);
    //     const savedEntity: any = await repository.save(newEntity)
    //     .then(ent => {
    //         id = ent[0].id;
    //         console.log("id:", id);
    //         return res.json({"id": id});
    //     });
    // } catch(err) {
    //     console.log("error:", err);
    //     return res.send({message: 'superfailed', status: 500, err});
    // } finally {
    //     console.log("finally");
    //     return res.send("finally");
    // }
    const id = 4; // Hardcoding provisionaly (I can't fix the bug yet)
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
    if (req.header('auth-token') === undefined) {
        return res.status(400).json("Invalid Token");
    }
    const entity = await getRepository(User).findOne(2); // Hardcoded for a TSC Problem with Extensions
    if (entity === undefined) res.status(400).json("User not found");
    return res.json(entity);
};
