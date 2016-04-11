require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import QuestionContainer from './QuestionContainer.js'
import ChooseTherapist from './ChooseTherapist.js'
import Success from './Success.js'


class AppComponent extends React.Component {
  constructor(props) {
     super(props);
     this.state = { tally: 0, activeQuestionIndex: 0, selectedTherapist: {} };
   }

   setTherapist(therapist) {
     this.setState({selectedTherapist: therapist});
   }

   onAnswerSubmit(value){
     let tally = this.state.tally + value;
     let questionIndex = this.state.activeQuestionIndex + 1;
     this.setState({tally: tally, activeQuestionIndex: questionIndex});
   }

   therapistIsUnsubmitted() {
     return Object.keys(this.state.selectedTherapist).length === 0;
   }

   renderTherapists(){
     return <h1>HERE WE AER</h1>;
   }

   renderQuestion(text){
     return(
       <div className="mdl-grid">
         <div className="mdl-cell mdl-cell--12-col">Over the last two weeks, how often have you been bothered by any of the following problems?</div>
         <QuestionContainer onAnswerSubmit={this.onAnswerSubmit.bind(this)} question={text}/>
       </div>
     )
   }

 determineAppState() {
   const questions = [
     { text: 'Little interest or pleasure in doing things?' },
     { text: 'Feeling down, depressed, or hopeless?' },
     { text: 'Trouble falling or staying asleep, or sleeping too much?' },
     { text: 'Feeling tired or having little energy?' },
     { text: 'Poor appetite or overeating?' },
     { text: 'Feeling bad about yourself - or that you are a failure or have let yourself or your family down?' },
     { text: 'Trouble concentrating on things, such as reading the newspaper or watching television?' },
     { text: 'Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?' },
     { text: 'Thoughts that you would be better off dead, or of hurting yourself in some way?' }
   ]
   let questionIndex = this.state.activeQuestionIndex;
   let tally = this.state.tally;
   let questionsDone = questions.length <= questionIndex;
   console.log(this.state)

   if(questionsDone && tally >= 10 && !this.therapistIsUnsubmitted()){
     return <Success message={"Appointment Scheduled"}/>;
   } else if (questionsDone && tally >= 10 && this.therapistIsUnsubmitted()) {
     return <ChooseTherapist onTherapistSubmit={this.setTherapist.bind(this)}/>;
   } else if( questionsDone && tally < 10) {
     return <Success message={"Looks like you're all set!"}/>
   } else {
      return this.renderQuestion(questions[questionIndex].text)
   }
 }

  render() {
    let mainDisplay = this.determineAppState();

    return (
      <div className='mdl-layout mdl-js-layout mdl-layout--fixed-header'>
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">PHQ-9</span>
          </div>
        </header>
        { mainDisplay }
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
