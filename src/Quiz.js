import React, { Component } from 'react';
import QuizOptions from './QuizOptions';

class Quiz extends Component {
  constructor(props) {
    super(props);

    let riddle = this.playGame();

    this.state = {riddle}
  }

  randomNumber(min,max) {
      return Math.floor(Math.random() * (max-min+1)) + min;
  }
  playGame() {
      let field1 = this.randomNumber(20, 50);
      let field2 = this.randomNumber(20, 50);
      let answer = field1 + field2;

      let riddle = {
        resultArray: [8,9,10,11],
        field1,
        field2,
        answer
      };

      return riddle;
  }

  renderOptions() {
    return (
      <div className='options'>
        {this.state.riddle.resultArray.map((option, i) =>
          <QuizOptions option={option} key={i} />
        )}
      </div>
    );
  }

  render() {
    return (
      <div className='quiz'>
        <div className='quiz-content'>
          <p className='question'>What is the sum of <span className='text-info'>{this.state.riddle.field1}</span> and <span className='text-info'>{this.state.riddle.field2}</span>?</p> 
          {this.renderOptions()}
          <div className='play-again'>
            <a className='button'>Play again!</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Quiz;