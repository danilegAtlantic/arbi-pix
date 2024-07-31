import { Request } from "express";

export default (request: Request, paramKeyId: string | string[]) => {

    if (request.params === undefined) return true;
    if (Object.values(request.params).find(el => el.includes(":"))) return true;
    if (Array.isArray(paramKeyId) && paramKeyId.length > 1) {
        if (Object.keys(request.params).sort().join(',') === paramKeyId.sort().join(',')) return false;
    };
    return !(Object.keys(request.params).indexOf(String(paramKeyId)) > -1);
};