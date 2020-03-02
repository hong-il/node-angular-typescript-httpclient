import { Component, OnInit } from '@angular/core';
import { Config, ConfigService } from './config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  providers: [ ConfigService ],
  styles: ['.error {color: red;}']
})
export class ConfigComponent implements OnInit {
  headers: string[];
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

  showConfig_v1() {
    this.configService.getConfig_1()
      .subscribe((data: Config) => this.config = {
          heroesUrl: data['heroesUrl'],
          textfile:  data['textfile']
      });
  }

  showConfig_v2() {
    this.configService.getConfig()
      .subscribe((data: Config) => this.config = { ...data });
  }

  showConfigResponse() {
    this.configService.getConfigResponse()
      // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);

        // access the body directly, which is typed as `Config`.
        this.config = { ... resp.body };
      });
  }

}
