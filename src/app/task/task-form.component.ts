import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from './task.service';
import { Task } from '../calendario/calendario.component';
import { style } from '@angular/animations';

@Component({
  selector: 'app-task-form',
  template: `
  
    <form (submit)="criarTarefa()" #tarefaForm="ngForm" class="tarefa-form">
      
      <div class="form-group">
        <label for="nome">Nome da Tarefa:</label>
        <input type="text" id="nome" name="nomeTarefa" [(ngModel)]="nomeTarefa" required>
      </div>

      <div class="form-group">
        <label for="categoria">Categoria:</label>
        <input type="text" id="categoria" name="categoriaTarefa">
      </div>

      <div class="form-group">
        <label for="descricao">Descrição da Tarefa:</label>
        <input type="text" id="descricao" name="descricaoTarefa">
      </div>

      <div class="form-group">
        <label for="data">Data da Tarefa:</label>
        <input type="date" id="data" name="dataTarefa" [(ngModel)]="dataTarefa" required>
      </div>
      
      <div class="form-group">
        <button class="buttonForm" mat-button color="primary" type="submit">Criar Tarefa</button>
        <button class="buttonForm" mat-button color="primary" type="button" (click)="fecharFormulario()">Fechar</button>
      </div>
    </form>
  `,
})
export class TaskFormComponent {
  nomeTarefa = '';
  dataTarefa = '';

  @Output() fecharFormularioEvent = new EventEmitter<void>();

  constructor(private taskService: TaskService) {}

  criarTarefa() {
    const novaTarefa: Task = {
      name: this.nomeTarefa,
      completed: false,
      color: 'blue',
      subtasks: [{ name: this.dataTarefa, completed: false, color: 'green' }],
    };

    this.taskService.addTask(novaTarefa);
    this.nomeTarefa = '';
    this.dataTarefa = '';
    this.fecharFormulario()
  }

  fecharFormulario() {
    this.fecharFormularioEvent.emit();
  }

}
