import { Request, Response } from "express";
import ResponseHttp from "../../../../../bin/functions/ResponseHttp";
import ValidateBodyRequest from "../../../../../bin/functions/ValidateBodyRequest";
import SolicitacaoValidationRules from './qrCodeDinamicoExcluirUrlAcessTokenValidationRules.json';
import { qrCodeDinamicoExcluirUrlAcessTokenUseCase } from "./qrCodeDinamicoExcluirUrlAcessTokenUseCase";
/* import { QrCodeDinamicoBase64UseCase } from "./QrCodeDinamicoBase64UseCase.ts"; */
import { logError, tint } from "../../../../../bin/functions/CursorLog";

export class qrCodeDinamicoExcluirUrlAcessTokenController {

    constructor(private SolicitacaoUseCase: qrCodeDinamicoExcluirUrlAcessTokenUseCase) { };

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