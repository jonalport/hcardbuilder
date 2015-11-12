var React = require("react");
var TextInput = require("./TextInput");
var ImageInput = require("./ImageInput");
var ButtonInput = require("./ButtonInput");
var HCard = require("./HCard");

module.exports = React.createClass({
  getInitialState () {
    return {
      givenName: "",
      surname: "",
      email: "",
      phone: "",
      houseName: "",
      street: "",
      suburb: "",
      state: "",
      postcode: "",
      country: ""
    };
  },    
  handleEntry (data) {
    var state = {};
    state[data.id] = data.value;
    this.setState(state);
  },
  render () {
    var name = this.state.givenName + " " + this.state.surname,
        email = this.state.email,
        phone = this.state.phone,
        address = this.state.houseName + " " + this.state.street,
        city = this.state.suburb,
        state = this.state.state,
        postcode = this.state.postcode,
        country = this.state.country;

    return (
      <div className="hcard-builder">
        <section className="hcard-builder__inputs">
          <div className="hcard-builder__container">
            <h1 className="hcard-builder__heading">hCard Builder</h1>
            <form>
              <h2 className="hcard-builder__subhead">Personal details</h2>
              <div className="form-row">
                <TextInput uponEntry={this.handleEntry} id="givenName" label="Given name" />
                <TextInput uponEntry={this.handleEntry} id="surname" label="Surnames" />
              </div>
              <div className="form-row">
                <TextInput uponEntry={this.handleEntry} id="email" label="Email" />
                <TextInput uponEntry={this.handleEntry} id="phone" label="Phone" />
              </div>
              <h2 className="hcard-builder__subhead">Address</h2>
              <div className="form-row">
                <TextInput uponEntry={this.handleEntry} id="houseName" label="House name or #" />
                <TextInput uponEntry={this.handleEntry} id="street" label="Street" />
              </div>
              <div className="form-row">
                <TextInput uponEntry={this.handleEntry} id="suburb" label="Suburb" />
                <TextInput uponEntry={this.handleEntry} id="state" label="State" />
              </div>
              <div className="form-row">
                <TextInput uponEntry={this.handleEntry} id="postcode" label="Postcode" />
                <TextInput uponEntry={this.handleEntry} id="country" label="Country" />
              </div>
              <div className="form-row">
                <ImageInput id="upload" label="Upload Avatar" />
                <ButtonInput id="create" label="Create hCard" />
              </div>
            </form>
          </div>
        </section>
        <section className="hcard-builder__preview">
          <div className="hcard-builder__container hcard-builder__container--preview">
            <h2 className="hcard-builder__subhead--preview">hCard preview</h2>
            <HCard name={name} email={email} phone={phone} address={address} city={city} state={state} postcode={postcode} country={country} />
          </div>
        </section>
      </div>
    );
  }
});
