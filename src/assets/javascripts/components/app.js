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

  render = () => {
    return(
      <div>
        <h2 class="description"> {this.state.description} </h2>
        <br />

        <form onSubmit={this.onSubmit}>
          <label>Write something: </label>
          <input type="text" name="some-name" ref="description"/> <br />
          <button>Change</button>
        </form>

      </div>
    )
  }
}
