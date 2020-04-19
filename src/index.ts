import 'reflect-metadata';

import express, {Application} from 'express'
import {createConnection} from 'typeorm'
import morgan from 'morgan'
import cors from 'cors'

import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'
import profileRoutes from './routes/profile.routes'
import photoRoutes from './routes/photo.routes'
import languageRoutes from './routes/language.routes'

// App Settings
const app: Application = express();
createConnection();
const port = 3000;

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use(authRoutes); // Under Construction
app.use(userRoutes);
app.use(profileRoutes);
app.use(photoRoutes);
app.use(languageRoutes);

// Main
app.listen(port, () => console.log("Server on Port", port));
