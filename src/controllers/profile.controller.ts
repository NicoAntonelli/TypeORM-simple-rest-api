import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Profile } from '../entity/Profile'

// Find All
export const getProfiles = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(Profile).find();
    return res.json(results);
};

// Get One
export const getProfile = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(Profile).findOne(req.params.id);
    return res.json(results);
};

// Create
export const createProfile = async (req: Request, res: Response): Promise<Response> => {
    const newEntity = getRepository(Profile).create(req.body);
    const results = await getRepository(Profile).save(newEntity);
    return res.json(results);
};

// Update
export const updateProfile = async (req: Request, res: Response): Promise<Response> => {
    const entity = await getRepository(Profile).findOne(req.params.id);
    if (entity) {
        getRepository(Profile).merge(entity, req.body)
        const results = await getRepository(Profile).save(entity);
        return res.json(results);
    }

    return res.status(404).json({msg: "Profile Not Found"});
};

// Delete
export const deleteProfile = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(Profile).delete(req.params.id);
    return res.json(results);
};
