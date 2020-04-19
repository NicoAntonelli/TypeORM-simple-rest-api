import 'reflect-metadata';

import express, {Application} from 'express'
import {createConnection, Connection} from 'typeorm'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'

import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'
import profileRoutes from './routes/profile.routes'
import photoRoutes from './routes/photo.routes'
import languageRoutes from './routes/language.routes'

// App Settings
dotenv.config();
const app: Application = express();
const connection = createConnection();
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
connection
.then(db => app.listen(port, () => console.log("Server on Port", port))
)
.catch(err => console.log(err)
);
