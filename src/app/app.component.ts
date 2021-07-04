import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';
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
    private router: Router) {

  }
  ngOnInit(): void {
    this.intCheck.watchNetConn().subscribe(
      isNet => {
        this.redirect(isNet);
      },
      err => this.redirect(false)
    );
  }

  redirect(isNet:boolean) {
    if(isNet===false){
      this.router.navigate(['nonet']);
    } else {
      this.router.navigate(['health'])
    }
  }

  ngOnDestroy() {

  }
}
