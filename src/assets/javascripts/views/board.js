import React, { Component } from 'react';
import cx from 'react/lib/cx';

import Field from './field';
import gameStore from '../store/game-store';

export default class Board extends Component {

  state = {
    fields: gameStore.data.fields,
    game: gameStore.data.game,
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
      fields: gameStore.data.fields,
      game: gameStore.data.game,
    });
  }

  render = () => {
    return(
      <div className='c-board'>
        <h2>CALLBACK CODE</h2>
        { this.state.game.lose && "you lose it :p" }
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

        timer:
        <p> { this.state.game.timer.minutes }:{ this.state.game.timer.seconds } </p>
      </div>
    )
  }
}
