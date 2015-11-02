import React, { Component } from 'react';
import classNames from 'classnames';

import Field from './field';

export default class Board extends Component {

  displayName: 'Board'

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate = (props) => {
    return this.props.fields !== props.fields;
  }

  render = () => {
    return(
      <div className='c-board'>
        <ul className='c-board__list c-inline-list'>
          {
            this.props.fields.map((row, index) => {
              return (
                  <li key={index} className={classNames({
                      'c-inline-list__item c-board__item': true,
                      'is-matched': row.get('isMatched')
                    })}>
                    <Field row={row.toJSON()}/>
                  </li>
                )
            })
          }
        </ul>
      </div>
    )
  }
}
