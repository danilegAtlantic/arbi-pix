import { Request } from "express";
import ValidateSchemaAjv from "./ValidateSchemaAjv";

export function ValidateHttpBodyRequest(request: Request, json_schema: object) {
    const isInvalidSchema = ValidateSchemaAjv(json_schema, request.body);
    return isInvalidSchema;
};