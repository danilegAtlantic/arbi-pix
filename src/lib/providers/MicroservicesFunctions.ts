
import { msFunctions } from '../../bin/functions/HeavenPromisify';
import Store from '../../bin/rabbitmq/config/Store'

export default {
  
    getAllUserNotification: async (user_id: string) => {
        if (!user_id) return { status: 400, message: "Missing user id", data: null };
        const notificationData = await Store.messenger.get('FindNotificationsByUserId', 'Notify', [user_id]);
        return { status: 200, message: "Notification getter", data: notificationData.$body };
    },
 
    sendSms: async (sms: { phone_number: string, message: string, token?: string }) => {
        const [data, error] = await msFunctions('SendSimpleSMS', 'Notify', [sms]);
        if (error) return { status: 400, message: "Error while send SMS!", data: error };
        return { status: 200, message: "SMS sent", data: data?.$body };
    },
    sendEmail: async (email: { to: string, subject: string; message: string }) => {
        if (!email) return { status: 400, message: "Missing EMAIL content", data: null };
        const notificationData = await Store.messenger.get('SendSimpleEmail', 'Notify', [email]);
        return { status: 200, message: "Email sent", data: notificationData.$body };
    },
    getWeather: async (city_name?: string) => {
        const [data, error] = await msFunctions('GetWeather', 'WeatherProvider', [city_name]);
        if (error) return { status: 400, message: "Error getting weather", data: null };
        return { status: 200, message: "Weather received", data: data?.$body }
    }
};