import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'
import Select from '@material-ui/core/Select'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import * as React from 'react';

import '../styles/app.scss';
import { Layer } from './Layer';
import { allLayers } from './layers'

export interface IAppProps {
  classes: any;
}

export interface IState {
  currentType: { color: string; costFor10: number; };
  currentSize: number;
  isLoading: boolean;
  tort: Array<{ size: number; color: string; cost: number; }>;
}

export class AppTsx extends React.Component<IAppProps, IState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      currentSize: 30,
      currentType: allLayers[0].value,
      isLoading: true,
      tort: [],
    };
  }

  public render() {
    const { classes } = this.props;
    const { tort } = this.state;
    return (
      <div className={ classes.root }>
        <AppBar position='static' color='default'>
          <Toolbar>
            <Typography variant='h6' color='inherit'>
              Торт
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={ classes.paper }>
          <Grid container spacing={ 24 }>
            <Grid item xs={ 12 }>
              <Paper className={ classes.paper }>
                <Button onClick={ this.addLayer }>
                  Добавить слой!
                </Button>
                <FormControl className={ classes.formControl }>
                  <InputLabel htmlFor='age-simple'>Выбери слой</InputLabel>
                  <Select
                    value={ this.state.currentType.color }
                    onChange={ this.handleChange }
                    inputProps={ {
                      id: 'layer-id',
                      name: 'currentType',
                    } }
                  >
                    <MenuItem value=''>
                      <em>None</em>
                    </MenuItem>
                    { allLayers.map(layer => (
                      <MenuItem value={ layer.value.color }>{ layer.label }</MenuItem>
                    )) }
                  </Select>
                </FormControl>
                <FormControl className={ classes.formControl }>
                  <InputLabel htmlFor='age-simple'>Выбери размер</InputLabel>
                  <Select
                    value={ this.state.currentSize }
                    onChange={ this.handleChange }
                    inputProps={ {
                      id: 'size-id',
                      name: 'currentSize',
                    } }
                  >
                    <MenuItem value=''>
                      <em>None</em>
                    </MenuItem>
                    { [30, 50, 60, 80].map(layer => (
                      <MenuItem value={ layer }>{ layer }</MenuItem>
                    )) }
                  </Select>
                </FormControl>
                <Grid item xs={ 8 } className={classes.tort}>
                  <Button>
                    { tort.reduce((res, cur) => res + cur.cost, 0) }BTC
                  </Button>
                  { this.state.tort.map((layer, index) => (
                    <Layer color={ layer.color } size={ layer.size } onClick={ this.removeLayer(index) } />
                  )) }
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }

  private handleChange = (event: React.ChangeEvent<{ value: string; name: string; }>) => {
    let value: string | { color: string; costFor10: number } | undefined = event.target.value;
    if (event.target.name === 'currentType') {
      const layer = allLayers.find(el => el.value.color === value);
      value = layer && layer.value;
    }
    if (!value) {
      return;
    }
    this.setState({ [event.target.name]: value } as any);
  };

  private addLayer = () => {
    if (this.state.tort.length >= 8) {
      return;
    }
    const tort = [{
      color: this.state.currentType.color,
      cost: this.state.currentType.costFor10 / 10 * this.state.currentSize,
      size: this.state.currentSize,
    }, ...this.state.tort];
    this.setState({ tort });
  };

  private removeLayer = (index: number) => () => {
    const tort = [...this.state.tort.slice(0, index), ...this.state.tort.slice(index + 1)];
    this.setState({ tort });
  }
}
