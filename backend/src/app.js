import express from 'express';
import config from './config/config.js';
// import './DAL/db/dbConfig.js'
import connectDB from './DAL/db/dbConfig.js';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import apiRouter from './routes/api.router.js';

const app = express();

connectDB();

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api', apiRouter);

const PORT = config.port;

app.listen(PORT, () => {
    console.log(`Servidor escuchando al puerto ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});