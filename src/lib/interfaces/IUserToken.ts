export enum IUserTokenType {
    CREATE_ACCOUNT_TOKEN = 'CREATE_ACCOUNT_TOKEN',
    DELETE_ACCOUNT_TOKEN = 'DELETE_ACCOUNT_TOKEN',
    RECOVERY_PASSWORD_TOKEN = 'RECOVERY_PASSWORD_TOKEN'
};

export enum IUserTokenStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive'
};

export enum IUserTokenStatus {
    PENDING = 'pending',
    COMPLETE = 'complete'
};

export enum IUserTokenMethod {
    EMAIL = 'email',
    SMS = 'sms'
};

export interface IUserToken {
    id: string;
    token: string;
    data: string | undefined;
    contact: string;
    method: IUserTokenMethod;
    type: IUserTokenType;
    status: IUserTokenStatus;
    created_date: string | undefined;
};