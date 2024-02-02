import { createContext, ReactNode, useContext, useMemo, useState } from "react";

interface AuthContextData {
  user: LoginDataReturn;
  setUser: React.Dispatch<React.SetStateAction<LoginDataReturn>>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const [user, setUser] = useState<LoginDataReturn>();

  const contextValue = useMemo(() => {
    return { user, setUser };
  }, [user]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
