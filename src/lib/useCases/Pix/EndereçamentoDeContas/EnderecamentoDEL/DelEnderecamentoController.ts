import { Request, Response } from "express";
import ResponseHttp from "../../../../../bin/functions/ResponseHttp";
import ValidateBodyRequest from "../../../../../bin/functions/ValidateBodyRequest";
import DelEnderecamentoValidationRules from './DelEnderecamentoValidationRules.json';
import { DelEnderecamentoUseCase } from "./DelEnderecamentoUseCase";
import { logError, tint } from "../../../../../bin/functions/CursorLog";

export class DelEnderecamentoController {

    constructor(private DelEnderecamentoUseCase: DelEnderecamentoUseCase) { };

    async handle(request: Request, response: Response) {

        try {
            const userData = await this.DelEnderecamentoUseCase.run(request.body);
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