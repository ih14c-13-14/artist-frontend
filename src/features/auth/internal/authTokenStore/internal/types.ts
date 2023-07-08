import type { JWT } from '../../jwt';
export type { JWT };

export type EventType = 'change';
export type Listener = (token: JWT | null) => void | Promise<void>;

export interface AuthTokenStore {
  get(): JWT | null;
  set(token: JWT): void;
  flush(): void;
  addEventListener: (type: EventType, listener: Listener) => void;
  removeEventListener: (type: EventType, listener: Listener) => void;
}

export type GetAuthTokenStore = () => AuthTokenStore;
