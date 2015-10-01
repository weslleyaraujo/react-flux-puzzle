import React from 'react';

import Field from './field';
import matchActions from '../actions/match';
import gameStore from '../store/game-store';

export default class Options extends React.Component {

  state = {
    fields: gameStore.data.fields,
    game: gameStore.data.game,
    options: gameStore.data.options,
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
      game: gameStore.data.game,
    });
  }

  onFieldClick = (row, event) => {
    event.preventDefault();
    matchActions.trial(row);
  }

  onButtonClick = (event) => {
    event.preventDefault();
    matchActions.start();
  }

  render = () => {
    return (
      <div className='c-options'>
        <ul className='c-options__list c-inline-list'>
          { this.state.options.map((row) => {
              return (
                  <li className='c-inline-list__item'>
                    <button className='c-options__button' onClick={this.onFieldClick.bind(this, row)}>
                      <Field row={row}/>
                    </button>
                  </li>
              )
            })
          }
        </ul>
        <button onClick={this.onButtonClick}>Start</button>
      </div>
    )
  }
}
