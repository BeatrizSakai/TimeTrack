selectedDate: Date;
import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { MatCalendarCellCssClasses, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FormControl } from '@angular/forms';
import { TaskFormComponent } from '../task/task-form.component'; 
export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
    selector: 'app-agenda',
    templateUrl: './agenda.component.html',
    styleUrls: ['./agenda.component.css'],
    
})



export class AgendaComponent {selected: Date | null | undefined;
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Primary', completed: false, color: 'primary'},
      {name: 'Accent', completed: false, color: 'accent'},
      {name: 'Warn', completed: false, color: 'warn'},
    ],
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }
  tasks: Task[] = [];
  addTaskToCalendar(date: Date, title: string, category: string, description: string): void {
    // Adicione lógica para criar a tarefa com as informações fornecidas
    const newTask: Task = {
      name: title,
      completed: false,
      color: 'primary', // Defina a cor conforme necessário
      subtasks: [{ name: category, completed: false, color: 'accent' }],
    };
  
    // Adicione a tarefa à lista de tarefas
    this.tasks.push(newTask);
  
    // Adicione lógica para adicionar eventos ao calendário
    // Você pode usar a biblioteca Mobiscroll para isso
  }
  adicionarTarefa(): void {
    const title = prompt('Digite o título da tarefa:');
    const category = prompt('Digite a categoria da tarefa:');
    const description = prompt('Digite a descrição da tarefa:');
  
    if (title && category && description) {
      // Use a data selecionada ou a data atual
      const selectedDate = this.selected || new Date();
  
      // Adicione a tarefa ao calendário
      this.addTaskToCalendar(selectedDate, title, category, description);
    }
  }
  exibirFormulario: boolean = false;

    // Método para exibir o formulário de tarefa
    exibirFormularioTarefa(): void {
        this.exibirFormulario = true;
    }
    fecharFormulario(): void {
      this.exibirFormulario = false;
    }
}
