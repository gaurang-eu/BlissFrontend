import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { QueApiService } from '../que-api.service';

@Component({
  selector: 'app-que-container',
  templateUrl: './que-container.component.html',
  styleUrls: ['./que-container.component.css']
})
export class QueContainerComponent implements OnInit, OnDestroy {

  msgLoader = "Loding List, Please Wait ...";
  loaderColor= "#f03550";
  queList:any = [];
  isLoading = true;
  isList = false;
  isDetails = false;
  sub:Subscription;
  constructor(private queApi: QueApiService) { 
    this.sub = new Subscription();
  }

  ngOnInit(): void {
    this.fetchQuestions();
  }

  ngOnDestroy() {
    if(this.sub){
      this.sub.unsubscribe();
    }
  }

  fetchQuestions() {
    this.showLoading();
    if(this.sub){
      this.sub.unsubscribe();
    }
    this.sub = this.queApi.getQueList().subscribe(
      res => {
        console.log(res.body);
        this.queList = res.body
        this.showList();
      },
      err => {
        console.log(err);
        this.queList = [];
        this.showList();
      }
    );
  }

  showLoading() {
    this.isList=false;
    this.isDetails=false;
    this.isLoading=true;
  }
  showList() {
    this.isDetails=false;
    this.isLoading=false;
    this.isList=true;
  }
  showdetails() {
    this.isList=false;
    this.isLoading=false;
    this.isDetails=true;
  }

}
