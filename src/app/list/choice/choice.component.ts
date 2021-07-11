import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {

  @Input() question = {choice:'', votes: 0};
  constructor() { }

  ngOnInit(): void {
  }

  handleVote() {
    alert('voted');
  }

}
