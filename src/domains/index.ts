import { withStyles } from '@material-ui/core'

import { AppTsx } from './App';
import { styles } from './styles';

export const App = withStyles(styles, { withTheme: true })(AppTsx);
