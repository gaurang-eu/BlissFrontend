import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {

  @Input() choice = {choice:'', votes: 0};
  @Output() voting: EventEmitter<{choice:string, votes:number}> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  handleVote() {
    this.choice.votes++;
    this.voting.emit(this.choice);
  }

}
