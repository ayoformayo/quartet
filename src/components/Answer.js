require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class Answer extends React.Component {

  constructor(props){
    super(props)
  }

  isActive(){
    return this.props.activeAnswer === this.props.answerValue;
  }

  render(){
    let style = {};
    if(!this.isActive()){ style['display'] = 'none' }
    return(
      <div onClick={this.props.onAnswerSubmit.bind(this, this.props.answerValue)} className="mdl-cell mdl-cell--6-col mdl-cell--2-col-phone">
        <div className="mdl-card mdl-cell--6-col mdl-cell--12-col-phone">
          <div className="mdl-card__title">
            <h2 className="mdl-card__title-text answer-text">{ this.props.answer }</h2>
            <i style={style} className="material-icons answer-icon">check</i>
          </div>
        </div>
      </div>
    )
  }
}

export default Answer;
