import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InicioComponent } from './inicio/inicio.component';
import { EntrarComponent } from './entrar/entrar.component';
import { AgendaComponent } from './agenda/agenda.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import {NgIf} from '@angular/common';

import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import {MatChipsModule} from '@angular/material/chips';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { CommonModule } from '@angular/common';
import { CalendarioComponent } from './calendario/calendario.component';
import { TaskFormComponent } from './task/task-form.component'; 
import { TaskService } from './task/task.service';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AgendaComponent,
    CalendarioComponent,
    TaskFormComponent,
    


  ],
  imports: [  
    FormsModule,   
    MbscModule, 
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatDatepickerModule,
    MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule, MatToolbarModule, MatButtonModule, MatIconModule, NgIf, MatSidenavModule, MatCardModule, MatDatepickerModule, MatNativeDateModule, MatChipsModule, MatCheckboxModule, FormsModule, CommonModule,
    MbscModule,
  
  ],

  providers: [TaskService, { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }],
    

  bootstrap: [AppComponent]
})
export class AppModule { }
