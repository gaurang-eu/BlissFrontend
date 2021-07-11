import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Question } from './Question';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() queList = [{id:101, question: 'que1'}];
  queKeys:string[] = ["ID", "Question"];
  queId = 0;
  sub:any = null;
  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.queKeys = Object.keys(this.queList[0]);
    
  }

  ngOnDestroy() {
    if( this.sub) {
      this.sub.unsubscribe();
    }
  }

  handleRowClick(id:string) {
    
    this.router.navigate(['questions', id]);
  }

  trackListById(index: number, question: any):string {
    return question.id;
  }

}
