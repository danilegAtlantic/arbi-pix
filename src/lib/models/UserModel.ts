import mongoose, { Schema } from "mongoose";
import { User } from "../entities/User";
import { format } from "date-fns";

const schema = new Schema<User>(
    {
        id: { type: String, required: false },
        account_register_type: { type: String, required: false, default: "full" },
        code_recommendation: { type: String, required: false, default: null },
        invite_token: { type: String, required: false, default: null },
        account_type: { type: String, required: false, default: 'PJ' },
        type: { type: String, required: false, default: null },
        agency: { type: String, required: false, default: null },
        account_matriz: { type: String, required: false, default: null },
        account_banking_id: { type: String, required: false, default: null },
        account_banking_type: { type: String, required: false, default: null },
        user_info: {
            full_name: { type: String, required: true, default: null },
            full_namePj: { type: String, required: false, default: null },
            preferred_name: { type: String, required: true, default: null },
            email_address: { type: String, required: true, default: null },
            gender: { type: String, required: true, default: null },
            place_of_birth: { type: String, required: true, default: null },
            place_of_birthPj: { type: String, required: false, default: null },
            nationality: { type: String, required: true, default: null },
            nationalityPj: { type: String, required: false, default: null },
            birth_date: { type: String, required: true, default: format(new Date(), "dd/MM/yyyy") },
            foundation_date: { type: String, required: false, default: format(new Date(), "dd/MM/yyyy") || null },
            mother_name: { type: String, required: true, default: null },
            mother_namePj: { type: String, required: false, default: null },
            monthly_income: { type: Number, required: true, default: 0 },
            marital_status: { type: String, required: false, default: null },
            marital_statusPj: { type: String, required: false, default: null },
            spouse_info: {
                spouse_name: { type: String, required: false, default: null },
                spouse_namePj: { type: String, required: false, default: null },
                spouse_cpf: { type: String, required: false, default: null },
                spouse_cpfPj: { type: String, required: false, default: null },
                investor_profile: { type: String, required: false, default: null },
                personal_token: { type: String, required: false, default: null },
                personal_balance: { type: Number, required: false, default: 0 },
            },
            pep: { type: String, required: true, default: null },
            info_pep: {
                clpep: { type: String, required: false, default: null },
                cpfpep: { type: String, required: false, default: null },
                pep_name: { type: String, required: false, default: null },
            },
            occupation: { type: String, required: false, default: null },
            occupationPj: { type: String, required: false, default: null },
            self_picture: { type: String, required: false, default: null },
            stored_password: { type: String, required: true, default: null },
            contact: {
                phone_number_1: {
                    area_code: { type: String, required: true, default: null },
                    phone_number: { type: String, required: true, default: null },
                },
                phone_number_2: {
                    area_code: { type: String, required: false, default: null },
                    phone_number: { type: String, required: false, default: null },
                },
            },
            income_info: {
                source_income: { type: String, required: true, default: null },
                company: { type: String, required: true, default: null },
                income: { type: String, required: true, default: null },
                incomePj: { type: String, required: true, default: null },
                assets: { type: String, required: true, default: null },
                assetsPj: { type: String, required: true, default: null },
                financial_investments: { type: String, required: true, default: null },
                financial_investmentsPj: { type: String, required: true, default: null },
                other_investments: { type: String, required: true, default: null },
            },
            foreign_income: {
                naturalness: { type: String, required: true, default: null },
                another_nationality: { type: String, required: false, default: null },
                another_tax_residence: { type: String, required: false, default: null },
                permanent_visa: { type: String, required: false, default: null },
                country_name: { type: String, required: false, default: null },
                country_tax_id: { type: String, required: false, default: null },
            },
            address: {
                state: { type: String, required: false, default: null },
                city: { type: String, required: false, default: null },
                street: { type: String, required: false, default: null },
                streetPj: { type: String, required: false, default: null },
                neighborhood: { type: String, required: false, default: null },
                street_number: { type: String, required: false, default: null },
                zip_code: { type: String, required: false, default: null },
                complement: { type: String, required: false, default: null },
                lat: { type: String, required: false, default: null },
                lng: { type: String, required: false, default: null },
                address_proof_picture: { type: String, required: false, default: null },
            },
            document_info: {
                rg: {
                    document_number: { type: String, required: true, default: null },
                    rg_issue_date: { type: String, required: false, default: null },
                    rg_issue_organ: { type: String, required: false, default: null },
                    rg_issue_organPj: { type: String, required: false, default: null },
                    rgcnh_picture: { type: String, required: false, default: null },
                },
                cpf: {
                    document_number: { type: String, required: true, default: null },
                    document_numberPj: { type: String, required: false, default: null },
                    identification_documentPj: { type: String, required: false, default: null },
                }
            },
            device_id: { type: String, required: false, default: null },
            access_token: { type: String, required: false, default: null },
        },
        corporate_info: {
            letter_of_attorney_picture: { type: String, required: false, default: null },
            last_year_average_revenue: { type: Number, required: true, default: 0 },
            document_info: {
                cnpj: { type: String, required: false, default: null },
                cnae_code_main: { type: String, required: false, default: null },
                trade_name: { type: String, required: false, default: null },
                establishment_date: { type: String, required: false, default: null },
                juridical_nature: { type: String, required: false, default: null },
                social_contract_picture: { type: String, required: false, default: null },
            },
            permits: {
                accepted_notification: { type: String, required: true, default: null },
            },
            partner_info: {
                partner1: {
                    nome_partner1: { type: String, required: false, default: null },
                    cpf_partner1: { type: String, required: false, default: null },
                    participation_partner1: { type: String, required: false, default: null },
                    entry_date_partner1: { type: String, required: false, default: format(new Date(), "dd/MM/yyyy") },
                    nacionalidade_partner1: { type: String, required: false, default: null },
                },
                partner2: {
                    nome_partner2: { type: String, required: false, default: null },
                    cpf_partner2: { type: String, required: false, default: null },
                    participation_partner2: { type: String, required: false, default: null },
                    entry_date_partner2: { type: String, required: false, default: format(new Date(), "dd/MM/yyyy") },
                    nationality_partner2: { type: String, required: false, default: null },
                },
                partner3: {
                    nome_partner3: { type: String, required: false, default: null },
                    cpf_partner3: { type: String, required: false, default: null },
                    participation_partner3: { type: String, required: false, default: null },
                    entry_date_partner3: { type: String, required: false, default: format(new Date(), "dd/MM/yyyy") },
                    nationality_partner3: { type: String, required: false, default: null },
                },
                partner4: {
                    nome_partner4: { type: String, required: false, default: null },
                    cpf_partner4: { type: String, required: false, default: null },
                    participation_partner4: { type: String, required: false, default: null },
                    entry_date_partner4: { type: String, required: false, default: format(new Date(), "dd/MM/yyyy") },
                    nationality_partner4: { type: String, required: false, default: null },
                },
                partner5: {
                    nome_partner5: { type: String, required: false, default: null },
                    cpf_partner5: { type: String, required: false, default: null },
                    participation_partner5: { type: String, required: false, default: null },
                    entry_date_partner5: { type: String, required: false, default: format(new Date(), "dd/MM/yyyy") },
                    nationality_partner5: { type: String, required: false, default: null },
                }
            },
            address: {
                state: { type: String, required: false, default: null },
                city: { type: String, required: false, default: null },
                street: { type: String, required: false, default: null },
                neighborhood: { type: String, required: false, default: null },
                street_number: { type: String, required: false, default: null },
                zip_code: { type: String, required: false, default: null },
                complement: { type: String, required: false, default: null },
            }
        },
        partner_banking: {
            client_token: { type: String, required: true, default: null },
            partner_name: { type: String, required: false, default: null },
            partner_logo_picture: { type: String, required: false, default: null },
        },
        init_status: { type: String, required: false, default: "1" },
        clientMerchantId: { type: String, required: true, default: null },
        status: { type: String, required: false, default: "Ativo" },
    },
    {
        toJSON: {
            transform: (_, ret): void => {
                ret._id = ret._id;
                    delete ret._id;
                    delete ret.__v;
                    delete ret.createdAt;
                    delete ret.updatedAt;
            }
        },
        timestamps: {
            createdAt: true,
            updatedAt: true
        }
    });

export const UserModel = mongoose.model<User>("users", schema);