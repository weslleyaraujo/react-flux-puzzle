import React from 'react';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  static defaultProps = {
    description: 'This is a default prop value.',
  }

  state = {
    description: this.props.description
  }

  onSubmit = (event) => {
    event.preventDefault();
    var description = this.getDescriptionValue();
    this.setState({
      description: description ? description : this.props.description
    });
  }

  getDescriptionValue = () => {
    return this.refs.description.getDOMNode().value;
  }

  generate = () => {

  }

  render = () => {
    return(
      <table className="c-board">
        <tbody>
          {
            Array.apply(null, { length: 10 }).map(() => {
              return (
                <tr className="c-board__line">
                  {
                    Array.apply(null, { length: 10 }).map(() => {
                      return <td className="c-board__item"></td>
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
