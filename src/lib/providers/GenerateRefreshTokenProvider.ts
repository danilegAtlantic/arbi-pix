import jwt from "jsonwebtoken";

export default (userId: string, email_address: string) => {

    const SECRET = String(process.env.AUTH_SCR_API_KEY);
    const expiresIn = process.env.AUTH_SCR_API_KEY_EXPIRE_IN_SEC;
    const issuer = process.env.AUTH_SCR_API_ISSUER;
    const audience = process.env.AUTH_SCR_API_AUDIENCE;


    const refreshToken = jwt.sign({ email_address }, SECRET, { subject: userId, issuer, audience, expiresIn });
    return { refreshToken, expiresIn };
};