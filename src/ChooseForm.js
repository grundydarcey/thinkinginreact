import React from 'react'
import ChooseOptions from './ChooseOptions'
import Choices from './Choices'

export default class ChooseForm extends React.Component {
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <ChooseOptions
          handleUpdate={this.props.handleUpdate}
          store={Choices}
          selected={this.props.selected}
        />
        </form>
    );
  }
}