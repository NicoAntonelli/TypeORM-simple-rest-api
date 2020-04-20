// Request Extension
declare namespace Express {
    export interface Request {
        userId?: string;
    }
}

// Token's Payload Interface
interface IPayLoad {
    _id: string;
    iat: number;
    exp: number;
}
