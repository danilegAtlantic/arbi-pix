import { logSuccess } from '../functions/CursorLog';
import amqpController from './amqpController';
import { RabbitService } from './config/index';
import Messenger from './config/Messenger';
import Store from './config/Store'

export class AmqpService {
    private start = new RabbitService()

    constructor() {
        this.run()
    };

    async run() {
        Store.addAction(amqpController);
        const { connection, channel, queueName, responseQueueName, serviceId }: any = this.start;
        Store.messenger = new Messenger(connection, channel, queueName, serviceId);
        console.log(logSuccess(), `AMQP Connected!`);
        console.log(logSuccess(), `Running amqp on queue ${queueName} and ${responseQueueName}`);
    };
};