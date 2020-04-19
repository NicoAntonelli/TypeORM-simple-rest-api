import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";
import jwt from 'jsonwebtoken'

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
    let idd = JSON.stringify(savedEntity);
    console.log(idd);
    let id = 4; // Hardcoding provisionaly (I can't fix the bug yet)
    const token: string = jwt.sign({_id: id}, process.env.SECRET_TOKEN || "tokentest");
    return res.header('auth-token', token).json(savedEntity);
};

// Login
export const login = async (req: Request, res: Response): Promise<Response> => {
    return res.send("login");
};

// My Profile
export const myprofile = async (req: Request, res: Response): Promise<Response> => {
    return res.send("myprofile");
};
