import "../styles/globals.css";
import { UserContextProvider } from "../context/userContext";
function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}

export default MyApp;
