import React, { Component } from 'react';
import classNames from 'classnames';

export default class Field extends Component {

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
      <table className='c-field'>
        { this.props.row.lines.map((row) => {
          return (<tr className='c-field__line'>
            {
              row.map((line) => {
                return (<td
                  className={classNames({
                    'c-field__item': true,
                    'is-active': line.active
                  })}
                >
                </td>)
              })
            }
          </tr>)
      }) }
    </table>
    )
  }
}
