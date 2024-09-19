import dotenv from 'dotenv';  

import app from './app.js';

dotenv.config();
const PORT = process.env.PORT || 4001;

app.listen(PORT, (error) => {
    if(error) {
        console.log('Error: ', error);
        process.exit(1);
    }   

    console.log(`Server is running on port ${PORT}`);
});