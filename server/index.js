import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import challengesRoutes from './routes/challenges.route.js';

const app = express();

app.use('/challenges', challengesRoutes)

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://scripboxInterview:scripboxInterview123@cluster0.qvakv.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 8082;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));



