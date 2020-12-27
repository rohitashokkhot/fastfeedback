//import "../styles/globals.css";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { AuthProvider } from "../utils/auth";
import theme from "../styles/theme";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
