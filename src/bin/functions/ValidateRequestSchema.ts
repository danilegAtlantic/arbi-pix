import Ajv, { KeywordCxt, _ } from "ajv";

export default (params: object, data: object) => {

    const ajv = new Ajv({
        allErrors: true,
        strict: false,
        strictRequired: true
    });

    const schema = {
        type: "object",
        properties: params,
        additionalProperties: false,
    };

    ajv.addKeyword({
        keyword: 'isNotEmpty',
        schemaType: 'boolean',
        type: 'string',
        code(cxt: KeywordCxt) {
            const { data, schema } = cxt;
            if (schema) {
                cxt.fail(_`${data}.trim() === ''`);
            }
        },
        error: {
            message: 'string field must be non-empty'
        }
    });

    const requireAll = (schema: { type?: string; properties: any; additionalProperties?: boolean; }) => {
        return {
            ...schema,
            required: Object.keys(schema.properties)
        }
    };

    const validate = ajv.compile(requireAll(schema));
    validate(data);

    if (validate.errors) {
        return validate.errors.map(err => {
            const customErrors = {
                path: err.schemaPath.replace("/isNotEmpty", ""),
                param: err.instancePath,
                message: err.message
            };
            return customErrors;
        })
    };

    return validate.errors
};