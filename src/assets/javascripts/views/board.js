import React from 'react';
import Field from './field';
import fieldsStore from '../store/fields-store';

export default class Board extends React.Component {

  constructor(props) {
    super(props);
  }

  render = () => {
    return(
      <ul className="c-board">
        {
          fieldsStore.getAll().map((row) => {
            return (<Field row={row}/>)
          })
        }
      </ul>
    )
  }
}
