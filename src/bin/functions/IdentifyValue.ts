import { isUuid } from 'uuidv4';

export enum FindUserParamType {
    "CPF",
    "EMAIL",
    "CNPJ"
};

export default (value: string): FindUserParamType => {

    // Expressões regulares para validar o formato de email, CPF e passaporte
    const emailRegex = /\S+@\S+\.\S+/;
    const cpfRegex = /^\d{11}$/;
   /*  const cnpjRegex = /^\d{14}$/; */


    if (emailRegex.test(value)) {
        return FindUserParamType.EMAIL;
    } else if (cpfRegex.test(value)) {
        return FindUserParamType.CPF;
    } else  {
        return FindUserParamType.CNPJ;
    }  /* else if (isUuid(value)) {
        return FindUserParamType.USER_ID;
    } */

    // Default return statement
    return FindUserParamType.CPF;
};