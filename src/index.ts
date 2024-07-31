require('dotenv-safe').config();

import { Server } from './bin/api';
import { Database } from './bin/database';
import { ClientRedis } from './bin/redis';
import { AmqpService } from './bin/rabbitmq';

export class Initializer {
    server = new Server();
    database = new Database();
    rabbitmq = new AmqpService();
};

new Initializer();