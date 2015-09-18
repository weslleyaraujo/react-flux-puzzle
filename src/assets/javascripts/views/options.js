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
        <p>Choose to crack the code:</p>
        <ul className="c-options__list">
          { shuffle(fieldsStore.getAll()).map((row) => {
              return (<Field row={row}/>)
            })
          }
        </ul>
      </div>
    )
  }
}
