import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { TestComponent } from './test/test.component';

import { AppRoutingModule } from './app-routing.module';

import { RouterModule } from '@angular/router';

import { ParentComponent } from './parent/parent.component';

import { ChildComponent } from './parent/child/child.component';

import { HttpClient,HttpHandler} from "@angular/common/http";

import { HttpClientModule} from "@angular/common/http";




@NgModule({

  declarations: [

    AppComponent,

    TestComponent,

    ParentComponent,

    ChildComponent

  ],

  imports: [

    BrowserModule,

    AppRoutingModule,RouterModule,FormsModule,ReactiveFormsModule,HttpClientModule

  ],

  providers: [HttpClient],

  bootstrap: [AppComponent]

})

export class AppModule { }
