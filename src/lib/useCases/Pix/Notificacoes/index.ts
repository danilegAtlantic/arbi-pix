import { pushReceberNotificacaoUseCase } from './pushReceberNotificacao/pushReceberNotificacaoUseCase';
import { pushReceberNotificacaoController } from './pushReceberNotificacao/pushReceberNotificacaoController';





export const PushReceberNotificacaoUseCase = new pushReceberNotificacaoUseCase();
export const PushReceberNotificacaoController = new pushReceberNotificacaoController(PushReceberNotificacaoUseCase);

