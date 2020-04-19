import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Photo } from '../entity/Photo'

// Find All
export const getPhotos = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(Photo).find();
    return res.json(results);
};

// Get One
export const getPhoto = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(Photo).findOne(req.params.id);
    return res.json(results);
};

// Create
export const createPhoto = async (req: Request, res: Response): Promise<Response> => {
    const newEntity = getRepository(Photo).create(req.body);
    const results = await getRepository(Photo).save(newEntity);
    return res.json(results);
};

// Update
export const updatePhoto = async (req: Request, res: Response): Promise<Response> => {
    const entity = await getRepository(Photo).findOne(req.params.id);
    if (entity) {
        getRepository(Photo).merge(entity, req.body)
        const results = await getRepository(Photo).save(entity);
        return res.json(results);
    }

    return res.status(404).json({msg: "Photo Not Found"});
};

// Delete
export const deletePhoto = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(Photo).delete(req.params.id);
    return res.json(results);
};
