var React = require("react");

module.exports = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    uponEntry: React.PropTypes.func.isRequired
  },
  getDefaultProps () {
    return {
      label: "Label"
    };
  },
  getInitialState () {
    return {
      value: ""
    };
  },  
  handleChange (event) {
    this.setState({value: event.target.value});
    this.props.uponEntry({
      id: event.target.id,
      value: event.target.value
    });
  },
  render () {
    var value = this.state.value;

    return (
      <div className="text-input">
        <label htmlFor={this.props.id} className="text-input__label">{this.props.label}</label>
        <input id={this.props.id} className={"text-input__input text-input__input--" + this.props.id} type="text" onChange={this.handleChange} value={value} />
      </div>
    );
  }
});
