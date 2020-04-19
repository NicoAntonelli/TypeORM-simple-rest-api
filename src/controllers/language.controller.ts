import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Language } from '../entity/Language'

// Find All
export const getLanguages = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(Language).find();
    return res.json(results);
};

// Get One
export const getLanguage = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(Language).findOne(req.params.id);
    return res.json(results);
};

// Create
export const createLanguage = async (req: Request, res: Response): Promise<Response> => {
    const newEntity = getRepository(Language).create(req.body);
    const results = await getRepository(Language).save(newEntity);
    return res.json(results);
};

// Update
export const updateLanguage = async (req: Request, res: Response): Promise<Response> => {
    const entity = await getRepository(Language).findOne(req.params.id);
    if (entity) {
        getRepository(Language).merge(entity, req.body)
        const results = await getRepository(Language).save(entity);
        return res.json(results);
    }

    return res.status(404).json({msg: "Language Not Found"});
};

// Delete
export const deleteLanguage = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(Language).delete(req.params.id);
    return res.json(results);
};
