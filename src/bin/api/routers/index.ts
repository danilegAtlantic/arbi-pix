import { Router } from "express";


import { ValidacaoDecontaMovimentos } from "./ValidacaoDecontaMovimentos/EstabelecimentosRouter";
import { Notificacoes } from "./PushReceberNotificacao/EstabelecimentosRouter";


const Routers = Router();

Routers.use( ValidacaoDecontaMovimentos);
Routers.use( Notificacoes );


export { Routers };