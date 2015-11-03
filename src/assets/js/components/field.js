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

  shouldComponentUpdate = (props) => {
    return this.props.row !== props.row;
  }

  render = () => {
    return (
      <table className='c-field'>
        <tbody>
        { this.props.row.get('lines').map((row, i) => {
          return (<tr key={i} className='c-field__line'>
            {
              row.map((line, x) => {
                return (<td
                  key={x}
                  className={classNames({
                    'c-field__item': true,
                    'is-active': line.get('active')
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
