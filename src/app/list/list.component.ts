import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() queList = [{id:101, question: 'que1'}];
  queKeys:string[] = ["ID", "Question"];
  constructor() { }

  ngOnInit(): void {
    // this.queKeys = Object.keys(this.queList[0]);

  }

}
