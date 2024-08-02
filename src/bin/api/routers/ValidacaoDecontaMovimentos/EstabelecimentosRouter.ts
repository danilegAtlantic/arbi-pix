import { Router } from "express";
import {ebContaMovimentoController, evContaValidaContaRecebedorController } from "../../../../lib/useCases/Pix/ValidacaoDeContaMovimentos/";
/* import AmqpProviders from "../../../../lib/providers/MicroservicesFunctions"; */

const ValidacaoDecontaMovimentos = Router();

ValidacaoDecontaMovimentos.post('/ebContaMovimento', (request, response) => ebContaMovimentoController.handle(request, response));
ValidacaoDecontaMovimentos.post('/evContaValidaContaRecebedor', (request, response) => ebContaMovimentoController.handle(request, response));


export { ValidacaoDecontaMovimentos };