import { Request } from "express";
import ValidateRequestSchema from "./ValidateRequestSchema";

export default (jsonSchema: any, request: Request) => {
    const isInvalidSchema = ValidateRequestSchema(jsonSchema, request.body);
    return isInvalidSchema;
};