import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import Router from 'next/router';


interface User {
  // Define your user properties here, for example:
  id: number;
  name: string;
  email: string;
}

interface AuthContextValue {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  loading: boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = localStorage.getItem('token');
      if (token) {
        console.log("Got a token in the cookies, let's see if it is valid");
        // api.defaults.headers.Authorization = `Bearer ${token}`;
        // try {
        //   const { data: user } = await api.get<User>('users/me');
        //   if (user) setUser(user);
        // } catch (error) {
        //   console.error('Error loading user:', error);
        // }
      }
      setLoading(false);
    }
    loadUserFromCookies();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email:email,password:password}),
  });
  console.log(response)
      // if (token) {
      //   console.log("Got token");
      //   localStorage.setItem('token', token);
      //   api.defaults.headers.Authorization = `Bearer ${token.token}`;
      //   try {
      //     const { data: user } = await api.get<User>('users/me');
      //     setUser(user);
      //     console.log("Got user", user);
      //   } catch (error) {
      //     console.error('Error loading user:', error);
      //   }
      // }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null);
    // delete api.defaults.headers.Authorization;
    Router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
