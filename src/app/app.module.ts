import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { NgProgressModule } from 'ngx-progressbar';
import { TranslateModule } from 'ng2-translate';
import { ROUTES } from './app.routes';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { SharedService } from './app.service';
import 'hammerjs';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { AllocationSystemComponent } from './allocation-system/allocation-system.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AllocationSystemComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
    NgProgressModule,
    DataTableModule,
    SharedModule,
    TranslateModule.forRoot()
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
