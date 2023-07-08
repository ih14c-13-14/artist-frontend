export type AuthContextType = {
  token: string | null;
  signIn: () => void;
  signOut: () => void;
};
