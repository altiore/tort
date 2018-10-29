import { Theme } from '@material-ui/core';

export const styles = (theme: Theme): any => ({
  center: {
    display: 'flex',
    flexGrow: 1,
    margin: '0 auto',
    maxWidth: 1000,
    minHeight: 500,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  paper: {
    color: theme.palette.text.secondary,
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
  },
  root: {
    flexGrow: 1,
  },
  tort: {
    alignItems: 'center',
    display: 'flex',
    flexFlow: 'column nowrap',
    flexGrow: 1,
  },
});