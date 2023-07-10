class JWTExpiredException extends Error {
  constructor() {
    super('Token expired');
  }
}

export default JWTExpiredException;
