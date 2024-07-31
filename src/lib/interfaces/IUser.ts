export interface IUser {
    id: string;
    account_register_type: "full";
    code_recommendation?: string;
    invite_token?: string;
    account_type: 'PJ' | 'PF' | 'PD';
    type?: string;
    agency?: string;
    account_matriz?: string;
    account_banking_id?: string;
    account_banking_type?: string;
    user_info: {
        full_name: string;
        full_namePj: string;
        preferred_name: string;
        email_address: string;
        gender: string;
        place_of_birth: string;
        place_of_birthPj: string;
        nationality: string;
        nationalityPj: string;
        birth_date: string | Date;
        foundation_date: string | Date;
        mother_name: string;
        mother_namePj: string;
        monthly_income: number;
        marital_status: string;
        marital_statusPj: string;
        spouse_info: {
            spouse_name: string;
            spouse_namePj: string;
            spouse_cpf: string;
            spouse_cpfPj: string;
            investor_profile: string
            personal_token: string;
            personal_balance: number;
        }
        pep: string;
        info_pep: {
            clpep: string;
            cpfpep: string;
            pep_name: string;
        }
        occupation: string;
        occupationPj: string;
        self_picture: string;
        stored_password: string;
        contact: {
            phone_number_1: {
                area_code: string;
                phone_number: string
            };
            phone_number_2: {
                area_code: string;
                phone_number: string
            }
        };
        income_info: {
            source_income: string;
            company: string;
            income: string;
            incomePj: string;
            assets: string;
            assetsPj: string;
            financial_investments: string;
            financial_investmentsPj: string;
            other_investments: string;
        };
        foreign_income: {
            naturalness: string;
            another_nationality: string;
            another_tax_residence: string;
            permanent_visa: string;
            country_name: string;
            country_tax_id: string
        };
        address: {
            state: string;
            city: string;
            street: string;
            streetPj: string;
            neighborhood: string;
            street_number: string;
            zip_code: string;
            complement: string;
            lat: string;
            lng: string;
            address_proof_picture: string
        };
        document_info: {
            rg: {
                document_number: string;
                rg_issue_date: string;
                rg_issue_organ: string;
                rg_issue_organPj: string;
                rgcnh_picture: string
            };
            cpf: {
                document_number: string;
                document_numberPj: string;
                identification_documentPj: string
            }
        };
        device_id: string;
        access_token: string
    };
    corporate_info: {
        letter_of_attorney_picture: string;
        last_year_average_revenue: number;
        document_info: {
            cnpj: string;
            cnae_code_main: string;
            trade_name: string;
            establishment_date: string;
            juridical_nature: string;
            social_contract_picture: string
        };
        permits: {
            accepted_notification: string;
        }
        partner_info: {
            partner1: {
                nome_partner1: string;
                cpf_partner1: string;
                participation_partner1: string;
                entry_date_partner1: string | Date;
                nacionalidade_partner1: string
            };
            partner2: {
                nome_partner2: string;
                cpf_partner2: string;
                participation_partner2: string;
                entry_date_partner2: string | Date;
                nationality_partner2: string
            };
            partner3: {
                nome_partner3: string;
                cpf_partner3: string;
                participation_partner3: string;
                entry_date_partner3: string | Date;
                nationality_partner3: string;
            };
            partner4: {
                nome_partner4: string;
                cpf_partner4: string;
                participation_partner4: string;
                entry_date_partner4: string | Date;
                nationality_partner4: string;
            };
            partner5: {
                nome_partner5: string;
                cpf_partner5: string;
                participation_partner5: string;
                entry_date_partner5: string | Date;
                nationality_partner5: string;
            }
        };
        address: {
            state: string;
            city: string;
            street: string;
            neighborhood: string;
            street_number: string;
            zip_code: string;
            complement: string
        }
    };
    partner_banking: {
        client_token: string;
        partner_name: string;
        partner_logo_picture: string
    };
    init_status?: string;
    clientMerchantId: string;
    status?: "Ativo" | "Inativo" | "Bloqueado" | "Deletado" | "Desativado";
};