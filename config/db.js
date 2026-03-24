import mongoose from 'mongoose';
const URI =
    'mongodb+srv://ageenko01114444_db_user:ENIxRCsN2iENTS2u@cluster0.u5izn6g.mongodb.net/?appName=Cluster0';

mongoose
    .connect(URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((e) => {
        console.error(e);
    });
