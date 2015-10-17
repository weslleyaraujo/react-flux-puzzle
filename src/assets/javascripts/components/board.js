import React, { Component } from 'react';
import classNames from 'classnames';

import Field from './field';
import gameStore from '../store/game-store';
import fieldsStore from '../store/fields';
import userStore from '../store/user';

export default class Board extends Component {

  displayName: 'Board'

  state = {
    data: gameStore.data,
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
      data: gameStore.data,
    });
  }

  render = () => {
    return(
      <div className='c-board'>
        { this.state.data.status.lose && "GAME OVER!" }
        <ul className='c-board__list c-inline-list'>
          {
            this.state.data.fields.map((row, index) => {
              return (
                  <li key={index} className={classNames({
                      'c-inline-list__item c-board__item': true,
                      'is-matched': row.isMatched
                    })}>
                    <Field row={row}/>
                  </li>
                )
            })
          }
        </ul>
        <p> { this.state.data.timer.minutes }:{ this.state.data.timer.seconds }:{ this.state.data.timer.milliseconds } </p>
      </div>
    )
  }
}
