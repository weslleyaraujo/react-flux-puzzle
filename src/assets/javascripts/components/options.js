import React, { Component } from 'react';

import Field from './field';
import matchActions from '../actions/match';

export default class Options extends Component {

  displayName: 'Options'


  constructor(props) {
    super(props);
  }

  onFieldClick = (row, event) => {
    event.preventDefault();
    matchActions.trial(row);
  }

  render = () => {
    return (
      <div className='c-options'>
        <ul className='c-options__list c-inline-list'>
          { this.props.options.map((row, i) => {
              return (
                  <li key={i} className='c-inline-list__item'>
                    <button className='c-options__button' onClick={this.onFieldClick.bind(this, row.toJSON())}>
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
