import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { DocDashboardComponent } from './doctor/doc-dashboard/doc-dashboard.component';
import { DocAppointmentsComponent } from './doctor/doc-appointments/doc-appointments.component';
import { PatientAppointmentsComponent } from './patient/patient-appointments/patient-appointments.component';
import { PatientDashboardComponent } from './patient/patient-dashboard/patient-dashboard.component';
import { MedicalRecordsComponent } from './patient/medical-records/medical-records.component';
import { DocSchedulesComponent } from './doctor/doc-schedules/doc-schedules.component';

import { DocPrescriptionComponent } from './doctor/doc-prescription/doc-prescription.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { RoutingModule } from './routing/routing.module';
import { DoctorDataService } from './doctor/doctor.service';
import { PatientService } from './patient/patient.service';
import { PatientGuard } from './patient.guard';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    PatientComponent,
    DocDashboardComponent,
    DocAppointmentsComponent,
    PatientAppointmentsComponent,
    PatientDashboardComponent,
    MedicalRecordsComponent,
    DocSchedulesComponent,
    DocPrescriptionComponent,
    HomeComponent,
    TestComponent,
    AboutComponent,
    AdminComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule
  ],
  providers: [PatientService,PatientGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
