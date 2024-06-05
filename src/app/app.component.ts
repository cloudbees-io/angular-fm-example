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
  title = 'Example Angular application for CloudBees Feature Management';
  
  sdkKey = '<INSERT YOUR SDK KEY HERE>'
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
