import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  @Input() msg = 'Loading...';
  @Input() loaderColor = "#007fff";
  constructor() { }

  ngOnInit(): void {
  }

}
