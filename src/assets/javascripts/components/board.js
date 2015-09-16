import React from 'react';
import Field from './field';

export default class Board extends React.Component {

  constructor(props) {
    super(props);
  }

  render = () => {
    return(
      <div className="c-board">
        {
          Array.apply(null, { length: 5 }).map(() => {
            return (<Field />)
          })
        }
      </div>
    )
  }
}
