import type { AuthTokenStore, EventType, JWT, Listener } from './types';

const BEARER_TOKEN_KEY = 'userToken';
class AuthTokenStoreLocalStorage implements AuthTokenStore {
  private listeners: Record<EventType, ReadonlyArray<Listener>> = {
    change: [],
  };

  public get() {
    return localStorage.getItem(BEARER_TOKEN_KEY);
  }
  public set(token: JWT) {
    localStorage.setItem(BEARER_TOKEN_KEY, token);
    this.dispatch('change');
  }
  public flush() {
    localStorage.removeItem(BEARER_TOKEN_KEY);
    this.dispatch('change');
  }
  public addEventListener(type: EventType, listener: Listener) {
    this.listeners[type] = [...this.listeners[type], listener];
  }
  public removeEventListener(type: EventType, listener: Listener) {
    this.listeners[type] = this.listeners[type].filter(
      needle => needle !== listener
    );
  }
  private dispatch(type: EventType) {
    const value = this.get();
    for (const listener of this.listeners[type]) {
      setTimeout(() => listener(value), 0);
    }
  }
}

export default AuthTokenStoreLocalStorage;
