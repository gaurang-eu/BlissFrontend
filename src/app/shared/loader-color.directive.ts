import { AfterViewInit, Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appLoaderColor]'
})
export class LoaderColorDirective implements AfterViewInit {

  @Input('appLoaderColor') loaderColor:string ="#007fff";

  @HostBinding('style.background') bgColor= "black"
  constructor() { }
  ngAfterViewInit(): void {
    this.bgColor = this.loaderColor;
  }

}
