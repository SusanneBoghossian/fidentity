import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Step1Component } from './components/step1.component';
import { Step2Component } from './components/step2.component';
import { Step3Component } from './components/step3.component';

@NgModule({
    declarations: [
        AppComponent,
        Step1Component,
        Step2Component,
        Step3Component
    ],
    imports: [
        RouterModule.forRoot([
            { path: '', pathMatch: 'full', redirectTo: 'step-1' }, // redirect
            { path: 'step-1', component: Step1Component },
            { path: 'step-2', component: Step2Component },
            { path: 'step-3', component: Step3Component }
        ]),
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
