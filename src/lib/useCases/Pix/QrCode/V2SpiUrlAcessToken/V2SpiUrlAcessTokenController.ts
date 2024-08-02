import { Request, Response } from "express";
import ResponseHttp from "../../../../../bin/functions/ResponseHttp";
import ValidateBodyRequest from "../../../../../bin/functions/ValidateBodyRequest";
import SolicitacaoValidationRules from './V2SpiUrlAcessTokenValidationRules.json';
import { V2SpiUrlAcessTokenUseCase } from "./V2SpiUrlAcessTokenUseCase";
import { logError, tint } from "../../../../../bin/functions/CursorLog";

export class V2SpiUrlAcessTokenController {

    constructor(private SolicitacaoUseCase: V2SpiUrlAcessTokenUseCase) { };

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