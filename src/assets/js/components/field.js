import React, { Component } from 'react';
import classNames from 'classnames';
import drawSquare from '../helpers/draw-square';

export default class Field extends Component {

  displayName: 'Field'

  constructor(props) {
    super(props);
  }

  static defaultProps = {
    pixel: 10,
    colors: {
      active: '#92E56C',
      inactive: '#1D3507',
    },
    row: {
      lines: []
    }
  }

  shouldComponentUpdate = (props) => {
    return this.props.row !== props.row;
  }

  componentDidMount() {
    const canvas = this.refs.container;
    const {pixel, row, colors} = this.props;

    drawSquare({pixel, canvas, row, colors});
  }

  render = () => {
    const { pixel, row } = this.props;
    const size = pixel * row.get('lines').size;

    return (
      <div className='c-field'>
        <canvas ref='container' width={size} height={size}></canvas>
      </div>
    );
  }
}
