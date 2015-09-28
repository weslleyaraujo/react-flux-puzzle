import React from 'react';

export default class Timer extends React.Component {

  constructor(props) {
    super(props);
  }

  state = {
    size: this.props.size
  }

  static defaultProps = {
    size: 1
  }

  render = () => {
    return (
      <div className='c-timer'>
        <div className='c-timer__bar' style={{ width: this.state.size + '%' }}></div>
      </div>
    )
  }
}
