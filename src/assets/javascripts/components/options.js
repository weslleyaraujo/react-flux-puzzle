import React, { Component } from 'react';

import Field from './field';
import matchActions from '../actions/match';
import gameStore from '../store/game-store';

export default class Options extends Component {

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

  onFieldClick = (row, event) => {
    event.preventDefault();
    matchActions.trial(row);
  }

  render = () => {
    console.log(this.state);
    return (
      <div className='c-options'>
      LEVEL: {this.state.data.level}
        <ul className='c-options__list c-inline-list'>
          { this.state.data.options.map((row) => {
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
      </div>
    )
  }
}
