import React, { Component } from 'react';
import classNames from 'classnames';

export default class Field extends Component {

  displayName: 'Field'

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
        <tbody>
        { this.props.row.lines.map((row, i) => {
          return (<tr key={i} className='c-field__line'>
            {
              row.map((line, x) => {
                return (<td
                  key={x}
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
      </tbody>
    </table>
    )
  }
}
