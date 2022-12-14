import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CycleRoutingModule } from './cycle-routing.module';
import { CycleComponent } from './components/cycle/cycle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng9RutModule } from 'ng9-rut';


@NgModule({
  declarations: [CycleComponent],
  imports: [
    CommonModule,
    CycleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgbModule,
    Ng9RutModule
  ]
})
export class CycleModule { }
