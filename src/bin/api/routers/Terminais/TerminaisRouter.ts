import { Router } from "express";
import {terminaisController } from "../../../../lib/useCases/Terminais";
/* import AmqpProviders from "../../../../lib/providers/MicroservicesFunctions"; */

const TerminaisRouter = Router();

TerminaisRouter.get('/terminais', (request, response) => terminaisController.handle(request, response));


export { TerminaisRouter };