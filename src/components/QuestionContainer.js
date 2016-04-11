require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Answer from './answer.js';

class QuestionContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {activeAnswer: null};
  }

  setActiveAnswer(answerValue){
    let answer = answerValue === this.state.activeAnswer ? null : answerValue;
    this.setState({activeAnswer: answer});
  }

  questionIsUnanswered(){
    return this.state.activeAnswer === null;
  }

  onSubmit(){
    this.props.onAnswerSubmit(this.state.activeAnswer);
    this.setState({activeAnswer: null});
  }

  render(){
    const answers = [
      'Not at all',
      'Several days',
      'More than half the days in the week',
      'Nearly every day'
    ];

    let renderedAnswers = answers.map((answer, i) =>  <Answer answer={answer} key={i} activeAnswer={this.state.activeAnswer} answerValue={i} onAnswerSubmit={this.setActiveAnswer.bind(this)} />);

    return(
      <div className="mdl-cell mdl-cell--12-col">
        <div className="mdl-cell mdl-cell--12-col question-container">{this.props.question}</div>
        <div className="mdl-grid">
          { renderedAnswers }
          <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-phone button-container">
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" disabled={this.questionIsUnanswered()} onClick={this.onSubmit.bind(this)}>Submit Answer</button>
          </div>
        </div>
      </div>
    )
  }
}

export default QuestionContainer;
