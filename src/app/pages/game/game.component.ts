import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  public questionUsed = [];
  public currentQuestion:any;
  public score=0;
  constructor() {}
 
  ngOnInit(): void {
    this.currentQuestion = this.questions[0];
  }

  questions = [
    {
      id: 1,
      question: 'Who was the first president of the United States?',
      options: [
        'George Washington',
        'Abraham Lincoln',
        'Thomas Jefferson',
        'Alexander Hamilton',
      ],
      answer:'George Washington'
    },
    {
      id: 2,
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Rome'],
      answer:'Paris'
    },
    {
      id: 3,
      question: 'What is the largest country in the world?',
      options: ['Russia', 'Canada', 'China', 'USA'],
      answer:'China'
    },
    {
      id: 4,
      question: 'What is the smallest country in the world?',
      options: ['Vatican City', 'Monaco', 'San Marino', 'Liechtenstein'],
      answer:'Vatican City'
    },
  ];

  getNextQuestion(question: any) {
    if (this.questions.length == 0) {
      return null;
    }
    this.questions = this.questions.filter((x) => x.id != question.id);
    return this.questions[0];
  }
  submitAnswer(option:any){
    if(option == this.currentQuestion.answer){
      this.score++;
      return true
    }
  }
}
