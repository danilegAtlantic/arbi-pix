import { Request, Response } from "express";
import ResponseHttp from "../../../../../bin/functions/ResponseHttp";
import ValidateBodyRequest from "../../../../../bin/functions/ValidateBodyRequest";
import SolicitacaoValidationRules from './QrCodeDinamicoImagemBase64VencimentoV2ValidationRules.json';
import { QrCodeDinamicoImagemBase64VencimentoV2UseCase } from "./QrCodeDinamicoImagemBase64VencimentoV2UseCase";
import { logError, tint } from "../../../../../bin/functions/CursorLog";

export class QrCodeDinamicoImagemBase64VencimentoV2Controller {

    constructor(private SolicitacaoUseCase: QrCodeDinamicoImagemBase64VencimentoV2UseCase) { };

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