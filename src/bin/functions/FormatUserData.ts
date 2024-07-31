/* import { IUserAccountType, IUserStatus } from "../../lib/interfaces/IUser"; */

export default (data: any) => {

    const formattedData = {
        user_id: data.user.user_id || data.user.id,
        code_recommendation: data.user.code_recommendation,
        /* account_type: data.user.account_type as IUserAccountType, */
        first_name: data.user.first_name,
        last_name: data.user.last_name,
        preferred_name: data.user.preferred_name,
        full_name: data.user.full_name,
        profile_picture: data.user.profile_picture,
        email_address: data.user.email_address,
        gender: data.user.gender,
        client_token: data.user.client_token,
        documents: {
            occupation: data.documents.occupation,
            place_of_birth: data.documents.place_of_birth,
            birth_date: data.documents.birth_date,
            mother_name: data.documents.mother_name,
            monthly_income: data.documents.monthly_income,
            marital_status: data.documents.marital_status,
            pep: data.documents.pep,
            tax_id: data.documents.tax_id,
            passport: data.documents.passport,
            national_card: {
                document_number: data.documents.national_card.document_number,
                issue_date: data.documents.national_card.issue_date,
                issue_organ: data.documents.national_card.issue_organ
            },
        },
        address: {
            state: data.address.state,
            city: data.address.city,
            street: data.address.street,
            neighborhood: data.address.neighborhood,
            street_number: data.address.street_number,
            zip_code: data.address.zip_code,
            complement: data.address.complement,
            lat: data.address.lat,
            lng: data.address.lng,
            address_proof_picture: data.address.address_proof_picture,
        },
        contacts: data.contacts.map((contact: { id: any; user_id: any; country_code: any; area_code: any; phone_number: any; }) => ({
            country_code: contact.country_code,
            area_code: contact.area_code,
            phone_number: contact.phone_number,
        })),
    };

    console.log(formattedData);

    return formattedData;
};

export interface IUserFormattedData {
    user:{ id: string;
     code_recommendation: string;
     /* account_type: string | IUserAccountType; */
     first_name: string;
     last_name: string;
     preferred_name: string;
     full_name: string;
     profile_picture?: any;
     email_address: string;
     stored_password: string;
     user_info:{
        stored_password:string;
     }
     gender: string;
     device_id: string;
     access_token?: any;
     client_token: undefined;
     status: number;
     documents: Documents;
     address: Address;
     contacts: Contact[];
 }};

export interface Contact {
    country_code: string;
    area_code: string;
    phone_number: string;
};

export interface Address {
    state: string;
    city: string;
    street: string;
    neighborhood: string;
    street_number?: any;
    zip_code: string;
    complement?: any;
    lat?: any;
    lng?: any;
    address_proof_picture?: any;
};

export interface Documents {
    occupation: string;
    place_of_birth: string;
    birth_date: string;
    mother_name?: any;
    monthly_income: number;
    marital_status: string;
    pep: boolean;
    tax_id: string;
    passport: string;
    national_card: NationalCard;
};

export interface NationalCard {
    document_number?: any;
    issue_date?: any;
    issue_organ?: any;
};