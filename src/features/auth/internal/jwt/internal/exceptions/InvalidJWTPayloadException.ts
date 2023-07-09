class InvalidJWTPayloadException extends Error {
  public constructor(payload: unknown) {
    super(`invalid jwt payload: ${JSON.stringify(payload)}`);
  }
}

export default InvalidJWTPayloadException;
