import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core'
import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';

class SDK {
  spec: Oas;
  core: APICore;

  constructor() {
    this.spec = Oas.init(definition);
    this.core = new APICore(this.spec, 'split-veripag/v2.2.1 (api/6.1.1)');
  }

  /**
   * Optionally configure various options that the SDK allows.
   *
   * @param config Object of supported SDK options and toggles.
   * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
   * should be represented in milliseconds.
   */
  config(config: ConfigOptions) {
    this.core.setConfig(config);
  }

  /**
   * If the API you're using requires authentication you can supply the required credentials
   * through this method and the library will magically determine how they should be used
   * within your API request.
   *
   * With the exception of OpenID and MutualTLS, it supports all forms of authentication
   * supported by the OpenAPI specification.
   *
   * @example <caption>HTTP Basic auth</caption>
   * sdk.auth('username', 'password');
   *
   * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
   * sdk.auth('myBearerToken');
   *
   * @example <caption>API Keys</caption>
   * sdk.auth('myApiKey');
   *
   * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
   * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
   * @param values Your auth credentials for the API; can specify up to two strings or numbers.
   */
  auth(...values: string[] | number[]) {
    this.core.setAuth(...values);
    return this;
  }

  /**
   * If the API you're using offers alternate server URLs, and server variables, you can tell
   * the SDK which one to use with this method. To use it you can supply either one of the
   * server URLs that are contained within the OpenAPI definition (along with any server
   * variables), or you can pass it a fully qualified URL to use (that may or may not exist
   * within the OpenAPI definition).
   *
   * @example <caption>Server URL with server variables</caption>
   * sdk.server('https://{region}.api.example.com/{basePath}', {
   *   name: 'eu',
   *   basePath: 'v14',
   * });
   *
   * @example <caption>Fully qualified server URL</caption>
   * sdk.server('https://eu.api.example.com/v14');
   *
   * @param url Server URL
   * @param variables An object of variables to replace into the server URL.
   */
  server(url: string, variables = {}) {
    this.core.setServer(url, variables);
  }

  /**
   * Retorna uma lista com as afiliações de todos os estabelecimentos e suas respectivas
   * taxas
   *
   * @summary Listar Afiliações
   * @throws FetchError<401, types.GetV2AffiliationResponse401> Erro na autenticação
   * @throws FetchError<404, types.GetV2AffiliationResponse404> Erro ao encontrar dados informados
   */
  getV2Affiliation(metadata?: types.GetV2AffiliationMetadataParam): Promise<FetchResponse<200, types.GetV2AffiliationResponse200>> {
    return this.core.fetch('/v2/Affiliation', 'get', metadata);
  }

  /**
   * Criar afiliação única, com ClientMerchantId, Tipo de captura (PlataformTypeId), MCCId, E
   * os opcionais Mid e ShopId
   *
   * @summary Criar Afiliação
   * @throws FetchError<400, types.PostV2AffiliationResponse400> Erro na validação dos dados
   * @throws FetchError<401, types.PostV2AffiliationResponse401> Erro na autenticação
   * @throws FetchError<404, types.PostV2AffiliationResponse404> Erro ao encontrar dados informados
   */
  postV2Affiliation(body?: types.PostV2AffiliationBodyParam): Promise<FetchResponse<200, types.PostV2AffiliationResponse200>> {
    return this.core.fetch('/v2/Affiliation', 'post', body);
  }

  /**
   * Retorna somente uma unica afiliação com as suas taxas
   *
   * @summary Pegar afiliação
   * @throws FetchError<401, types.GetV2AffiliationAffiliationidResponse401> Erro na autenticação
   * @throws FetchError<404, types.GetV2AffiliationAffiliationidResponse404> Erro ao encontrar dados informados
   */
  getV2AffiliationAffiliationid(metadata: types.GetV2AffiliationAffiliationidMetadataParam): Promise<FetchResponse<200, types.GetV2AffiliationAffiliationidResponse200>> {
    return this.core.fetch('/v2/Affiliation/{affiliationId}', 'get', metadata);
  }

  /**
   * Possivel atualizar dados da afiliação
   *
   * @summary Atualizar afiliação
   * @throws FetchError<400, types.PutV2AffiliationAffiliationidResponse400> Erro na validação dos dados
   * @throws FetchError<401, types.PutV2AffiliationAffiliationidResponse401> Erro na autenticação
   * @throws FetchError<404, types.PutV2AffiliationAffiliationidResponse404> Erro ao encontrar dados informados
   */
  putV2AffiliationAffiliationid(body: types.PutV2AffiliationAffiliationidBodyParam, metadata: types.PutV2AffiliationAffiliationidMetadataParam): Promise<FetchResponse<200, types.PutV2AffiliationAffiliationidResponse200>>;
  putV2AffiliationAffiliationid(metadata: types.PutV2AffiliationAffiliationidMetadataParam): Promise<FetchResponse<200, types.PutV2AffiliationAffiliationidResponse200>>;
  putV2AffiliationAffiliationid(body?: types.PutV2AffiliationAffiliationidBodyParam | types.PutV2AffiliationAffiliationidMetadataParam, metadata?: types.PutV2AffiliationAffiliationidMetadataParam): Promise<FetchResponse<200, types.PutV2AffiliationAffiliationidResponse200>> {
    return this.core.fetch('/v2/Affiliation/{affiliationId}', 'put', body, metadata);
  }

  /**
   * Possivel vincular um terminal já existente à uma afiliação ativa
   *
   * @summary Vincular terminal
   * @throws FetchError<400, types.PostV2AffiliationAffiliationidTerminalResponse400> Erro na validação dos dados
   * @throws FetchError<401, types.PostV2AffiliationAffiliationidTerminalResponse401> Erro na autenticação
   * @throws FetchError<404, types.PostV2AffiliationAffiliationidTerminalResponse404> Erro ao encontrar dados informados
   */
  postV2AffiliationAffiliationidTerminal(body: types.PostV2AffiliationAffiliationidTerminalBodyParam, metadata: types.PostV2AffiliationAffiliationidTerminalMetadataParam): Promise<FetchResponse<201, types.PostV2AffiliationAffiliationidTerminalResponse201>>;
  postV2AffiliationAffiliationidTerminal(metadata: types.PostV2AffiliationAffiliationidTerminalMetadataParam): Promise<FetchResponse<201, types.PostV2AffiliationAffiliationidTerminalResponse201>>;
  postV2AffiliationAffiliationidTerminal(body?: types.PostV2AffiliationAffiliationidTerminalBodyParam | types.PostV2AffiliationAffiliationidTerminalMetadataParam, metadata?: types.PostV2AffiliationAffiliationidTerminalMetadataParam): Promise<FetchResponse<201, types.PostV2AffiliationAffiliationidTerminalResponse201>> {
    return this.core.fetch('/v2/Affiliation/{affiliationId}/terminal', 'post', body, metadata);
  }

  /**
   * Inativar um terminal dentro da afiliação
   *
   * @summary Desativar terminal na afiliação
   * @throws FetchError<400, types.DeleteV2AffiliationAffiliationidTerminalResponse400> Erro na validação dos dados
   * @throws FetchError<401, types.DeleteV2AffiliationAffiliationidTerminalResponse401> Erro na autenticação
   * @throws FetchError<404, types.DeleteV2AffiliationAffiliationidTerminalResponse404> Erro ao encontrar dados informados
   */
  deleteV2AffiliationAffiliationidTerminal(metadata: types.DeleteV2AffiliationAffiliationidTerminalMetadataParam): Promise<FetchResponse<200, types.DeleteV2AffiliationAffiliationidTerminalResponse200>> {
    return this.core.fetch('/v2/Affiliation/{affiliationId}/terminal', 'delete', metadata);
  }

  /**
   * Possivel atualizar dados da afiliação
   *
   * @summary Atualizar taxas da afiliação
   * @throws FetchError<400, types.PutV2AffiliationAffiliationidRatesResponse400> Erro na validação dos dados
   * @throws FetchError<401, types.PutV2AffiliationAffiliationidRatesResponse401> Erro na autenticação
   * @throws FetchError<404, types.PutV2AffiliationAffiliationidRatesResponse404> Erro ao encontrar dados informados
   */
  putV2AffiliationAffiliationidRates(body: types.PutV2AffiliationAffiliationidRatesBodyParam, metadata: types.PutV2AffiliationAffiliationidRatesMetadataParam): Promise<FetchResponse<200, types.PutV2AffiliationAffiliationidRatesResponse200>>;
  putV2AffiliationAffiliationidRates(metadata: types.PutV2AffiliationAffiliationidRatesMetadataParam): Promise<FetchResponse<200, types.PutV2AffiliationAffiliationidRatesResponse200>>;
  putV2AffiliationAffiliationidRates(body?: types.PutV2AffiliationAffiliationidRatesBodyParam | types.PutV2AffiliationAffiliationidRatesMetadataParam, metadata?: types.PutV2AffiliationAffiliationidRatesMetadataParam): Promise<FetchResponse<200, types.PutV2AffiliationAffiliationidRatesResponse200>> {
    return this.core.fetch('/v2/Affiliation/{affiliationId}/rates', 'put', body, metadata);
  }

  /**
   * Retorna uma lista com todos estabelecimentos cadastrados ou um único estabelecimento,
   * caso o ClientMerchantId for informado
   *
   * @summary Listar estabelecimentos
   * @throws FetchError<401, types.GetV2EstablishmentResponse401> Erro na autenticação
   * @throws FetchError<404, types.GetV2EstablishmentResponse404> Erro ao encontrar dados informados
   */
  getV2Establishment(metadata?: types.GetV2EstablishmentMetadataParam): Promise<FetchResponse<200, types.GetV2EstablishmentResponse200>> {
    return this.core.fetch('/v2/Establishment', 'get', metadata);
  }

  /**
   * Cria um estabelecimento novo na base
   *
   * @summary Criar estabelecimento
   * @throws FetchError<400, types.PostV2EstablishmentResponse400> Erro na validação dos dados
   * @throws FetchError<401, types.PostV2EstablishmentResponse401> Erro na autenticação
   */
  postV2Establishment(body: types.PostV2EstablishmentBodyParam): Promise<FetchResponse<201, types.PostV2EstablishmentResponse201>> {
    return this.core.fetch('/v2/Establishment', 'post', body);
  }

  /**
   * Retorna o estabelecimento cadastrado
   *
   * @summary Pegar estabelecimento pelo ID
   * @throws FetchError<401, types.GetV2EstablishmentClientmerchantidResponse401> Erro na autenticação
   * @throws FetchError<404, types.GetV2EstablishmentClientmerchantidResponse404> Erro ao encontrar dados informados
   */
  getV2EstablishmentClientmerchantid(metadata: types.GetV2EstablishmentClientmerchantidMetadataParam): Promise<FetchResponse<200, types.GetV2EstablishmentClientmerchantidResponse200>> {
    return this.core.fetch('/v2/Establishment/{clientMerchantId}', 'get', metadata);
  }

  /**
   * Atualiza dados do estabelecimento com base no EstablishmentUpdateModel
   *
   * @summary Atualizar estabelecimento
   * @throws FetchError<400, types.PutV2EstablishmentClientmerchantidResponse400> Erro na validação dos dados
   * @throws FetchError<401, types.PutV2EstablishmentClientmerchantidResponse401> Erro na autenticação
   * @throws FetchError<404, types.PutV2EstablishmentClientmerchantidResponse404> Erro ao encontrar dados informados
   */
  putV2EstablishmentClientmerchantid(body: types.PutV2EstablishmentClientmerchantidBodyParam, metadata: types.PutV2EstablishmentClientmerchantidMetadataParam): Promise<FetchResponse<201, types.PutV2EstablishmentClientmerchantidResponse201>> {
    return this.core.fetch('/v2/Establishment/{clientMerchantId}', 'put', body, metadata);
  }

  /**
   * Retorna o extrato do estabelecimento no período informado
   *
   * @summary Consultar extrato
   * @throws FetchError<400, types.GetV2EstablishmentClientmerchantidBalanceResponse400> Erro na validação dos dados
   * @throws FetchError<401, types.GetV2EstablishmentClientmerchantidBalanceResponse401> Erro na autenticação
   * @throws FetchError<404, types.GetV2EstablishmentClientmerchantidBalanceResponse404> Erro ao encontrar dados informados
   */
  getV2EstablishmentClientmerchantidBalance(metadata: types.GetV2EstablishmentClientmerchantidBalanceMetadataParam): Promise<FetchResponse<200, types.GetV2EstablishmentClientmerchantidBalanceResponse200>> {
    return this.core.fetch('/v2/Establishment/{clientMerchantId}/balance', 'get', metadata);
  }

  /**
   * Cria um lançamento no extrato do estabelecimento informado
   *
   * @summary Criar lançamento
   * @throws FetchError<400, types.PostV2EstablishmentClientmerchantidBalanceResponse400> Erro na validação dos dados
   * @throws FetchError<401, types.PostV2EstablishmentClientmerchantidBalanceResponse401> Erro na autenticação
   * @throws FetchError<404, types.PostV2EstablishmentClientmerchantidBalanceResponse404> Erro ao encontrar dados informados
   */
  postV2EstablishmentClientmerchantidBalance(body: types.PostV2EstablishmentClientmerchantidBalanceBodyParam, metadata: types.PostV2EstablishmentClientmerchantidBalanceMetadataParam): Promise<FetchResponse<201, types.PostV2EstablishmentClientmerchantidBalanceResponse201>> {
    return this.core.fetch('/v2/Establishment/{clientMerchantId}/balance', 'post', body, metadata);
  }

  /**
   * Ativar ou Inativar o EC
   *
   * @summary Ativar ou Inativar o EC
   * @throws FetchError<400, types.PatchV2EstablishmentClientmerchantidInactiveResponse400> Erro na validação dos dados
   * @throws FetchError<401, types.PatchV2EstablishmentClientmerchantidInactiveResponse401> Erro na autenticação
   * @throws FetchError<404, types.PatchV2EstablishmentClientmerchantidInactiveResponse404> Erro ao encontrar dados informados
   */
  patchV2EstablishmentClientmerchantidInactive(body: types.PatchV2EstablishmentClientmerchantidInactiveBodyParam, metadata: types.PatchV2EstablishmentClientmerchantidInactiveMetadataParam): Promise<FetchResponse<201, types.PatchV2EstablishmentClientmerchantidInactiveResponse201>> {
    return this.core.fetch('/v2/Establishment/{clientMerchantId}/inactive', 'patch', body, metadata);
  }

  /**
   * Cria uma nova conta bancaria para o estabelecimento informado
   *
   * @summary Criar conta bancaria
   * @throws FetchError<400, types.PostV2EstablishmentClientmerchantidBankaccountResponse400> Erro na validação dos dados
   * @throws FetchError<401, types.PostV2EstablishmentClientmerchantidBankaccountResponse401> Erro na autenticação
   * @throws FetchError<404, types.PostV2EstablishmentClientmerchantidBankaccountResponse404> Erro ao encontrar dados informados
   */
  postV2EstablishmentClientmerchantidBankaccount(body: types.PostV2EstablishmentClientmerchantidBankaccountBodyParam, metadata: types.PostV2EstablishmentClientmerchantidBankaccountMetadataParam): Promise<FetchResponse<201, types.PostV2EstablishmentClientmerchantidBankaccountResponse201>> {
    return this.core.fetch('/v2/Establishment/{clientMerchantId}/bankAccount', 'post', body, metadata);
  }

  /**
   * Inseri uma venda POS com os valores informados
   *
   * @summary Inserir Venda POS
   * @throws FetchError<400, types.PostV2GatewaySaleposResponse400> Erro na validação dos dados
   * @throws FetchError<401, types.PostV2GatewaySaleposResponse401> Erro na autenticação
   * @throws FetchError<404, types.PostV2GatewaySaleposResponse404> Erro ao encontrar dados informados
   */
  postV2GatewaySalepos(body: types.PostV2GatewaySaleposBodyParam): Promise<FetchResponse<201, types.PostV2GatewaySaleposResponse201>> {
    return this.core.fetch('/v2/Gateway/SalePos', 'post', body);
  }

  /**
   * Inseri uma venda E-commerce com os valores informados
   *
   * @summary Inserir Venda E-commerce
   * @throws FetchError<400, types.PostV2GatewaySaleecommerceResponse400> Erro na validação dos dados
   * @throws FetchError<401, types.PostV2GatewaySaleecommerceResponse401> Erro na autenticação
   * @throws FetchError<404, types.PostV2GatewaySaleecommerceResponse404> Erro ao encontrar dados informados
   */
  postV2GatewaySaleecommerce(body: types.PostV2GatewaySaleecommerceBodyParam): Promise<FetchResponse<201, types.PostV2GatewaySaleecommerceResponse201>> {
    return this.core.fetch('/v2/Gateway/SaleEcommerce', 'post', body);
  }

  /**
   * Retorna o representante, a busca pode ser feita por ID do representante, Nome, ou
   * TaxId(CPF) do mesmo.//Se todos os parametros forem passados a busca sera feita por id.
   *             Caso seja passado clientMerchantId, será retornado uma lista de todos os
   * representantes vinculados aquele clientMerchantId
   *             Caso nenhum parametro seja passado, será retornado uma lista com todos os
   * representantes
   *
   * @summary Listar representantes
   * @throws FetchError<401, types.GetV2TraderepresentativeResponse401> Erro na autenticação
   * @throws FetchError<404, types.GetV2TraderepresentativeResponse404> Erro ao encontrar dados informados
   */
  getV2Traderepresentative(metadata?: types.GetV2TraderepresentativeMetadataParam): Promise<FetchResponse<200, types.GetV2TraderepresentativeResponse200>> {
    return this.core.fetch('/v2/TradeRepresentative', 'get', metadata);
  }

  /**
   * Cria o representante e o vincula ao estabelecimento caso o ClientMerchantId seja passado
   * tambem
   *             caso seja passado apenas o tradeRepresentative o representante será apenas
   * criado mas não vinculado.
   *
   * @summary Criar Representante
   * @throws FetchError<401, types.PostV2TraderepresentativeResponse401> Erro na autenticação
   * @throws FetchError<404, types.PostV2TraderepresentativeResponse404> TaxId já existente na base de representantes.
   */
  postV2Traderepresentative(body: types.PostV2TraderepresentativeBodyParam, metadata?: types.PostV2TraderepresentativeMetadataParam): Promise<FetchResponse<200, types.PostV2TraderepresentativeResponse200>> {
    return this.core.fetch('/v2/TradeRepresentative', 'post', body, metadata);
  }

  /**
   * Atualizar o representante com os dados informados, passar sempre o ID do representante.
   *
   * @summary Atualiza o representante
   * @throws FetchError<401, types.PutV2TraderepresentativeResponse401> Erro na autenticação
   * @throws FetchError<404, types.PutV2TraderepresentativeResponse404> Representante Não encontrado na base.
   */
  putV2Traderepresentative(body: types.PutV2TraderepresentativeBodyParam): Promise<FetchResponse<200, types.PutV2TraderepresentativeResponse200>> {
    return this.core.fetch('/v2/TradeRepresentative', 'put', body);
  }

  /**
   * Vincula o representante ao estabelecimento
   *
   * @summary Vincular Representante
   * @throws FetchError<401, types.PostV2TraderepresentativeAssignResponse401> Erro na autenticação
   * @throws FetchError<404, types.PostV2TraderepresentativeAssignResponse404> TaxId já existente na base de representantes.
   */
  postV2TraderepresentativeAssign(metadata?: types.PostV2TraderepresentativeAssignMetadataParam): Promise<FetchResponse<200, types.PostV2TraderepresentativeAssignResponse200>> {
    return this.core.fetch('/v2/TradeRepresentative/Assign', 'post', metadata);
  }

  /**
   * Desvincula o representante do estabelecimento
   *
   * @summary Desvincular Representante do estabelecimento
   * @throws FetchError<401, types.PostV2TraderepresentativeUnassignResponse401> Erro na autenticação
   * @throws FetchError<404, types.PostV2TraderepresentativeUnassignResponse404> TaxId já existente na base de representantes.
   */
  postV2TraderepresentativeUnassign(metadata?: types.PostV2TraderepresentativeUnassignMetadataParam): Promise<FetchResponse<200, types.PostV2TraderepresentativeUnassignResponse200>> {
    return this.core.fetch('/v2/TradeRepresentative/Unassign', 'post', metadata);
  }

  /**
   * Inativa o representante, passar o id do representante
   *
   * @summary Inativar representante
   * @throws FetchError<401, types.PutV2TraderepresentativeInactivateResponse401> Erro na autenticação
   * @throws FetchError<404, types.PutV2TraderepresentativeInactivateResponse404> Representante Não encontrado na base.
   */
  putV2TraderepresentativeInactivate(metadata?: types.PutV2TraderepresentativeInactivateMetadataParam): Promise<FetchResponse<200, types.PutV2TraderepresentativeInactivateResponse200>> {
    return this.core.fetch('/v2/TradeRepresentative/Inactivate', 'put', metadata);
  }

  /**
   * Retorna uma lista com todos terminais cadastrados
   *
   * @summary Listar terminais
   * @throws FetchError<400, types.GetV2TerminalResponse400> Erro na validação dos dados
   * @throws FetchError<401, types.GetV2TerminalResponse401> Erro na autenticação
   * @throws FetchError<404, types.GetV2TerminalResponse404> Erro ao encontrar dados informados
   */
  getV2Terminal(metadata?: types.GetV2TerminalMetadataParam): Promise<FetchResponse<200, types.GetV2TerminalResponse200>> {
    return this.core.fetch('/v2/Terminal', 'get', metadata);
  }

  /**
   * Retorna uma lista todos adquirentes cadastrados
   *
   * @summary Listar adquirentes
   * @throws FetchError<401, types.GetV2UtilAcquirersResponse401> Erro na autenticação
   */
  getV2UtilAcquirers(): Promise<FetchResponse<200, types.GetV2UtilAcquirersResponse200>> {
    return this.core.fetch('/v2/Util/acquirers', 'get');
  }

  /**
   * Retorna uma lista com os codígos dos bancos cadastrados
   *
   * @summary Listar bancos
   * @throws FetchError<401, types.GetV2UtilBanksResponse401> Erro na autenticação
   */
  getV2UtilBanks(): Promise<FetchResponse<200, types.GetV2UtilBanksResponse200>> {
    return this.core.fetch('/v2/Util/banks', 'get');
  }

  /**
   * Retorna uma lista com todas as bandeiras cadastradas
   *
   * @summary Listar bandeiras
   * @throws FetchError<401, types.GetV2UtilBrandsResponse401> Erro na autenticação
   */
  getV2UtilBrands(): Promise<FetchResponse<200, types.GetV2UtilBrandsResponse200>> {
    return this.core.fetch('/v2/Util/brands', 'get');
  }

  /**
   * Retorna uma lista com o codígo da todas as categorias cadastradas
   *
   * @summary Listar categorias
   * @throws FetchError<401, types.GetV2UtilCategorytypesResponse401> Erro na autenticação
   */
  getV2UtilCategorytypes(): Promise<FetchResponse<200, types.GetV2UtilCategorytypesResponse200>> {
    return this.core.fetch('/v2/Util/categoryTypes', 'get');
  }

  /**
   * Retorna uma lista com todos os chips cadastrados
   *
   * @summary Listar chips
   * @throws FetchError<401, types.GetV2UtilMobilesimcardsResponse401> Erro na autenticação
   */
  getV2UtilMobilesimcards(): Promise<FetchResponse<200, types.GetV2UtilMobilesimcardsResponse200>> {
    return this.core.fetch('/v2/Util/mobileSimCards', 'get');
  }

  /**
   * Retorna uma lista com o codígo do mcc cadastrados
   *
   * @summary Listar Mcc's
   * @throws FetchError<401, types.GetV2UtilMccResponse401> Erro na autenticação
   */
  getV2UtilMcc(): Promise<FetchResponse<200, types.GetV2UtilMccResponse200>> {
    return this.core.fetch('/v2/Util/mcc', 'get');
  }

  /**
   * Retorna uma lista com o codígo de todas as movimentações cadastradas
   *
   * @summary Listar movimentações
   * @throws FetchError<401, types.GetV2UtilMovementtypesResponse401> Erro na autenticação
   */
  getV2UtilMovementtypes(): Promise<FetchResponse<200, types.GetV2UtilMovementtypesResponse200>> {
    return this.core.fetch('/v2/Util/movementTypes', 'get');
  }

  /**
   * Retorna uma lista com todos os gateways de pagamentos cadastrados
   *
   * @summary Listar Gateways
   * @throws FetchError<401, types.GetV2UtilPaymentgatewayResponse401> Erro na autenticação
   */
  getV2UtilPaymentgateway(): Promise<FetchResponse<200, types.GetV2UtilPaymentgatewayResponse200>> {
    return this.core.fetch('/v2/Util/paymentGateway', 'get');
  }

  /**
   * Retorna uma lista com todos os perfis de transação cadastrados
   *
   * @summary Listar perfis
   * @throws FetchError<401, types.GetV2UtilProfiletransactionsResponse401> Erro na autenticação
   */
  getV2UtilProfiletransactions(): Promise<FetchResponse<200, types.GetV2UtilProfiletransactionsResponse200>> {
    return this.core.fetch('/v2/Util/profileTransactions', 'get');
  }

  /**
   * Retorna uma lista com todos os perfis de transação cadastrados
   *
   * @summary Listar plataformas
   * @throws FetchError<401, types.GetV2UtilPlataformtypesResponse401> Erro na autenticação
   */
  getV2UtilPlataformtypes(): Promise<FetchResponse<200, types.GetV2UtilPlataformtypesResponse200>> {
    return this.core.fetch('/v2/Util/plataformTypes', 'get');
  }

  /**
   * Retorna uma lista com o codígo da todas as categorias cadastradas
   *
   * @summary Listar status instalação
   * @throws FetchError<401, types.GetV2UtilInstallationstatusResponse401> Erro na autenticação
   */
  getV2UtilInstallationstatus(): Promise<FetchResponse<200, types.GetV2UtilInstallationstatusResponse200>> {
    return this.core.fetch('/v2/Util/installationStatus', 'get');
  }

  /**
   * Retorna uma lista com todos os status de venda cadastrados
   *
   * @summary Listar status de venda
   * @throws FetchError<401, types.GetV2UtilSalestatusResponse401> Erro na autenticação
   */
  getV2UtilSalestatus(): Promise<FetchResponse<200, types.GetV2UtilSalestatusResponse200>> {
    return this.core.fetch('/v2/Util/saleStatus', 'get');
  }

  /**
   * Retorna uma lista com todos os tipos de venda cadastrados
   *
   * @summary Listar tipos de venda
   * @throws FetchError<401, types.GetV2UtilSaletypesResponse401> Erro na autenticação
   */
  getV2UtilSaletypes(): Promise<FetchResponse<200, types.GetV2UtilSaletypesResponse200>> {
    return this.core.fetch('/v2/Util/saleTypes', 'get');
  }

  /**
   * Retorna uma lista com todos os modelos de terminal cadastrados
   *
   * @summary Listar modelos de terminal
   * @throws FetchError<401, types.GetV2UtilTerminalmodelsResponse401> Erro na autenticação
   */
  getV2UtilTerminalmodels(): Promise<FetchResponse<200, types.GetV2UtilTerminalmodelsResponse200>> {
    return this.core.fetch('/v2/Util/terminalModels', 'get');
  }

  /**
   * Retorna uma lista com todos os fabricantes de terminal cadastrados
   *
   * @summary Listar fabricante de terminal
   * @throws FetchError<401, types.GetV2UtilTerminalmanufacturersResponse401> Erro na autenticação
   */
  getV2UtilTerminalmanufacturers(): Promise<FetchResponse<200, types.GetV2UtilTerminalmanufacturersResponse200>> {
    return this.core.fetch('/v2/Util/terminalManufacturers', 'get');
  }

  /**
   * Retorna uma lista com todos os status de terminal cadastrados
   *
   * @summary Listar status de terminal
   * @throws FetchError<401, types.GetV2UtilTerminalstatusResponse401> Erro na autenticação
   */
  getV2UtilTerminalstatus(): Promise<FetchResponse<200, types.GetV2UtilTerminalstatusResponse200>> {
    return this.core.fetch('/v2/Util/terminalStatus', 'get');
  }

  /**
   * Retorna uma lista com todas as vendas de todos os estabelecimentos ou vendas únicas
   * usando os filtros
   * <br><b>ATENÇÃO</b><br></br>Um dos seguintes filtros devem ser informados na
   * pesquisa:<br></br>- Nsu ( <b>acquirerTransactionKey</b> )<br></br>- Id da venda (
   * <b>saleId</b> )<br></br>- Data inicial da transação ( <b>startTransactionDate</b>
   * )<br></br>- Data inicial de pagamento ( <b>startPaymentDate</b> )
   *
   * @summary Listar vendas
   * @throws FetchError<400, types.GetV2SaleResponse400> Erro na validação dos dados
   * @throws FetchError<401, types.GetV2SaleResponse401> Erro na autenticação
   * @throws FetchError<404, types.GetV2SaleResponse404> Erro ao encontrar dados informados
   */
  getV2Sale(metadata?: types.GetV2SaleMetadataParam): Promise<FetchResponse<200, types.GetV2SaleResponse200>> {
    return this.core.fetch('/v2/Sale', 'get', metadata);
  }

  /**
   * Retorna uma lista com todas as vendas de todos vendas pagas no período informado
   *
   * @summary Listar Pagamentos
   * @throws FetchError<400, types.GetV2SalePaymentResponse400> Erro na validação dos dados
   * @throws FetchError<401, types.GetV2SalePaymentResponse401> Erro na autenticação
   * @throws FetchError<404, types.GetV2SalePaymentResponse404> Erro ao encontrar dados informados
   */
  getV2SalePayment(metadata?: types.GetV2SalePaymentMetadataParam): Promise<FetchResponse<200, types.GetV2SalePaymentResponse200>> {
    return this.core.fetch('/v2/Sale/payment', 'get', metadata);
  }

  /**
   * Retorna uma lista com todas as vendas e histórico de status
   *
   * @summary Listar Histórico de status
   * @throws FetchError<400, types.GetV2SaleStatushistoryResponse400> Erro na validação dos dados
   * @throws FetchError<401, types.GetV2SaleStatushistoryResponse401> Erro na autenticação
   * @throws FetchError<404, types.GetV2SaleStatushistoryResponse404> Erro ao encontrar dados informados
   */
  getV2SaleStatushistory(metadata?: types.GetV2SaleStatushistoryMetadataParam): Promise<FetchResponse<200, types.GetV2SaleStatushistoryResponse200>> {
    return this.core.fetch('/v2/Sale/StatusHistory', 'get', metadata);
  }

  /**
   * Insere lista de metadados informados na venda
   *
   * @summary Atualizar metadados
   * @throws FetchError<400, types.PutV2SaleMetadataSaleidResponse400> Erro na validação dos dados
   * @throws FetchError<401, types.PutV2SaleMetadataSaleidResponse401> Erro na autenticação
   * @throws FetchError<404, types.PutV2SaleMetadataSaleidResponse404> Erro ao encontrar dados informados
   */
  putV2SaleMetadataSaleid(body: types.PutV2SaleMetadataSaleidBodyParam, metadata: types.PutV2SaleMetadataSaleidMetadataParam): Promise<FetchResponse<201, types.PutV2SaleMetadataSaleidResponse201>>;
  putV2SaleMetadataSaleid(metadata: types.PutV2SaleMetadataSaleidMetadataParam): Promise<FetchResponse<201, types.PutV2SaleMetadataSaleidResponse201>>;
  putV2SaleMetadataSaleid(body?: types.PutV2SaleMetadataSaleidBodyParam | types.PutV2SaleMetadataSaleidMetadataParam, metadata?: types.PutV2SaleMetadataSaleidMetadataParam): Promise<FetchResponse<201, types.PutV2SaleMetadataSaleidResponse201>> {
    return this.core.fetch('/v2/Sale/metadata/{saleId}', 'put', body, metadata);
  }

  /**
   * Atualiza status da parcela
   *
   * @summary Atualizar status
   * @throws FetchError<400, types.PutV2SaleStatusInstallmentidResponse400> Erro na validação dos dados
   * @throws FetchError<401, types.PutV2SaleStatusInstallmentidResponse401> Erro na autenticação
   * @throws FetchError<404, types.PutV2SaleStatusInstallmentidResponse404> Erro ao encontrar dados informados
   */
  putV2SaleStatusInstallmentid(body: types.PutV2SaleStatusInstallmentidBodyParam, metadata: types.PutV2SaleStatusInstallmentidMetadataParam): Promise<FetchResponse<200, types.PutV2SaleStatusInstallmentidResponse200>>;
  putV2SaleStatusInstallmentid(metadata: types.PutV2SaleStatusInstallmentidMetadataParam): Promise<FetchResponse<200, types.PutV2SaleStatusInstallmentidResponse200>>;
  putV2SaleStatusInstallmentid(body?: types.PutV2SaleStatusInstallmentidBodyParam | types.PutV2SaleStatusInstallmentidMetadataParam, metadata?: types.PutV2SaleStatusInstallmentidMetadataParam): Promise<FetchResponse<200, types.PutV2SaleStatusInstallmentidResponse200>> {
    return this.core.fetch('/v2/Sale/status/{installmentId}', 'put', body, metadata);
  }
}

const createSDK = (() => { return new SDK(); })()
;

export default createSDK;

export type { DeleteV2AffiliationAffiliationidTerminalMetadataParam, DeleteV2AffiliationAffiliationidTerminalResponse200, DeleteV2AffiliationAffiliationidTerminalResponse400, DeleteV2AffiliationAffiliationidTerminalResponse401, DeleteV2AffiliationAffiliationidTerminalResponse404, GetV2AffiliationAffiliationidMetadataParam, GetV2AffiliationAffiliationidResponse200, GetV2AffiliationAffiliationidResponse401, GetV2AffiliationAffiliationidResponse404, GetV2AffiliationMetadataParam, GetV2AffiliationResponse200, GetV2AffiliationResponse401, GetV2AffiliationResponse404, GetV2EstablishmentClientmerchantidBalanceMetadataParam, GetV2EstablishmentClientmerchantidBalanceResponse200, GetV2EstablishmentClientmerchantidBalanceResponse400, GetV2EstablishmentClientmerchantidBalanceResponse401, GetV2EstablishmentClientmerchantidBalanceResponse404, GetV2EstablishmentClientmerchantidMetadataParam, GetV2EstablishmentClientmerchantidResponse200, GetV2EstablishmentClientmerchantidResponse401, GetV2EstablishmentClientmerchantidResponse404, GetV2EstablishmentMetadataParam, GetV2EstablishmentResponse200, GetV2EstablishmentResponse401, GetV2EstablishmentResponse404, GetV2SaleMetadataParam, GetV2SalePaymentMetadataParam, GetV2SalePaymentResponse200, GetV2SalePaymentResponse400, GetV2SalePaymentResponse401, GetV2SalePaymentResponse404, GetV2SaleResponse200, GetV2SaleResponse400, GetV2SaleResponse401, GetV2SaleResponse404, GetV2SaleStatushistoryMetadataParam, GetV2SaleStatushistoryResponse200, GetV2SaleStatushistoryResponse400, GetV2SaleStatushistoryResponse401, GetV2SaleStatushistoryResponse404, GetV2TerminalMetadataParam, GetV2TerminalResponse200, GetV2TerminalResponse400, GetV2TerminalResponse401, GetV2TerminalResponse404, GetV2TraderepresentativeMetadataParam, GetV2TraderepresentativeResponse200, GetV2TraderepresentativeResponse401, GetV2TraderepresentativeResponse404, GetV2UtilAcquirersResponse200, GetV2UtilAcquirersResponse401, GetV2UtilBanksResponse200, GetV2UtilBanksResponse401, GetV2UtilBrandsResponse200, GetV2UtilBrandsResponse401, GetV2UtilCategorytypesResponse200, GetV2UtilCategorytypesResponse401, GetV2UtilInstallationstatusResponse200, GetV2UtilInstallationstatusResponse401, GetV2UtilMccResponse200, GetV2UtilMccResponse401, GetV2UtilMobilesimcardsResponse200, GetV2UtilMobilesimcardsResponse401, GetV2UtilMovementtypesResponse200, GetV2UtilMovementtypesResponse401, GetV2UtilPaymentgatewayResponse200, GetV2UtilPaymentgatewayResponse401, GetV2UtilPlataformtypesResponse200, GetV2UtilPlataformtypesResponse401, GetV2UtilProfiletransactionsResponse200, GetV2UtilProfiletransactionsResponse401, GetV2UtilSalestatusResponse200, GetV2UtilSalestatusResponse401, GetV2UtilSaletypesResponse200, GetV2UtilSaletypesResponse401, GetV2UtilTerminalmanufacturersResponse200, GetV2UtilTerminalmanufacturersResponse401, GetV2UtilTerminalmodelsResponse200, GetV2UtilTerminalmodelsResponse401, GetV2UtilTerminalstatusResponse200, GetV2UtilTerminalstatusResponse401, PatchV2EstablishmentClientmerchantidInactiveBodyParam, PatchV2EstablishmentClientmerchantidInactiveMetadataParam, PatchV2EstablishmentClientmerchantidInactiveResponse201, PatchV2EstablishmentClientmerchantidInactiveResponse400, PatchV2EstablishmentClientmerchantidInactiveResponse401, PatchV2EstablishmentClientmerchantidInactiveResponse404, PostV2AffiliationAffiliationidTerminalBodyParam, PostV2AffiliationAffiliationidTerminalMetadataParam, PostV2AffiliationAffiliationidTerminalResponse201, PostV2AffiliationAffiliationidTerminalResponse400, PostV2AffiliationAffiliationidTerminalResponse401, PostV2AffiliationAffiliationidTerminalResponse404, PostV2AffiliationBodyParam, PostV2AffiliationResponse200, PostV2AffiliationResponse400, PostV2AffiliationResponse401, PostV2AffiliationResponse404, PostV2EstablishmentBodyParam, PostV2EstablishmentClientmerchantidBalanceBodyParam, PostV2EstablishmentClientmerchantidBalanceMetadataParam, PostV2EstablishmentClientmerchantidBalanceResponse201, PostV2EstablishmentClientmerchantidBalanceResponse400, PostV2EstablishmentClientmerchantidBalanceResponse401, PostV2EstablishmentClientmerchantidBalanceResponse404, PostV2EstablishmentClientmerchantidBankaccountBodyParam, PostV2EstablishmentClientmerchantidBankaccountMetadataParam, PostV2EstablishmentClientmerchantidBankaccountResponse201, PostV2EstablishmentClientmerchantidBankaccountResponse400, PostV2EstablishmentClientmerchantidBankaccountResponse401, PostV2EstablishmentClientmerchantidBankaccountResponse404, PostV2EstablishmentResponse201, PostV2EstablishmentResponse400, PostV2EstablishmentResponse401, PostV2GatewaySaleecommerceBodyParam, PostV2GatewaySaleecommerceResponse201, PostV2GatewaySaleecommerceResponse400, PostV2GatewaySaleecommerceResponse401, PostV2GatewaySaleecommerceResponse404, PostV2GatewaySaleposBodyParam, PostV2GatewaySaleposResponse201, PostV2GatewaySaleposResponse400, PostV2GatewaySaleposResponse401, PostV2GatewaySaleposResponse404, PostV2TraderepresentativeAssignMetadataParam, PostV2TraderepresentativeAssignResponse200, PostV2TraderepresentativeAssignResponse401, PostV2TraderepresentativeAssignResponse404, PostV2TraderepresentativeBodyParam, PostV2TraderepresentativeMetadataParam, PostV2TraderepresentativeResponse200, PostV2TraderepresentativeResponse401, PostV2TraderepresentativeResponse404, PostV2TraderepresentativeUnassignMetadataParam, PostV2TraderepresentativeUnassignResponse200, PostV2TraderepresentativeUnassignResponse401, PostV2TraderepresentativeUnassignResponse404, PutV2AffiliationAffiliationidBodyParam, PutV2AffiliationAffiliationidMetadataParam, PutV2AffiliationAffiliationidRatesBodyParam, PutV2AffiliationAffiliationidRatesMetadataParam, PutV2AffiliationAffiliationidRatesResponse200, PutV2AffiliationAffiliationidRatesResponse400, PutV2AffiliationAffiliationidRatesResponse401, PutV2AffiliationAffiliationidRatesResponse404, PutV2AffiliationAffiliationidResponse200, PutV2AffiliationAffiliationidResponse400, PutV2AffiliationAffiliationidResponse401, PutV2AffiliationAffiliationidResponse404, PutV2EstablishmentClientmerchantidBodyParam, PutV2EstablishmentClientmerchantidMetadataParam, PutV2EstablishmentClientmerchantidResponse201, PutV2EstablishmentClientmerchantidResponse400, PutV2EstablishmentClientmerchantidResponse401, PutV2EstablishmentClientmerchantidResponse404, PutV2SaleMetadataSaleidBodyParam, PutV2SaleMetadataSaleidMetadataParam, PutV2SaleMetadataSaleidResponse201, PutV2SaleMetadataSaleidResponse400, PutV2SaleMetadataSaleidResponse401, PutV2SaleMetadataSaleidResponse404, PutV2SaleStatusInstallmentidBodyParam, PutV2SaleStatusInstallmentidMetadataParam, PutV2SaleStatusInstallmentidResponse200, PutV2SaleStatusInstallmentidResponse400, PutV2SaleStatusInstallmentidResponse401, PutV2SaleStatusInstallmentidResponse404, PutV2TraderepresentativeBodyParam, PutV2TraderepresentativeInactivateMetadataParam, PutV2TraderepresentativeInactivateResponse200, PutV2TraderepresentativeInactivateResponse401, PutV2TraderepresentativeInactivateResponse404, PutV2TraderepresentativeResponse200, PutV2TraderepresentativeResponse401, PutV2TraderepresentativeResponse404 } from './types';
