import { withStyles } from '@material-ui/core'

import { LayerTsx } from './Layer';
import { styles } from './styles';

export const Layer = withStyles(styles, { withTheme: true })(LayerTsx);
