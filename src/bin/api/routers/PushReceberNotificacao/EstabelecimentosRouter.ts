import { Router } from "express";
import { PushReceberNotificacaoController } from "../../../../lib/useCases/Pix/Notificacoes";
/* import AmqpProviders from "../../../../lib/providers/MicroservicesFunctions"; */

const Notificacoes = Router();

Notificacoes.post('/PushReceberNotificacaoController', (request, response) => PushReceberNotificacaoController.handle(request, response));


export { Notificacoes };