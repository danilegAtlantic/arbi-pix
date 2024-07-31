export type DestinyType = 'Notify' | 'WeatherProvider';
export type ActionType =
	| 'SendSimpleSMS'
	| 'SendSimpleEmail'
	| 'SendEmail'
	| 'SendEmailCancellationLetter'
	| 'FindNotificationsByUserId'
	| 'SendPushNotification'
	| 'SendPushNotificationMassive'
	| 'SendGeneralNotification'
	| 'FindUsersInNotifications'
	| 'SetNotificationViewedById'
	| 'GetWeather';

export interface AmqpRequest {
	$id: string;
	$action: ActionType;
	$serviceId: string;
	$params: any[];
	$origin: string;
	$destiny: DestinyType;
};

export interface AmqpResponse {
	$id: string;
	$name: string;
	$body: any | { flow: boolean; data: any };
	$serviceId: string;
	$origin: string;
	$destiny: string;
	$flow: boolean;
};