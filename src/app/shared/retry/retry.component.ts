import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit {

  @Input() msg = "Something went wrong!"
  @Input() action = "general";
  @Output() retryAction: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleRetry() {
    console.log("handleRetry")
    this.retryAction.emit(this.action);
  }

}
