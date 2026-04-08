import mongoose from 'mongoose';
import 'dotenv/config'

const URI = process.env.MONGODB_URI;

mongoose
    .connect(URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((e) => {
        console.error(e);
    });

