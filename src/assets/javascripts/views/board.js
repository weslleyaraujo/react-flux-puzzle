import React from 'react';
import cx from 'react/lib/cx';

import Field from './field';
import gameStore from '../store/game-store';

export default class Board extends React.Component {

  state = {
    fields: gameStore.all
  }

  constructor(props) {
    super(props);
    this.bind();
  }

  bind = () => {
    gameStore.addChangeListener(this.onChange);
  }

  onChange = () => {
    this.setState({
      fields: gameStore.all
    })
  }

  render = () => {
    return(
      <div className='c-board'>
        <h2>CALLBACK CODE</h2>
        <ul className='c-board__list c-inline-list'>
          {
            this.state.fields.map((row) => {
              return (
                  <li className={cx({
                      'c-inline-list__item c-board__item': true,
                      'is-matched': row.isMatched
                    })}>
                    <Field row={row}/>
                  </li>
                )
            })
          }
        </ul>
      </div>
    )
  }
}
