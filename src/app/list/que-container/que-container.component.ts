import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-que-container',
  templateUrl: './que-container.component.html',
  styleUrls: ['./que-container.component.css']
})
export class QueContainerComponent implements OnInit {

  isOk = true;
  msgLoader = "Loding List, Please Wait ...";
  loaderColor= "#f03550";

  constructor() { }

  ngOnInit(): void {
  }

}
