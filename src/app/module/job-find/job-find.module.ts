import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobFindRoutingModule } from './job-find-routing.module';
import { JobFindComponent } from './job-find.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    JobFindComponent
  ],
  imports: [
    CommonModule,
    JobFindRoutingModule,
    MatSidenavModule,
    FormsModule,
    SharedModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [
    MatSidenavModule,
    FormsModule,
    SharedModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ]
})
export class JobFindModule { }
