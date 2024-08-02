import { Request, Response } from "express";
import ResponseHttp from "../../../../../bin/functions/ResponseHttp";
import ValidateBodyRequest from "../../../../../bin/functions/ValidateBodyRequest";
import SolicitacaoValidationRules from './QrCodeDinamicoBase64ImediatoV2ValidationRules.json';
import { QrCodeDinamicoBase64ImediatoV2UseCase } from "./QrCodeDinamicoBase64ImediatoV2UseCase";
/* import { QrCodeDinamicoBase64UseCase } from "./QrCodeDinamicoBase64UseCase.ts"; */
import { logError, tint } from "../../../../../bin/functions/CursorLog";

export class QrCodeDinamicoBase64ImediatoV2Controller {

    constructor(private SolicitacaoUseCase: QrCodeDinamicoBase64ImediatoV2UseCase) { };

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