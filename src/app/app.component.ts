import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Rox from 'rox-browser';
import { flags } from './flags';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Example Angular application for CloudBees Feature Management';

  sdkKey = '<INSERT YOUR SDK KEY HERE>';
  options = {};

  message = flags.message
  fontColor = flags.fontColor
  fontSize = flags.fontSize
  showMessage = flags.showMessage

  ngOnChanges() {
    this.applyStyle()
  }

  ngOnInit() {
    this.initFeatureFlags()
  }

  initFeatureFlags = async () => { 
    Rox.register('demo', flags)
    await Rox.setup(this.sdkKey, this.options)
  }

  applyStyle() {
    const styles = { 'color': this.fontColor.getValue(), 'font-size': this.fontSize.getValue() + 'px' };
    return styles;
  }
}
