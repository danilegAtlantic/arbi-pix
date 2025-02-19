import { Request, Response } from "express";
import ResponseHttp from "../../../../../bin/functions/ResponseHttp";
import ValidateBodyRequest from "../../../../../bin/functions/ValidateBodyRequest";
import AlterarEnderecamentoValidationRules from './AlterarEnderecamentoValidationRules.json';
import { AlterarEnderecamentoUseCase } from "./AlterarEnderecamentoUseCase";
import { logError, tint } from "../../../../../bin/functions/CursorLog";

export class AlterarEnderecamentoController {

    constructor(private AlterarEnderecamentoUseCase: AlterarEnderecamentoUseCase) { };

    async handle(request: Request, response: Response) {

        try {
            const userData = await this.AlterarEnderecamentoUseCase.run(request.body);
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