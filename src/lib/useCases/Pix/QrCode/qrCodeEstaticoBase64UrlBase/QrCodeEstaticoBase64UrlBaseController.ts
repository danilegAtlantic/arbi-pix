import { Request, Response } from "express";
import ResponseHttp from "../../../../../bin/functions/ResponseHttp";
import ValidateBodyRequest from "../../../../../bin/functions/ValidateBodyRequest";
import SolicitacaoValidationRules from './QrCodeEstaticoBase64UrlBaseValidationRules.json';
import { QrCodeEstaticoBase64UrlBaseUseCase } from "./QrCodeEstaticoBase64UrlBaseUseCase";
import { logError, tint } from "../../../../../bin/functions/CursorLog";

export class QrCodeEstaticoController {

    constructor(private SolicitacaoUseCase: QrCodeEstaticoBase64UrlBaseUseCase) { };

    async handle(request: Request, response: Response) {

        try {
            const userData = await this.SolicitacaoUseCase.run(request.body);
            if (userData && userData.status !== 200) {
                return ResponseHttp.badRequest(response, [], [], userData.message);
            }
            
            return ResponseHttp.OK(response, [userData?.data], [], userData.message);
        } catch (error) {
            console.log(logError(), tint("CreatePaymentPixController"), `-` + error);
            return ResponseHttp.internalServerError(response);
        };
    };
};