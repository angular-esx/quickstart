// import global styles
import '../styles/app.css';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import AppModule from './app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule);
