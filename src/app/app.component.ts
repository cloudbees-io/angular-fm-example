import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Rox from 'rox-browser';
import { flags } from "./flags";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fm user';
  
  sdkKey = '208a0245-b6d6-4fd0-7fe6-bc7bef510341'
  options = {};

  // flagValue = flags.message
  // fontColor = flags.fontColor
  // fontSize = flags.fontSize
  // showMessage = flags.showMessage

  // ngOnInit() {
  //     Rox.register('demo', flags)
  //     this.initFeatureFlags()
  // }
  
  // initFeatureFlags = async () => {
  //   await Rox.setup(this.sdkKey, this.options)
  // }
}
