import React from 'react';
import Field from './field';
import fieldsStore from '../store/fields-store';

export default class Board extends React.Component {

  state = {
    fields: fieldsStore.all
  }

  constructor(props) {
    super(props);
  }

  render = () => {
    return(
      <div className="c-board">
        <h2>CALLBACK CODE</h2>
        <ul className="c-board__list c-inline-list">
          {
            this.state.fields.map((row) => {
              return (<li className="c-inline-list__item"><Field row={row}/></li>)
            })
          }
        </ul>
      </div>
    )
  }
}
