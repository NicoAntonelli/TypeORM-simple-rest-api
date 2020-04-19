import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { User } from '../entity/User'

// Find All
export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(User).find();
    return res.json(results);
};

// Get One
export const getUser = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(User).findOne(req.params.id);
    return res.json(results);
};

// Create
export const createUser = async (req: Request, res: Response): Promise<Response> => {
    const newEntity = getRepository(User).create(req.body);
    const results = await getRepository(User).save(newEntity);
    return res.json(results);
};

// Update
export const updateUser = async (req: Request, res: Response): Promise<Response> => {
    const entity = await getRepository(User).findOne(req.params.id);
    if (entity) {
        getRepository(User).merge(entity, req.body)
        const results = await getRepository(User).save(entity);
        return res.json(results);
    }

    return res.status(404).json({msg: "User Not Found"});
};

// Delete
export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(User).delete(req.params.id);
    return res.json(results);
};
