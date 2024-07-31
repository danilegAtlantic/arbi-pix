import express, { Express } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { Routers } from './routers';
import { simpleLog } from '../functions/CursorLog';
import helmet from 'helmet';

export class Server {
    private app: Express;

    constructor() {
        this.app = express();
        this.security();
        this.routers();
        this.handler();
    };

    private routers(): void {
        this.app.use("/v1", Routers);
    };

    private security(): void {
        const jsonLimit = process.env.SV_JSON_LIMIT || '50mb';
        
        this.app.use(express.urlencoded({ limit: jsonLimit, extended: true }));
        this.app.use(cors());
        this.app.use(express.json({ limit: jsonLimit }));
        this.app.use(helmet());
        this.app.use(morgan('dev'));
    };

    private handler(): void {
        const portListener = process.env.SV_PORT_LISTENER;

        this.app.listen(portListener, () => {
            simpleLog('SUCCESS', `Running on port: ${portListener}`)
        });
    };
};