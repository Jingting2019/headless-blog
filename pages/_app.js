
import ThemeProvider from 'providers/ThemeProvider';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faSun, faMoon, faBorderAll, faList } from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;
library.add(faSun, faMoon, faList, faBorderAll);

import '@fortawesome/fontawesome-svg-core/styles.css';
import 'styles/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'highlight.js/styles/darcula.css';
import "react-toggle/style.css"

const MyAppComponent = ({Component, pageProps}) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
);

MyAppComponent.displayName = 'MyAppComponent';

export default MyAppComponent;
