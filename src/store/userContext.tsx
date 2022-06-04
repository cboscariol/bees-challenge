import { createContext, useState } from 'react';
import { UserContextProps, UserContextValue } from './interface';

export const UserContext = createContext<UserContextValue>({});

function UserProvider({ children }: UserContextProps) {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;
