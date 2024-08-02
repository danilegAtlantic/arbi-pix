import { EbContaMovimentoUseCase } from './EbContaMovimento/EbContaMovimentoUseCase';
import { EbContaMovimentoController } from './EbContaMovimento/EbContaMovimentoController';

import { EvContaValidaContaRecebedorUseCase } from './EbContaValidaContaRecebedor/EbContaValidaContaRecebedorUseCase';
import { EvContaValidaContaRecebedorController } from './EbContaValidaContaRecebedor/EbContaValidaContaRecebedorController';












export const ebContaMovimentoUseCase = new EbContaMovimentoUseCase();
export const ebContaMovimentoController = new EbContaMovimentoController(ebContaMovimentoUseCase);

export const evContaValidaContaRecebedorUseCase = new EvContaValidaContaRecebedorUseCase();
export const evContaValidaContaRecebedorController = new EvContaValidaContaRecebedorController(evContaValidaContaRecebedorUseCase);