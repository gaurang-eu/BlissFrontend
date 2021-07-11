import { Directive, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appLoaderColor]'
})
export class LoaderColorDirective implements OnInit {

  @Input('appLoaderColor') loaderColor:string ="#007fff";

  @HostBinding('style.background') bgColor:string="#007fff";
  constructor() { 
  }

  ngOnInit() {
    this.bgColor = this.loaderColor;
  }

}
