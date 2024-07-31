import bcrypt from 'bcryptjs';
const saltRounds = 10;

async function hash(value: string) {
    return await bcrypt.hash(value, saltRounds);
};

async function compare(value: string, hash: string) {
    return await bcrypt.compare(value, hash);
};

export { hash, compare };