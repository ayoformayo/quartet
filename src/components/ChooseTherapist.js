require('normalize.css/normalize.css');
require('styles/App.css');
import React from 'react';
import Therapist from './Therapist';

class ChooseTherapist extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedTherapist: {} };
  }

  selectTherapist(therapist) {
    this.setState({selectedTherapist: therapist});
  }

  renderTherapists() {
    return this.therapists().map((therapist, i) => <Therapist selectedTherapist={this.state.selectedTherapist} onSelectTherapist={this.selectTherapist.bind(this)} therapist={therapist} key={i}/>);
  }

  therapistIsUnselected() {
    return Object.keys(this.state.selectedTherapist).length === 0;
  }

  therapists() {
    return [
      {name: 'Sigmund Freud', image_url: '../images/freud.jpg'},
      {name: 'Carl Jung', image_url: '../images/jung.jpg'},
      {name: 'Hannibal Lecter', image_url: '../images/hannibal.jpg'}
    ]
  }

  render(){
    let therapists = this.renderTherapists();
    return(
      <div className="mdl-cell mdl-cell--12-col">
        <div className="mdl-grid">
          {therapists}
          <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" disabled={this.therapistIsUnselected()} onClick={this.props.onTherapistSubmit.bind(this, this.state.selectedTherapist)}>Confirm Therapist</button>
        </div>
      </div>
    )
  }
}

export default ChooseTherapist;
