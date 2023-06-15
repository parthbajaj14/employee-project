import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { TestComponent } from './test/test.component';

import { ParentComponent } from './parent/parent.component';

import { ChildComponent } from './parent/child/child.component';




const routes: Routes = [

  { path: 'test', component: TestComponent },

  { path: 'parent', component: ParentComponent },

  { path: 'child', component: ChildComponent },

  { path: '', redirectTo: '/test', pathMatch: 'full' }

];




@NgModule({

  declarations: [],

  imports: [

    CommonModule,RouterModule.forRoot(routes)

  ],

  exports: [ RouterModule ]

})
export class AppRoutingModule{}