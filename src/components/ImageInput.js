var React = require("react");
var $ = require("jquery");

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
  handleFileSelected (evt) {
    var files,
        rFilter = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i,
        fr,
        file;

    evt.stopPropagation();
    evt.preventDefault();

    if(evt.dataTransfer) {
      files = evt.dataTransfer.files;
    } else {
      files = evt.target.files;
    }

    file = files[0];

    if(!rFilter.test(file.type)) { 
      alert("Please select a valid image.");
      return;
    }

    fr = new FileReader();

    fr.onload = function() {
      // self.elements.sourceImage.src = fr.result;
      $(".hcard__field--photo")[0].src = fr.result;
    };

    fr.readAsDataURL(file);
  },
  handleClick (event) {
    $(event.target).siblings("input[type=file]").trigger("click");
    event.preventDefault();
    event.stopPropagation();
    
    // Send image date to owner via callback passed in via prop
    // this.props.uponEntry({
    //   id: event.target.id,
    //   value: event.target.value
    // });
  },
  render () {
    return (
      <div className="button-input">
        <button id={this.props.id} className={"button-input__button button-input__button--" + this.props.id} onClick={this.handleClick}>{this.props.label}</button>
        <input className="button-input__file-input" type="file" onChange={this.handleFileSelected} />
      </div>
    );
  }
});
