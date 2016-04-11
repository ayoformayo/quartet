require('normalize.css/normalize.css');
require('styles/App.css');
import React from 'react';

class Therapist extends React.Component {
  isActiveTherapist() {
    return this.props.selectedTherapist.name === this.props.therapist.name;
  }

  submitTherapist() {
    const therapist = this.isActiveTherapist() ? {} : this.props.therapist;
    this.props.onSelectTherapist(therapist)
  }

  render() {
    const therapist = this.props.therapist;
    let backgroundStyle = {
      // background: 'url(' + therapist.image_url + ')'
    };
    let iconStyle = {};
    if(!this.isActiveTherapist()){ iconStyle['display'] = 'none' }
    // <div className="mdl-card__actions mdl-card--border">
    // <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
    // Select Therapist
    // </a>
    // </div>
    // <span style={iconStyle} className='therapist-icon'>
    // </span>
    return(
      <div style={backgroundStyle} onClick={this.submitTherapist.bind(this)} className="demo-card-square mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title mdl-card--expand">
          <div className="therapist-info">
            <h2 className="mdl-card__title-text therapist-title">{therapist.name} <i style={iconStyle} className="material-icons therapist-icon">check</i></h2>
          </div>
          <img className="therapist-image" src={therapist.image_url}/>
        </div>
      </div>
    )
  }
}

export default Therapist;
