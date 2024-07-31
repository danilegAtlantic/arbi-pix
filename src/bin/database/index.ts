import mongoose from 'mongoose';
import { logError, logSuccess, logWarning } from '../functions/CursorLog';

export class Database {
    constructor() {
        this.run()
    };

    run() {
        this.connect();
        this.settings();
    };

    private async connect() {
        mongoose.set('strictQuery', false);
        return await mongoose.connect(
            String(process.env.API_MONGODB),
            {
                dbName: String(process.env.DATABASE_NAME)
            }
        );
    };

    private settings() {
        mongoose.set('debug', process.env.NODE_ENV === 'development');

        mongoose.connection.on('connected', () => {
            console.info(logSuccess(), 'MongoDB Connected!');
        });

        mongoose.connection.on('error', (error) =>
            console.error(logError(), 'MongoDB Error: ', error)
        );

        mongoose.connection.on('disconnected', () => {
            console.warn(logWarning(), 'MongoDB Disconnected! Trying to reconnect...');
            setTimeout(() => {
                this.connect();
            }, 5000);
        });
    };
};