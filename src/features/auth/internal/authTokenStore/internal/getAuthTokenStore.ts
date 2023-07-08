import AuthTokenStoreLocalStorage from './AuthTokenStoreLocalStorage';
import type { GetAuthTokenStore } from './types';
import singleton from './utils/singleton';

const createAuthTokenStore = () => new AuthTokenStoreLocalStorage();
const getAuthTokenStore: GetAuthTokenStore = singleton(createAuthTokenStore);

export default getAuthTokenStore;

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it('returns identical object', () => {
    const first = getAuthTokenStore();
    const second = getAuthTokenStore();

    expect(first).toBe(second);
  });
}
