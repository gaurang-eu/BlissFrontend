import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  public readonly HEALTH_CHECK_EP = "health";
  public readonly QUE_LIST_EP = "questions";
  public readonly SHARE_EP = "share";

  constructor() { }
}
