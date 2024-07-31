import { Router } from "express";
import { createUserController, getUserDataController, loginUserController, recoveryUserPasswordController, recoveryUserPasswordController2, createFastController } from "../../../../lib/useCases/User";
import AmqpProviders from "../../../../lib/providers/MicroservicesFunctions";

const UserRouter = Router();

UserRouter.post('/user/login', (request, response) => loginUserController.handle(request, response));
UserRouter.post('/user/account/create', (request, response) => createUserController.handle(request, response));
UserRouter.post('/user/account/gather', (request, response) => getUserDataController.handle(request, response));
UserRouter.post('/user/recovery/init', (request, response) => recoveryUserPasswordController.handle(request, response));
UserRouter.post('/user/recovery/end', (request, response) => recoveryUserPasswordController2.handle(request, response));
UserRouter.post('/user/createFast', (request, response) => createFastController.handle(request, response));

export { UserRouter };