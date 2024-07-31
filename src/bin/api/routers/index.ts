import { Router } from "express";
import { UserRouter } from "./User/UserRouter";
import { MachineOrderRouter } from "./MachineOrder/MachineOrderRouter";
import { TerminaisRouter } from "./Terminais/TerminaisRouter";
import { EstabelecimentosRouter } from "./Estabelecimentos/EstabelecimentosRouter";
import { SolicitacaoRouter } from "./Solicitacao/SolicitacaoRouter";


const Routers = Router();

Routers.use(UserRouter);
Routers.use(MachineOrderRouter);
Routers.use(TerminaisRouter);
Routers.use(EstabelecimentosRouter);
Routers.use(SolicitacaoRouter);


export { Routers };