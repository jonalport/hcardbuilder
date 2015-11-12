var React = require("react");
var avatar = require("../../assets/avatar.png");

module.exports = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    phone: React.PropTypes.string.isRequired,
    address: React.PropTypes.string.isRequired,
    city: React.PropTypes.string.isRequired,
    state: React.PropTypes.string.isRequired,
    postcode: React.PropTypes.string.isRequired,
    country: React.PropTypes.string.isRequired
  },
  getDefaultProps () {
    return {
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      postcode: "",
      country: ""
    };
  },
  render () {
    return (
      <div className="hcard h-card">
        <div className="hcard__header">
          <span className="hcard__field hcard__field--name p-name">{this.props.name}</span>
          <img className="hcard__field hcard__field--photo u-photo" src={avatar} alt={this.props.name} />
        </div>
        <div className="hcard__body">
          <div className="hcard__row">
            <span className="hcard__field-label">Email</span>
            <span className="hcard__field hcard__field--email u-email">{this.props.email}</span>
          </div>
          <div className="hcard__row">
            <span className="hcard__field-label">Phone</span>
            <span className="hcard__field hcard__field--phone p-tel">{this.props.phone}</span>
          </div>
          <div className="hcard__row">
            <span className="hcard__field-label">Address</span>
            <span className="hcard__field hcard__field--street-address p-street-address">{this.props.address}</span>
          </div>
          <div className="hcard__row">
            <span className="hcard__field-label"></span>
            <span className="hcard__field hcard__field--city p-street-locality">{this.props.city}</span> <span className="hcard__field hcard__field--state p-street-region">{this.props.state}</span>
          </div>
          <div className="hcard__row hcard__row--cols">
            <div className="hcard__col">
              <span className="hcard__field-label">Postcode</span><span className="hcard__field hcard__field--postcode p-postal-code">{this.props.postcode}</span>
            </div>
            <div className="hcard__col">
              <span className="hcard__field-label">Country</span><span className="hcard__field hcard__field--country p-country-name">{this.props.country}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
