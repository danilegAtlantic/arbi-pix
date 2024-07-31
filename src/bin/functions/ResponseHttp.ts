import { Response } from 'express';

class ResponseHttp {

    public OK(response: Response, data: [] | any = [], error: [] | any = [], message: string = "Solicitação concluída!") {
        return response.status(200).send({ message, error, data, timestamp: new Date().toISOString(), version: "v5.0", links: [] }).end()
    };

    public created(response: Response, data: [] | any = [], error: [] | any = [], message: string = "Dados criados com sucesso!") {
        return response.status(201).send({ message, error, data, timestamp: new Date().toISOString(), version: "v5.0", links: [] }).end()
    };

    public noContent(response: Response, data: [] | any = [], error: [] | any = [], message: string = "Nenhum dado encontrado!") {
        return response.status(204).send({ message, error, data, timestamp: new Date().toISOString(), version: "v5.0", links: [] }).end()
    };

    public badRequest(response: Response, data: [] | any = [], error: [] | any = [], message: string = "Algo deu errado!") {
        return response.status(400).send({ message, error, data, timestamp: new Date().toISOString(), version: "v5.0", links: [] }).end()
    };

    public unauthorized(response: Response, data: [] | any = [], error: [] | any = [], message: string = "Solicitação não autorizada!") {
        return response.status(401).send({ message, error, data, timestamp: new Date().toISOString(), version: "v5.0", links: [] }).end()
    };

    public forbidden(response: Response, data: [] | any = [], error: [] | any = [], message: string = "Solicitação proibida!") {
        return response.status(403).send({ message, error, data, timestamp: new Date().toISOString(), version: "v5.0", links: [] }).end()
    };

    public notFound(response: Response, data: [] | any = [], error: [] | any = [], message: string = "Dados não encontrados!") {
        return response.status(404).send({ message, error, data, timestamp: new Date().toISOString(), version: "v5.0", links: [] }).end()
    };

    public conflict(response: Response, data: [] | any = [], error: [] | any = [], message: string = "Dados conflitantes!") {
        return response.status(409).send({ message, error, data, timestamp: new Date().toISOString(), version: "v5.0", links: [] }).end()
    };

    public internalServerError(response: Response, data: [] | any = [], error: [] | any = [], message: string = "Erro inesperado!") {
        return response.status(500).send({ message, error, data, timestamp: new Date().toISOString(), version: "v5.0", links: [] }).end()
    };

    public notImplemented(response: Response, data: [] | any = [], error: [] | any = [], message: string = "Funcionalidade não existe!") {
        return response.status(501).send({ message, error, data, timestamp: new Date().toISOString(), version: "v5.0", links: [] }).end()
    };

    public missingIdentification(response: Response, customMessage?: string) {
        return response.status(400).send({ message: customMessage || "Parâmetro vazio!", error: [], data: [], timestamp: new Date().toISOString(), version: "v5.0", links: [] }).end()
    };

    public emptyIdentificationData(response: Response) {
        return response.status(400).send({ message: "Parâmetro vazio!", error: [], data: [], timestamp: new Date().toISOString(), version: "v5.0", links: [] }).end()
    };

    public missingFields(response: Response, error: any) {
        return response.status(400).send({ message: "Alguns campos estão incorretos!", error, data: [], timestamp: new Date().toISOString(), version: "v5.0", links: [] }).end()
    };

};

export default new ResponseHttp();