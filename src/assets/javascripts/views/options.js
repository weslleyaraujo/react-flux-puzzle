import React from 'react';
import fieldsStore from '../store/fields-store';

export default class Field extends React.Component {

  constructor(props) {
    super(props);
  }


  static defaultProps = {
    row: {
      lines: []
    }
  }

  render = () => {
    return (
      <div>
        hello world
      </div>
    )
  }
}
