import React from 'react';

export default class Timer extends React.Component {

  constructor(props) {
    super(props);

    this.start();
  }

  state = {
    size: this.props.size
  }

  static defaultProps = {
    size: 1,
    speed: 300
  }

  start = () => {
    this.interval = setInterval(this.onInterval, this.props.speed);
  }

  onInterval = () => {
    this.setState({
      size: this.state.size + 0.5
    })
  }

  render = () => {
    return (
      <div className='c-timer'>
        <div className='c-timer__bar' style={{ width: this.state.size + '%' }}></div>
      </div>
    )
  }
}
