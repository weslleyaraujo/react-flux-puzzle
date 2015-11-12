import React, { Component } from 'react';
import classNames from 'classnames';

class ProgressBar extends Component {

  displayName: 'ProgressBar'

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='c-progress-bar'>
        <div className={classNames({
          'c-progress-bar__bar': true,
          'is-ending': this.props.isEnding
        })} style={{ width: this.props.percentage + '%' }}></div>
      </div>
    )
  }
}

export default ProgressBar;
