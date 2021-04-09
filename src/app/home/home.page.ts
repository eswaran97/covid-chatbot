import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public showBot: Boolean = false
  public chattext: String = "Open Chat Bot"

  constructor() {
    this.showBot = false
    this.chattext = "Open Chat Bot"
  }

  openBot() {
    this.showBot = !this.showBot
    if (this.showBot)
      this.chattext = "Close Chat Bot"
    else this.chattext = "Open Chat Bot"
  }



}
