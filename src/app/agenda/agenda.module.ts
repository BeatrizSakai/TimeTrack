import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaComponent } from './agenda.component'; // ajuste o caminho conforme a sua estrutura de pastas
import { CalendarioComponent } from './calendario/calendario.component';

@NgModule({
  declarations: [CalendarioComponent],
  imports: [CommonModule, ],
  exports: [CalendarioComponent], // Exporte o componente se pretende usá-lo fora deste módulo
})
export class AgendaModule { }