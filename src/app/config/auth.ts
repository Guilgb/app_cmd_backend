export default {
    secret: process.env.JWT_SECRET ?? 'be90a01ac3eccef8beb53625d6b57894',
    expiresIn: process.env.JWT_SECRET_EXPIRES ?? '1h',
};
  