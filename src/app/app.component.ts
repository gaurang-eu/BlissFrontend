import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { InternetCheckService } from './internet-check.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  
  env = environment.env_name;
  constructor(private intCheck: InternetCheckService,
    private router: Router, private loc: Location) {

  }
  ngOnInit(): void {
    this.intCheck.watchNetConn().subscribe(
      isNet => {
        this.redirect(isNet);
      },
      err => this.redirect(false)
    );
  }

  getQueryParams(path: string) {
    const full = path.split('?');
    if(full && full[1]) {
      // const params = full[1].split('&');
      // if (params && params.length > 0){
      //   const paramObj =new Object();
      //   for(let i=0; i< params.length; i++){
      //     const keyvalue = params[i];
      //     const key = keyvalue[0];
      //     const val = keyvalue[1];
      //     Object.defineProperty(paramObj,key,val); 
      //   }
      //   return paramObj;
      // } else {
      //   return null;
      // }
      return true;
    } else {
      return null;
    }
  }
  redirect(isNet:boolean) {
    if(isNet===false){
      this.router.navigate(['nonet']);
    } 
    else {
      const isparamObj = this.getQueryParams(this.loc.path());
      // console.log("loc = ", paramObj);
      if(this.router.url.endsWith('nonet')) {
        this.router.navigate(['health']);
      } else {
        if(this.loc.path() === '') {
          this.router.navigate(['health']);
        } else {
          if(isparamObj){
            // this.router.navigate(['questions'], { queryParams: paramObj);
            this.router.navigateByUrl(this.loc.path());
          } else {
            this.router.navigate(['questions']);
          }
        }
      }
    }
  }

  ngOnDestroy() {

  }
}
