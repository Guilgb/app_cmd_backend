import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

class Database {
    async connect(): Promise<typeof mongoose> {
        try {
            return await mongoose.connect(
                process.env.MONGO_DB_URL ?? 'mongodb://localhost:27017'
            );
        } catch (error) {
            console.error('Error to connect in database:', error);
            throw error;
        }
    }
}

export default new Database().connect();