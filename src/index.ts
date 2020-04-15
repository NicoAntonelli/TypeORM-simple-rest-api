import 'reflect-metadata';

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import {createConnection} from 'typeorm'

import userRoutes from './routes/user.routes'
import profileRoutes from './routes/profile.routes'
import photoRoutes from './routes/photo.routes'
import languageRoutes from './routes/language.routes'

const app = express();
createConnection();

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use(userRoutes);
app.use(profileRoutes);
app.use(photoRoutes);
app.use(languageRoutes);

const port = 3000;
app.listen(port, () => console.log("Server on Port", port));
