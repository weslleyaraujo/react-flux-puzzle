import React from 'react';
import { shuffle } from 'lodash';

import Field from './field';
import fieldsStore from '../store/fields-store';

export default class Options extends React.Component {

  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <div className="c-options">
        <ul className="c-options__list c-inline-list">
          { shuffle(fieldsStore.getAll()).map((row) => {
              return (
                  <li className="c-inline-list__item">
                    <button className="c-options__button">
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
