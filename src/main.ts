import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

/*
AppModule을 읽고, Module안에 등록된 여러개의 Component를 javascript코드로 compile한다.
root module은 main.ts에의해 읽어짐
root module과 root component를 반드시 가지고 있어야 한다
*/
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
