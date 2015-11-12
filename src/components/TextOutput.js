var React = require("react");

module.exports = React.createClass({
  propTypes: {
    content: React.PropTypes.string.isRequired
  },
  getDefaultProps () {
    return {
      content: ""
    };
  },
  render () {
    return (
      <span className="text-output">{this.props.content}</span>
    );
  }
});
