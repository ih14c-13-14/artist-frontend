import isNil from '@/utils/isNil';
import * as jose from 'jose';

const generateSampleJWT = async (userId: string, expiresIn: number) => {
  const privateKey = new Uint8Array(32);
  return await new jose.SignJWT({ 'urn:artistdev:claim': true })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setSubject(userId)
    .setIssuer('urn:artistdev:issuer')
    .setAudience('urn:artistdev:audience')
    .setExpirationTime(`${expiresIn}s`)
    .sign(privateKey);
};

export const loginHandler = () => {
  return {
    login: async ({ id, password }: { id: string; password: string }) => {
      // return jwt token
      if (isNil(id) || isNil(password)) {
        return {
          status: 400,
          body: {
            message: 'id or password is empty',
          },
        };
      }

      const devUserId = id;
      const expiresIn = 7200;
      const jwt = await generateSampleJWT(devUserId, expiresIn);
      return {
        status: 200,
        body: {
          token: jwt,
        },
      };
    },
  };
};
