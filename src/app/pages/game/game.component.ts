import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  public questionUsed = [];
  public currentQuestion:any;
  public selectedOption:any=null;
  public score=0;
  constructor(private elRef:ElementRef) {

  }
 
  ngOnInit(): void {
    this.currentQuestion = this.questions[0];
  }
  questions = [
    {
      id: 1,
      question: 'Who was the first president of the United States?',
      options: [
        {
          description: 'George Washington',
          correct:true
        },
        {
          description: 'Alexander Hamilton',
          correct:false
        },
        {
          description:  'Thomas Jefferson',
          correct:false
        },
        {
          description: 'Abraham Lincoln',
          correct:false
        }
      ],
    },
    {
      id: 2,
      question: 'What is the capital of France?',
      options: [
        {
          description: 'Paris',
          correct:true
        },
        {
          description: 'London',
          correct:false
        },
        {
          description: 'Berlin',
          correct:false
        },
        {
          description: 'Rome',
          correct:false
        },
      ],
    },
    {
      id: 3,
      question: 'What is the largest country in the world?',
      options: [
        {
          description: 'Rusia',
          correct:true
        },
 
        {
          description: 'China',
          correct:false
        },
 
        {
          description: 'Canada',
          correct:false
        },
 
        {
          description: 'USA',
          correct:false
        }
      ]
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
    const optionButton = this.elRef.nativeElement.querySelector(`${option.id}`);
    optionButton.
    this.selectedOption = option;
    if(option.correct){
      this.score++;
    }
    setTimeout(() => {
      this.currentQuestion = this.getNextQuestion(this.currentQuestion);
    }, 3000);
  
  
  }
}
