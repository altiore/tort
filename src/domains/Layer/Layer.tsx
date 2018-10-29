import * as React from 'react';

export interface ILayerProps {
  classes: any;
  color: string;
  size: number;
  onClick: any;
}

export class LayerTsx extends React.Component<ILayerProps, {}> {

  public render() {
    const { onClick, classes, color, size } = this.props;
    return (
      <div
        onClick={onClick}
        className={classes.root}
        style={{ backgroundColor: color, height: size, }}
      />
    );
  }
}
