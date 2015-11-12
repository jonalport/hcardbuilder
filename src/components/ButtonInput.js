var React = require("react");

module.exports = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired
  },
  getDefaultProps () {
    return {
      label: "Label"
    };
  },
  handleClick (event) {
    event.preventDefault();
    event.stopPropagation();
  },
  render () {
    return (
      <div className="button-input">
        <button id={this.props.id} className={"button-input__button button-input__button--" + this.props.id} onClick={this.handleClick}>{this.props.label}</button>
      </div>
    );
  }
});
