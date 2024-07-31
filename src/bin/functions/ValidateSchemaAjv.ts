import Ajv, { KeywordCxt, _ } from "ajv";

export default function <T>(params: object, data: T) {
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
            message: 'campo de string deve ser não vazio'
        }
    });

    const requireAll = (schema: { type?: string; properties: any; additionalProperties?: boolean; }) => {
        return {
            ...schema,
            required: Object.keys(schema.properties)
        }
    };

    const validate = ajv.compile(requireAll(schema));
    const valid = validate(data);
    if (!valid) {
        if (validate.errors) {
            validate.errors.forEach(error => {
                console.log(error)
                if (error.keyword === 'pattern' && error.params.pattern === '[0-9]{4}-[0-9]{2}-[0-9]{2}$') {
                    error.message = 'O formato do campo deve estar em YYYY-MM-DD';
                    console.log("oi")
                }
                return validate.errors
            });
        }
    }
    return validate.errors
};