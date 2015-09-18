import React from 'react';
import cx from 'react/lib/cx';

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
      <li className="c-field">
        <table>
          <tbody>
            { this.props.row.lines.map((row) => {
              return (<tr className="c-field__line">
                {
                  row.map((line) => {
                    return (<td
                      className={cx({
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
    </li>
    )
  }
}
