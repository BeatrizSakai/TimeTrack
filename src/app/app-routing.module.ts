import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InicioComponent } from './inicio/inicio.component';
import { EntrarComponent } from './entrar/entrar.component';
import { AgendaComponent } from './agenda/agenda.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  { path: 'cadastro', component: CadastroComponent },
  {path: 'inicio', component: InicioComponent},
  {path: 'entrar', component: EntrarComponent},
  {path: 'agenda', component: AgendaComponent},
  {path: 'calendario', component: CalendarioComponent},
  {path: 'perfil', component: PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
