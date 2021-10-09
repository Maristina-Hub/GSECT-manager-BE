import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

const mongoServer = await MongoMemoryServer.create();

const dbConnection = {
    getConnect:async () => {
        try{
            await mongoose.connect(mongoServer.getUri(), { 
                useNewUrlParser: true, 
                dbName: "verifyMASTER", 
                useCreateIndex: true, 
                useUnifiedTopology: true });

                // On success
                console.log('Database connected successfully')

            // await mongoose.disconnect();
        } catch(err) {
            console.error(err.message);
            process.exit(1);
            }

    }
};


export default dbConnection