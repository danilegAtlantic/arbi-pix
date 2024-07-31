import { Router } from "express";
import {machineOrderController } from "../../../../lib/useCases/MachineOrder";
import AmqpProviders from "../../../../lib/providers/MicroservicesFunctions";

const MachineOrderRouter = Router();

MachineOrderRouter.post('/machineOrder/create', (request, response) => machineOrderController.handle(request, response));


export { MachineOrderRouter };