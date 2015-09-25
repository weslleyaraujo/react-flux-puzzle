import React from 'react';
import { shuffle } from 'underscore';

import Field from './field';
import matchActions from '../actions/match';
import fieldsStore from '../store/fields-store';

export default class Options extends React.Component {

  state = {
    fields: fieldsStore.all
  }

  constructor(props) {
    super(props);
  }

  onFieldClick = (row, event) => {
    event.preventDefault();
    matchActions.trial(row);
  }

  render = () => {
    return (
      <div className="c-options">
        <ul className="c-options__list c-inline-list">
          { shuffle(this.state.fields).map((row) => {
              return (
                  <li className="c-inline-list__item">
                    <button className="c-options__button" onClick={this.onFieldClick.bind(this, row)}>
                      <Field row={row}/>
                    </button>
                  </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
