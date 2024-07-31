import axios, { AxiosError, AxiosRequestConfig } from "axios";

export default async (config: Partial<AxiosRequestConfig<any>>) => {
    try {
        return (await axios(config)).data;
    } catch (error) {
        const err = error as unknown as AxiosError;
        return err.response?.data;
    }
};