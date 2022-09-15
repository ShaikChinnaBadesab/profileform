import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { CompanyComponent } from './company/company.component';
import { PopupComponent } from './popup/popup.component';
import { MatTableModule } from '@angular/material/table' ;



@NgModule({
  declarations: [AppComponent, SampleComponent, CompanyComponent, PopupComponent],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatNativeDateModule, MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

}

