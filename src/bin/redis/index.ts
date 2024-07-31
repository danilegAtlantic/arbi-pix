import { createClient, RedisClientOptions } from "redis";
import { logSuccess, logWarning } from "../functions/CursorLog";

const config: RedisClientOptions = { url: process.env.REDIS_URL ?? 'redis://127.0.0.1:6379/0' };

export class ClientRedis {

    private client: any;

    constructor() {
        this.start();
    };

    private async start() {
        this.client = createClient(config)
        await this.client.connect().then(() => console.log(logSuccess(), "Redis connected!"));
    };

    public async get(key: string) {
        const result = await this.client.get(key)
        return JSON.parse(result)
    };

    public async setKey(key: string, value: any, sec: number) {
        const result = await this.client.set(key, JSON.stringify(value), { EX: sec })
        return result
    };

    public async delKey(key: string) {
        const result = await this.client.del(key)
        return result
    };
};

export const REDIS = new ClientRedis();