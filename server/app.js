import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hello World');
});

export default app;