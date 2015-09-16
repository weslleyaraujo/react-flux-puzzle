import React from 'react';
import cx from 'react/lib/cx';
import flipCoin from '../helpers/flip-coin';

export default class Field extends React.Component {

  constructor(props) {
    super(props);
  }

  render = () => {
    return(
      <table className="c-field">
        <tbody>
          {
            Array.apply(null, { length: 5 }).map(() => {

              return (
                <tr className="c-field__line">
                  {
                    Array.apply(null, { length: 5 }).map(() => {
                      return <td
                        className={cx({
                          'c-field__item': true,
                          'is-active': flipCoin(),
                        })}>
                      </td>
                    })
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }
}
