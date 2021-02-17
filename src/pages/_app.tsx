import '../projects/stop-motion/stylesheets/stopMotion.css';
import '../projects/stop-motion/stylesheets/durationSelectorStyle.css';
import 'rc-slider/assets/index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from '../shared/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
