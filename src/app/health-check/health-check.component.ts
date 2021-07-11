import { HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Health } from './Health';
import { HealthApiService } from './health-api.service';

@Component({
  selector: 'app-health-check',
  templateUrl: './health-check.component.html',
  styleUrls: ['./health-check.component.css']
})
export class HealthCheckComponent implements OnInit {

  isOk = true;
  msgLoader = "Please wait we are checking server Health";
  msgRetry = "Server's health is not good! :)"
  actionRetry = "healthCheck";

  constructor(private healthService:HealthApiService, 
    private router: Router) { }

  ngOnInit(): void {
    this.healthCheckRequest();
  }

  healthCheckRequest(){
    this.healthService.getHelthCheck().subscribe(
      (res: HttpResponse<{status:number,body: Health}>) => {
        if(res.status === 200 && res.body){
          const st = <string><any> res.body.status;
          if(st === "OK"){
            this.isOk = true;
            this.redirect();
          } else {  
            this.isOk = false;
          }
          
        } else {
          this.isOk = false;
        }
      },
      err => this.isOk = false
    );
  }

  redirect() {
    this.router.navigate(['questions']);
  }

  retryHealthCheck() {
    console.log("retryHealthCheck");
    this.isOk = false;
    this.healthCheckRequest();
  }

}
