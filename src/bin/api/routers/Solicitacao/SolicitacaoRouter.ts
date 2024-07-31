import { Router } from "express";
import { solicitacaoController, getsolicitacaoController, responsesolicitacaoController, pendenteController  } from "../../../../lib/useCases/Solicitacao";
import AmqpProviders from "../../../../lib/providers/MicroservicesFunctions";

const SolicitacaoRouter = Router();

SolicitacaoRouter.post('/solicitacao', (request, response) => solicitacaoController.handle(request, response));
SolicitacaoRouter.post('/get/solicitacao', (request, response) => getsolicitacaoController.handle(request, response));
SolicitacaoRouter.post('/response/solicitacao', (request, response) => responsesolicitacaoController.handle(request, response));
SolicitacaoRouter.post('/pendentes', (request, response) => pendenteController.handle(request, response));



export { SolicitacaoRouter };