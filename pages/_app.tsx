import { useEffect, useState, useMemo } from "react";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import AuthContext from "./../context/AuthContext";
import { getToken, removeToken, setToken } from "./../api/token";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./../styles/GlobalStyle";
import { theme } from "../styles/theme";

import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [auth, setAuth] = useState(undefined);
  const [reloadUser, setReloadUser] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = getToken();
    token ? setAuth({ token }) : setAuth(null);
    setReloadUser(false);
    token === null && router.push("/login");
  }, [reloadUser]);

  const login = (token: string) => {
    setToken(token);
    setAuh({ token });
  };

  const logout = () => {
    if (auth) {
      removeToken();
      setAuth(null);
      router.push("/login");
    }
  };

  const authData = useMemo(
    () => ({
      auth,
      login,
      logout,
      setReloadUser,
    }),
    [auth]
  );

  if (auth === undefined) return null;

  return (
    <AuthContext.Provider value={authData}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </AuthContext.Provider>
  );
}

export default MyApp;
