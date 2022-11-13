import { AppProvider } from '../components/context/AppContext';
import { LoadProvider } from '../components/context/LoadContext';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <LoadProvider>
      <AppProvider>
        <Component {...pageProps} />;
      </AppProvider>
    </LoadProvider>
  );
}

export default MyApp;
