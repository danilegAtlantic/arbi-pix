import { Router } from "express";
import {estabelecimentosController } from "../../../../lib/useCases/Estabelecimentos";
/* import AmqpProviders from "../../../../lib/providers/MicroservicesFunctions"; */

const EstabelecimentosRouter = Router();

EstabelecimentosRouter.post('/estabelecimentos', (request, response) => estabelecimentosController.handle(request, response));


export { EstabelecimentosRouter };