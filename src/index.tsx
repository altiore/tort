import { MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './domains';
import registerServiceWorker from './registerServiceWorker';
import theme from './styles/materialTheme';

ReactDOM.render(
  <MuiThemeProvider theme={ theme }>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
