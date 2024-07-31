import amqp, { connect, AmqpConnectionManager, ChannelWrapper, } from 'amqp-connection-manager';

import Store from './Store'
import { AmqpRequest, AmqpResponse } from './types';
import { v4 as generateID } from 'uuid'

export class RabbitService {

	private queueESB = 'barramento-queue';
	private serviceId = generateID();
	private queueName: string = 'opf-queue';
	private responseQueueName: string = `opf-responseQueue-${this.serviceId}`;
	private connection: AmqpConnectionManager;
	private channel: ChannelWrapper;

	constructor() {
		this.connection = connect(`amqp://${process.env.RMQ_USER}:${process.env.RMQ_PASS}@${process.env.RMQ_HOST}:${process.env.RMQ_PORT}`);
		this.channel = this.connection.createChannel();
		this.run();
	};

	run() {
		this.queues()
		return {
			connection: this.connection,
			channel: this.channel,
			queueName: this.queueName,
			responseQueueName: this.responseQueueName,
			serviceId: this.serviceId
		};
	};

	async queues() {
		await this.channel.waitForConnect();
		await this.channel.assertQueue(this.queueName, { durable: true });
		await this.channel.assertQueue(this.responseQueueName, { durable: true, autoDelete: true });
		await this.channel.consume(this.queueName, async (msg: any) => {
			const Msg = JSON.parse(msg.content.toString()) as AmqpRequest;
			const data = await Store.getAction(Msg.$action)(...Msg?.$params);
			const response = JSON.stringify({
				...{
					$id: Msg?.$id,
					$origin: Msg?.$origin,
					$serviceId: Msg?.$serviceId,
					$destiny: Msg?.$destiny,
					$flow: true,
				},
				$body: data,
			} as AmqpResponse);
			await this.channel.sendToQueue(this.queueESB, Buffer.from(response));
			//@ts-ignore
		}, { noAck: true });
		//@ts-ignore
		await this.channel.consume(this.responseQueueName, this.senderMessage, { noAck: true });
	}

	async senderMessage(msg: any) {
		if (!msg) return;
		const Msg = JSON.parse(msg.content.toString());
		console.log(' [x] Received %s', Msg);
		Store.push(Msg);
	};
};