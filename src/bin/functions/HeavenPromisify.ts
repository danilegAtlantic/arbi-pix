
import Store from '../rabbitmq/config/Store'
import { ActionType, AmqpResponse, DestinyType } from "../rabbitmq/config/types";
import CursorLog from "./CursorLog";

export async function msFunctions(action: ActionType, destiny: DestinyType, args: any[]): Promise<[AmqpResponse, null] | [null, any]> {
    try {
        const data = await Store.messenger.get(action, destiny, args);
        return [data, null];
    } catch (error) {
        CursorLog('ERROR', `src/functions - HeavenPromisify - msFunction - ${action} ${destiny}`, error);
        return [null, error];
    }
};