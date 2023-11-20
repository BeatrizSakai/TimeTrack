import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from './task.service';
import { Task } from '../calendario/calendario.component';

@Component({
  selector: 'app-task-form',
  template: `
    <form (submit)="criarTarefa()" #tarefaForm="ngForm">
      <label for="nome">Nome da Tarefa:</label>
      <input type="text" id="nome" name="nomeTarefa" [(ngModel)]="nomeTarefa" required>
      
      <label for="data">Data da Tarefa:</label>
      <input type="date" id="data" name="dataTarefa" [(ngModel)]="dataTarefa" required>
      <button type="button" (click)="fecharFormulario()">Fechar</button>
      <button type="submit">Criar Tarefa</button>
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
  }

  fecharFormulario() {
    this.fecharFormularioEvent.emit();
  }
  
}
