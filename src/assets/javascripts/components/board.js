import React, { Component } from 'react';
import classNames from 'classnames';

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
        { this.state.game.status.lose && "GAME OVER!" }
        <ul className='c-board__list c-inline-list'>
          {
            this.state.fields.map((row) => {
              return (
                  <li className={classNames({
                      'c-inline-list__item c-board__item': true,
                      'is-matched': row.isMatched
                    })}>
                    <Field row={row}/>
                  </li>
                )
            })
          }
        </ul>
        <p> { this.state.game.timer.minutes }:{ this.state.game.timer.seconds }:{ this.state.game.timer.milliseconds } </p>
      </div>
    )
  }
}
