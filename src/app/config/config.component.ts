import { Component, OnInit } from '@angular/core';
import { Config, ConfigService } from './config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  providers: [ ConfigService ],
  styles: ['.error {color: red;}']
})
export class ConfigComponent implements OnInit {
  config: Config;

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
  }

  clear() {
    this.config = undefined;
  }

  showConfig() {
    this.configService.getConfig()
      .subscribe((data: Config) => this.config = { ...data });
  }

}
