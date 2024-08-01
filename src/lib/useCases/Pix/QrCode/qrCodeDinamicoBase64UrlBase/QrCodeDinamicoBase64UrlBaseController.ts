import { Request, Response } from "express";
import ResponseHttp from "../../../../../bin/functions/ResponseHttp";
import ValidateBodyRequest from "../../../../../bin/functions/ValidateBodyRequest";
import SolicitacaoValidationRules from './QrCodeDinamicoBase64UrlBaseValidationRules.json';
import { QrCodeDinamicoBase64UrlBaseUseCase } from "./QrCodeDinamicoBase64UrlBaseUseCase";
/* import { QrCodeDinamicoBase64UseCase } from "./QrCodeDinamicoBase64UseCase.ts"; */
import { logError, tint } from "../../../../../bin/functions/CursorLog";

export class QrCodeDinamicoBase64UrlBaseController {

    constructor(private SolicitacaoUseCase: QrCodeDinamicoBase64UrlBaseUseCase) { };

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